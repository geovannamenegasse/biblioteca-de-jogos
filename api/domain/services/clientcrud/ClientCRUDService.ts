import Client from "../../entities/Client";

interface ClientCRUDService {
    create(client: Client) : Promise<Client>;
}

export default ClientCRUDService;