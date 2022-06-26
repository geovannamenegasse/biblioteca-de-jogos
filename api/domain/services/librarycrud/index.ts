import LibraryDataSource from "../../../dataSources/sequelize/LibraryDataSource";
import LibraryCRUDService from "./LibraryCRUDService";
import LibraryCRUD from "./implementations/LibraryCRUD";

const libraryCRUDService : LibraryCRUDService = new LibraryCRUD(new LibraryDataSource());

export default libraryCRUDService;