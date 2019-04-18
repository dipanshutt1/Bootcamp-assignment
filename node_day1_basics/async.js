let fs=require('fs');

 let async=()=>
{
    fs.readFile('file.txt', 'utf8', function (err, content) {
        if (err) {
            console.log(err, "err");
        }
        console.log(content, "content");
    })

}
module.exports={
     async
}
// console.log('Asynchronous file read');
