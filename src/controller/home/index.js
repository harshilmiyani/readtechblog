const blogs = require("../../data/blogs");
exports.getHome = (req, res, next) => {
  const movieId = req.query?.link;
  const page = req.query?.page ?? 1;
  const previousPageNumber =
    +page * 3 - 3 > 0 &&( +page * 3 <= blogs.length || +page * 3 -3 <= blogs.length)? +page * 3 - 3 : 0;
  const nextPageNumber =
    blogs.length >= +previousPageNumber + 3
      ? +previousPageNumber + 3
      : blogs.length;
  
  console.log(`Hello,${previousPageNumber} ${nextPageNumber} `);
  if (movieId) {
    return res.render("blog/singleBlog", {
      showGetLinkButton: !!movieId,
      link: "https://t.me/MovieMood1221_bot?start=authToken",
    });
  } else {
    res.render("home/index", {
      blogs: blogs.slice(previousPageNumber,nextPageNumber) ?? [],
      page: page ?? 0,
      previousPageNumber:previousPageNumber??0,
      nextPageNumber:nextPageNumber ??0,
      totalBlogs:blogs.length
    });
  }
};
