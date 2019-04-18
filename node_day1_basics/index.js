let http=require('http');
let fs=require('fs');
let utils=require('./sync');
let asyncUtils=require('./async');


let server= http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text'});
    res.write('hello everyone');
    // console.log(utils);
    // console.log('synchronous file read')
    console.log(asyncUtils.async());
    console.log('asynchronous ')
    res.end();
});

server.listen(6025);