import Game from "../../../entities/Game";
import GameRepository from "../../../repositories/GameRepository";
import GameCRUDService from "../GameCRUDService";

class GameCRUD implements GameCRUDService {
    private gameRepository: GameRepository;

    constructor(gameRepository : GameRepository) {
        this.gameRepository = gameRepository;
    }

    async getGameBy(id: number): Promise<Game> {
        return await this.gameRepository.getGameBy(id);
    }

    async getGameByName(name: string): Promise<Game> {
        return await this.gameRepository.getGameByName(name);
    }

    async create(game: Game): Promise<Game> {
        return await this.gameRepository.insert(game);
    }

    async getAll(): Promise<Game[]> {
        return await this.gameRepository.getAll();
    }
}

export default GameCRUD;