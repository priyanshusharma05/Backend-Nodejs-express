const express= require('express');
const app=express();
const methodoverride = require('method-override');
const path=require('path');
app.set('view engine', 'ejs');

app.use(methodoverride('_method'));
app.use(express.urlencoded({extended:true})); // to parse form data

const users=require('./data/users'); // Importing the users data

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/users',(req,res)=>{
    res.render('users.ejs',{users});
})

app.get('/users/newuser',(req,res)=>{
    res.render('newuser.ejs');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {name, age, password, city} = req.body;
    users.push({
        id:users[users.length -1].id +1,
        name:name,
        age:age,
        password:password,
        city:city
    })
    console.log()
    res.redirect('/users');
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const userid=req.params.id;
    const user = users.find(item => item.id == userid);
    if(user){
        res.render('userdetails.ejs',{user});
    }else{
        res.send("User not found");
    }
})

app.get('/users/:id/edit',(req,res)=>{
    const userid=req.params.id;
    const user = users.find(item => item.id == userid);
    res.render('edituser.ejs',{user});
})

app.get('/users/:id/delete',(req,res)=>{
    const userid=req.params.id;
    const userIndex = users.findIndex(item => item.id == userid);
    if(userIndex !== -1){
        users.splice(userIndex, 1);
    }
    res.redirect('/users');
})

app.post('/editusers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, password, city } = req.body;
  
    const user = users.find(u => u.id === id);

    if(user){
        user.name = name;
        user.age = age;
        user.password = password;
        user.city = city;
    }

    res.redirect('/users');
});

const port =5000;
app.listen(port,()=>{
    console.log("RestAPI server is running");
})