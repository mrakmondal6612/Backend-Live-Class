// Create a HTTP Server with some end-points.
// create Home Route (/) to show a outputs "This is Home Route".
// Create Route, thats gives a inputs and return output (response) to the clint
//    -> Name & Age (as a input) || Outputs : Hi, I am Ajay Mondal, and I am 18 year's old.
const express = require('express');
const app = express();
const PORT = 5005;

// create Home Route (/) to show a outputs "This is Home Route".
app.get('/', (req, res) => {
  res.send('This is Home Route');
});

// Create a HTTP Server with some end-points.
app.post('/hii', (req, res) => {
  res.send('Hello Ajay');
});

app.get('/Hello', (req, res) => {
  res.send('hello Ankan');
});

//-> Name & Age (as a input) || Outputs : Hi, I am Ajay Mondal, and I am 18 year's old.
app.get('/personalInfo', (req, res) => {
  const { name, age } = req.query;
  res.send(`hii I Am ${name},and I am ${age} years old`);
});
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
