import { Table, Model, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript'
import { AutoMap } from '@automapper/classes';
import { Optional } from 'sequelize/types';

interface GameAttributes {
  id: number
  name: string
  publishedAt: Date
  genre: string
  createdAt: Date
  updatedAt: Date
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

@Table({
  tableName: "Game"
})
class GameModel extends Model<GameAttributes, GameCreationAttributes>
{ 
  @Column
  @AutoMap()
  public name!: string;

  @Column
  @AutoMap()
  public publishedAt!: Date;

  @Column
  @AutoMap()
  public genre!: string;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}



export default GameModel;