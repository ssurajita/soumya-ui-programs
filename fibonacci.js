
var fib = [0,1];

for(var i=fib.length; i< 10; i++){
  fib[i] = fib[i-1]+fib[i-2];
}

console.log(fib); 
