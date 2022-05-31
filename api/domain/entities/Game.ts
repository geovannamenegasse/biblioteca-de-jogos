import { AutoMap } from '@automapper/classes';

class Game
{
  @AutoMap()
  private Id: number | undefined

  @AutoMap()
  private Name!: string

  @AutoMap()
  private PublishedAt!: Date

  @AutoMap()
  private Genre!: string

  constructor(id: number | undefined = undefined, name: string = '', publishedAt: Date = new Date(), genre: string = '')
  {
    this.id = id;
    this.name = name;
    this.publishedAt = publishedAt;
    this.genre = genre;
  }

  public get id(): number | undefined {
    return this.Id;
  }
  public set id(value: number | undefined) {
    this.Id = value;
  }

  public get name(): string {
    return this.Name;
  }
  public set name(value: string) {
    this.Name = value;
  }
  
  public get genre(): string {
    return this.Genre;
  }
  public set genre(value: string) {
    this.Genre = value;
  }

  public get publishedAt(): Date {
    return this.PublishedAt;
  }
  public set publishedAt(value: Date) {
    this.PublishedAt = value;
  }
}

export default Game;