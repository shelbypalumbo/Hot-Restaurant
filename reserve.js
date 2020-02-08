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

var reserve = [
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
        id: 0,
        party: 0
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
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



app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase(); //replace(/\s+/g, "") is getting rid of spaces

    console.log(newReservation);

    reserve.push(newReservation);

    res.json(newReservation);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});
