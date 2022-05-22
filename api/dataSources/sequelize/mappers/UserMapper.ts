import { createMapper, addProfile} from '@automapper/core';
import { classes } from '@automapper/classes';
import userProfile from './profiles/UserProfile';

const userMapper = createMapper({
  strategyInitializer: classes()
});

addProfile(userMapper, userProfile);

export default userMapper;