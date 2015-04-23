function LetterChanges(str) { 
  
  var word = [];
  
  for (var i = 0; i < str.length; i++)
  {
    word[i] = str[i];
  }
  
  for (var j = 0; j < word.length; j++)
  {
    if (word[j].match(/[a-zA-Z]/i))
    {
      word[j] = String.fromCharCode(word[j].charCodeAt(0)+1);
    }
    
    if (word[j]=='{' || word[j]=='[') 
    {
      word[j] = 'a';
    }
    
    if (word[j].match(/[a,e,i,o,u]/i))
    {
      word[j] = word[j].toUpperCase();
    }
  }
  

  // code goes here  
  return word.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
