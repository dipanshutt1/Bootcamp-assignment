const Express =require('express');
const port=8000;
const app=Express();
const userDetails=require('./user');

app.listen(port,()=>{
    console.log('server started')
});
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/adduser',(req,res)=>{
    res.render('addUser');
})