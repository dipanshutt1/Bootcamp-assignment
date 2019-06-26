const express=require('express');
const port=3001;
const mongoose=require('mongoose');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post('/getdata',(req,res)=>{
    console.log(req.data);
    res.send("data recieved");
})
app.listen(port,()=>{
    console.log('server started ');
})
