import { raw } from "body-parser";
import { INTEGER } from "sequelize/types";
import Game from "../../domain/entities/Game";
import GameRepository from "../../domain/repositories/GameRepository";
import gameMapper from "./mappers/GameMapper";
import GameModel from "./models/GameModel";

class GameDataSource implements GameRepository {
    async getGameBy(id: number): Promise<Game> {
        return gameMapper.map(await GameModel.findByPk(id), GameModel, Game);
    }

    async getGameByName(name: string): Promise<Game> {
        return gameMapper.map(await GameModel.findOne(
            {
                raw:true,
                where: {name: name}
            }
        ), GameModel, Game);
    }

    async insert(game: Game): Promise<Game> {
        var gameModel = gameMapper.map(game, Game, GameModel);

        await gameModel.save();

        return gameMapper.map(gameModel, GameModel, Game);
    }

    async getAll(): Promise<Game[]> {
       var allGamesModel = await GameModel.findAll({raw:true});
       var allGamesList = []

       for (let i = 0; i < allGamesModel.length; i++) {
           var game = gameMapper.map(allGamesModel[i], GameModel, Game);
           allGamesList.push(game);
       }
       return allGamesList;
    }
}

export default GameDataSource;