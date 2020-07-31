module.exports = function (app) {

    app.get("/", function (req, res) {
        res.send("/index.html")
    });
    app.get("/exercise", function (req, res) {
        res.send("/exercise.html")
    });
    app.get("/stats", function (req, res) {
        res.send("/stats.html")
    });
}

