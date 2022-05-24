import Client from "../../../entities/Client";
import UserRepository from "../../../repositories/UserRepository";
import ClientCRUDService from "../ClientCRUDService";

class ClientCRUD implements ClientCRUDService {
    private userRepository: UserRepository;

    constructor(userRepository : UserRepository) {
        this.userRepository = userRepository;
    }

    async create(client: Client): Promise<Client> {
        return await this.userRepository.insert(client);
    }
}

export default ClientCRUD;