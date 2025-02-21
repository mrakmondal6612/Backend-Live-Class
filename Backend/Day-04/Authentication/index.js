const express = require("express");
const app = express();
let allUsers = [
  {
    username: "ajay@gmail.com",
    password: "Ajay@00",
    name: "Ajay",
  },
  {
    username: "ankan@gmail.com",
    password: "Ankan@00",
    name: "Ankan",
  },
  {
    username: "Sayan@gmail.com",
    password: "Sayan@00",
    name: "Sayan",
  },
  {
    username: "ajaykumar@gmail.com",
    password: "Ak@00",
    name: "Ajay Kumar",
  },
];

const validUser = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].username === username &&
      allUsers[i].password === password
    ) {
      return next();
    }
  }

  return res.status(404).json({
    msg: "User doesn't exist in our in memory DB",
  });
};

app.use(express.json());
app.use(validUser);

app.get("/", (req, res) => {
  res.send("This is Home1 Route");
});

app.post("/login", (req, res) => {
  res.status(200).json({
    msg: "Loging Success",
  });
});

app.post("/users", (req, res) => {
  const username = req.body.username;
  let userList = allUsers.filter((user) => {
    if (user.username === username) {
      return false;
    } else {
      return true;
    }
  });

  let userName = [];
  for (let i = 0; i < userList.length; i++) {
    userName.push(userList[i].name);
  }

  return res.status(200).json(userName);
});

app.listen(8080, (req, res) => {
  console.log("Server is running on PORT 8080");
});
