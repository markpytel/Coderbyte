function LetterCapitalize(str) { 
  
  var word = [];
  var prevelem = [];
  
  for (var i = 0; i<str.length; i++)
  {
    word[i] = str[i];
  }
  
  for (var j = 0; j<word.length; j++)
  {
    if (prevelem[j-1] === " " || j === 0)
    {
      word[j] = word[j].toUpperCase();
    }
    prevelem[j] = word[j];
  }

  // code goes here  
  return word.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
