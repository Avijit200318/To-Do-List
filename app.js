const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date);
const app = express();
// var item = "";
var items = ["Buy Milk", "Buy Egg"];
var workItems = [];
// now lets create an array that store all the inputs.
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    // var date = new Date();

    // option = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long",
    // }
    // var day = date.toLocaleDateString("en-US", option);
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItem: items});
}) 

app.post("/", function(req, res) {
    console.log(req.body);
    const item = req.body.newItem;
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
})

app.get("/about", function(req, res) {
    res.render("about", {listTitle: "About", newListItem: workItems})
})

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItem: workItems});
})

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function() {
    console.log("the server is running localhost 3000");
})
