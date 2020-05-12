// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/ultimateTable7", async (req, res) => {
  try {
    const ultimateTable7 = await db.select().table("ultimateTable7");
    res.json(ultimateTable7);
  } catch (err) {
    console.error("Error loading ultimateTable7!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router renders the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
