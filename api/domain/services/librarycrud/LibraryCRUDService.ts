import Library from "../../entities/Library";
import Game from "../../entities/Game";
// import User from "../../entities/User";

interface LibraryCRUDService {
    create(library: Library) : Promise<Library>;

    // insertGame(library: Library) : Promise<Library>;

    // getLibraryBy(id: number) : Promise<Library>;

    getAllGamesFrom(userId: number) : Promise<Game[]>;

    // update(game: Library) : Promise<Library>;

    removeGame(userId: number, gameId: number) : Promise<Game>;
}

export default LibraryCRUDService;