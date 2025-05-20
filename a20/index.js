const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];
const msg = document.getElementById("msg");
const box = document.getElementById("login-box");
let currentCustomer= null;

const login = () => {
  const card = document.getElementById("card").value;
  const pin = document.getElementById("pin").value;
  const customer = customers.find(value => value.cart === card && value.pin === pin);
  if (customer) {
    currentCustomer =customer;
    msg.textContent="";
    box.innerHTML = `<h2>Welcome, ${customer.name}!</h2> 
    <input type='number' id='withdraw' placeholder='Enter amount'>
    <button onClick='Withdraw()'>Withdraw </button> <br>
    <input type='number' id='deposit' placeholder='Enter amount'>
    <button onClick='Deposit()'>Deposit </button>
    <p>Balance: ${customer.balance}</p>`;
    
  } else {
    msg.textContent = "Invalid card number or PIN!";
  }
};

const Deposit = () => {
  const amount = parseFloat(document.getElementById("deposit").value);
  if(currentCustomer && amount > 0){
    currentCustomer.balance+=amount;
    login();
  }
}

const Withdraw = () => {
  const amount = parseFloat(document.getElementById("withdraw").value);
  if(currentCustomer && amount >0 || amount <= currentCustomer.balance){
    currentCustomer.balance-=amount;
    login();
  }else{
    msg.textContent="Invalid or insufficient amount";
  }
}