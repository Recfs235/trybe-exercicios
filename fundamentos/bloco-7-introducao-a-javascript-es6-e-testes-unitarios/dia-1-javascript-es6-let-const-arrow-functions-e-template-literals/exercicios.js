console.log('Parte I');

const testingScope = escopo => {
  if (escopo === true) {
    const ifScope = `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

  testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

console.log('Parte II');

const factorialNumber = number => {
  let mult = 1;
  for (let index = 2; index <= number; index +=1) {
    mult *= index;
  }
  return mult;
};
console.log(factorialNumber(5));

const longestWord = phrase => {
  let wordArray = phrase.split(" ");
  let maxLength = 0;
  let result = '';
  
  for (const word of wordArray){
    if (word.length > maxLength){
      maxLength = word.length;
      result = word;
    }
  }
  return result;
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

