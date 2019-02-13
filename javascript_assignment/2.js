var str=prompt('enter the string to be checked in');
var len=str.length;
var rev=[];
for (let i=len-1;i>=0;i--){
    rev+=str[i];
}
if(rev==str){
    alert(str+' string is palindrome');
}
else{
    alert(str+' string is not palindrome');
}