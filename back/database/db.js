const Sequelize = require('sequelize');
const dotenv = require('dotenv')
dotenv.config({path: './env/.env'}) 


const db = new Sequelize(process.env.DB_DATABASE,process.env.DB_USER,process.env.DB_PASS,{

    host : process.env.DB_HOST,
    dialect : 'mysql',
    port : 3306

});

module.exports = db;