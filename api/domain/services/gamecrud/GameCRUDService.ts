import GameModel from "../../../dataSources/sequelize/models/GameModel";
import Game from "../../entities/Game";

interface GameCRUDService {
    create(game: Game) : Promise<Game>;
    getAll() : Promise<GameModel[]>;
}

export default GameCRUDService;