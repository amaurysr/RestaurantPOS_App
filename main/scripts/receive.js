const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors()); // Allow request from any IP 

app.use(express.urlencoded({
    extended: true,
    limit: 10000,
    parameterLimit: 6,
}));

app.post('/upload', (req, res) =>{

    // Handle form upload 
    console.log(req.body);

}); 

app.listen(5500);


