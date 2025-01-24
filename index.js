const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());



app.get('/' , (req , res) => {
    res.send('hello this is zubair love me more than i do');
});
app.get('/get' , (req , res) => {
    res.send('hello this is from more data thanks bro nice to see');
})

app.listen(port , ()=>{
    console.log(`hello this is me and this is my serve and port ${port}`)
})