const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");


function convertValues() {
    // Seleciona o valor do input
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    
    // Valor do dólar e euro fictício
    const dolarToday = 5.2;
    const euroToday = 6.2;
    
    // converte o valor de entrada para o formato brasileiro
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);


    if (currencySelect.value == 'dolar'){
        //Se o select estiver selecionado o dólar faça:
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }
    
    if (currencySelect.value == 'euro'){
        //Se o select estiver selecionado o euro faça:
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }



}
// Adiciona o evento de clique ao botão
convertButton.addEventListener("click", convertValues);
