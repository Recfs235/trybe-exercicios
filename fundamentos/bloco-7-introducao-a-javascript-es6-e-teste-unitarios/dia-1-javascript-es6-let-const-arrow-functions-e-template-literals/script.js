const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercicio 2
console.log("Exercicio 2");
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let numero of oddsAndEvens){
  
}
console.log(oddsAndEvens);
//oddsAndEvens.sort();
//console.log(oddsAndEvens);

// const ordenado = Array => {
//   const desordenado = Array;
//   for (let index = 0; index < desordenado.length; index += 1) {
//     if (desordenado[index] <= desordenado [index+1]){
//       ordenado.push(desordenado[index]);
//     }
//   }
// }

// ordenado(oddsAndEvens);

// console.log(`Os numeros ${ordenado} se encontram ordenados de forma crescente!`);
