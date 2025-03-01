const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>This is Home Route </h2>");
});

app.post("/kidneys", (req, res) => {
  const kidneys = req.body.kidney;
  // console.log(kidneys);
  if (kidneys) {
    const kidneyLength = kidneys.length;
    res.send("You have " + kidneyLength + " Kidneys ");
  } else {
    res.status(500).json({
      err: "internal server error"
    })
  }

});

app.get("/name", (req, res) => {
  res.send("<h2> Hi, I am </h2>");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "internal server error",
  });
});

app.listen(8080, (req, res) => {
  console.log("Server is running on PORT 8080")
});