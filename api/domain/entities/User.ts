import { AutoMap } from '@automapper/classes';

class User
{
  @AutoMap()
  private Id!: number

  @AutoMap()
  private Login!: string

  @AutoMap()
  private HashedPassword!: string

  constructor(id: number, login: string, hashedPassword: string)
  {
    this.id = id;
    this.login = login;
    this.hashedPassword = hashedPassword;
  }

  public get id(): number {
    return this.Id;
  }
  public set id(value: number) {
    this.Id = value;
  }

  public get login(): string {
    return this.Login;
  }
  public set login(value: string) {
    this.Login = value;
  }
  
  public get hashedPassword(): string {
    return this.HashedPassword;
  }
  public set hashedPassword(value: string) {
    this.HashedPassword = value;
  }
}

export default User;