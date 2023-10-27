const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// this is created js file so we can access it like this.
// console.log(date());
console.log(date);
// to see what the function now the module exports now.

const app = express();
// var item = "";
var items = ["Milk", "Egg", "Badam"];
var workItems = [];
// now lets create an array that store all the inputs.
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    // let day = date.getDate();
    let day = date.getDate()
    res.render("list", {listTitle: day, newListItem: items});
}) 

app.post("/", function(req, res) {
    // console.log(req.body);
    const item = req.body.newItem;
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    } else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItem: workItems});
})

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res) {
    res.render("about", {listTitle: "about", newListItem: workItems});
})

app.listen(3000, function() {
    console.log("the server is running localhost 3000");
})