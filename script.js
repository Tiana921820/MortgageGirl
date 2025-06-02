
function calculateMortgage() {
  const amount = parseFloat(document.getElementById('loanAmount').value);
  const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const term = parseFloat(document.getElementById('loanTerm').value) * 12;
  if (!amount || !rate || !term) {
    document.getElementById('monthlyPayment').innerText = 'Please enter valid values.';
    return;
  }
  const x = Math.pow(1 + rate, term);
  const payment = (amount * x * rate) / (x - 1);
  document.getElementById('monthlyPayment').innerText = `Estimated Monthly Payment: $${payment.toFixed(2)}`;
}

function toggleChat() {
  const chat = document.getElementById('chatWindow');
  chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;
  const chat = document.getElementById('chatBody');
  chat.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
  let reply = "Thanks for your question!";
  if (msg.includes("apply")) {
    reply = "You can apply using the 'Apply Now' button at the top of the page.";
  } else if (msg.includes("rate")) {
    reply = "Mortgage rates vary daily—please contact me for a personalized quote.";
  } else if (msg.includes("email")) {
    reply = "You can reach me at trandall@loandepot.com.";
  }
  chat.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = '';
}
