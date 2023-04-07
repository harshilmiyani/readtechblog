const blogs = require("../../data/blogs");
exports.getHome = (req, res, next) => {
  const movieId = req.query?.link;
  console.log(`Hello, ${movieId}!`);
  if (movieId) {
    return res.render("blog/singleBlog", {
      showGetLinkButton: !!movieId,
      link: "https://t.me/MovieMood1221_bot?start=authToken",
    });
  } else {  
    res.render("home/index", {
      blogs: blogs ?? [],
    });
  }
};
