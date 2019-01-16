/*first duplicate in array or first repeatating entry in array **/
function firstDuplicate(arr){
    var counts = {};
    for(var i=0;i<arr.length;i++){
        var num = arr[i];

        if(counts[num] === undefined){
            counts[num] =1;
        }else if( counts[num] == 1){
            counts[num] += 1;
            return num;
        }
    }
    return -1;
}

var a = [2, 1, 3, 5, 3, 2];
var b = [2, 4, 3, 5, 1];
var c = ["apple", "orange", "grape", "orange", "grape"];

console.log(firstDuplicate(a)); // 3
console.log(firstDuplicate(b)); // -1
console.log(firstDuplicate(c)); // orange
