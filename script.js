const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');




const monaco = '27 May 2023';

function countdown(){
    const monacoDate = new Date(monaco);
    const currentDate = new Date();

    const totalSeconds = (monacoDate-currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds)%60;

    console.log(days, hours, mins, seconds)


    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = seconds;

}

countdown()

setInterval(countdown,1000)

// Legg til i handlekurv
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-button')) {
        var ticket = event.target.parentElement;
        var ticketName = ticket.querySelector('h3').textContent;
        var ticketPrice = parseInt(ticket.querySelector('p').textContent.split(' ')[1]);
        addToCart(ticketName, ticketPrice);
    }
});

// Legg til i handlekurv funksjon
function addToCart(name, price) {
    var cart

