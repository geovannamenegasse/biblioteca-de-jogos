import { createMapper, createMap, forMember, mapFrom, PascalCaseNamingConvention, namingConventions, CamelCaseNamingConvention} from '@automapper/core';
import UserModel from '../models/UserModel';
import User from '../../../domain/entities/User';
import { classes } from '@automapper/classes';

const userMapper = createMapper({
  strategyInitializer: classes()
});

createMap(userMapper, UserModel, User,
  forMember(
    (destination) => destination.hashedPassword,
    mapFrom((source) => source.password)
  ),
  namingConventions(new CamelCaseNamingConvention())
);

createMap(userMapper, User, UserModel,
  forMember(
    (destination) => destination.password,
    mapFrom((source) => source.hashedPassword)
  ),
  namingConventions(new PascalCaseNamingConvention())
);

export default userMapper;