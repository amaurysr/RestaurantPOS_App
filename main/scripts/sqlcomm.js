const mysql2 = require('mysql2'); 
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const { createConnection } = require('mysql2/promise');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);
const connection = createConnection({
    host: 'localhost',
    user: 'user',
    password: '04D@ckdocko123',
    database: 'RestaurantPOSDB',
});

connection.connect((err) => {
    if (err) {
      console.error('Database connection error: ', err);
      return;
    }
  });

app.post('/main/scripts/sqlcomm.js', (req/res), {
    const :{email, password, firstname, lastname, username} = req.body 
    

});

connection.query()

connection.end()
  