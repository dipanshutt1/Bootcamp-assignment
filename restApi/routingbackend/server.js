const http=require('http');
const port=8001;
const fs=require('fs');
const url=require('url');

function renderHtml(path,res){
    fs.readFile(path,null,function (error,data) {
        if(error){
            res.writeHead(400);
            res.write('file not found')
        }
        else{
            res.setHeader('Content-Type','text/html');
            res.write(data);
        }
        res.end();
        
    })
}

var server=http.createServer(function(req,res){
let pathObj=url.parse(req.url,true);
console.log('hello',pathObj)

switch(pathObj.pathname){
    case '/':
        renderHtml("./public/index.html",res);
        break;
    case '/home':
        renderHtml("./public/index.html",res);
        break;
    case '/about':
        renderHtml("./public/about.html",res);
        break;
    case '/contact':
        renderHtml("./public/contact.html",res);
        break;
}
}).listen(port);