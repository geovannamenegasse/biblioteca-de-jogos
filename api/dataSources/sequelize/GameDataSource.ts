import { raw } from "body-parser";
import { INTEGER } from "sequelize/types";
import Game from "../../domain/entities/Game";
import GameRepository from "../../domain/repositories/GameRepository";
import gameMapper from "./mappers/GameMapper";
import GameModel from "./models/GameModel";

class GameDataSource implements GameRepository {
    async insert(game: Game): Promise<Game> {
        var gameModel = gameMapper.map(game, Game, GameModel);

        await gameModel.save();

        return gameMapper.map(gameModel, GameModel, Game);
    }

    async getAll(): Promise<GameModel[]> {
       return await GameModel.findAll({raw:true});
    //    return gameMapper.map(await GameModel.findAll({
    //        raw: true,
    //        include: [{model: GameModel}]
    //     }), 
    //     GameModel[], Game[]);
    }
}

export default GameDataSource;