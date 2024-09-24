function getBalanceById(id){
    const balance = document.getElementById(id).innerText;
    const balanceNum = parseFloat(balance);
    
    return balanceNum;
}
function getGivenMoneyById(id){
    const addMoney = document.getElementById(id).value;
    const addMoneyNum = parseFloat(addMoney);
    
    return addMoneyNum;
}


function createHistoryDiv(addMoneyNum,heading){
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-8');
    div.classList.add('rounded-md');

    const h2 = document.createElement('h2');
    h2.classList.add('font-bold');
    h2.classList.add('text-xl');

    h2.innerText = `${addMoneyNum} Taka is donated ${heading}`;
    console.log(h2.innerText);
    div.appendChild(h2)
    
    const p = document.createElement('p');
    p.classList.add('font-light')

    const today = new Date();
    p.innerHTML = `Date: ${today}`;
    div.appendChild(p);

    return div;
}