const express = require("express");

const errorRoutes = require("../../controller/error");

const router = express.Router();

router.use(errorRoutes.error404);

module.exports = router;
