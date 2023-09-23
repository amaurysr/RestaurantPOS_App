import express from "express";
import { fileURLToPath } from 'url'; // Import the 'fileURLToPath' function
import path from "path";
import cors from "cors";
const app = express();

const __filename = fileURLToPath(import.meta.url); // Get the current file's URL and convert it to a path
const __dirname = path.dirname(__filename); // Get the directory name
const mainpath = path.join(__dirname)
//console.log(mainpath)
//console.log(`${mainpath}`+"/assets/images")
const publicpath = path.join(__dirname + "/front-html")

export default function webviewer() {
  app.use(express.static(`${mainpath}`));  
  app.use(express.static(`${publicpath}`))
  app.use(express.static(path.join(`${mainpath}`+"/assets/images/")))
  app.use(cors());

  app.get('/home', (req, res) => {
    res.sendFile(`${publicpath}/index.html`)
  })
  app.get('/login', (req, res) => {
    res.sendFile(`${publicpath}/logins/login.html`)
  })

  app.get('*', (req, res) => {
    res.sendFile(`${publicpath}/index.html`)
  })

  app.listen(5000, () => {
    console.log("Website is running on port 5000");
  });
}
