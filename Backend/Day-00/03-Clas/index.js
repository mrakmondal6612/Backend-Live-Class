const express = require("express");
const app = express();

const user = [
    {name: "ajay"},
    {name: "abcc"}
]

app.put("/", (req, res) => {
  let x = req.query.a;
  console.log(x);
  res.send("This is Home Route ");
});

app.get("/name", (req, res) => {
  res.send("My name is Ajay");
});

app.post("/sayHello", (req, res) => {
  res.send("Hello Sir.");
});

app.listen(8080, (req, res) => {
  console.log("Server is running on 8080 PORT...");
});
