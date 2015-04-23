function ABCheck(str) { 
  
  for (var i = 0 ; i < str.length-4 ; i++)
  {
    if (str[i].match(/[abAB]/))
    {
      if (str[i+4].match(/[abAB]/))
      {
        return true;
      }
    }
  }

  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
