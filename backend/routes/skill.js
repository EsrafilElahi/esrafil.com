const { Router } = require("express");
const skillControllers = require("../controllers/skillsControllers/index");

const router = Router();

router.get("/", skillControllers.getAll);

module.exports = router;
