var app = {


aritGeo:function(arr) {
  var seq1 = arr[1] - arr[0];
  var seq2 = arr[1]/arr[0];
  var arit = true;
  var geom =  true;

for (var i = 0; i < arr.length - 1; i++){
  if (arr[i+1] - arr[i] !== seq1)
    arit = false;
  if (arr[i +1]/seq2 !== arr[i])
      geom = false;
}
if (arr.length === 0) {
   return 0;
}
else if (arit === true) {
   return 'Arithmetic';
}
else if (geom === true) {
  return "Geometric";
}
else
  return -1;
}

}
module.exports = app;