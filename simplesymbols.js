function SimpleSymbols(str) { 
  
  var truth = true;
  
  for (var i = 0; i<str.length; i++)
  {
    if (str[i].match(/[A-Za-z]/))
    {
      if (i === 0 || i === str.length-1)
      {
        truth = false;
      }
      else if (str[i-1] !== '+' || str[i+1] !== '+')
      {
        truth = false;
      }
    }
  }
  

  // code goes here  
  return truth; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
