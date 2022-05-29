import { CamelCaseNamingConvention, createMap, forMember, mapFrom, MappingProfile, namingConventions, PascalCaseNamingConvention } from "@automapper/core";
import Game from "../../../../domain/entities/Game";
import GameModel from "../../models/GameModel";


const gameProfile: MappingProfile = (mapper) => {
  createMap(mapper, GameModel, Game,
    forMember(
      (destination) => destination.id,
      mapFrom((source) => source.id)
    ),
    namingConventions(new CamelCaseNamingConvention())
  );

  createMap(mapper, Game, GameModel,
    namingConventions(new PascalCaseNamingConvention())
  );
};

export default gameProfile;