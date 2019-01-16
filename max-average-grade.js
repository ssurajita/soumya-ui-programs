function findMaxAverage(arr){
    var students=[]; 
    var counter=[];
    var scoreSums=[];
    var name, i=0;
    for(var ele in arr) {
      name = arr[ele][0];
      j = students.indexOf(name);
      console.log(j)
      if(j < 0) {
        students[i] = name;
        counter[i] = 1;
        scoreSums[i] = parseInt(arr[ele][1]);
        i++;
      } else {
        scoreSums[j] += parseInt(arr[ele][1]); 
        counter[j]++;
      }
    }
    
    console.log(students,counter,scoreSums)
    var maxMean = 0, mean;
    for(i=0; i<students.length; i++) {
      mean = scoreSums[i] / counter[i];
      if(mean > maxMean) {
        name = students[i];
        maxMean = mean;
      }
    }

    return {name,maxMean}
   } 

    var arr = [
        ["Bobby","87"],
        ["Charles","100"],
        ["Eric","200"],
        ["Charles","22"],
        ["Charles","37"],
        ["Eric","49"]];
        
    var obj = findMaxAverage(arr);
    console.log(obj.name, obj.maxMean);


