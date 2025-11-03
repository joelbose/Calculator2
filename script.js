const result = document.getElementById('result');

function display(val) {
  result.value += val;
}

function clearScreen() {
  result.value = '';
}

function calculate() {
  let expression = result.value;
  try {
    let calculatedResult = new Function('return ' + expression)();
    result.value = calculatedResult;
  } catch (error) {
    result.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    display(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    display(key);
  } else if (key === '.') {
    display(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearScreen();
  }
});