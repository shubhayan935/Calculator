let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const modeLabel = document.getElementById('modeLabel');
    const slider = document.querySelector('#slider');
    const body = document.body;
    const main = document.querySelector('.main');
    const calc = document.querySelector('.calculator');

  
    modeToggle.addEventListener('change', function () {
        if (modeToggle.checked) {
            // Dark mode
            body.classList.add('dark-mode');
            modeLabel.innerText = 'Dark Mode';
            body.style.color = 'white';
            body.style.backgroundColor = 'black';
            calc.style.color = 'white';
            calc.style.backgroundColor = 'black';
            main.style.color = 'white';
            main.style.backgroundColor = 'black';
            slider.style.background = '🌙';
  
        } else {
            // Light mode
            body.classList.remove('dark-mode');
            modeLabel.innerText = 'Light Mode';
            body.style.color = 'black';
            body.style.backgroundColor = 'white';
            calc.style.color = 'black';
            calc.style.backgroundColor = 'white';
            main.style.color = 'black';
            main.style.backgroundColor = 'white';
            slider.style.background = '☀️';
        }
    });
  });


  function addCursor() {
    document.getElementById('display').classList.add('cursor');
}

function removeCursor() {
    document.getElementById('display').classList.remove('cursor');
}


  