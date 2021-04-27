const mysql = require('mysql2/promise');

const connectdb = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_ROOT_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
    await db.connect();
    await db.execute('CREATE TABLE IF NOT EXISTS PEOPLE (NAME VARCHAR(255));');
    console.log('Connected to mysqldb');
    return db;
  } catch (err) {
    console.error('Could not connect to mysql db');
    process.exit();
  }
}

module.exports = { connectdb };
