

let number1, number2;

// number1/number2
// if(number2 == 0){
//     console.log("Error: Division by zero is not allowed.");
// }else{
//     console.log(number1/number2);
// }

// try/catch --> Error handling
// try{
//    let result = number1/number2;
// }catch(error){
//    console.log(`Error: ${error.message}`);
// }
// finally{

// }

// Promise Combinators

// product list --> await
// orders 

// student list
// Teacher list

// Promise.all(); // study
// Promise.race();
// Promise.allSettled();
// Promise.any();

async function studentList(){
    // return ["Student 1", "Student 2", "Student 3"];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Student 1", "Student 2", "Student 3"]);
        }, 2000);
    });
}

async function teacherList(){
    return ["Teacher 1", "Teacher 2", "Teacher 3"];
}

const result = await Promise.all([studentList(), teacherList()]);
console.log(result); [ [], [] ] 
