import UserDataSource from "../../../dataSources/sequelize/UserDataSource";
import JWTLogin from "./implementations/JWTLogin";
import LoginService from "./LoginService";


const loginService: LoginService = new JWTLogin(new UserDataSource());

export default loginService