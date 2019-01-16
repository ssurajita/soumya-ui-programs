function firatDuplicate(str){
    var count ={};
    for(var i=0; i<str.length; i++){
       var val =  str[i];
       if(count[val] == undefined){
        count[val] = 1;
       }else{
        count[val] += 1;
        return val;
       }
    }
    console.log(count);
}

var s = firatDuplicate("qllpsoumyasurajita");    
console.log(s);
