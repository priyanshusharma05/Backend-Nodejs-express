const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Home Page for App2");
})


// app.get('/product1',(req,res)=>{
//     res.send("ID");
// })
//Dynamic route
app.get('/product/:x',(req,res)=>{
    console.log(req.params); // req.params is used to get the dynamic part of the route
    const productID=req.params.x;
    res.send(`You are viewing product with ID${productID}`);
})

//we use req.query to get the query string parameters from the URL after ?.
const movies = [
    {
        name: "Avanger",
        rating: 9.5
    },
    {
        name: "Batman",
        rating: 8.5
    },
    {
        name: "Dhurandhar",
        rating: 9.0
    }
]

app.get('/getmovies', (req, res) =>{
    console.log(req.query);
    let name = req.query.name;
    console.log(name);

    let movieData = movies.find((item) => item.name==name);
    if(movieData){
        res.json(movieData);
    }else{
        res.send("Movie not found");
    }
    //res.send(movieData);
});

app.get('/getdata',(req,res)=>{
    console.log(req.query);
    res.send("OK");
})

app.get(/.*/,(req,res)=>{
    res.send("Page Not Found");
})
const port = 4000;
app.listen(port, ()=>{
    console.log("server is running at port number",port);
});