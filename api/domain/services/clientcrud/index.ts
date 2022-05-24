import UserDataSource from "../../../dataSources/sequelize/UserDataSource";
import ClientCRUDService from "./ClientCRUDService";
import ClientCRUD from "./implementations/ClientCRUD";

const clientCRUDService : ClientCRUDService = new ClientCRUD(new UserDataSource());

export default clientCRUDService;