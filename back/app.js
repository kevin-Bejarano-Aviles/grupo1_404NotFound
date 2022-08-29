const express = require('express');
const app = express();
const db = require('./database/db');
const dotenv = require('dotenv');
const session = require('express-session');
const methodOverride = require('method-override');
const port = 8000;
const path = require('path')
const cors = require('cors');
const users = require('./routes/users.js')
const postRoute = require('./routes/post.js');
const comments = require('./routes/comments');
const adminRoutes = require('./routes/admin');
//Use express static to declare our public folder
app.use(express.static('public'))
/* path.join(__dirname,'..','front','src','img') */
//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({ 
    secret: "secret",
    resave: false,
    saveUninitialized: true
  }));
/* const corsOptions={
  optionsSuccessStatus: 200,
  credentials: true,
}
app.use(cors(corsOptions)) */

app.use('/posts', postRoute);
app.use('/users', users);
app.use('/comments',comments)
app.use('/admin',adminRoutes);

  try {
    db.authenticate()
    console.log('Succesfull connection')
} catch (error) {
    console.log(`The error is: ${error}`)
}

dotenv.config({path: './env/.env'})

app.listen(port, ()=>{
    console.log('SERVER UP running in http://localhost:8000')
    //console.log(path.join(__dirname,'..','front','src','img'));
})