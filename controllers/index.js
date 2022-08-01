const Task = require("../models/task");

module.exports.home = (req, res) => {
    Task.find((err, docs) => {
        if (err) {
            console.log(err);
            return res.render("home");
        }
        return res.render("home", {
            data: docs
        })
    })
}

module.exports.add = (req, res) => {
    Task.create(req.body, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Added :",docs);
        }
        return res.redirect("back");
    });
}

// For delete function
function deleteHandler(err, docs){
    if (err) {
        return console.log(err);
    }
    return console.log("Deleted :", docs);
}

module.exports.delete = (req, res) => {
    let deleteTasks = req.body.id;
    // For multiple deletes
    if (Array.isArray(deleteTasks)){
        for (let i of deleteTasks) {
            Task.findByIdAndDelete(i, deleteHandler);
        }
    }
    else {
        Task.findByIdAndDelete(deleteTasks, deleteHandler);
    }
    res.redirect("back");
}