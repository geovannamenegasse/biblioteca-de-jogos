import GameModel from "../../dataSources/sequelize/models/GameModel";
import Game from "../entities/Game";

interface GameRepository {
    // getGameBy(id: number) : Promise<Game>;

    // getGameByName(name: string) : Promise<Game>;

    insert(game: Game) : Promise<Game>;

    getAll() : Promise<GameModel[]>;

    // update(game: Game) : Promise<Game>;
}

export default GameRepository;