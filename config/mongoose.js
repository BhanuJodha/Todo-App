const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo_list_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to database"));

db.once("open", console.log.bind(console, "Successfully connected to database"));

module.exports = db;