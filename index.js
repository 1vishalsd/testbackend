require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/twitter", (req, res) => {
  res.send("1vishalsd");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login On My First Website</h1>");
});
app.get("/instagram", (req, res) => {
  res.send("my name is vishal ");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
