import { createMapper, addProfile} from '@automapper/core';
import { classes } from '@automapper/classes';
import clientProfile from './profiles/ClientProfile';
import userProfile from './profiles/UserProfile';

const userMapper = createMapper({
  strategyInitializer: classes()
});

addProfile(userMapper, userProfile);
addProfile(userMapper, clientProfile);

export default userMapper;