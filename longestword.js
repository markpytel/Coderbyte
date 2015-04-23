function LongestWord(sen) { 
  
  var word = sen.split(/[^A-Za-z]/);
  var longest = 0;
  var longword = null;
  
  for (var i = 0; i < word.length; i++)
  {
    if (word[i].length > longest)
    {
      longest = word[i].length;
      longword = word[i];
    }
  }

  // code goes here  
  return longword; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
