const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

// Routes
const homeRoutes = require("./src/routes/home");
const blogRoutes = require("./src/routes/blog");
const contactRoutes = require("./src/routes/contact");
const errorRoutes = require("./src/routes/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src", "public")));


// Set up a route that retrieves the user's name as a query parameter
app.use("/",homeRoutes);
app.use(blogRoutes);
app.use("/contact",contactRoutes);
app.use(errorRoutes);

app.listen(3001);
