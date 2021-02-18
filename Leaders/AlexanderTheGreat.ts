import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Greek from '../Greek';

export class AlexanderTheGreat extends Leader {
  static civilization(): typeof Civilization {
    return Greek;
  }

  name(): string {
    return 'Alexander the Great';
  }
}

export default AlexanderTheGreat;
