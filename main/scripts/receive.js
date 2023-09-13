const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2')

// start our mysql connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    port: 3306,
    password: 'Fish,street321',
    database: 'client_info'
  })


app.use(cors()); // Allow request from any IP 

// Makes our text format extended to true, with parameter limits so that long strings won't mess up our database entry
app.use(express.urlencoded({
    extended: true,
    limit: 10000,
    parameterLimit: 6,
}));

app.post('/upload', (req, res) =>{

    // Handle form upload 
    var request = req.body; 

    // Take the key and values of our POST and places them into variables
    const email = request.email; 
    const password = request.password; 
    const firstname = request.firstname; 
    const lastname = request.lastname; 
    const username = request.username; 

    // query that inserts into our database
    const query = `INSERT INTO client_info.client_credentials (email, password, firstname, lastname, username) VALUES ('${email}', '${password}', '${firstname}', '${lastname}', '${username}')`;

    // function that connections and does query to the connected database, while checking for errors and results
    connection.query(query, (err, results) =>{
        // checks for error in our query or a error when setting up our connection to database
        if(err){    
            console.error('error connecting: ' + err.stack);
            return;
        }
        else{
            console.log('Successfully inserted into DB !!!!!')
            // ends the connection to the database
            //connection.end();
        }

    })

}); 

app.post('/findacc', (req,res) => {
    //console.log(req.body);
    const reqBody = req.body; 
    const name = reqBody.email; 
    const password = reqBody.password; 

    const query1 = `SELECT email, password FROM client_info.client_verify WHERE email = "${name}" AND password = "${password}"`

    connection.query(query1, (err, results) => {
        if(err){
            console.error('error connecting: ' + err.stack);
            return; 
        }
        let numRows = results.length;
        //console.log(`The number of rows are: ${numRows}`);
        if(numRows < 1)
        {
            return res.sendStatus(400);
        }
        else if(numRows > 0)
        {
            return res.sendStatus(200);
        }
    })
})

app.listen(5500);



