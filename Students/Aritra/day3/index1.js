const express = require("express");
const app = express();

app.use(express.json());

const middleware = (req, res, next) => {
    let age = req.body.age;
    if (age < 18) {
        return res.send("You are not eligible");
    } else {
        next();
    }
};

app.get("/", (req, res) => {
    res.send("This is the Home page");
});

app.use(middleware);

app.post("/vote", (req, res) => {
    res.send("You are eligible for Voting");
});

app.post("/movie", (req, res) => {
    return res.send("Now you are allowed for this movie");
});

app.post("/age", (req, res) => {
    return res.send("Your age is 18+");
});

app.listen(8000, () => {
    console.log("Server is running on PORT 8000");
});
