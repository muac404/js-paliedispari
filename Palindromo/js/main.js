"use strict"

const word = prompt("Inserisci una parola");

let wordLR = "";

for (let i = 0; i < word.length; i++) {

    wordLR += word[i];
    
}

console.log("Leggo da sinistra verso destra =", wordLR)

let wordRL = "";

for (let i = word.length -1; i >= 0; i--) {

    wordRL += word[i];
    
}

console.log("Leggo da da destra verso sinistra =", wordRL)

if(wordLR == wordRL){
    alert(`La parola " ${word} " è palindroma`)
} else{
    alert(`La parola " ${word} " non è palindroma`)
}