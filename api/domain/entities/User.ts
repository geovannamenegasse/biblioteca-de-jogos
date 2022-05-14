import Login from '../valueObjects/Login'
import HashedPassword from '../valueObjects/HashedPassword';

class User
{
  constructor(
    private _id: number,
    private _login: Login,
    private _hashedPassword: HashedPassword
    )
  {}

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get login(): Login {
    return this._login;
  }
  public set login(value: Login) {
    this._login = value;
  }
  
  public get hashedPassword(): HashedPassword {
    return this._hashedPassword;
  }
  public set hashedPassword(value: HashedPassword) {
    this._hashedPassword = value;
  }
}