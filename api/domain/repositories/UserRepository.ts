import Client from "../entities/Client";

interface UserRepository {
    getClientBy(id: number) : Promise<Client>;

    getClientByLogin(login: string) : Promise<Client>;

    insert(client: Client) : Promise<Client>;

    update(client: Client) : Promise<Client>;
}

export default UserRepository;