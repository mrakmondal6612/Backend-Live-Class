const express = require("express");
const PORT = 8000;
const app = express();

let errCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get("/user", function (req, res) {
  throw new Error({msg: "User not found"});
  x=x/0;
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  // throw new Error("User not found");
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errCount });
});

// error handling middleware
app.use((err, req, res, next) => {
  res.status(404).send({err: err});
  errCount++;
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
