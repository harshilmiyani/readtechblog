const blogs = require("../../data/blogs")

exports.getContact = (req, res, next) => {
    //   const name = req.query.movieName;
  
    //   console.log(`Hello, ${name}!`);
  
    res.render("contact/index",{
    blogs: blogs
  });
  };
  