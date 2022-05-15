import User from "../entities/User";

interface UserRepository {
    getBy(id: number) : Promise<User>;

    insert(user: User) : Promise<void>;

    update(updatedUser: User) : Promise<void>;
}

export default UserRepository;