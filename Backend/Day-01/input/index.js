const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  let a;
  console.log(a.length);
  res.send("Helo");
});

app.get("/name", (req, res) => {
  let str = req.body.name;
  console.log("Length = " + str.length);
  res.json({
    name: str,
    length: str.length,
  });
});

app.post("/userList", (req, res) => {
  const name = req.body.name;
  console.log(name.length);
  if (name.length != 0) {
    res.send({
      msg: `totlal Members in this website are ${name.length}`,
    });
  }else{
    res.status(500).json({
        err: "Server side errors"
    })
  }
});

app.listen(8080, (req, res) => {
  console.log("server is running on PORT 8080");
});
