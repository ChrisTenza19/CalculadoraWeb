function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperation(operation) {
    document.getElementById('display').value += operation;
}


function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
        saveHistory(expression + ' = ' + result);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function deleteLast() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function saveHistory(entry) {
    var history = localStorage.getItem('calculatorHistory');
    history = history ? JSON.parse(history) : [];
    history.push(entry);
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
    displayHistory();
}


function displayHistory() {
    var historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    var history = localStorage.getItem('calculatorHistory');
    history = history ? JSON.parse(history) : [];
    history.forEach(function(entry) {
        var li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}


function clearHistory() {
    localStorage.removeItem('calculatorHistory');
    displayHistory();
}


window.onload = function() {
    displayHistory();
};