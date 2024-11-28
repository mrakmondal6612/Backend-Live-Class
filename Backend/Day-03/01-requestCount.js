const express = require('express');
const PORT = 8080;
const app = express();

let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
    console.log("HI");
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function (req, res) {
    res.status(200).json({ requestCount });
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`)
})
