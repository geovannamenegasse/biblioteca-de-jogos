// import { json, raw } from "body-parser";
// import { INTEGER } from "sequelize/types";
// import Sequelize from "sequelize/types";

// import Client from "../../domain/entities/Client";
// import clientMapper from "./mappers/ClientMapper";
// import ClientModel from "./models/ClientModel";

// import User from "../../domain/entities/User";
// import UserModel from "./models/UserModel";
// import userMapper from "./mappers/UserMapper";

import Game from "../../domain/entities/Game";
import gameMapper from "./mappers/GameMapper";
import GameModel from "./models/GameModel";

import Library from "../../domain/entities/Library";
import LibraryRepository from "../../domain/repositories/LibraryRepository";
import libraryMapper from "./mappers/LibraryMapper";
import LibraryModel from "./models/LibraryModel";

class LibraryDataSource implements LibraryRepository {

    async create(library: Library): Promise<Library> {
        // var userModel = await UserModel.findByPk(userId, {rejectOnEmpty: true});
        // var user = userMapper.map(userModel, UserModel, User);
        // console.log("00000000000000000000000000000000000000000");
        // var client = clientMapper.map(await ClientModel.findByPk(userId), ClientModel, Client);
        // console.log(user);
        // var library = new Library(0, userId, 0);
        // console.log("11111111111111111111111111111111111111");
        // console.log(library);
        var libModel = libraryMapper.map(library, Library, LibraryModel);
        // console.log(libModel);
        // console.log("22222222222222222222222222222222222222");
        await libModel.save();
        // console.log("33333333333333333333333333333333333333");

        return libraryMapper.map(libModel, LibraryModel, Library);
    }
                   // game: Game, user: User
    // async insertGame(gameId: number, userId: number): Promise<Game> {
    //     var gameModel = await GameModel.findByPk(gameId, {rejectOnEmpty: true});
    //     var game = gameMapper.map(gameModel, GameModel, Game);
    //     // var userModel = userMapper.map(user, User, UserModel);
    //     var userModel = await UserModel.findByPk(userId, {rejectOnEmpty: true});
    //     var libModel = await LibraryModel.findOne({where: {userId: userId}, rejectOnEmpty: true});
        
    //     var currentGames = libModel.games;
    //     var newGameList = currentGames.concat([gameModel]);

    //     await LibraryModel.update(
    //         {games: newGameList},
    //         {where: {userId: userId}}
    //     );

    //     return gameMapper.map(gameModel, GameModel, Game);
    // }

    // async getLibraryBy(id: number): Promise<Library> {
    //     return libraryMapper.map(await LibraryModel.findByPk(id), LibraryModel, Library);
    // }

    async getAllGamesFrom(userId: number): Promise<Game[]> {
        // var userModel = await UserModel.findByPk(userId, {rejectOnEmpty: true});
        // var libModel = await LibraryModel.findOne({where: {userId: userId}, rejectOnEmpty: true});
        // var allGamesModel = libModel.games;
        // var allGamesList = []

        // for (let i = 0; i < allGamesModel.length; i++) {
        //     var game = gameMapper.map(allGamesModel[i], GameModel, Game);
        //     allGamesList.push(game);
        // }
        // return allGamesList;
       var allGamesLibraryModel = await LibraryModel.findAll({raw:true, where: {userId: userId}});
       var allGamesList = []

       for (let i = 0; i < allGamesLibraryModel.length; i++) {
           var game = gameMapper.map(
            await GameModel.findByPk(allGamesLibraryModel[i].gameId, {rejectOnEmpty: true}), GameModel, Game
           );
           allGamesList.push(game);
       }
       return allGamesList;
    }

    async removeGame(userId: number, gameId: number): Promise<Game> {
        await LibraryModel.destroy({where: {userId: userId, gameId: gameId}});
        return gameMapper.map(await GameModel.findByPk(gameId, {rejectOnEmpty: true}), GameModel, Game);
    }
}

export default LibraryDataSource;