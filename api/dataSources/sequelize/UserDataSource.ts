import User from "../../domain/entities/User";
import UserModel from "./models/UserModel";
import UserRepository from "../../domain/repositories/UserRepository";
import userMapper from "./mappers/UserMapper";

class UserDataSource implements UserRepository {
  async getBy(id: number) : Promise<User> {
    return userMapper.map(await UserModel.findByPk(id), UserModel, User);
  }
  
  async insert(user: User): Promise<User> {
    var userModel = userMapper.map(user, User, UserModel);

    var {id, ...attributes} = userModel.get();
    
    return userMapper.map(await userModel.update({...attributes}), UserModel, User);
  }

  async update(user: User): Promise<number | undefined> {
    var userModel = userMapper.map(user, User, UserModel);

    var {id, ...attributes} = userModel.get();

    var updatedCount = await UserModel.update({...attributes}, {where: {id: id}});
    
    return updatedCount.shift();
  }
}

export default UserDataSource;