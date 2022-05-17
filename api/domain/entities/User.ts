import { AutoMap } from '@automapper/classes';

class User
{
  @AutoMap()
  private Id: number | undefined

  @AutoMap()
  private Login!: string

  @AutoMap()
  private HashedPassword!: string

  constructor(id: number | undefined, login: string, hashedPassword: string)
  {
    this.id = id;
    this.login = login;
    this.hashedPassword = hashedPassword;
  }

  public get id(): number | undefined {
    return this.Id;
  }
  public set id(value: number | undefined) {
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