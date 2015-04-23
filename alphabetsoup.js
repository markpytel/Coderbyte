function AlphabetSoup(str) { 
  
  var word = [];
  var t;
  
  for (var i = 0; i<str.length; i++)
  {
    word[i] = str[i];
  }
  
  for (var j = 0; j<str.length-1; j++)
  {
    for (var h = 0; h<str.length-1; h++)
    {
      if (word[h].charCodeAt() > word[h+1].charCodeAt())
          {
          t = word[h];
          word[h] = word[h+1];
          word[h+1] = t;
          }
    }
  }

  // code goes here  
  return word.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
