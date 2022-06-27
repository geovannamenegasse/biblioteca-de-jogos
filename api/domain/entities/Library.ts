import { AutoMap } from '@automapper/classes';
// import User from './User';
// import Game from './Game';

class Library
{
  @AutoMap()
  private Id: number | undefined

  @AutoMap() // () => User
  private UserId!: number;
  // private User!: User;

  @AutoMap()
  private GameId!: number;

  // @AutoMap(() => Game) // () => Game
  // private Games!: Game[];
                                               // user: User = new User()
  constructor(id: number | undefined = undefined, userId: number = 0, gameId: number = 0)
  {
    this.id = id;
    // this.user = user;
    this.userId = userId;
    this.gameId = gameId;
    // this.games = games;
  }

  public get id(): number | undefined {
    return this.Id;
  }
  public set id(value: number | undefined) {
    this.Id = value;
  }

  public get userId(): number {
    return this.UserId;
  }
  public set userId(value: number) {
    this.UserId = value;
  }

  public get gameId(): number {
    return this.GameId;
  }
  public set gameId(value: number) {
    this.GameId = value;
  }

  // public get userId(): number {
  //   return this.User;
  // }
  // public set user(value: number) {
  //   this.User = value;
  // }
  
  // public get games(): Game[] {
  //   return this.Games;
  // }
  // public set games(value: Game[]) {
  //   this.Games = value;
  // }
}

export default Library;