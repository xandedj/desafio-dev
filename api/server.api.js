require('dotenv/config');
require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./src/shared/logger')
const Routes = require('./src/v1');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use("/", Routes);

app.listen(process.env.API_PORT,()=>{
  logger.info(`port: ${process.env.API_PORT}`);
  logger.info(`hostname: ${process.env.HOSTNAME} API`);
  logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
});