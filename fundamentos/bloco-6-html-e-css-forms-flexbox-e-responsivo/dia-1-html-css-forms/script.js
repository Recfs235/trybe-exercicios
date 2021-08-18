// Data de início - Texto
// Verificar o formato da data dd/mm/aaaa .
// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
// Campo obrigatório

// Logo abaixo do formulário, crie um botão que:
// Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
// Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
// Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
// Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

const botaoEnviar = document.getElementById('botaoEnviar'); // Botão
const botaoLimpar = document.getElementById('botaoLimpar'); // Botão

const lista = document.getElementById('estado'); // Lista
let arrayEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']; // Estados
let arrayEstadosValores = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']; // Estados

function criarOption() {
  for(let index = 0; index < arrayEstados.length; index += 1) {
    let novoOption = document.createElement('option');
    lista.appendChild(novoOption).innerText = arrayEstados[index];
    lista.appendChild(novoOption).value = arrayEstadosValores[index];
  }
}

criarOption();

const dataInicio = document.getElementById('input-datainicio'); // Recebendo a data de inicio

