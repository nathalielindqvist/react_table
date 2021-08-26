const path = require("path");

const express = require("express");

// Create a web server - "app"

const app = express();

// Ask the web server to serve the static files in dist

app.use(express.static(path.join(__dirname, "/build")));

let port = process.env.PORT || 4000;

app.listen(port, () => console.log("Listening on port " + port));
