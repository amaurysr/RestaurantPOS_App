import express from "express";
import mysql from "mysql2"; 
import cors from "cors"
var app = express()

export default function adminSide(){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'user',
        port: 3306,
        password: 'Fish,street321' ,
        database: 'admin_info'
    }) 

    app.use(cors()); 

    app.use(express.urlencoded({
        extended: true, 
        limit: 100000, 
        parameterLimit: 6
    })); 

    app.post('/findadminacc', (req, res) => {
        const request = req.body
        const username = request.username
        const password = request.password 
        
        const query = `SELECT username,password FROM admin_info.admin_verify WHERE username = "${username}" AND password = "${password}"`
        try{
            connection.query(query, (err, results, rows, field) => {
                if (results.length > 1){
                    console.log("WARNING: CHECK DATABASE THERE'S MULTIPLE INSTANCE WITH THE SAME USERNAME AND PASSWORD TOGETHER")
                    res.sendStatus(404);
                    throw err
                }
                else if(results.length === 1){
                    if (username === results[0].username && password === results[0].password){
                        res.sendStatus(200)
                    }
                    else{
                        res.sendStatus(404)
                    }
                }
                else{
                    res.sendStatus(404)
                }
            })
         }
         catch(err){
            console.error(err)
         }
    });

    app.listen(5501);

}