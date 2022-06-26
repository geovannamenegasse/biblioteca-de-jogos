import Library from "../../entities/Library";
import Game from "../../entities/Game";
import User from "../../entities/User";

interface LibraryCRUDService {
    getLibraryBy(id: number) : Promise<Library>;

    insertGame(gameId: number, userId: number) : Promise<Game>;

    // removeGame(game: Game) : Promise<Library>;

    getAllGames(userId: number) : Promise<Game[]>;

    create(userId: number) : Promise<Library>; 

    // update(game: Library) : Promise<Library>;
}

export default LibraryCRUDService;