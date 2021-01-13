const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h2><em>Hello, World!</em></h2>");
});

app.get("/contact", function(req, res){
    res.send("contact me at: <h4><em>smrithi@gmail.com</em></h4>");
});

app.get("/about", function(req, res){
    res.send("<div><p>Hi, this is Smrithi a <em>passionate learner</em> and <em>good listener</em>.</p><h3>Have a Nice day!!</h3></div>")
});

app.listen(3000, function() {
    console.log("Server has started on: http://localhost:3000");
});