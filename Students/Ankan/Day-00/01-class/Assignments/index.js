// Create a HTTP Server with some end-points.
// create Home Route (/) to show a outputs "This is Home Route".
// Create Route, thats gives a inputs and return output (response) to the clint
//    -> Name & Age (as a input) || Outputs : Hi, I am Ajay Mondal, and I am 18 year's old.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.post("/hii", (req, res) => {
  res.send("Hello from ankan");
});

app.get("/greet", (req, res) => {
  const { name, age } = req.query;
  res.send(`Hi, I amm ${name},and I am ${age} years old`);
});

app.listen(8080, () => {
  console.log("server is running on port 8080...");
});
