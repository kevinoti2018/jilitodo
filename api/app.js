const express =  require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi =  require('swagger-ui-express')
const options = require('./swagger/swagger.json')

const app  =  express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


 const swaggerSpec = swaggerJSDoc(options)
 app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec))

 /**
  * @swagger
  * /:
  *     get:
  *         summary: this api is used to check if get method is working
  *         description: this api is used to check if get method is working
  *         responses: 
  *             200:
  *                 description: To test get method
  */
 app.get('/',(req,res)=>{
    res.send('testing swagger')
})
module.exports = app