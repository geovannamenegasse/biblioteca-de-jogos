import Client from "../../domain/entities/Client";
import ClientRepository from "../../domain/repositories/ClientRepository";
import clientMapper from "./mappers/ClientMapper";
import ClientModel from "./models/ClientModel";
import UserModel from "./models/UserModel";

class ClientDataSource implements ClientRepository {
    async getBy(id: number): Promise<Client> {
        return clientMapper.map(await ClientModel.findByPk(id, {include: [UserModel]}), ClientModel, Client);
    }

    async insert(client: Client): Promise<Client> {
        var clientModel = clientMapper.map(client, Client, ClientModel);

        var {id, user, ...attributes} = clientModel.get();

        return clientMapper.map(await clientModel.update({...attributes}), ClientModel, Client);
    }

    async update(client: Client): Promise<Client> {
        var clientModel = clientMapper.map(client, Client, ClientModel);

        var {id, user, ...attributes} = clientModel.get();

        var newClientModel = await clientModel.update({...attributes}, {where: {id: id}});
    
        return clientMapper.map(newClientModel, ClientModel, Client);
    }

}

export default ClientDataSource;