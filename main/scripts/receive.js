const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Fish,street321',
    database: 'restaurantposdb'
  })


app.use(cors()); // Allow request from any IP 

app.use(express.urlencoded({
    extended: true,
    limit: 10000,
    parameterLimit: 6,
}));

app.post('/upload', (req, res) =>{

    // Handle form upload 
    var request = req.body; 

    const email = request.email; 
    const password = request.password; 
    const firstname = request.firstname; 
    const lastname = request.lastname; 
    const username = request.username; 

    const query = `INSERT INTO client_info.client_credentials (email, password, firstname, lastname, username) VALUES ('${email}', '${password}', '${firstname}', '${lastname}', '${username}')`;


    connection.query(query, (err, results) =>{
        if(err){    
            console.error('error connecting: ' + err.stack);
            return;
        }
        else{
            console.log('Successfully inserted into DB !!!!!')
        }

    })

}); 

app.get('/findacc', (req,res) => {
    console.log(res.body);
})

app.listen(5500);



