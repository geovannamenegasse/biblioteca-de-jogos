import { AutoMap } from '@automapper/classes';
import User from './User';
import Game from './Game';

class Library
{
  @AutoMap()
  private Id: number | undefined

  @AutoMap(() => User)
  private User!: User;

  @AutoMap(() => Game)
  private Games!: Game[];

  constructor(id: number | undefined = undefined, user: User = new User(), games: Game[])
  {
    this.id = id;
    this.user = user;
    this.games = games;
  }

  public get id(): number | undefined {
    return this.Id;
  }
  public set id(value: number | undefined) {
    this.Id = value;
  }

  public get user(): User {
    return this.User;
  }
  public set user(value: User) {
    this.User = value;
  }
  
  public get games(): Game[] {
    return this.Games;
  }
  public set games(value: Game[]) {
    this.Games = value;
  }
}

export default Library;