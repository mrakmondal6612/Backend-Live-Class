const express = require("express");
const app = express();
const zod = require("zod");
const PORT = 8000;

const UserSchema = zod.string().email();
const passSchema = zod.string().min(6);

const AuthMiddleware = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const userRes = UserSchema.safeParse(username);
    const pasRes = passSchema.safeParse(password)
    if(!(userRes.success) || !(pasRes.success) ){
        return res.status(403).json({msg:"user invalid"})
    }

    // if (username != "ajay@gmail.com" || password != "123") {
    //     return res.status(403).json({
    //         msg: "invalid user"
    //     });
    // }
    next();

};

const KidneyMiddleware = (req, res, next) => {
    const Kidneys = req.query.kidney;
    if (Kidneys != 1 && Kidneys != 2) {
        return res.status(401).json({ msg: "wromg input ! " });
    }
    next();
}

app.use(AuthMiddleware);

app.get("/user", (req, res) => {
    res.send("<h2>Wellecome Back Sir !</h2>");
});

// app.get("/kidney-checkup", KidneyMiddleware, (req, res) => {

//     res.send("<h3>Your Kidneys is Fine ! </h3>");

// });

// app.get("/health-checkup", KidneyMiddleware, (req, res) => {

//     res.send("<h3>Your Health is Fine ! </h3>");
// });


app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`)
})