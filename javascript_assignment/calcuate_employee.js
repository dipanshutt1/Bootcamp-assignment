// employee_details.forEach(function (emp){
//     console.log(emp);
// })

// var salary_emp=employee_details.filter(function(emp){
//     return emp.salary>5000;
// })

// for(let i=0;i<salary_emp.length;i++){
//     console.log(salary_emp[i]);
// }
// // console.log("");


// var update_salary=employee_details.map(function(emp_sal){
//     if(emp_sal.salary>1000 && emp_sal.age>20){
//         emp_sal.salary*=5;
//     }
//     return emp_sal;
// })

// update_salary.forEach(function(emp_sal){
//     console.log(emp_sal);
// })    


var gp_10_20=[];
var gp_20_30=[];
var gp_30_40=[];

var emp_group=employee_details.filter(function(emp1){
    if(emp1.age>10 && emp1.age<20){
        gp_10_20.push(emp1);
    }
    else if(emp1.age > 20 && emp1.age < 30){
        gp_20_30.push(emp1);
    }
    else gp_30_40.push(emp1);
});

console.log("employees less than 20 ");
gp_10_20.forEach(function(i){
    console.log(i);
})

console.log("employees less than 30 ");
gp_20_30.forEach(function(i){
    console.log(i);
})

console.log("employees less than 40");
gp_30_40.forEach(function(i){
    console.log(i);
})