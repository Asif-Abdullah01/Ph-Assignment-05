const blogButton = document.getElementById('blog-btn');
const homeButton = document.getElementById('home-btn');

// console.log(blogButton);
// console.log(homeButton);
if (blogButton){
    blogButton.addEventListener('click', function(){
        window.location.href = 'blog.html';
    });
}
else if(homeButton){
    homeButton.addEventListener('click', function(){
        window.location.href = 'index.html';
    });
}

//---------------

document.getElementById('noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();
    const balanceNum = getBalanceById('noakhali-balance');

    const addMoneyNum = getGivenMoneyById('noakhali-addMoney');

    if(isNaN(addMoneyNum)){
        alert("Invalid Donation Amount");
        document.getElementById('noakhali-addMoney').value = "";
        return;
    }

    const accountBalanceNum = getBalanceById('account-balance');

    if(addMoneyNum<=0 || accountBalanceNum<=0 || (accountBalanceNum-addMoneyNum)<0){
        alert('Invalid Amount or you do not have enough balance');
        document.getElementById('noakhali-addMoney').value = "";
        return;
    }

    const NewAccountBalance = accountBalanceNum-addMoneyNum;

    document.getElementById('account-balance').innerText = NewAccountBalance;

    const totalBalance = balanceNum+addMoneyNum;

    document.getElementById('noakhali-balance').innerText = totalBalance;

    const myHeading = document.getElementById('noakhali-heading').innerText;

    const div = createHistoryDiv(addMoneyNum,myHeading)

    document.getElementById('history-main').appendChild(div)



    document.getElementById('my_modal_1').showModal();
    document.getElementById('noakhali-addMoney').value = "";
})


//----------------


document.getElementById('feni-btn').addEventListener('click',function(event){
    event.preventDefault();
    const balanceNum = getBalanceById('feni-balance');

    const addMoneyNum = getGivenMoneyById('feni-addMoney');

    if(isNaN(addMoneyNum)){
        alert("Invalid Donation Amount");
        document.getElementById('feni-addMoney').value = "";
        return;
    }

    const accountBalanceNum = getBalanceById('account-balance');

    if(addMoneyNum<=0 || accountBalanceNum<=0 || (accountBalanceNum-addMoneyNum)<0){
        alert('Invalid Amount or you do not have enough balance');
        document.getElementById('noakhali-addMoney').value = "";
        return;
    }

    const NewAccountBalance = accountBalanceNum-addMoneyNum;

    document.getElementById('account-balance').innerText = NewAccountBalance;

    const totalBalance = balanceNum+addMoneyNum;

    document.getElementById('feni-balance').innerText = totalBalance;

    const myHeading = document.getElementById('feni-heading').innerText;

    const div = createHistoryDiv(addMoneyNum,myHeading)

    document.getElementById('history-main').appendChild(div)



    document.getElementById('my_modal_1').showModal();
    document.getElementById('noakhali-addMoney').value = "";

})


//---------------

document.getElementById('quota-btn').addEventListener('click',function(event){
    event.preventDefault();

    const balanceNum = getBalanceById('quota-balance');

    const addMoneyNum = getGivenMoneyById('quota-addMoney');

    if(isNaN(addMoneyNum)){
        alert("Invalid Donation Amount");
        document.getElementById('quota-addMoney').value = "";
        return;
    }

    const accountBalanceNum = getBalanceById('account-balance');

    if(addMoneyNum<=0 || accountBalanceNum<=0 || (accountBalanceNum-addMoneyNum)<0){
        alert('Invalid Amount or you do not have enough balance');
        document.getElementById('noakhali-addMoney').value = "";
        return;
    }

    const NewAccountBalance = accountBalanceNum-addMoneyNum;

    document.getElementById('account-balance').innerText = NewAccountBalance;

    const totalBalance = balanceNum+addMoneyNum;

    document.getElementById('quota-balance').innerText = totalBalance;

    const myHeading = document.getElementById('quota-heading').innerText;

    const div = createHistoryDiv(addMoneyNum,myHeading)

    document.getElementById('history-main').appendChild(div)



    document.getElementById('my_modal_1').showModal();
    document.getElementById('noakhali-addMoney').value = "";


})


//----------------