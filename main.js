// Declaración de variables y constantes
const resultDiv = document.getElementById('result'); // Referencia al div donde se mostrarán los resultados

// Funciones de la calculadora

// Función para realizar operaciones básicas
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value); // Obtener el primer número
    const num2 = parseFloat(document.getElementById('num2').value); // Obtener el segundo número
    let result;

    // Determinar la operación a realizar
    switch (operation) {
        case 'add':
            result = num1 + num2; // Suma
            break;
        case 'subtract':
            result = num1 - num2; // Resta
            break;
        case 'multiply':
            result = num1 * num2; // Multiplicación
            break;
        case 'divide':
            result = num1 / num2; // División
            break;
    }

    displayResult(`El resultado de la operación es: ${result}`); // Mostrar el resultado
}

// Función para calcular el porcentaje
function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value); // Obtener el número
    const percentage = parseFloat(document.getElementById('percentage').value); // Obtener el porcentaje
    const percentageValue = (number * percentage) / 100; // Calcular el valor del porcentaje
    const finalValue = number - percentageValue; // Calcular el valor final después de restar el porcentaje

    displayResult(`El ${percentage}% de ${number} es: ${percentageValue}. El valor final después de restar el porcentaje es: ${finalValue}`); // Mostrar el resultado
}

// Función para calcular el IVA
function calculateVAT() {
    const amount = parseFloat(document.getElementById('amount').value); // Obtener el importe
    const vatRate = parseFloat(document.getElementById('vatRate').value); // Obtener el porcentaje de IVA
    const vatValue = (amount * vatRate) / 100; // Calcular el valor del IVA
    const totalValue = amount + vatValue; // Calcular el valor total con IVA incluido

    displayResult(`El ${vatRate}% de IVA sobre ${amount} es: ${vatValue}. El valor total con IVA incluido es: ${totalValue}`); // Mostrar el resultado
}

// Función para mostrar los resultados
function displayResult(message) {
    resultDiv.innerText = message; // Mostrar el mensaje en el div de resultado
    console.log(message); // Mostrar el mensaje en la consola
    alert(message); // Mostrar el mensaje en una alerta
}
