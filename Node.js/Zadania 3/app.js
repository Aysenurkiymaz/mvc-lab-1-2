const http = require("http");

const express = require('express');
const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
  
const home = require('./views/home');
const student = require('./views/student');
   
app.get('/', (req, res) => {
    res.send(home.renderPage());
});
   
app.get('/student', (req, res) => {
    res.send(student.renderPage());
});



app.use((req, res, next) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

const { handleHome, handleStudent } = require('./routes');

app.get('/', handleHome);
app.get('/student', handleStudent);

app.post('/student', (req, res) => {
    const data = req.body;
    fs.writeFileSync(`${data.code}.txt`, JSON.stringify(data));
    res.redirect('/student');
});