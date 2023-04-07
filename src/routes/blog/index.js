const express = require("express");

const blogRoutes = require("../../controller/blog");

const router = express.Router();

router.get("/blog", blogRoutes.getBlog);
router.get("/blogs", blogRoutes.getAllBlog);

module.exports = router;
