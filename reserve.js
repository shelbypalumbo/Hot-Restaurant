var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var newReservation = [
];

var waiting = [
];


//Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) { //add a character
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables and waitlist
app.get("/api/tables", function (req, res) {
    res.json(newReservation);
});

app.get("/api/waitlist", function (req, res) {
    res.json(newReservation);
});



app.post("/api/tables", function (req, res) {

    if (newReservation.length < 5) {
        newReservation.push(req.body);
        res.json(true);
    }
    else {
        waiting.push(req.body);
        res.json(false);
    }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});
