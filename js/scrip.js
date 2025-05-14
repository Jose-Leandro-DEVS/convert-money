const convertButton = document.querySelector(".convert-button");

// Adiciona o evento de clique ao botão
convertButton.addEventListener("click", convertValues);

function convertValues() {
    // Seleciona o valor do input
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    // Valor do dólar
    const dolarToday = 5.2;

    // Calcula o valor convertido
    const convertedValue = inputCurrencyValue / dolarToday;

    // Exibe o valor convertido no console
    console.log(convertedValue);
}
