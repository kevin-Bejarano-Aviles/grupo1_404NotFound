//Require sequelize
const Sequelize = require('sequelize');
//Require dotenv
const dotenv = require('dotenv')
dotenv.config({path: './env/.env'}) 
//Declare our db
const db = new Sequelize(process.env.DB_DATABASE,process.env.DB_USER,process.env.DB_PASS,{

    host : process.env.DB_HOST,
    dialect : 'mysql',
    port : process.env.DB_PORT
});
//Export our db
module.exports = db;