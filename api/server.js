const path =  require('path')
require('dotenv').config({path:path.resolve(__dirname, './config/config.env')})
const app = require('./app')
const getDbConnection =require('./database/database')

const port  =  process.env.PORT

process.on('uncaughtException',(error)=>{
    console.error(`uncaught error occured,${error.message}`)
    process.exit(1)
})
getDbConnection() 
const server = app.listen(port,()=>{
    //  console.clear() 
    console.log(`server is running in http://localhost:${port} , in ${process.env.NODE_ENV} mode`)
})

process.on('unhandledRejection',(error)=>{
    console.error(`unhandledRejection error occured,${error.message}`)
   server.close(()=>{
    process.exit(1)
   })
})
