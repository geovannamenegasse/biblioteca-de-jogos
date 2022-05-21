import User from "../entities/User";

interface UserRepository {
    getBy(id: number) : Promise<User>;

    insert(user: User) : Promise<User>;

    update(user: User) : Promise<number | undefined>;
}

export default UserRepository;