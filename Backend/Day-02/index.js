const express = require("express");
const app = express();
const PORT = 8000;

const AuthMiddleware = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "ajay@gmail.com" || password != "123") {
        return res.status(403).json({
            msg: "invalid user"
        });
    }
    next();

};

// app.use(AuthMiddleware);

app.get("/", (req, res) => {
    res.send("<h2>Home!</h2>");
});

app.get("/health-checkup",AuthMiddleware, (req, res) => {

    // kidney-checkup...
    const Kidneys = req.query.kidney;
    if (Kidneys != 1 && Kidneys != 2) {
        return res.status(401).json({ msg: "wromg input ! " });
    }

    res.send("<h3>Your Health is Fine ! </h3>");
});



app.get("/user",AuthMiddleware,(req, res) => {
    res.send("<h2>Wellecome Back Sir !</h2>");
});

app.get("/kidney-checkup", (req, res) => {

    // kidney-checkup...
    const Kidneys = req.query.kidney;
    if (Kidneys == 1 || Kidneys == 2) {
        res.send("<h3>Your Kidneys is Fine ! </h3>");
    } else {
        res.status(401).json({ msg: "wromg input ! " });
    }

});





app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`)
})