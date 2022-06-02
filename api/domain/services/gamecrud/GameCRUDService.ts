import Game from "../../entities/Game";

interface GameCRUDService {
    getGameBy(id: number) : Promise<Game>;

    getGameByName(name: string) : Promise<Game>;
    
    create(game: Game) : Promise<Game>;

    getAll() : Promise<Game[]>;
}

export default GameCRUDService;