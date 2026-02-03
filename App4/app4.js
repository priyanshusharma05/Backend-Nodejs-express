const express=require('express');
const app=express();
const path=require('path');


app.use(express.urlencoded({extended:true})); // to parse form data in POST request

app.get('/',(req,res)=>{
    res.send("This is Home Page")
})

app.set('view engine','ejs');
app.get('/signup',(req,res)=>{
    res.render('signup.ejs');
})

app.get('/dataform',(req,res)=>{
    console.log(req.query); // to see the form data in the console
    res.send("Form data received successfully !");
})

app.get('/login',(req,res)=>{
    res.render('login.ejs');
})

app.post('/logindata',(req,res)=>{
    console.log(req.body)
    res.send("Login data received successfully !");
})


app.get(/.*/,(req,res)=>{
    res.send("404 Page Not Found !");
})
const port=3000;
app.listen(port,()=>{
    console.log("APP4 server is running");
})