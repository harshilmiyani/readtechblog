const blogs = require("../../data/blogs")

exports.error404 = (req, res, next) => {
    return res.render("error/404",{
      blogs: blogs
    });
  };