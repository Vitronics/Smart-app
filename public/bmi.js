
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter valid values!";
        resultDiv.style.color='white';
        resultDiv.style.display = 'block';
        resultDiv.className = 'overweight';
        return;
    }

    const bmi = weight / (height * height);
    const category = getBMICategory(bmi);

    resultDiv.innerHTML = `Your BMI: <span style="font-size:1.2em">${bmi.toFixed(1)}</span><br>Category: ${category}`;
    resultDiv.className = category.toLowerCase();
    resultDiv.style.display = 'block';
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}
