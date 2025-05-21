const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

const msg = document.getElementById("msg");
const box = document.getElementById("login-box");
let currentCustomer = null;

const login = () => {
  const card = document.getElementById("card").value;
  const pin = document.getElementById("pin").value;
  const customer = customers.find(value => value.cart === card && value.pin === pin);
  if (customer) {
    currentCustomer = customer;
    msg.textContent = "";
    renderDashboard(); 
  } else {
    msg.textContent = "Invalid card number or PIN!";
  }
};

const renderDashboard = () => {
  box.innerHTML = `
    <h2>Welcome, ${currentCustomer.name}!</h2> 
    <input type='number' id='withdraw' placeholder='Enter amount to withdraw'><button onclick='Withdraw()'>Withdraw</button><br><br>
    <input type='number' id='deposit' placeholder='Enter amount to deposit'><button onclick='Deposit()'>Deposit</button>
    <input type='text' id='transferTo' placeholder='whom'>
    <input type='number' id='transferAmount' placeholder=Amount>
    <button onclick='transfer()'>Transfer</button>
    <p>Balance: ${currentCustomer.balance}</p>
  `;
};

const Deposit = () => {
  const amount = parseFloat(document.getElementById("deposit").value);
  if (currentCustomer && amount > 0) {
    currentCustomer.balance += amount;
    renderDashboard(); 
  } else {
    msg.textContent = "Invalid deposit amount!";
  }
};

const Withdraw = () => {
  const amount = parseFloat(document.getElementById("withdraw").value);
  if (currentCustomer && amount > 0 && amount <= currentCustomer.balance) {
    currentCustomer.balance -= amount;
    renderDashboard(); 
  } else {
    msg.textContent = "Invalid or insufficient amount!";
  }
};


const Transfer = () => {
  const toCard=document.getElementById("transferTo").value;
  const toAmount = parseFloat(document.getElementById("transferAmount").value);
  const user = cart.find(value => value.name == toCard);
  
}
