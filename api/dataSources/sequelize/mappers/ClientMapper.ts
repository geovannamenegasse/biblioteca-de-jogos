import { createMapper, createMap, forMember, mapFrom, PascalCaseNamingConvention, namingConventions, CamelCaseNamingConvention} from '@automapper/core';
import ClientModel from '../models/ClientModel';
import Client from '../../../domain/entities/Client';
import { classes } from '@automapper/classes';

const clientMapper = createMapper({
  strategyInitializer: classes()
});

createMap(clientMapper, ClientModel, Client,
  namingConventions(new CamelCaseNamingConvention())
);

createMap(clientMapper, Client, ClientModel,
  namingConventions(new PascalCaseNamingConvention())
);

export default clientMapper;