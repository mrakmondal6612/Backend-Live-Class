const express = require("express");
const app = express();
app.use(express.json());

const middleware = (req, res, next)=>{
    
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

app.post("/vote", (req, res) => {
    let age = req.body.age;
    if(chacking_age(age)){
        return res.send(`You are ${age} years old, now you are elegible for Votting`)
    } else {
        return res.send(`You are not elegible for Votting`)
    }
    // if (age < 18) {
    //     return res.send(`You are not elegible for Votting`)
    // } else {
    //     return res.send(`You are ${age} years old, now you are elegible for Votting`)
    // }
    // res.send(`This is votting page`)
})

app.post("/movie", (req, res) => {
    let age = req.body.age;

    if (!chacking_age(age)) {
        return res.send(`You are not allow`)
    } else {
        return res.send(`You are ${age} years old, now you are allow for this movie`)
    }
})

app.post("/age", (req, res) => {
    let age = req.body.age;

    if (!chacking_age(age)) {
        return res.send(`less than 18Y`)
    } else {
        return res.send(`You are ${age} years old.`)
    }
})

app.listen(8000, (req, res) => {
    console.log("Server is running on PORT 8000");
})