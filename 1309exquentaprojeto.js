// const tempoDeVida = (fightersIdade) => {
//   fightersIdade.sort((fighter1, fighter2) => {
//     return fighter1.age - fighter2.age
//   });
//   const master = fighterIdade[fightersIdade.length -1].name;
//   const pupilo = fighterIdade[0].name;

//   const phrase = `${master} possui maestria. ${pupilo} ainda é um pupilo`;
//   return phrase;
// };
// console.log(tempoDeVida(fighters));

function getOlderAndYounger(people) {
  const older = people.reduce((result, current) => {
    // olderAge é o acumulador
    return result.age < current.age ? current : result
  });
  const younger = people.reduce((result, current) => {
    // olderAge é o acumulador
    return result.age > current.age ? current : result
  });
  return `${older.name} possui maestria. ${younger.name} ainda é um pupilo`;
};

console.log(getOlderAndNewer(fighters));
