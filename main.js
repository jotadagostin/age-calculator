// - View an age in years, months, and days after submitting a valid date through the form
// - Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The date is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
// - **Bonus**: See the age numbers animate to their final number when the form is submitted

// [] Get all the dates(day, month and year.) and its wrong show a menssage error:

const day = document.getElementById("fday");
const month = document.getElementById("fmonth");
const year = document.getElementById("fyear");

// function validarData() {
//     // Obter valores do formulário
//     const dia = parseInt(document.getElementById('dia').value, 10);
//     const mes = parseInt(document.getElementById('mes').value, 10);
//     const ano = parseInt(document.getElementById('ano').value, 10);

//     // Verificar se o dia, mês e ano são válidos
//     if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900) {
//         // Exibir mensagem de erro
//         exibirErro("Por favor, insira uma data válida.");
//         return false;
//     }

//     // Outras verificações podem ser adicionadas conforme necessário

//     // Se tudo estiver válido, retornar true
//     return true;
// }

// function exibirErro(mensagem) {
//     // Exibir mensagem de erro abaixo dos campos de entrada
//     const mensagemErro = document.getElementById('mensagemErro');
//     mensagemErro.textContent = mensagem;
// }

// <!-- Seus campos de entrada -->
// Dia: <input type="text" id="dia"> Mês: <input type="text" id="mes"> Ano: <input type="text" id="ano">

// <!-- Elemento para exibir mensagens de erro -->
// <p id="mensagemErro" style="color: red;"></p>

// <!-- Botão para acionar a validação -->
// <button onclick="validarData()">Verificar Data</button>

// finarlizar button html5

// https://chat.openai.com/share/4f350b80-2f6e-493e-8b85-611a85f1b04d