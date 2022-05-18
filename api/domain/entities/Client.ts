import { AutoMap } from '@automapper/classes';

class Client
{
  @AutoMap()
  private Id: number | undefined

  @AutoMap()
  private Name!: string;

  constructor(id: number | undefined = undefined, name: string = '')
  {
    this.id = id;
    this.name = name;
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
}

export default Client;