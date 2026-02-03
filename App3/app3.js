const express=require('express');
const app=express();
const path=require('path');


app.use(express.static(path.join(__dirname,'public'))); //to send external css and js files to frontend

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send("Home page of App3");
})

const loc=path.join(__dirname,'about.html');
app.get('/about',(req,res)=>{
    res.sendFile(loc);
})

//ejs rendering
app.get('/profile',(req,res)=>{
    res.render('profile.ejs');
})


app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
})


//sending data along with ejs files
const todos=['coding','reading','exercising'];
app.get('/todos',(req,res)=>{
    res.render('todos.ejs',{todos});
})


app.get(/.*/,(req,res)=>{
    res.send("Page Not Found !")
})

const port=4000;
app.listen(port,()=>{
    console.log("Server is running at: ",port);
})