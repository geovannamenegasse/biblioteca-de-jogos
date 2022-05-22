import { createMapper, addProfile} from '@automapper/core';
import { classes } from '@automapper/classes';
import clientProfile from './profiles/ClientProfile';
import userProfile from './profiles/UserProfile';

const clientMapper = createMapper({
  strategyInitializer: classes()
});

addProfile(clientMapper, userProfile);
addProfile(clientMapper, clientProfile);

export default clientMapper;