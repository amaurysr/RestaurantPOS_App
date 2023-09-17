import mysql2 from "mysql2"; 
import express from "express"; 
import cors from "cors";
const app = express();
const mysql = mysql2;


export default function clientSide(){


    // start our mysql connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'user',
        port: 3306,
        password: 'Fish,street321',
        database: 'client_info'
    })

    // Makes the page viewable just on localhost:5500 
    //app.use(express.static(__dirname + 'project-root')); 

    // sets up middleware for requests from any IP
    app.use(cors()); // Allow request from any IP 

    // Makes text format extended to true, with parameter limits so that long strings won't mess up our database entry, this is middleware for post requests
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
        
        // Queries if our email and username exists in the database 
        const verifquery = `SELECT * FROM client_info.client_credentials WHERE email = "${email}" OR username = "${username}"`

        connection.query(verifquery, (err,results) => {
            // checks for error in our query or a error when setting up our connection to database
            if(err){    
                console.error('error connecting: ' + err.stack);
                return;
            }
            // Verifies if a email or username is found 
            if(results.length > 0){
                if(email === results[0].email || username === results[0].username){
                    if(results.length > 1)
                    {
                        // Used to fixing the database if any injection of more emails or usernames happen
                        console.log('Warning: more than two values check the database')
                        return res.sendStatus(404);
                    }
                    // Sends 404 if it already exists 
                    console.log("email or username already exists")
                    return res.sendStatus(404);
                }
            }
            // Goes to the main() function if nothing is found 
            else if (results.length < 1){
                main()
                return res.sendStatus(200);
            }
        })

        function main(){

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
        }
    }); 

    app.post('/change', (req, res) => {
        console.log("Connected to /change");
        // Communicates with our request's body and gets our email and password 
        const email = req.body.email;
        const password = req.body.password;

        // Does the mysql UPDATE in order to update the password requested
        const changepassquery = 'UPDATE client_info.client_credentials SET password = ? WHERE email = ?';
        const changepassquery1 = 'UPDATE client_info.client_verify SET password = ? WHERE email = ?';

        // We need beginTransaction because this will be able to run our multiple queries
        connection.beginTransaction((err) => {
            if (err) {
                console.error('Error beginning transaction', err.stack);
                return res.sendStatus(404); // Use a more appropriate status code for server errors
            }
            // Queries our main table with all data
            connection.query(changepassquery, [password, email], (err, results) => {
                if (err) {
                    // this will rollack an error if anything happens 
                    connection.rollback(() => {
                        console.error('Error rolling back transaction', err.stack);
                        return res.sendStatus(404); // Rollback on error
                    });
                } else {
                    // Queries the secondary table with email & password
                    connection.query(changepassquery1, [password, email], (err, results) => {
                        if (err) {
                            // this will rollack an error if anything happens
                            connection.rollback(() => {
                                console.error('Error rolling back transaction', err.stack);
                                return res.sendStatus(404); // Rollback on error
                            });
                        } else {
                            // This commits the queries that we requested
                            connection.commit((err) => {
                                if (err) {
                                    // this will rollack an error if anything happens
                                    connection.rollback(() => {
                                        console.error('Error committing transaction', err.stack);
                                        return res.sendStatus(404); // Rollback on error
                                    });
                                } else {
                                    console.log('Sent changes to your account');
                                    return res.sendStatus(200); // Send OK for our request 
                                }
                            });
                        }
                    });
                }
            });
        });
    });


    app.post('/findacc', (req,res) => {
        //console.log(req.body);
        // creates a variable for our request 
        const reqBody = req.body; 
        //creates a variable for our email
        const name = reqBody.email; 
        //creates a variable for password field
        const password = reqBody.password; 

        //Select query selects if a row has a specified email and password entered
        const query1 = `SELECT email, password FROM client_info.client_verify WHERE email = "${name}" AND password = "${password}"`

        //we are using the connection.query() not just for the query, but to send a http code if the row is found
        connection.query(query1, (err, results) => {
            if(err){
                //returns if there is a error with the query
                console.error('error connecting: ' + err.stack);
                return; 
            }
            // This counts the number of rows if found
            let numRows = results.length;
            //console.log(`The number of rows are: ${numRows}`);
            if(numRows < 1)
            {
                // Specifies if no rows are found send http status code 404
                return res.sendStatus(404);
            }
            else if(numRows > 0)
            {
                // Specifies if a row is found send http status code 200
                return res.sendStatus(200);
            }
        })
    })

    app.listen(5500);

}


