require("./db/db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "loot-vault/build")));

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// ROUTING
// const authController = require("./controllers/authController");
// app.use("/auth", authController);

// const dataController = require("./controllers/dataController");
// app.use("/data", dataController);

// const userController = require("./controllers/userController");
// app.use("/user", userController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/loot-vault/build/index.html"));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("listening on port 8000");
});
