require("dotenv").config;
// Require express from express module and store it in the express function
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

// Call express function and put a new applicationin the variable app
const app = express();

// Creating the middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

// express.static() send all the static files like index.html to the build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 9090;
app.listen(port, console.log(`server listing to port 9090 only`));