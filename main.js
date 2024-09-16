// Funciones de cálculo
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    let operationText;

    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Por favor, ingrese números válidos.');
        return;
    }

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
                displayResult('No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            operationText = `${num1} / ${num2}`;
            break;
    }

    displayResult(`El resultado fue: ${result}`);
    saveResult(operationText, result);
}

function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(number) || isNaN(percentage)) {
        displayResult('Por favor, ingrese números válidos.');
        return;
    }

    const result = (number * percentage) / 100;
    displayResult(`El resultado fue: ${result}`);
    saveResult(`${percentage}% de ${number}`, result);
}

function calculateVAT() {
    const amount = parseFloat(document.getElementById('amount').value);
    const vatRate = parseFloat(document.getElementById('vatRate').value);

    if (isNaN(amount) || isNaN(vatRate)) {
        displayResult('Por favor, ingrese números válidos.');
        return;
    }

    const result = amount + (amount * vatRate) / 100;
    displayResult(`El resultado fue: ${result}`);
    saveResult(`IVA de ${vatRate}% sobre ${amount}`, result);
}

function calculateVATForList() {
    const prices = document.getElementById('prices').value.split(',').map(parseFloat);
    const vatRateList = parseFloat(document.getElementById('vatRateList').value);

    if (prices.some(isNaN) || isNaN(vatRateList)) {
        displayResult('Por favor, ingrese números válidos.');
        return;
    }

    const results = prices.map(price => price + (price * vatRateList) / 100);
    displayResult(`El resultado fue: ${results.join(', ')}`);
    saveResult(`IVA de ${vatRateList}% sobre lista`, results.join(', '));
}

// Guardar resultados en localStorage
function saveResult(operation, result) {
    const savedResults = JSON.parse(localStorage.getItem('results')) || [];
    savedResults.push(`${operation} = ${result}`);
    localStorage.setItem('results', JSON.stringify(savedResults));
    updateSavedResults();
}

function updateSavedResults() {
    const savedResults = JSON.parse(localStorage.getItem('results')) || [];
    const savedResultsDiv = document.getElementById('savedResults');
    savedResultsDiv.innerHTML = '';
    savedResults.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = result;
        savedResultsDiv.appendChild(resultDiv);
    });
}

// Mostrar resultados guardados
function toggleSavedResults() {
    const savedResultsDiv = document.getElementById('savedResults');
    savedResultsDiv.style.display = savedResultsDiv.style.display === 'none' ? 'block' : 'none';
}

// Mostrar el resultado en la página en vez de usar alert
function displayResult(message) {
    const savedResultsDiv = document.getElementById('savedResults');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = message;
    savedResultsDiv.appendChild(resultDiv);
}

// Manejar eventos de los botones
document.getElementById('addBtn').addEventListener('click', () => calculate('add'));
document.getElementById('subtractBtn').addEventListener('click', () => calculate('subtract'));
document.getElementById('multiplyBtn').addEventListener('click', () => calculate('multiply'));
document.getElementById('divideBtn').addEventListener('click', () => calculate('divide'));
document.getElementById('percentageBtn').addEventListener('click', calculatePercentage);
document.getElementById('vatBtn').addEventListener('click', calculateVAT);
document.getElementById('vatListBtn').addEventListener('click', calculateVATForList);
document.getElementById('toggleSavedResultsBtn').addEventListener('click', toggleSavedResults);

// Actualizar resultados guardados al cargar la página
updateSavedResults();
