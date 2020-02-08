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

var reserve = [{
    routeReserv: "reserve",
    customerName: "mbsbk",
    customerEmail: "mnweljbngd",
    phoneNumber: "wm,enfjs",
    customerID: "sd,mfngkdjf"
}];

var waiting = [{
    routeReserv: "",
    customerName: "",
    customerEmail: "",
    phoneNumber: "",
    customerID: ""
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/reserve", function (req, res) { //add a character
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function (req, res) { //add a character
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/table", function (req, res) {
    return res.json(newReserve);
});



// Create New Characters - takes in JSON input
app.post("/api/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReserve = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase(); //replace(/\s+/g, "") is getting rid of spaces

    console.log(newReserve);

    reserve.push(newReserve);

    res.json(newReserve);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});
