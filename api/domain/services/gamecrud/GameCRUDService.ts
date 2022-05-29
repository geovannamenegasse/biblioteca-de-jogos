import Game from "../../entities/Game";

interface GameCRUDService {
    create(game: Game) : Promise<Game>;
}

export default GameCRUDService;