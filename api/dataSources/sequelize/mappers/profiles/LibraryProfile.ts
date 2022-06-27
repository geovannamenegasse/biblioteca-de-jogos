import { CamelCaseNamingConvention, createMap, forMember, mapFrom, MappingProfile, namingConventions, PascalCaseNamingConvention } from "@automapper/core";
import Library from "../../../../domain/entities/Library";
import LibraryModel from "../../models/LibraryModel";


const libraryProfile: MappingProfile = (mapper) => {
  createMap(mapper, LibraryModel, Library,
    forMember(
      (destination) => destination.id,
      mapFrom((source) => source.id)
    ),
    // forMember(
    //   (destination) => destination.user,
    //   mapFrom((source) => source.userNum)
    // ),
    // forMember(
    //   (destination) => destination.user.get(),
    //   mapFrom((source) => source.user)
    // ),
    namingConventions(new CamelCaseNamingConvention())
  );

  createMap(mapper, Library, LibraryModel,
    // forMember(
    //   (destination) => destination.id,
    //   mapFrom((source) => source.id)
    // ),
    // forMember(
    //   (destination) => destination.userNum,
    //   mapFrom((source) => source.user)
    // ),
    // forMember(
    //   (destination) => destination.user,
    //   mapFrom((source) => source.user)
    // ),
    namingConventions(new PascalCaseNamingConvention())
  );
};

export default libraryProfile;