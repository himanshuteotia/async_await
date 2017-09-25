

async function start() {
   var name =  await Hello();
   console.log("Hello : ",name);
}
var Hello = function () {
    return Promise.resolve("Himanshu Teotia");
}
start();


