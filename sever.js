const express = require("express");
const app = express();
const fs = require('fs');

app.listen(8000, () => {
  console.log("Application started and Listening on port 3000");
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Method: Post, data: form data
app.post("/", (req, res) => {
  // write file
  fs.readFile('obj.json', 'utf8', (err, data) => {
    if(err){
      console.log(err);
    } else {
      if(data){
        obj = JSON.parse(data);
        obj.push(req.body);
        json = JSON.stringify(obj);
        fs.writeFile('obj.json', json, 'utf8', (err) => {
          if(err){
            console.log(`Error writing file: ${err}`);
          } else {
              console.log(`File is written successfully!`);
          }
        });
      } else {
        var arr = [];
        arr.push(req.body);
        fs.writeFile('obj.json', JSON.stringify(arr), 'utf8', (err) => {
          if(err){
            console.log(`Error writing file: ${err}`);
          } else {
              console.log(`File is written successfully!`);
          }
        });
      }
    }
  });

});

