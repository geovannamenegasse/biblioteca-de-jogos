import { Table, Model, Column, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript'
import { AutoMap } from '@automapper/classes';

@Table({
  tableName: "User"
})
class UserModel extends Model
{
  @Column
  @AutoMap()
  public login!: string;

  @Column({
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
    set(this: UserModel, val){
      if(val == {})
        this.setDataValue("id", null);
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