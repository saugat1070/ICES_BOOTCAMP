// list (array)

const result = [["Student 1", "Student 2", "Student 3"], ["Teacher 1", "Teacher 2", "Teacher 3"]]; // index [0,1]
const [studentList, teacherList] = result; // [0,1]
// console.log(studentList); // ["Student 1", "Student 2", "Student 3"]
// console.log(teacherList); // ["Teacher 1", "Teacher 2", "Teacher 3"]




// const {electronics,clothing} = storeRoom; // destructuring
// console.log("Electronics:", electronics); // ["TV", "Laptop", "Mobile"]

// Spread operator & Rest operator ...

const listValue = [1,2,3,4,5];
// spread operator 
// listValue.push(6,7,8); // [1,2,3,4,5,6,7,8]
// console.log(listValue); // [1,2,3,4,5,6,7,8]

const newList = [...listValue,6,7,8] // Spread operator [ [] ,6,7,8]
console.log("New List",newList);
console.log("spread operator:",...newList); 

// rest operator
// [1,2,3,4,5,6,7,8]
const [first,second,...rest] = newList; // rest operator


const storeRoom = {
    electronics: ["TV", "Laptop", "Mobile"],
    furniture: ["Chair", "Table", "Sofa"],
    clothing: ["Shirt", "Pants", "Jacket"]
}

// spread operator

const newStoreRoom = {
    ...storeRoom,
    food: ["Bread", "Milk", "Cheese"],
    drinks: ["Water", "Juice", "Tea"]
}