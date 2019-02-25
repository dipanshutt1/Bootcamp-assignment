var source={
    name:"deepanshu",
    age:22,
    dept:"mean"
}
var target=[];
function copyProperties(target,source){
    for(prop in source){
        target[prop]=source[prop];
    }
    return target;
}

function printObject(object){
    for(key in object){
        console.log(key + "=" + object[key]);
    }
}