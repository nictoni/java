


document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.querySelector(".convert-button");

    function convertValues() {
        const celsiusInput = document.querySelector(".celsius-input");
        const celsiusValue = parseFloat(celsiusInput.value);

        if (!isNaN(celsiusValue)) {
            const temperaturaFahrenheit = (celsiusValue * 9/5) + 32;
            document.querySelector(".fahrenheit-result input").value = temperaturaFahrenheit.toFixed(1);
        } else {
            alert("Por favor, insira um valor numérico válido para Celsius.");
        }
    }

    convertButton.addEventListener("click", convertValues);
});


