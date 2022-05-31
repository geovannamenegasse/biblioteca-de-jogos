import GameDataSource from "../../../dataSources/sequelize/GameDataSource";
import GameCRUDService from "./GameCRUDService";
import GameCRUD from "./implementations/GameCRUD";

const gameCRUDService : GameCRUDService = new GameCRUD(new GameDataSource());

export default gameCRUDService;