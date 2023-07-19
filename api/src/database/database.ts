import sql from 'mssql'

const sqlConfig = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PWD as string,
  database: process.env.DB_NAME as string,
  server: process.env.DB_SERVER as string,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

export const getDbConnection=async()=>{
    try{
        const pool = new sql.ConnectionPool(sqlConfig)
        await pool.connect()
        console.info("connected successfully")
    } 
    catch(err){
      console.log(process.env.DB_SERVER);
        console.error( 'database not connected')
        return err
    }
}

