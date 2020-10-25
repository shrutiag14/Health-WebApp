const express = require('express')
const app  = express()

const request = require('request')
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index");
});

app.get("/mhealth.ejs", function(req,res){
    res.render("mhealth.ejs");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.")
});