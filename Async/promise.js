
const coffeMachine = new Promise((resolve, reject) => {
    console.log("coffee machine is preparing your coffee");
    const everythingGood = true;
    setTimeout(()=>{  // Task Queue
        if(everythingGood){
            resolve("coffee is ready");
        }else{
            reject("something went wrong");
        }
    },5000) // excute after 5 seconds
}); // MicroTask Queue

function wrcCaffe(){
  console.log("bla bla");
  coffeMachine.then((coffe)=>{
      console.log(coffe);
  }).catch((problem) => {
    console.log(problem);
  })
}

wrcCaffe(); // method  callstack


// callstack
// MicroTask Queue
// Task Queue
