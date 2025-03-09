const express = require("express");
const app = express();
const PORT = 8002;
let allUsers = [
  {
    name: "Ajay",
    kidneys: [{
      healthy: true,
    }, {
      healthy: false,
    }]
  }
  //  Add more user....
];

app.get("/", (req, res) => {
  // Write the solution here...
});

app.post("/", (req, res) => {
  // Write the solution here...
});

app.put("/", (req, res) => {
  // Write the solution here...
});

app.delete("/", (req, res) => {
  // Write the solution here...
});

app.listen(8080, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
