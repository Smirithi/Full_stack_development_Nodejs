const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("superagent");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const email = req.body.userEmail;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: first_name,
                    LNAME: last_name
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    request
    .post('https://us7.api.mailchimp.com/3.0/lists/c0feaca8c0')
    .auth('Smirithi', '655107a8cf7b6b473a006647666cc0c3-us7')
    .send(jsonData)
    .then((response) => {
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }
    })
    .catch((err) => {
        res.sendFile(__dirname + "/failure.html");
    })
});

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is listening at : http://localhost:3000");
});
