require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res)=>{
    res.send('Hello world!😊');
})

app.get('/twitter', (req,res)=>{
    res.send('baazshah');
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res)=>{
    res.json({username:"baazshah"})
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})

// deploy sites -> digital ocean, heroku, railway, seenode, render, cyclic.sh, 