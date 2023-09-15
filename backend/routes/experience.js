const { Router } = require("express");
const experienceControllers = require("../controllers/experienceControllers/index");

const router = Router();


router.get("/", experienceControllers.getAll);

module.exports = router;