'use strict';

const Express=require('express');
const PORT=3010;
const app=Express();

// app.get('/',(req,res)=>{
//     res.send('hello everyone');
// })
const router=require('./router');
app.use('/static',Express.static('views'))

app.listen(PORT,()=>{
    console.log('server started at',PORT);
});



