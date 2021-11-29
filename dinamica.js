const arrayIdades = [23, 32, 17, 16, 34];
const arrayIdades2 = [23, 32, 27, 46, 34];

// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function maiorTrue(idade){
  let result = idade.every((element) => element >= 18);
  console.log(result);
  if (result) {
    console.log('Beba tryberr');
  } else {
    console.log('chocolate');
  }
} 
maiorTrue(arrayIdades);
