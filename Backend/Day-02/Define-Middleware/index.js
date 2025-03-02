const express = require("express");
const app = express();

app.use(express.json());

const middleware = (req, res, next) => {
    let age = req.body.age;
    if (age < 18) {
        return res.send("You are not elegible")
    }
    else {
        next();
    }
}

// const chacking_age = (age)=>{
//     if (age < 18) {
//         return false
//     } else {
//         return true
//     }
// }

app.get("/", (req, res) => {
    res.send("this is Home page")
})


app.use(middleware);

app.post("/vote", (req, res) => {
    res.send("You are elegible for Votting")
})

app.post("/movie", (req, res) => {
    return res.send(`now you are allow for this movie`);
})

app.post("/age", (req, res) => {
    return res.send(`You age is 18+`)
})

app.listen(8000, (req, res) => {
    console.log("Server is running on PORT 8000");
})