import LoginService from "../LoginService";
import * as jwt from "jsonwebtoken";

class JWTLogin implements LoginService {
  login(login: string, password: string): string {
    if (!(login && password)) {
      throw new Error("Login and password needs to have a value");
    }

    //Get user from database with username

    //Sing JWT, valid for 1 hour
    const jwtSecret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";
    const token = jwt.sign(
      { userId: 0, username: "user.username" },
      jwtSecret,
      { expiresIn: "1h" }
    );

    return "";
  }
}

export default JWTLogin;