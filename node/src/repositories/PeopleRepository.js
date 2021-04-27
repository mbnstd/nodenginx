class PeopleRepository {
  constructor({ db }) {
    this.db = db;
  }

  createPerson({ name }) {
    this.db.execute("INSERT INTO PEOPLE (NAME) VALUES (?);", [name]);
  }

  async getPeople() {
    const [rows ] = await this.db.execute('SELECT * FROM `PEOPLE`');
    return rows.map(e => e.NAME);
  }

}

module.exports = PeopleRepository;