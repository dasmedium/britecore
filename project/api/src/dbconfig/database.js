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

async function pool() {
  try {
    getPool = await sql.createPool(config());

    return getPool;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  sql,
  pool
};
