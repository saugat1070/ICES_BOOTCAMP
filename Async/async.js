 // async and sync
 
 async function introduction(){
     return setTimeout(() => {
         return "Hello, I am an asynchronous function.";
     }, 2000);
    //  return "This is the introduction function.";
 }
// await
 const intro = await introduction();
 console.log(intro); // Promise<void>(resolve,reject)

