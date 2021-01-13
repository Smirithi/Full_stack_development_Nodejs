const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

    const query = req.body.cityName;
    const apiKey = "d453c52fec84eb431919f7de5a25c017";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey + "&units=" + unit;
    
    https.get(url, function(response) {

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temperature in "+ query +" is: "+ temperature +" degree celcius.</h1>")
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        });
    });

})

app.listen(3000, function() {
    console.log("Server is listening on: http://localhost:3000");
})