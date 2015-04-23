function ExOh(str) { 
  
  var xcount = 0;
  var ocount = 0;
  
  for (var i = 0; i < str.length; i++)
  {
    if (str[i].match(/x/i))
    {
      xcount++;
    }
    
    if (str[i].match(/o/i))
    {
      ocount++;
    }    
  }
  
  if (xcount === ocount)
  {
    return true;
  }

  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
