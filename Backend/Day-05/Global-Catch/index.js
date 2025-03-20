const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

const authentication = (req, res, next)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "ajay" || password != "123") {
        res.json({
            msg: "invalid user"
        })
        return;
    }
    next();
}

app.use(authentication);


app.get("/", (req, res) => {
    res.send("Wellcome to my Hospital !");
})

app.post("/login", (req, res) => {
   
    res.send("Login Succesful ");
    return;
})

app.post("/bp-check", (req, res) => {
    // write your logic here...
    res.send("This is BP Checking Room !");
})

app.post("/kidney-check", (req, res) => {
    // write your logic here...
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    try {

        console.log(kidneyLength);
        return res.send("This is Kidneys checking Room!");
    } catch (err) {
        res.json({
            msg: "Please provide valid inputs"
        })
    }

})

app.post("/eye-check", (req, res) => {
    // write your logic here...
    throw new Error("Somthing error about eye ");
    res.send("This is eye checking room!");
})

app.get("/logout", (req, res) => {
    res.send("Logout Successful !");
})


app.use((err, req, res, next)=>{
    res.status(500).json({
        err: "Internal Server Error"
    })
});

app.listen(PORT, (req, res) => {
    console.log(`Sever is running on PORT ${PORT}`)
})