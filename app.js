'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('<head> <title>NodeJS App</title> </head><h1 align="center">Azure Multi-App Deployment</h1> \n <body background="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500" > ' );
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
