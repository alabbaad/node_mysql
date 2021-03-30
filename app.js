const express = require('express')
const bodyparser = require('body-parser')
const model = require('./routes/customer.routes')

//var NodeWebcam = require( "node-webcam" );
//var Webcam = NodeWebcam.create({});

const fs = require('fs')
//create server
const app = express();
const port = 300;
// parse requests of content-type: application/json
app.use(bodyparser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)})
