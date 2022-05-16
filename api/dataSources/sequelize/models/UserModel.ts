import { Table, Model, Column, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript'
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

  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    set(this: UserModel, val: any){
      if(val == {})
        this.setDataValue("id", 0);
      else
        this.setDataValue("id", val);
    }
  })
  @AutoMap()
  public id!: number
  
  @Column
  @AutoMap()
  public password!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}

export default UserModel;