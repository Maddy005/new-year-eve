
const dayse = document.getElementById('days1');
const hourse = document.getElementById("hours1");
const minutese = document.getElementById("minutes1");
const secondse = document.getElementById("seconds1");

const Coundown1 ='1 Jan 2022';

function countdown() {
    const newyearDate = new Date(Coundown1);
    const currentDate = new Date();
    const totalSeconds = (newyearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minute = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    dayse.innerHTML = days;
    hourse.innerHTML = hours;
    minutese.innerHTML =minute;
    secondse.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);


