var source={
    name:"deepanshu",
    age:22,
    dept:"mean"
}
var target=[];
var copy_result= function copyProperties(target,source){
    for(prop in source){
        target[prop]=source[prop];
    }
    // console.log(target);
    return target;
}
for(prop in target){
    console.log(prop+" : "+target[prop]);
}