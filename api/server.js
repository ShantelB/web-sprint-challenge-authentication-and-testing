const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(logger);
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.get("/", (req, res) => {
    res.send({WELCOME: `TO WILLY WONKA'S CHOCOLATE FACTORY`})
  });
  
  server.get("/api", (req, res) => {
    res.send(`Keep Going!!!!`)
  });
  
  function logger(req, res, next){
    const {method, url} = req;
  
    const timestamp = Date.now().toString();
  
    console.log(`${method} to ${url} @ ${timestamp}`);
   
    next();
  }

module.exports = server;
