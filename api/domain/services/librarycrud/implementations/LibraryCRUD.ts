import Game from "../../../entities/Game";
import Library from "../../../entities/Library";
import User from "../../../entities/User";
import LibraryRepository from "../../../repositories/LibraryRepository";
import LibraryCRUDService from "../LibraryCRUDService";

class LibraryCRUD implements LibraryCRUDService {
    private libraryRepository: LibraryRepository;

    constructor(libraryRepository : LibraryRepository) {
        this.libraryRepository = libraryRepository;
    }

    async getLibraryBy(id: number): Promise<Library> {
        return await this.libraryRepository.getLibraryBy(id);
    }

    async insertGame(gameId: number, userId: number): Promise<Game> {
        return await this.libraryRepository.insertGame(gameId, userId);
    }

    async getAllGames(userId: number): Promise<Game[]> {
        return await this.libraryRepository.getAllGames(userId);
    }

    async create(userId: number): Promise<Library> {
        return await this.libraryRepository.create(userId);
    }
}

export default LibraryCRUD;