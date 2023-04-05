const express = require("express");

const homeRoutes = require("../../controller/home");

const router = express.Router();

router.get("/", homeRoutes.getHome);

module.exports = router;
