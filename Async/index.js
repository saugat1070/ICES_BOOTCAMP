// Async Programming
 

// Promise

const instanceOfPromise = new Promise((resolve,reject)=>{
    const condition = true;
    if(condition){
        resolve("task done successfully");
    }else{
        reject("task is rejected");
    }
});
// resolve value --> then()
// reject value --> catch()
instanceOfPromise.then((storeResolvedValue)=>{
    console.log(storeResolvedValue);
}) //