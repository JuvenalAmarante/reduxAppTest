export default class StarWarsSchemas {
  static schema = {
    name: 'Film',
    primaryKey: 'episode_id',
    properties: {
      title: 'string',
      episode_id: 'int',
      opening_crawl: 'string',
      director: 'string',
      producer: 'string',
      release_date: 'string',
    },
  };
}
