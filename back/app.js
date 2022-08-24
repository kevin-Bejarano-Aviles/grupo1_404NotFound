const express = require('express');
const app = express();
const db = require('./database/db');
const dotenv = require('dotenv');
const session = require('express-session');
const methodOverride = require('method-override');
const port = 8000;

//seteamos la carpeta public para archivos estáticos
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

  try {
    db.authenticate()
    console.log("conexion exitosa")
} catch (error) {
    console.log(`el error en conexion es: ${error}`)
}

dotenv.config({path: './env/.env'})

app.listen(port, ()=>{
    console.log('SERVER UP runnung in http://localhost:8000')
})