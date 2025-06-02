
function calculateMortgage() {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

  if (!loanAmount || !interestRate || !loanTerm) {
    document.getElementById('monthlyPayment').innerText = 'Please enter valid values.';
    return;
  }

  const x = Math.pow(1 + interestRate, loanTerm);
  const monthly = (loanAmount * x * interestRate) / (x - 1);
  document.getElementById('monthlyPayment').innerText = `Estimated Monthly Payment: $${monthly.toFixed(2)}`;
}

function toggleChat() {
  const chat = document.getElementById('chatWindow');
  chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  const chatBody = document.getElementById('chatBody');
  const userMsg = document.createElement('p');
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatBody.appendChild(userMsg);

  const botMsg = document.createElement('p');
  let response = 'Thank you for reaching out!';
  if (message.toLowerCase().includes('apply')) {
    response = 'You can apply by clicking the Apply link above.';
  } else if (message.toLowerCase().includes('rate')) {
    response = 'Mortgage rates vary—email trandall@loandepot.com for today’s rate.';
  }
  botMsg.innerHTML = `<strong>Bot:</strong> ${response}`;
  chatBody.appendChild(botMsg);

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = '';
}
