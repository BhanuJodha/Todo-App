const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");


router.get("/", controllers.home);

router.post("/add-task", controllers.add);

router.post("/delete-task", controllers.delete);


module.exports = router;