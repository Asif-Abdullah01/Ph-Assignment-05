const historyButton = document.getElementById('history-btn');
const donationButton = document.getElementById('donation-btn');

historyButton.addEventListener('click',function(){
    historyButton.classList.remove('bg-transparent');
    historyButton.classList.add('bg-[#B4F461]');
    donationButton.classList.remove('bg-[#B4F461]');
    document.getElementById('donation-main').classList.add('hidden')
    document.getElementById('history-main').classList.remove('hidden')



    
})

donationButton.addEventListener('click',function(){
    donationButton.classList.add('bg-[#B4F461]');
    historyButton.classList.remove('bg-[#B4F461]');

    document.getElementById('donation-main').classList.remove('hidden')
    document.getElementById('history-main').classList.add('hidden')

})