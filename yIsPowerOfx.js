function yIsPowerOfx(x,y){
  if(x==1){return y==1; }
  var pow = 1;
  while(pow < y){
    pow *= x;
  }
  return pow == y;
}

yIsPowerOfx(2,128);
