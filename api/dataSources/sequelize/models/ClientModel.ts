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
  @Column
  @AutoMap()
  public name!: string;

  @BelongsTo(() => UserModel, {foreignKey:{name: "userId", allowNull: false}})
  @AutoMap()
  public user!: UserModel;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}



export default ClientModel;