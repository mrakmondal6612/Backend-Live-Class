const express = require("express");
const app = express();
const PORT = 8002;

app.use(express.json());

let allUsers = [
  {
    name: "Ajay",
    kidneys: []
  }
  //  Add more user....
];

app.get("/", (req, res) => {
  // Write the solution here...

});

// Add Kidneys
app.post("/", (req, res) => {

});

// Update Kidneys
app.put("/", (req, res) => {
  // Write the solution here...

});

// Delete Kidneys
app.delete("/", (req, res) => {
  // Write the solution here...

});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
