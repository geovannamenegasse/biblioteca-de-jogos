import { Table, Model, Column, CreatedAt, UpdatedAt, BelongsTo, HasMany } from 'sequelize-typescript'
import { AutoMap } from '@automapper/classes';
import { Optional } from 'sequelize/types';
// import Game from '../../../domain/entities/Game';
// import GameModel from './GameModel';
// import UserModel from './UserModel';

interface LibraryAttributes {
  id: number
  userId: number
  gameId: number
  // games: Game[]
  // user: UserModel
  // games: GameModel[]
  createdAt: Date
  updatedAt: Date
}

interface LibraryCreationAttributes extends Optional<LibraryAttributes, 'id'> {}

@Table({
  tableName: "Library"
})
class LibraryModel extends Model<LibraryAttributes, LibraryCreationAttributes>
{
  // @BelongsTo(() => UserModel, {foreignKey:{name: "userId", allowNull: false}})
  // @AutoMap()
  // public user!: UserModel;

  @Column
  @AutoMap()
  public userId!: number;

  @Column
  @AutoMap()
  public gameId!: number;
  
  // @HasMany(() => GameModel, {foreignKey:{name: "libraryId"}})
  // @AutoMap()
  // public games!: GameModel[];

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}

export default LibraryModel;