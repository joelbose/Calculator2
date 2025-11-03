const result = document.getElementById('result');

function display(val) {
  result.value += val;
}

function clearScreen() {
  result.value = '';
}

function calculate() {
  let x = result.value;
  let y = eval(x);
  result.value = y;
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