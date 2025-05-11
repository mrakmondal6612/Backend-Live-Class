const express = require("express");
const zod = require('zod');
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 8080;
const JWT_Pass = "xyz159";

const ALL_USER = [
    {
        username: "aja@gmail.com",
        password: "123456",
        name: "Aja Mondal"
    },
    {
        username: "ajay@gmail.com",
        password: "Ajay123",
        name: "Ajay Mondal"
    },
    {
        username: "raja@gmail.com",
        password: "Raja123",
        name: "Raja"
    }
];

const emailSchema = zod.string().email();
const passSchema = zod.string().min(6);

function singJWT (username, password){
    const usernameRes = emailSchema.safeParse(username);
    const passwordRes = passSchema.safeParse(password);
    if(!usernameRes.success || !passwordRes.success) return null;
    const token = "";
    try{
        token = jwt.sign({username}, JWT_Pass);
    } catch(err){
        console.log(err);
        return null;
    }
    
    return token;
}


app.use(express.json());

app.use("/", (req, res)=>{
    res.send("Wellcome...!");
})

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const token = singJWT(username, password);
    console.log(token)
    res.status(200).json({
        token
    })
})


app.listen(PORT,(req, res)=>{
    console.log(`server is running on ${PORT}`)
})