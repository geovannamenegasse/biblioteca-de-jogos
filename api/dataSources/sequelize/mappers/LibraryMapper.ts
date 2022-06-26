import { createMapper, addProfile} from '@automapper/core';
import { classes } from '@automapper/classes';
import libraryProfile from './profiles/LibraryProfile';

const libraryMapper = createMapper({
  strategyInitializer: classes()
});

addProfile(libraryMapper, libraryProfile);

export default libraryMapper;