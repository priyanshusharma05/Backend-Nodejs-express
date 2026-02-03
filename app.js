const express = require('express'); // intialzing express module (fist 3 lines are as it is in documentation)
const app=express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("this is my first express app");
})
// / means home route after whatever user writes it will redirect to that route if it is handled
//  if not than universal route will be executed
// in route we can send desired content like html and other things
app.get('/about',(req,res)=>{
    res.send("This is about section");
})

app.get('/contact',(req,res)=>{
    res.send("This is my email xxx@yahoo.com");
})

app.get('/cat',(req,res)=>{
    res.send("Meow Meow");
})

app.get('/cat',(req,res)=>{
    res.send("Meow Meow2");
})

// if we write two same route the frirst one in the code will be executed as in above code 1st meowww
//  is running

// follwing code works for express version 4.
// app.get('*',(req,res)=>{
//     res.send("404 error! page not found");
// })

app.get(/.*/,(req,res)=>{
    res.send("404 error! page not found");
})


app.listen(4000, ()=>{
    console.log(`server is running at port number ${port}`);
});

// always import node modules in main directory. like in this in backend 


