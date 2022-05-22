import { AutoMap } from '@automapper/classes';
import User from './User';

class Client
{
  @AutoMap()
  private Id: number | undefined

  @AutoMap()
  private Name!: string;

  @AutoMap(() => User)
  private User!: User;

  constructor(id: number | undefined = undefined, name: string = '', user: User = new User())
  {
    this.id       = id;
    this.name     = name;
    this.user = user;
  }

  public get id(): number | undefined {
    return this.Id;
  }
  public set id(value: number | undefined) {
    this.Id = value;
  }

  public get name(): string {
    return this.Name;
  }
  public set name(value: string) {
    this.Name = value;
  }

  public get user(): User {
    return this.User;
  }
  public set user(value: User) {
    this.User = value;
  }
}

export default Client;