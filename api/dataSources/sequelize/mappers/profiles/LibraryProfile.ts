import { CamelCaseNamingConvention, createMap, forMember, mapFrom, MappingProfile, namingConventions, PascalCaseNamingConvention } from "@automapper/core";
import Library from "../../../../domain/entities/Library";
import LibraryModel from "../../models/LibraryModel";


const gameProfile: MappingProfile = (mapper) => {
  createMap(mapper, LibraryModel, Library,
    forMember(
      (destination) => destination.id,
      mapFrom((source) => source.id)
    ),
    namingConventions(new CamelCaseNamingConvention())
  );

  createMap(mapper, Library, LibraryModel,
    namingConventions(new PascalCaseNamingConvention())
  );
};

export default gameProfile;