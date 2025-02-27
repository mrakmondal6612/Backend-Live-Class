const express = require("express");
const app = express();

let name = "Ram";

app.get("/name", (req, res) => {
  res.json({
    name: name,
  });
});

app.listen(8001, (req, res) => {
  console.log("Server is running on port 8002");
});
