const dbConfig = {
    client: "mssql",
    connection: {
      host: process.env.DB_SERVER,
      user: process.env.DB_USER,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  };
  
  const db_config = require("knex")(dbConfig);
  
  export { db_config };