function ArithGeo(arr) {
  
  var arith = [];
  var geo = [];
  var arithcounter = 0;
  var geocounter = 0;
  
  for (var i = 1; i < arr.length; i++)
  {
    arith[i-1] = arr[i] - arr[i-1];
    geo[i-1] = arr[i] / arr[i-1];
  }
  
  for (var j = 1; j < arith.length; j++)
  {
    if (arith[j] === arith[j-1])
    {
      arithcounter++;
    }
    if (geo[j] === geo[j-1])
    {
      geocounter++;
    }
  }
  
  if (arithcounter === arith.length-1)
  {
    return "Arithmetic";
  }
  else if (geocounter === geo.length-1)
  {
    return "Geometric";
  }
  else
  {
  	return -1;
  }

  // code goes here  
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());           
