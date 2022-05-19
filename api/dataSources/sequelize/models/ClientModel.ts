import { Table, Model, Column, CreatedAt, UpdatedAt, BelongsTo } from 'sequelize-typescript'
import { AutoMap } from '@automapper/classes';
import { Optional } from 'sequelize/types';
import UserModel from './UserModel';

interface ClientAttributes {
  id: number
  name: string
  user: UserModel
  createdAt: Date
  updatedAt: Date
}

interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'> {}

@Table({
  tableName: "Client"
})
class ClientModel extends Model<ClientAttributes, ClientCreationAttributes>
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    set(this: ClientModel, val: any){
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
  public name!: string;

  @BelongsTo(() => UserModel, "userId")
  @AutoMap()
  public user!: UserModel;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}



export default ClientModel;