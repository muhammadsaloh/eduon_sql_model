const { Sequelize } = require('sequelize');
require('dotenv').config()

const URL = process.env.URL

const sequelize = new Sequelize(URL, {
    logging: (log) => console.log(`SQL: ${log}`)
}); 
