const express = require('express');
const app = express();

app.use('/assets',express.static('assets'));

app.get('/',(req,res)=>{
    res.send('this is the homepage');
});

app.get('/contact',(req,res)=>{
    res.send('this is the contact page');
});

app.get('/profile/:name',(req,res) => {
    res.send('You requested to see a profile with the id of ' + req.params.name);
});

app.listen(3000,() => {
    console.log("Server Start!");
});