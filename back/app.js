const express = require('express');
const app = express();
const db = require('./database/db');
const dotenv = require('dotenv');
const session = require('express-session');
const methodOverride = require('method-override');
const port = 8000;
const users = require('./routes/users.js')


const postRoute = require('./routes/post.js')
//const comments = require('./routes/comment')
//Use express static to declare our public folder
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'));
app.use(session({ 
    secret: "secret",
    resave: false,
    saveUninitialized: true
  }));


app.use('/posts', postRoute);
app.use('/users', users);
//app.use('/comments',)


  try {
    db.authenticate()
    console.log('Succesfull connection')
} catch (error) {
    console.log(`The error is: ${error}`)
}

dotenv.config({path: './env/.env'})

app.listen(port, ()=>{
    console.log('SERVER UP running in http://localhost:8000')
})