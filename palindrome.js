function Palindrome(str) { 
  
  var word = [];
  var h = 0;
  
  for (var j = 0; j<str.length; j++)
  {
    if(str[j] !== " ")
    {
      word[h] = str[j];
      h++;
    }
  }
  
  for (var i = 0; i<word.length; i++)
  {
    if (word[i] !== word[word.length-(i+1)])
    {
      return false;
    }
  }

  // code goes here  
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
