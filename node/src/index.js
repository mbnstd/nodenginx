var random_name = require('node-random-name');
const express = require('express');
const app = express();

const { connectdb } = require('./db/connect');

const PeopleRepository = require('./repositories/PeopleRepository');

const startServer = async () => {
  const db = await connectdb();

  const peopleRepository = new PeopleRepository({ db });

  app.get('/', async (req, res) => {
    await peopleRepository.createPerson({ name: random_name() });
    const people = await peopleRepository.getPeople();
    const liPeople = people.map(e => `<li>${e}</li>`).join('');
    const result = `
      <h1>Full Cycle Rocks!</h1>
      ${liPeople}
    `
    res.send(result)
  });

  await app.listen(3000);
  console.log("Rodando na porta 3000");
}

startServer();