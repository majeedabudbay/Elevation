var a = [4, 6, 2, 7, 8, 2];

var m = a[0];

var i = 0;
for(i; i < a.length ; i++){
  if(a[i] > m){
    m = a[i];
  }
}

console.log(m);

