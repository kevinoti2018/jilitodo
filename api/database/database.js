const sql = require('mssql')

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

async function getDbConnection(){
    try{
        const pool = new sql.ConnectionPool(sqlConfig)
        await pool.connect()
        console.info("connected successfully")
    } 
    catch(err){
        console.error( 'database not connected')
        return err
    }
}

module.exports = getDbConnection