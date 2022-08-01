const express = require("express");
const port = 8000;
const app = express();

// Starting the Database
require("./config/mongoose");

// Setting views
app.set("view engine", "ejs");
app.set("views", "./views");

// Setting static routes
app.use(express.static("assets"))

// Decoder only for add-task and delete-task request
app.use("/add-task", express.urlencoded({
    extended: false
}))
app.use("/delete-task", express.urlencoded({
    extended: false
}))

// Setting router
app.use("/", require("./routes/index"));



app.listen(port, (err) => {
    if (err) {
        return console.error("Error in starting server :", err);
    }
    console.log("Server is running on port :", port);
})