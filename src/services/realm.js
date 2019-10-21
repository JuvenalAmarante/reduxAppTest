import Realm from 'realm';

import StarWarsSchemas from '../schemas/FilmSchema';

export default function getRealm() {
  return Realm.open({
    schema: [StarWarsSchemas],
  });
}
