require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser:  process.env.DB_USER || 'postgres',
  dbPassword:  process.env.DB_PASSWORD || '12345',
  dbHost:  process.env.DB_HOST || 'localhost',
  dbName:  process.env.DB_NAME || 'administraciónestudiantil',
  dbPort:  process.env.DB_PORT || 5432,
}

module.exports = { config };