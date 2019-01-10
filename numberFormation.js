https://stackoverflow.com/questions/49652068/creating-an-array-of-all-unique-4-digit-numbers-that-can-be-made-from-the-number
/* function factorial(len) 
{ 
    var fact = 1; 
    if (len == 0 || len == 1) 
        return 1; 
    for (let i = 2; i <= len; i++) 
       fact *= i; 
       console.log(fact);
    return fact; 
} 

function numberFormation(arr,len){
  var fact = factorial(len);
  var sum =0;
  for(let i=0; i< len; i++){
    sum += arr[i];
  }
   sum *= (fact / len); 
   var output = 0; 
   for (var i = 1, j = 1; i <= len; i++){ 
        output += (j * sum); 
        j *= 10; 
   }   
    return output; 
} */
  function possibleCombinators(str){
          var i, j, result = [];
          for (i = 0; i < str.length; i++) {
            for (j = i + 1; j < str.length + 1; j++) {
               result.push(str.slice(i, j));
            }
          }
         alert(result);
  }


possibleCombinators("soumya");

https://www.geeksforgeeks.org/sum-numbers-can-formed-permutations-n-digits/

