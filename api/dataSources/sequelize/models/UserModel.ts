import { Table, Model, Column, CreatedAt, UpdatedAt, AutoIncrement } from 'sequelize-typescript'

@Table({
  tableName: "User"
})
class UserModel extends Model
{
  @AutoIncrement
  @Column({primaryKey: true})
  public id!: number;

  @Column
  public login!: string;
  
  @Column
  public password!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}

export default UserModel;