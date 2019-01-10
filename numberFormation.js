
const makeUniqPermutations = (size, options) => {
    if (size > options.length) {
        throw new Error('Cannot make uniq permutations with that size and options');
    }

    if (size === 0) {
	return [''];
    }

    const permutations = options.reduce((acc, option, index) => {
	const restSize = size - 1;

        const restOptions = [
            ...options.slice(0, index),
            ...options.slice(index + 1),
        ];

	const restPermutations = makeUniqPermutations(restSize, restOptions);
	const newPermutations = restPermutations.map(permutation => `${option}${permutation}`);

	return [...acc, ...newPermutations];
    }, [])

    return permutations;
}

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 4;

console.log(makeUniqPermutations(size, options));

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

