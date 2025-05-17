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


    if (currencySelect.value == 'dolar') {
        //Se o select estiver selecionado o dólar faça:
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == 'euro') {
        //Se o select estiver selecionado o euro faça:
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    // Se o select estiver selecionado o dólar faça: irá trocar a imagem e o nome do dólar
    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano';
        currencyImg.src = "./assets/dolar.png";

    }

    // Se o select estiver selecionado o euro faça: irá trocar a imagem e o nome do euro
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = "./assets/euro.png";
    }

    // Chama a função convertValues para atualizar os valores convertidos
    convertValues();

}
// Adiciona o evento de mudança de seleção ao select
currencySelect.addEventListener("change", changeCurrency);

// Adiciona o evento de clique ao botão
convertButton.addEventListener("click", convertValues);
