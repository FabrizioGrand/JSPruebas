function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    let operationText;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
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
                alert('No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            operationText = `${num1} / ${num2}`;
            break;
    }

    alert(`El resultado fue: ${result}`);
    saveResult(operationText, result);
}

function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(number) || isNaN(percentage)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    const result = (number * percentage) / 100;
    alert(`El resultado fue: ${result}`);
    saveResult(`${percentage}% de ${number}`, result);
}

function calculateVAT() {
    const amount = parseFloat(document.getElementById('amount').value);
    const vatRate = parseFloat(document.getElementById('vatRate').value);

    if (isNaN(amount) || isNaN(vatRate)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    const result = amount + (amount * vatRate) / 100;
    alert(`El resultado fue: ${result}`);
    saveResult(`IVA de ${vatRate}% sobre ${amount}`, result);
}

function calculateVATForList() {
    const prices = document.getElementById('prices').value.split(',').map(parseFloat);
    const vatRateList = parseFloat(document.getElementById('vatRateList').value);

    if (prices.some(isNaN) || isNaN(vatRateList)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    const results = prices.map(price => price + (price * vatRateList) / 100);
    alert(`El resultado fue: ${results.join(', ')}`);
    saveResult(`IVA de ${vatRateList}% sobre lista`, results.join(', '));
}

function saveResult(operation, result) {
    const savedResultsDiv = document.getElementById('savedResults');
    const newResult = document.createElement('div');
    newResult.textContent = `${operation} = ${result}`;
    savedResultsDiv.appendChild(newResult);
}

function toggleSavedResults() {
    const savedResultsDiv = document.getElementById('savedResults');
    savedResultsDiv.style.display = savedResultsDiv.style.display === 'none' ? 'block' : 'none';
}
