function bubblesort(arr){
  for(var i=0;i<arr.length; i++){
    for(var j=0;stop=arr.length-1,j<stop;j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1);
      }
    }
  }
return arr;
}

function swap(arr,firstIndex,secondIndex){
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

bubblesort([3, 0, 2, 5, -1, 4, 1]);
