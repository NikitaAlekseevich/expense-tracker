const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: "test", amount: 50 },
    { id: 2, text: "test2", amount: -20},
    { id: 3, text: "test3", amount: 100}
];

let transaction = dummyTransactions;

function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span> ${sign}${Math.abs(transaction.amount)} 
    </span> <button class="delete-btn">x</button>
    `;

    list.appendChild(item);
}

function updateValues() {
    const amounts = transaction.map(transaction => transaction.amount);

        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item), 0).toFixed(2);
        
        const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc += item), 0) * -1 ).toFixed(2);

        balance.innerText = `$${total}`;
        money_plus.innerText = `$${income}`;
        money_minus.innerText = `$${expense}`;
        
        // console.log(amounts);
        // console.log(total);
        // console.log(income);
        // console.log(expense);
}

function init(){
    list.innerHTML = '';

    transaction.forEach(addTransactionDOM);
    updateValues();
}

init();