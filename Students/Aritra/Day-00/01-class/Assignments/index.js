// Create a HTTP Server with some end-points.
// create Home Route (/) to show a outputs "This is Home Route".
// Create Route, thats gives a inputs and return output (response) to the clint
//    -> Name & Age (as a input) || Outputs : Hi, I am Ajay Mondal, and I am 18 year's old.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.get("/profile", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  if (name && age) {
    res.send(`Hi, I am ${name}, and I am ${age} years old.`);
  } else {
    res.status(400).send(" provide name and age.");
  }
  console.log("hi")
});

app.listen(8080, () => {
  console.log("Server is running on 8080 PORT...");
});
