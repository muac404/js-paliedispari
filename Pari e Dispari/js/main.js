"use strict"

function getRndInteger(min, max) {
    return Math.floor(math.random() * (max - min + 1) ) + min
}

function isEven(number){
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

const userChoice = prompt("inserisci pari o dispari");
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"))

const cpuNumber = getRndInteger(1, 5);

const total = userNumber + cpuNumber;
console.log(total)

if (userChoice === "pari" && isEven(total) || userChoice === "dispari" && !isEven(total)  ){
    console.log("l'utente ha vinto")
} else {
    console.log("ha vinto la cpu")
}