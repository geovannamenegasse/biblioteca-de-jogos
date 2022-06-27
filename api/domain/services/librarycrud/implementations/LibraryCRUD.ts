// import User from "../../../entities/User";
import Game from "../../../entities/Game";
import Library from "../../../entities/Library";
import LibraryRepository from "../../../repositories/LibraryRepository";
import LibraryCRUDService from "../LibraryCRUDService";

class LibraryCRUD implements LibraryCRUDService {
    private libraryRepository: LibraryRepository;
    
    constructor(libraryRepository : LibraryRepository) {
        this.libraryRepository = libraryRepository;
    }
    
    async create(library: Library): Promise<Library> {
        return await this.libraryRepository.create(library);
    }

    // async insertGame(library: Library): Promise<Library> {
    //     return await this.libraryRepository.insertGame(library);
    // }

    // async getLibraryBy(id: number): Promise<Library> {
    //     return await this.libraryRepository.getLibraryBy(id);
    // }


    async getAllGamesFrom(userId: number): Promise<Game[]> {
        return await this.libraryRepository.getAllGamesFrom(userId);
    }

    async removeGame(userId: number, gameId: number): Promise<Game> {
        return await this.libraryRepository.removeGame(userId, gameId);
    }
}

export default LibraryCRUD;