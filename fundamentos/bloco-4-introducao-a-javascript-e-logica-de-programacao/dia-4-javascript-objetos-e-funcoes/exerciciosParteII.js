function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false




  function indiceMaior(numeros) {
    let indiceMaior = 0;
    for(let index = 0; index < numeros.length; index +=1){
        if (numeros[indiceMaior] > numeros[index]){
            indiceMaior = index;
        }
    }
    return indiceMaior;
  }
  
  console.log(indiceMaior([2, 3, 6, 7, 10, 1])); //4


  function indiceMenor (numeros) {
    let indiceMenor = 0;
    for(let index = 0; index < numeros.length; index +=1){
        if (numeros[indiceMenor] < numeros[index]){
            indiceMenor = index;
        }
    }
    return indiceMenor;
  }
  
  console.log(indiceMenor([2, 3, 6, 7, 10, 1])); //5


