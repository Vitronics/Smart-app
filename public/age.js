// age.js

document.addEventListener('DOMContentLoaded', () => {
  const dobInput   = document.getElementById('birth');
  const todayInput = document.getElementById('today');
  const resultDiv  = document.getElementById('fullAge');

  // Pre-fill “Today” with current date
  const now = new Date();
  todayInput.value = now.toISOString().split('T')[0];

  // Recalculate whenever either date changes
  dobInput.addEventListener('change', calculateAge);
  todayInput.addEventListener('change', calculateAge);

  // Initial run (in case DOB is already picked)
  calculateAge();

  function calculateAge() {
    resultDiv.classList.remove('error');
    resultDiv.innerHTML = '';

    if (!dobInput.value) {
      resultDiv.textContent = 'Please select a date of birth!';
      resultDiv.classList.add('error');
      return;
    }

    const birthDate = new Date(dobInput.value);
    const current   = new Date(todayInput.value);

    if (birthDate > current) {
      resultDiv.textContent = 'Birth date cannot be in the future!';
      resultDiv.classList.add('error');
      return;
    }

    let years  = current.getFullYear() - birthDate.getFullYear();
    let months = current.getMonth() - birthDate.getMonth();
    let days   = current.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((current - birthDate) / (1000 * 60 * 60 * 24));

    resultDiv.innerHTML = `
      <div>
        You are 
        <span class="highlight">${years}</span> year${years !== 1 ? 's' : ''}, 
        <span class="highlight">${months}</span> month${months !== 1 ? 's' : ''}, and 
        <span class="highlight">${days}</span> day${days !== 1 ? 's' : ''} old.
      </div>
      <div>Total days: <span class="highlight">${totalDays}</span></div>
    `;
  }
});