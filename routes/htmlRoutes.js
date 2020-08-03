// Create all the routes to display pages (View)
const path = require("path");
const app = require("express").Router();



// You will need html routes to display the following pages:
// index.html ( "/" )
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
// exercise.html ( "/exercise" )
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})
// stats.html ( "/stats" )
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = app;