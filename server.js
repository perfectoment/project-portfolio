var path = require("path");
var express = require("express");
var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

var path = require("path");


//html routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "public/contact.html"))
});

app.get("/portfolio", function(req, res){
    res.sendFile(path.join(__dirname, "public/portfolio.html"))
})


app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
  });