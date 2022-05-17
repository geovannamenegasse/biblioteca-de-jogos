import User from "../../domain/entities/User";
import UserModel from "./models/UserModel";
import UserRepository from "../../domain/repositories/UserRepository";
import userMapper from "./mappers/UserMapper";

class UserDataSource implements UserRepository {
  async getBy(id: number) : Promise<User> {
    return userMapper.map(await UserModel.findByPk(id), UserModel, User);
  }
  
  async insert(user: User): Promise<void> {
    var userModel = userMapper.map(user, User, UserModel);

    var {id, ...modelAttributesWithoutId} = userModel.get();

    await userModel.update({...modelAttributesWithoutId});
  }

  async update(updatedUser: User): Promise<void> {
    var userModel = userMapper.map(updatedUser, User, UserModel);

    var {id, ...modelAttributesWithoutId} = userModel.get();

    await UserModel.update({...modelAttributesWithoutId}, {where: {id: id}});
  }
}

export default UserDataSource;