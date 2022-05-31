import LoginService from "../LoginService";
import * as jwt from "jsonwebtoken";
import UserRepository from "../../../repositories/UserRepository";

class JWTLogin implements LoginService {
  private userRepository: UserRepository;

  constructor(userRepository : UserRepository) {
      this.userRepository = userRepository;
  }

  async login(login: string, password: string): Promise<string> {
    if (!(login && password)) {
      throw new Error("Login and password needs to have a value");
    }

    var client = await this.userRepository.getClientByLogin(login);

    const jwtSecret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";
    const token = jwt.sign(
      { userId: client.user.id, login: client.user.login },
      jwtSecret,
      { expiresIn: "2h" }
    );

    return token;
  }
}

export default JWTLogin;