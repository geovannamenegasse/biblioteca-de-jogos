import { Model } from "sequelize-typescript";
import Client from "../../domain/entities/Client";
import UserRepository from "../../domain/repositories/UserRepository";
import clientMapper from "./mappers/ClientMapper";
import ClientModel from "./models/ClientModel";
import UserModel from "./models/UserModel";

class UserDataSource implements UserRepository {
    async getClientBy(id: number): Promise<Client> {
        return clientMapper.map(await ClientModel.findByPk(id, {include: [UserModel]}), ClientModel, Client);
    }

    async getClientByLogin(login: string): Promise<Client> {
        return clientMapper.map(await ClientModel.findOne({
            include: [{
                model: UserModel,
                where: {login: login}
            }]
        }), 
        ClientModel, Client);
    }

    async insert(client: Client): Promise<Client> {
        var clientModel = clientMapper.map(client, Client, ClientModel);

        clientModel.user = await clientModel.$create("user", clientModel.user.get());
        await clientModel.save();

        return clientMapper.map(clientModel, ClientModel, Client);
    }

    async update(client: Client): Promise<Client> {
        var clientModel = clientMapper.map(client, Client, ClientModel);

        this.setupModelUpdate(clientModel, client.id);
        this.setupModelUpdate(clientModel.user, client.user.id);

        await clientModel.user.save();
        await clientModel.save();
    
        return clientMapper.map(clientModel, ClientModel, Client);
    }


    private setupModelUpdate(model: Model<any, any>, id: number | undefined) {
        model.isNewRecord = false;
        model.id = id;
    }
}

export default UserDataSource;