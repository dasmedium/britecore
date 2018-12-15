const db = require("../config").db;
const sql = require("mysql2/promise");

function config() {
  return {
    host: db.host,
    user: db.username,
    password: db.password,
    database: db.name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
  };
}

let pool = null;
const self = (module.exports = {
  sql,
  async main() {
    const connection = await sql.createConnection(config());

    return connection;
  }
});
