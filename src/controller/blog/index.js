const blogs = require("../../data/blogs")
exports.getAllBlog = (req, res, next) => {
  return res.render("blog/index",{
    blogs: blogs

  });
};
exports.getBlog = (req, res, next) => {
  const name = req.query?.link;
  const blogId = req.query?.blog;
  const blogDetails= blogs.find((b)=>b.fileName===blogId)

  console.log(`Hello, ${blogId}`);
  if (!!blogId && blogDetails) {
    return res.render(`blog/blogs/${blogId}`, {
      showGetLinkButton: !!name,
      link: "https://t.me/MovieMood1221_bot?start=authToken",
      blogDetails:blogDetails,
    });
  } else {
    res.redirect("blogs");
  }
};
