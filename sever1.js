const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app     = express();
const fs = require('fs');
const port = 3000;

// app.use(express.static(__dirname));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.use(express.static('./'));

/* Parse JSON data using body parser. */
app.use(bodyParser.json());

app.post('/', function(req, res){
    console.log('body: ',  req.body);
    // read file and write to file
    fs.readFile()
    res.send(req.body);
});

app.listen(port);
