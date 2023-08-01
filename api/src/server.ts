import path from'path'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname, '../config/config.env')})
import {app} from'./app'
// import{ getDbConnection} from'./database/db_builder'

const port  =  process.env.PORT

process.on('uncaughtException',(error:any)=>{
    console.error(`uncaught error occured,${error.message}`)
    process.exit(1)
})
// getDbConnection() 
const server = app.listen(port,()=>{
     console.clear() 
    console.log(`server is running in http://localhost:${port} , in ${process.env.NODE_ENV} mode`)
})

process.on('unhandledRejection',(error:any)=>{
    console.error(`unhandledRejection error occured,${error.message}`)
   server.close(()=>{
    process.exit(1)
   })
})
