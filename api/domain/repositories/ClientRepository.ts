import Client from "../entities/Client";

interface ClientRepository {
    getBy(id: number) : Promise<Client>;

    insert(client: Client) : Promise<void>;

    update(updatedClient: Client) : Promise<void>;
}

export default ClientRepository;