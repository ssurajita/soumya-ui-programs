function countNoOfEachCharInString(str){
    var obj = {};
    var arr = str.split("");
    for(var i=0;i<arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
          obj[arr[i]] += 1;
        }else{
          obj[arr[i]] = 1;
        }
    }
    console.log(obj);
}
