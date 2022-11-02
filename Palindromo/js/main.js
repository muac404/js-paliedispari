"use strict"
// const userName = prompt("Come ti chiami?")
// const word = prompt("Inserisci una parola");

// let wordLR = "";

// for (let i = 0; i < word.length; i++) {

//     wordLR += word[i];
    
// }

// console.log("Leggo da sinistra verso destra =", wordLR)

// let wordRL = "";

// for (let i = word.length -1; i >= 0; i--) {

//     wordRL += word[i];
    
// }

// console.log("Leggo da destra verso sinistra =", wordRL)

// if(wordLR == wordRL){
//     alert(`Ciao ${userName}, la parola " ${word} " è palindroma`)
// } else{
//     alert(`Ciao ${userName}, la parola " ${word} " non è palindroma`)
// }

function isPalindrome(word){
    let wordReverse = "";
    for (let i = word.length - 1;  i >= 0; i--) {
        wordReverse = wordReverse + word[i];
    }

    
    if ( word.toLowerCase() === wordReverse.toLowerCase() ){
        return true;
    }

    return false;
}

if( isPalindrome("osso")){
    alert("La parola è palindorma")
} else {
    alert("La parola non è palindroma")
}



isPalindrome(word);