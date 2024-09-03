// Función principal para cálculos con operaciones matemáticas
function calculate(operation, num1, num2) {
    let result;
    let operationText;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            operationText = `${num1} + ${num2}`;
            break;
        case 'subtract':
            result = num1 - num2;
            operationText = `${num1} - ${num2}`;
            break;
        case 'multiply':
            result = num1 * num2;
            operationText = `${num1} * ${num2}`;
            break;
        case 'divide':
            if (num2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            operationText = `${num1} / ${num2}`;
            break;
    }

    alert(`El resultado fue: ${result}`);
    console.log(`Operación realizada: ${operationText} = ${result}`);
    saveResult(operationText, result);
}

// Función para capturar la entrada del usuario a través de prompt()
function promptCalculate(operation) {
    const num1 = parseFloat(prompt('Ingrese el primer número:'));
    const num2 = parseFloat(prompt('Ingrese el segundo número:'));

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    calculate(operation, num1, num2);
}

// Función para calcular porcentajes
function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(number) || isNaN(percentage)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    const result = (number * percentage) / 100;
    alert(`El resultado fue: ${result}`);
    console.log(`Operación realizada: ${percentage}% de ${number} = ${result}`);
    saveResult(`${percentage}% de ${number}`, result);
}

// Función para calcular IVA sobre un solo importe
function calculateVAT() {
    const amount = parseFloat(document.getElementById('amount').value);
    const vatRate = parseFloat(document.getElementById('vatRate').value);

    if (isNaN(amount) || isNaN(vatRate)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    const result = amount + (amount * vatRate) / 100;
    alert(`El resultado fue: ${result}`);
    console.log(`Operación realizada: IVA de ${vatRate}% sobre ${amount} = ${result}`);
    saveResult(`IVA de ${vatRate}% sobre ${amount}`, result);
}

// Función para calcular IVA sobre una lista de precios
function calculateVATForList() {
    const prices = document.getElementById('prices').value.split(',').map(parseFloat);
    const vatRateList = parseFloat(document.getElementById('vatRateList').value);

    if (prices.some(isNaN) || isNaN(vatRateList)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    const results = prices.map(price => price + (price * vatRateList) / 100);
    alert(`El resultado fue: ${results.join(', ')}`);
    console.log(`Operación realizada: IVA de ${vatRateList}% sobre lista = ${results.join(', ')}`);
    saveResult(`IVA de ${vatRateList}% sobre lista`, results.join(', '));
}

// Función para guardar resultados en localStorage y mostrarlos en la página
function saveResult(operation, result) {
    const savedResults = JSON.parse(localStorage.getItem('results')) || [];
    const newResult = { operation, result };
    savedResults.push(newResult);
    localStorage.setItem('results', JSON.stringify(savedResults));

    const savedResultsDiv = document.getElementById('savedResults');
    const newResultDiv = document.createElement('div');
    newResultDiv.textContent = `${operation} = ${result}`;
    savedResultsDiv.appendChild(newResultDiv);
}

// Función para mostrar u ocultar los resultados guardados
function toggleSavedResults() {
    const savedResultsDiv = document.getElementById('savedResults');
    savedResultsDiv.style.display = savedResultsDiv.style.display === 'none' ? 'block' : 'none';
}
