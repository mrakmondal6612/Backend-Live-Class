const express = require("express");
const app = express();

app.use(express.json());

app.get("/name", (req, res) => {
  res.send("Hi, I am Ajay");
});

app.get("/msg", (req, res) => {
  // console.log(req.query.name);
  // console.log(req.headers.name);
  // console.log(req.headers.age);
  // console.log(req.params);

  console.log(req.body);

  res.json({
    msg: "Hello Ajay",
  });
});

app.listen(8080, (req, res) => {
  console.log("Server is running on PORT 8080");
});
