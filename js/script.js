'user strict'

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    setDateTable(now)
    const seconds = now.getSeconds();
    const secondDegrees = convertToDegree(now.getSeconds(), 60);
    const minuteDegrees = convertToDegree(now.getMinutes(), 60);
    const hourDegrees = convertToDegree(now.getHours(), 12);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(seconds);
}

function setDateTable(ivNow){
    document.querySelector('.hour').innerHTML= (ivNow.getHours() <= 9 ? "0" + ivNow.getHours(): ivNow.getHours());
    document.querySelector('.minute').innerHTML= (ivNow.getMinutes() <= 9 ? "0" + ivNow.getMinutes(): ivNow.getMinutes());
    document.querySelector('.second').innerHTML= (ivNow.getSeconds() <= 9 ? "0" + ivNow.getSeconds(): ivNow.getSeconds());
}

function convertToDegree(val, divider) {
    return ((val / divider) * 360) + 90;
}

setInterval(setDate,1000);  