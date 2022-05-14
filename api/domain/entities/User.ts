class User
{
  constructor(
    private _id: number,
    private _login: string,
    private _hashedPassword: string
    )
  {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get login(): string {
    return this._login;
  }
  public set login(value: string) {
    this._login = value;
  }
  
  public get hashedPassword(): string {
    return this._hashedPassword;
  }
  public set hashedPassword(value: string) {
    this._hashedPassword = value;
  }
}