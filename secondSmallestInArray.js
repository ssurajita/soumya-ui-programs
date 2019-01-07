/** find second smallest from array with O(n) **/

function secondSmallest(arr){
  var smallest = arr[0];
  var smallest2 = arr[0];
  for(var i=1;i<arr.length;i++){
    if(arr[i] < smallest2){
       if(arr[i] < smallest){
          smallest = arr[i];
       }else{
          smallest2 = arr[i]
       }
    }
  }
  console.log(smallest,smallest2);
}


secondSmallest([10,2,5,4,7,9,3,0]);
