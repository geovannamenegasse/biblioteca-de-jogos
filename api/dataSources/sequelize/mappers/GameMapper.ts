import { createMapper, addProfile} from '@automapper/core';
import { classes } from '@automapper/classes';
import gameProfile from './profiles/GameProfile';

const gameMapper = createMapper({
  strategyInitializer: classes()
});

addProfile(gameMapper, gameProfile);

export default gameMapper;