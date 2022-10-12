import Character from './Character';
import LongRangeCharacter from './LongRangeCharacter';
import MeleeCharacter from './MeleeCharacter';

import CharacterService from './CharacterService';
import LocalDbModel from './LocalDbModel';
import MockedDbModel from './MockedDbModel';

function characterPresentation(character: Character): void {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockedDbModel());
B.getAll().then(console.log);
