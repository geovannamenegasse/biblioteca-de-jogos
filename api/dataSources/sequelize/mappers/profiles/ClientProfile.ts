import { CamelCaseNamingConvention, createMap, forMember, mapFrom, MappingProfile, namingConventions, PascalCaseNamingConvention } from "@automapper/core";
import Client from "../../../../domain/entities/Client";
import ClientModel from "../../models/ClientModel";


const clientProfile: MappingProfile = (mapper) => {
  createMap(mapper, ClientModel, Client,
    forMember(
      (destination) => destination.id,
      mapFrom((source) => source.id)
    ),
    namingConventions(new CamelCaseNamingConvention())
  );

  createMap(mapper, Client, ClientModel,
    namingConventions(new PascalCaseNamingConvention())
  );
};

export default clientProfile;