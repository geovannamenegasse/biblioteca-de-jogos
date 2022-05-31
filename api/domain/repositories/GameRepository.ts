import Game from "../entities/Game";

interface GameRepository {
    // getGameBy(id: number) : Promise<Game>;

    // getGameByName(name: string) : Promise<Game>;

    insert(game: Game) : Promise<Game>;

    // update(game: Game) : Promise<Game>;
}

export default GameRepository;