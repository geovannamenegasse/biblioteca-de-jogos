import { Table, Model, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript'
import { AutoMap } from '@automapper/classes';
import { Optional } from 'sequelize/types';

interface UserAttributes {
  id: number
  login: string
  password: string
  createdAt: Date
  updatedAt: Date
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  tableName: "User"
})
class UserModel extends Model<UserAttributes, UserCreationAttributes>
{
  @Column
  @AutoMap()
  public login!: string;
  
  @Column
  @AutoMap()
  public password!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}

export default UserModel;