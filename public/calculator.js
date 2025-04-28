let currentDisplay = '0';
const display = document.getElementById('display');
function updateDisplay(){
    display.textContent = currentDisplay;

}
function appendToDisplay(value){
    if (currentDisplay ==='0' && value !== '.') {
        currentDisplay = value;
    }
    else{
        currentDisplay += value;
    }
    updateDisplay();
}
function clearDisplay(){
    currentDisplay = '0';
    updateDisplay();
}
function calculate() {
    try {
        // Replace ÷ with / and × with * for evaluation
        const expression = currentDisplay.replace(/÷/g, '/').replace(/×/g, '*');
        currentDisplay = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        currentDisplay = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}