const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




app.get("/", function(req, res) {
  res.sendfile(__dirname + "/signup.html");
});

app.post('/falier', function(req, res) {
  res.redirct("/")
});


app.post('/', function(req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;

  var person = {
    email: email,
    name: fname + " " + lname
  };
  connection.query('INSERT INTO emails SET ?', person, function(err, result) {
    if (err) {
      res.sendfile(__dirname + "/failer.html");
    } else
      res.sendfile(__dirname + "/succuss.html");
  });
});


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@moax8096321',
  database: 'moax'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


app.listen(3000, function() {
  console.log("server is working fine!");
});
