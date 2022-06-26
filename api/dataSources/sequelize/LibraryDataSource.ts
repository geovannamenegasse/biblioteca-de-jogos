import { json, raw } from "body-parser";
import { INTEGER } from "sequelize/types";
import Sequelize from "sequelize/types";

import User from "../../domain/entities/User";
import userMapper from "./mappers/UserMapper";
import UserModel from "./models/UserModel";

import Game from "../../domain/entities/Game";
import gameMapper from "./mappers/GameMapper";
import GameModel from "./models/GameModel";

import Library from "../../domain/entities/Library";
import LibraryRepository from "../../domain/repositories/LibraryRepository";
import libraryMapper from "./mappers/LibraryMapper";
import LibraryModel from "./models/LibraryModel";

class LibraryDataSource implements LibraryRepository {
    async getLibraryBy(id: number): Promise<Library> {
        return libraryMapper.map(await LibraryModel.findByPk(id), LibraryModel, Library);
    }

                  // game: Game, user: User
    async insertGame(gameId: number, userId: number): Promise<Game> {
        var gameModel = await GameModel.findByPk(gameId, {rejectOnEmpty: true});
        // var gameModel = gameMapper.map(game, Game, GameModel);
        // var userModel = userMapper.map(user, User, UserModel);
        var userModel = await UserModel.findByPk(userId, {rejectOnEmpty: true});
        var libModel = await LibraryModel.findOne({where: {user: userModel}, rejectOnEmpty: true});
        
        var currentGames = libModel.games;
        var newGameList = currentGames.concat([gameModel]);

        await LibraryModel.update(
            {games: newGameList},
            {where: {user: userModel}}
        );

        return gameMapper.map(gameModel, GameModel, Game);
    }

    async getAllGames(userId: number): Promise<Game[]> {
        var userModel = await UserModel.findByPk(userId, {rejectOnEmpty: true});
        var libModel = await LibraryModel.findOne({where: {user: userModel}, rejectOnEmpty: true});
        var allGamesModel = libModel.games;
        var allGamesList = []

        for (let i = 0; i < allGamesModel.length; i++) {
            var game = gameMapper.map(allGamesModel[i], GameModel, Game);
            allGamesList.push(game);
        }
        return allGamesList;
    }

    async create(userId: number): Promise<Library> {
        var userModel = await UserModel.findByPk(userId, {rejectOnEmpty: true});
        var user = userMapper.map(userModel, UserModel, User);
        var library = new Library(undefined, user, [])

        var libModel = libraryMapper.map(library, Library, LibraryModel);
        await libModel.save();

        return libraryMapper.map(libModel, LibraryModel, Library);
    }
}

export default LibraryDataSource;