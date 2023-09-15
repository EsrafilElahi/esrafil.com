const { Router } = require("express");
const projectControllers = require("../controllers/projectControllers/index");

const router = Router();


router.get("/", projectControllers.getAll);

module.exports = router;