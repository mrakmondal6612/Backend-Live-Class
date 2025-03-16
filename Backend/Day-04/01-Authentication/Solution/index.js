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
  let userKidney = allUsers[0].kidneys;
  let TotakNoOfKidneys = userKidney.length;
  let noOfHealthyKidneys = 0;
  // filter()
  for (let i = 0; i < TotakNoOfKidneys; i++) {
    if (userKidney[i].healthy) {
      noOfHealthyKidneys++;
    }
  }
  let noOfUnhealthyKidneys = TotakNoOfKidneys - noOfHealthyKidneys;
  res.json({
    TotakNoOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys
  })
});

// Add Kidneys
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  allUsers[0].kidneys.push({ healthy: isHealthy });
  res.json({
    msg: "Kidney Added"
  })


  // if (isHealthy) {
  //   allUsers[0].kidneys.push({ healthy: isHealthy });
  //   res.json({
  //     msg: "Kidney Added"
  //   })
  //   return;
  // }
  // res.status(411).json({
  //   error: "Please input valid Kidney"
  // })

});

// Update Kidneys
app.put("/", (req, res) => {
  // Write the solution here...
  for (let i = 0; i < allUsers[0].kidneys.length; i++) {
    allUsers[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Done"
  })
});

// Delete Kidneys
app.delete("/", (req, res) => {
  // Write the solution here...
  const newKidneys = [];
  for (let i = 0; i < allUsers[0].kidneys.length; i++) {
    if (allUsers[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true
      })
    }
  }
  allUsers[0].kidneys = newKidneys;

  res.json({
    msg: "Done"
  })

});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
