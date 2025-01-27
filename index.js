const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());


const data = [
    {id:1, name:'zubi',email:'hello@gmail.com'},
    {id:2 , name:'mex',email:'max@gmail.com'},
    {id:3 , name:'mel',email:'melo@gmail.com'},
    {id:4, name:'kan',email:'kan@gmail.com'}
]

app.get('/' , (req , res) => {
    res.send('hello this is zubair love me more than i do');
});
app.get('/get' , (req , res) => {
    res.send('hello this is from more data thanks bro nice to see');
});

app.get('/data' , (req , res) =>{
    res.send(data);
});

app.post('/data' , (req , res) =>{
 console.log('get the data');
 console.log(req.body);
 const newUser = req.body;
 newUser.id = data.length + 1 ;
 data.push(newUser);
 res.send(newUser);

});

app.listen(port , ()=>{
    console.log(`hello this is me and this is my serve and port ${port}`)
})