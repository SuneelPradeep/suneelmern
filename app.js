
const dotenv = require('dotenv')
const mongoose = require('mongoose')
 const  express = require('express')
const cookieParser = require('cookie-parser')

 const app = express()

dotenv.config({path:'./config.env'})

//Database of Mongoose
 require('./db/conn')
 const PORT = process.env.PORT || 5000;
 
app.use(cookieParser())
 //middleware to get the data from postman 

 app.use(express.json());

 //giving auth location

 app.use(require('./router/auth'))

 

 // const user = require('./models/userSchema')

//  //Middleware
// const middleware = (req, res, next)=>{
//     console.log(`Hi middleware here`)
//     next()
// }


//  app.get('/', (req, res)=>{
//           res.send(`Hello world from server`)
//  })

//  app.get('/contact', (req,res)=>{
//      res.cookie('Test', 'Thapa')
//      res.send(`Welcome to the Contact page`)
//  })
 

// app.get('/register', (req,res)=>{
//     res.send(`Welcome to the Register page`)
// })

// 3rd step in heroku

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

 app.listen(PORT,()=>{
     console.log(`port running at port ${PORT}`)
 })