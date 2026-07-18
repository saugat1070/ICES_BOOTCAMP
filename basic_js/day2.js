

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// do{
//     console.log(i);
//     i++;
// } while(i<10);



// let i=1
// while(i == 1){

// }

// Array methods
// 1. push
// 2. pop
// 3. shift
// 4. unshift

// console.log("Initial:",studentList);
// studentList.unshift("mohan")
// console.log("Push:",studentList);

// studentList[2] = "Saugat";
// console.log("Replace:",studentList);

// function sayHello(){
//     console.log("Hello");
// }

// function sayHelloWrc(){
//     return "Hello";
// }

// Other methods
// 1. forEach
// 2. map
// 3. filter
// 4. reduce

// forEach
// studentList.forEach((value)=>{
//     console.log("Value:",value);
// })

//map




const studentList = ["ram","hari","shayam","gopal","laxman"];

function mapValue(value,index){
    //operation\
    return value + " wrc" + "index:" + index;
}

// console.log(mapValue("ram",0));
// console.log(mapValue("hari",1));
// mapValue("shayam",2);

const newStudentList = studentList.map((value,index)=>{
    return value + " wrc" + "index:" + index;
});

// console.log("New List:",newStudentList);

const evenNumber = [1,2,3,4,5,6,7,8,9].filter((value)=>{ // inner function --> return boolean
    return value % 2 == 0;
});
console.log("Even numbers:",evenNumber);

// reduce method

const total = [1,2,3,4,5,6,7,8,9].reduce((total,value)=>{
    return total + value;
},0);

/*
total = 0;
total = total + value
total = 0 + 1 = 1
total = 0 + 1 + 2 = 3

*/

// reduce(innerFunction(total,value),initialValue) --> total = initialValue
console.log("Total:",total);


// Object

const student = {
    name:"Saugat", // attributes
    age:22,
    address:"Kathmandu",
    greet: ()=>{
        console.log(`Hello ${student.name}`);
    }, // method 
}
student.greet();
console.log(student.name);
