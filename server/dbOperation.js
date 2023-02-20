const sql = require("mssql");
const config = require("./dbConfig");

async function testConnection() {
  try {
    const pool = await sql.connect(config);
    console.log("Connected to database");
  } catch (error) {
    console.log(`DB Error: ${error}`);
  }
}

module.exports = {
  testConnection,
};
