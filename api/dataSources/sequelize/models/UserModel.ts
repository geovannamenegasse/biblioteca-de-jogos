import { Table, Model, Column, CreatedAt, UpdatedAt, AutoIncrement } from 'sequelize-typescript'
import { AutoMap } from '@automapper/classes';

@Table({
  tableName: "User"
})
class UserModel extends Model
{
  @AutoIncrement
  @Column({primaryKey: true})
  @AutoMap()
  public id!: number;

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