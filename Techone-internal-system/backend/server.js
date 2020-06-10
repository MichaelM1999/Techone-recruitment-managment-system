const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path = require('path');


var PORT = process.env.PORT || 4202;
const app = express()
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use('/', router);
//!needed for hosting prod not local!
// const distDir = __dirname + "/dist/";
// app.use(express.static(distDir));

// app.get('/*', (req, res) => {
//     res.sendFile(__dirname + "/dist/"+'/index.html');
//   })

  //routes
  router.route('/user/login').post((req, res) => {
    console.log(req.body);
    res.json('hello');
    })
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})