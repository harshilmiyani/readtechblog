const express = require("express");

const contactRoutes = require("../../controller/contact");

const router = express.Router();

router.get("/", contactRoutes.getContact);

module.exports = router;
