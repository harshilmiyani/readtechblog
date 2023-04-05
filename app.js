const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

// Routes
const homeRoutes = require("./src/routes/home");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src", "public")));

const token = "5559833342:AAGP-ei2jbC8ZSn_GZNgdNHZ9v_hrsxnnHc";

// const bot = new TelegramBot(token, { polling: true });
// bot.onText(/\/start (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//   console.log("Message recived");
//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   console.log(chatId, resp);
//   bot.sendMessage(chatId, `${resp} + "Movie"`);
// });

// Set up a route that retrieves the user's name as a query parameter
app.use(homeRoutes);

// app.post("/page2", (req, res) => {
//   res.sendFile("./src/views/page2.html", { root: __dirname });
// });
// app.post("/page3", (req, res) => {
//   res.sendFile("./src/views/page3.html", { root: __dirname });
// });

// Start the server
app.listen(3001);
