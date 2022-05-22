import { CamelCaseNamingConvention, createMap, forMember, mapFrom, MappingProfile, namingConventions, PascalCaseNamingConvention } from "@automapper/core";
import User from "../../../../domain/entities/User";
import UserModel from "../../models/UserModel";


const userProfile: MappingProfile = (mapper) => {
  createMap(mapper, UserModel, User,
    forMember(
      (destination) => destination.hashedPassword,
      mapFrom((source) => source.password)
    ),
    forMember(
      (destination) => destination.id,
      mapFrom((source) => source.id)
    ),
    namingConventions(new CamelCaseNamingConvention())
  );

  createMap(mapper, User, UserModel,
    forMember(
      (destination) => destination.password,
      mapFrom((source) => source.hashedPassword)
    ),
    namingConventions(new PascalCaseNamingConvention())
  );
};

export default userProfile;