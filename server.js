const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//create PORT and assign to a variable.
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

//use express Middleware ( urlEncoded, json and static ).
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//connect to Mongo Db.
mongoose.connect(process.env.MONGODB_URI || "mongodb://passowrd:usernamex@ds027489.mlab.com:27489/heroku_mbgkmhwr", {
    useNewUrlParser:true,
    useFindAndModify:false
});

//  import your routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//create code to start the server and listen to requests.

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
