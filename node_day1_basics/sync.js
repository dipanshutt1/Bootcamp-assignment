let fs=require('fs');


let syncData=fs.readFileSync('file.txt','utf8');
// console.log(syncData, "lafc");

module.exports={
    syncData
}