// === Phase 1: Text Manipulation ===
function updateDescription() {
  const description = document.getElementById('description');
  description.innerHTML = "This paragraph has been updated via JavaScript!";
}
updateDescription(); // Call once on page load




// === Phase 2: Greeting with Input ===
function greetUser() {
  const nameInput = document.getElementById('name-input');
  const greeting = document.getElementById('greeting');
  const name = nameInput.value.trim();

  greeting.innerHTML = name ? `Hello, ${name}!` : "Please enter your name.";
}

document.getElementById('greet-btn').addEventListener('dblclick', greetUser);


// === Phase 3: Toggle Highlight Class ===
function toggleTitleHighlight() {
  const title = document.getElementById('main-title');
  title.classList.toggle('highlight');
}

document.getElementById('highlight-btn').addEventListener('mouseover', toggleTitleHighlight);

// === Phase 4: Reset Form ===
function resetPage() {
  document.getElementById('name-input').value = '';
  document.getElementById('greeting').innerText = '';
  document.getElementById('main-title').classList.remove('highlight');
  document.body.style.backgroundColor = 'white'; // reset background color
  balance = 0;
  updateBalanceDisplay(); // reset balance display
}

document.getElementById('reset-btn').addEventListener('click', resetPage);

// === Phase 5: Random Background Color ===
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

document.getElementById('color-btn').addEventListener('click', changeBackgroundColor);

// === Phase 6: Add and Remove List Item ===
function addListItem() {
  const listInput = document.getElementById('list-item-input');
  const itemList = document.getElementById('item-list');
  const itemText = listInput.value.trim();

  if (itemText) {
    const li = document.createElement('li');
    li.innerText = itemText;
    itemList.appendChild(li);
    listInput.value = '';
  }
}

document.getElementById('add-item-btn').addEventListener('click', addListItem);

function removeLastItem() {
  const itemList = document.getElementById('item-list');
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
  else {
      alert("The list is already empty.");
  }
}
document.getElementById('remove-item-btn').addEventListener('click', removeLastItem);


// === Phase 7: Toggle Dark Mode ===
function toggleDarkMode() {
  const body = document.body;
  const darkModeBtn = document.getElementById('dark-mode-btn');
  body.classList.toggle('dark-mode');
  darkModeBtn.innerText = body.classList.contains('dark-mode') ? 'Disable Dark Mode' : 'Enable Dark Mode';
}

document.getElementById('dark-mode-btn').addEventListener('click', toggleDarkMode);


// === Phase 8: Update Balance ===
let balance = 0;

function updateBalanceDisplay() {
  const balanceSpan = document.getElementById('balance');
  balanceSpan.innerText = balance.toFixed(2);

  balanceSpan.classList.remove('positive', 'negative');
  if (balance < 0) {
    balanceSpan.classList.add('negative');
  } else {
    balanceSpan.classList.add('positive');
  }
}
function addTransactionToHistory(type, amount){
  const listItem = document.createElement('li');
  listItem.textContent = `${type==='deposit' ? 'Deposited' : 'Withdrew'} $${amount.toFixed(2)}`;
  transactionHistoryList.prepend(listItem);
}

function deposit() {
  const amount = parseFloat(document.getElementById('amount-input').value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalanceDisplay();
    addTransactionToHistory('deposit', amount);
    amountInput.value = '';//Clear input
    // change the innerHTML of "alert"  ""
  } else {
    alert("Please enter a valid positive amount to deposit.");
    // change the innerHTML of "alert" to "invalid amount"
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount-input').value);
  if (!isNaN(amount) && amount > 0) {
    balance -= amount;
    updateBalanceDisplay();
    addTransactionToHistory('withdrawal', amount);
    amountInput.value = ''; //Clear input
  } else {
    alert("Please enter a valid positive amount to withdraw.");
  }
}

document.getElementById('deposit-btn').addEventListener('click', deposit);
document.getElementById('withdraw-btn').addEventListener('click', withdraw);

// Initialize with correct styling
updateBalanceDisplay();
