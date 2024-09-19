// Simular cálculo básico (sin prompt ni alert)
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
                showMessage('Error', 'No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            operationText = `${num1} / ${num2}`;
            break;
    }

    showMessage('Resultado', `El resultado fue: ${result}`);
    saveResult(operationText, result);
}

// Mostrar un modal con el resultado en vez de alert
function showMessage(title, message) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${title}</h3>
            <p>${message}</p>
            <button onclick="closeModal()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.remove();
}

// Cálculo de porcentaje
function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(number) || isNaN(percentage)) {
        showMessage('Error', 'Por favor, ingrese números válidos.');
        return;
    }

    const result = (number * percentage) / 100;
    showMessage('Resultado', `${percentage}% de ${number} = ${result}`);
    saveResult(`${percentage}% de ${number}`, result);
}

// Cálculo de IVA
function calculateVAT() {
    const amount = parseFloat(document.getElementById('amount').value);
    const vatRate = parseFloat(document.getElementById('vatRate').value);

    if (isNaN(amount) || isNaN(vatRate)) {
        showMessage('Error', 'Por favor, ingrese números válidos.');
        return;
    }

    const result = amount + (amount * vatRate) / 100;
    showMessage('Resultado', `IVA de ${vatRate}% sobre ${amount} = ${result}`);
    saveResult(`IVA de ${vatRate}% sobre ${amount}`, result);
}

// Cálculo de IVA para lista
function calculateVATForList() {
    const prices = document.getElementById('prices').value.split(',').map(parseFloat);
    const vatRate = parseFloat(document.getElementById('vatRateList').value);

    if (prices.some(isNaN) || isNaN(vatRate)) {
        showMessage('Error', 'Por favor, ingrese números válidos.');
        return;
    }

    const results = prices.map(price => price + (price * vatRate) / 100);
    const resultString = results.join(', ');
    showMessage('Resultado', `IVA de ${vatRate}% sobre la lista: ${resultString}`);
    saveResult(`IVA de ${vatRate}% sobre la lista:`, resultString);
}

// Guardar resultados en localStorage
function saveResult(operation, result) {
    const results = JSON.parse(localStorage.getItem('savedResults')) || [];
    results.push({ operation, result });
    localStorage.setItem('savedResults', JSON.stringify(results));
    renderSavedResults();
}

// Mostrar/ocultar resultados guardados
function toggleSavedResults() {
    const container = document.getElementById('savedResultsContainer');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

// Renderizar los resultados guardados en la pantalla
function renderSavedResults() {
    const results = JSON.parse(localStorage.getItem('savedResults')) || [];
    const savedResultsDiv = document.getElementById('savedResults');
    savedResultsDiv.innerHTML = '';

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `<strong>Operación:</strong> ${result.operation}, <strong>Resultado:</strong> ${result.result}`;
        savedResultsDiv.appendChild(resultDiv);
    });
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderSavedResults();
    document.getElementById('savedResultsContainer').style.display = 'none';
});
