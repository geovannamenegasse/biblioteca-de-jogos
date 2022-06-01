import Game from "../../entities/Game";

interface GameCRUDService {
    create(game: Game) : Promise<Game>;
    getAll() : Promise<Game[]>;
}

export default GameCRUDService;