// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var newReservation = [
    {
    routeName:"reserve",
    name: "sdfg",
    phone: "sdfg",
    email: "sdf",
    id: "",
    party: ""
}
];

var waiting = [
    {   routeName:"tables",
        name: "",
        phone: "",
        email: "",
        id: "",
        party: ""
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) { //add a character
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) { 
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(newReservation);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(newReservation);
});



app.post("/api/tables", function (req, res) {
    
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation2 = req.body;

    console.log(newReservation2);

    newReservation.push(newReservation2);

    res.json(newReservation2);

    if(newReservation.length < 5){

app.post("/api/waitlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
  
    var newReservation2 = req.body;

    console.log(newReservation2);

    waiting.push(newReservation2);

    res.json(newReservation2);
});}
console.log(newReservation2.length);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});
