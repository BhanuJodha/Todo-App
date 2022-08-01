const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    due_date: {
        type: Date
    } 
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;


