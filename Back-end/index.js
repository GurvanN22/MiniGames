'use strict';
const express = require('express');
const { Pool, Client } = require('pg');// Constants
const PORT = 3000;
const HOST = '0.0.0.0';// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World App');
});const client = new Client({
  user: 'user',
  host: 'postgres',
  database: 'db',
  password: 'pass',
  port: 5432,
});client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log("Error or response:: ", err, res)
  client.end()
});app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);