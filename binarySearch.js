
function binarySearch(arr,target){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let mid = left + Math.floor((right-left)/2);
    if(arr[mid] === target){ return mid; }
    if(arr[mid]<target){ left = mid+1; }
    if(arr[mid]>target){ right = mid-1; }
  }
  return -1;
}

binarySearch([1,3,4,6,8,9,10,20],9);
