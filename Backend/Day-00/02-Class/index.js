const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is Root Route");
});
app.get("/conver", (req, res) => {
  res.send("This Conver Route");
});
app.get("/name", (req, res) => {
  res.send("Hello Ajay");
});
app.get("/home", (req, res) => {
  res.send("This Home Route");
});


app.listen(8080, (req, res) => {
  console.log("Server is running on PORT 8080...");
});
