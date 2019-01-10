function getNthUglyNo(n){
    ugly = [];
    ugly[0] =1;
    let u2 = 0;
    let u3 = 0;
    let u5 = 0;
    let nextMulti2 = 2;
    let nextMulti3 = 3;
    let nextMulti5 = 5;
    let nextUgly = 1;
 
    for(let i=1; i< n; i++){
        nextUgly = Math.min(nextMulti2 ,nextMulti3 ,nextMulti5 );
        ugly[i] = nextUgly ;
        if(nextUgly == nextMulti2){ u2++; nextMulti2  = ugly[u2]*2; }
        if(nextUgly == nextMulti3){ u3++; nextMulti3  = ugly[u3]*3; }
        if(nextUgly == nextMulti5){ u5++; nextMulti5  = ugly[u5]*5; }
    }console.log(ugly);
    return nextUgly;
}
 
 getNthUglyNo(7);//8
 getNthUglyNo(12);//16
