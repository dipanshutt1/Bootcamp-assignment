const http=require('http');
const port=8000;
const hostname='127.0.0.1';
const fs=require('fs');
const url=require('url');
const users=require('./userDetails.json');

function getUserNames(pathObj,res){
    let queryString=pathObj.query;
    if(queryString.username.length>3){
        res.setHeader('Content-Type','application/json');
        var filteredNames=users.list.filter((user)=>user.username.startsWith(queryString.username))
        res.end(JSON.stringify(filteredNames));
    }
    else{
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(users.list))
    }
}

var server=http.createServer(function(req,res){
    let pathObj=url.parse(req.url,true);
    console.log('hello',pathObj);
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Request-Method','*');

    switch(pathObj.pathname){
        case '/users':
        if(req.method==='GET'){
            getUserNames(pathObj,res);
        }
        break;
    }
	else{
		res.end(JSON.stringify(users.list))
	}
server.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);

});
