let element=document.querySelectorAll('li');
let empty_array=[];
element.forEach((i)=>{
    empty_array.push(i);

})

let que2=empty_array.filter((j)=>{
   if(j.innerText.includes('Flexbox')) return j.innerText; 
})
console.log(que2);