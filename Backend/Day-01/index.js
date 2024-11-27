const express = require("express");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
    let a;
console.log(a.length)
    res.json({
        msg: "This is Home Route"
    });
})

// Input validation check 
app.post("/nameList", (req, res) => {
    
    const name = req.body.name;
    console.log(name.length);
    res.send({
        msg: `totlal Members in this website are ${name.length}`
    });

})

app.use((err, req, res, next) => {
    res.status(500).json({
        msg: err,
    });
});


app.listen(8001, (req, res) => {
    console.log("Server is running on port 8001");
});