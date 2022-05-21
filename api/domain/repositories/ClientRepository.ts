import Client from "../entities/Client";

interface ClientRepository {
    getBy(id: number) : Promise<Client>;

    insert(client: Client) : Promise<Client>;

    update(client: Client) : Promise<Client>;
}

export default ClientRepository;