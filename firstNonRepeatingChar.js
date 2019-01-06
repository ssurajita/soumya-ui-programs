/** Given a string, find its first non-repeating character **/

var str = geeksforgeeks;
var obj = {};
var arr = str.split("");
function firstNonRepeatingChar(str){
  count =1;
  for(var i=0; i< arr.length; i++){
    if(obj.hasOwnProperty(arr[i])){
      obj[arr[i]] = count + 1;
    }else{
      obj[arr[i]] = count;
    }
  }

 for (let key in obj){
  if(obj[key] == 1){
    return key;
  }
 }
}

firstNonRepeatingChar(str);
