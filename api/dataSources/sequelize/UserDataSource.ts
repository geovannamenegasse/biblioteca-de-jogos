import User from "../../domain/entities/User";
import UserModel from "./models/UserModel";
import UserRepository from "../../domain/repositories/UserRepository";
import userMapper from "./mappers/UserMapper";
import sequelize from './';

class UserDataSource implements UserRepository {
  async getBy(id: number) : Promise<User> {
    return userMapper.map(await UserModel.findByPk(id), UserModel, User);
  }
  
  async insert(user: User): Promise<void> {
    var userModel = userMapper.map(user, User, UserModel);

    var {id, ...attributes} = userModel.get();

    await userModel.update({...attributes});
  }

  async update(updatedUser: User): Promise<void> {
    var userModel = userMapper.map(updatedUser, User, UserModel);

    var {id, ...attributes} = userModel.get();

    await UserModel.update({...attributes}, {where: {id: userModel.id}});
  }
}

export default UserDataSource;