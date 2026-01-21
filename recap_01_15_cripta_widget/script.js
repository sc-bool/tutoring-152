console.time('timer1');

// STEP 1: Obiettivo: L’utente inserisce una parola, voi dovete contare le vocali presenti e restituirle.
/**
 * Count vowels inside a word
 * 
 * @param {string} word The word inside wich count 
 * @returns {integer} Vowels count inside the word
 */
function vowelsCounter(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    /* 0) abbiamo la parola word - esempio: ciao
    1) per ogni lettara nella parola: c, i, a, o
    2) la lettera e' una vocale?
    3) SI: +1, NO: continuo
    4) restituiamo il counter */

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter += 1
        }
    }
    return counter;
}
console.log("Vocali trovate: ", vowelsCounter('ciao'));


// STEP 2: Ricevete il numero di vocali (es. 4) e costruite un array di numeri da 1 a quel numero.
function arrayGenerator(num) {
    const outputArray = [];
    for (let i = 1; i <= num; i++) {
        outputArray.push(i);
    }
    return outputArray;
}
const generatedArray = arrayGenerator(vowelsCounter('ciao'));
console.table(generatedArray);

console.log("📋"[0])


// STEP 3: Ricevete un array di numeri e restituite un nuovo array con ogni numero triplicato.
function multiplyForThree(numbers) {
    const multipliedNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        multipliedNumbers.push(numbers[i] * 3);
    }
    return multipliedNumbers
}

const newMultipliedArray = multiplyForThree(generatedArray);
console.log("I tuoi numeri moltiplicati per tre!")


console.table(newMultipliedArray);


// STEP 4: Ricevete l’array dei numeri triplicati. Trovate il secondo valore più grande.
// WARNING: the array should be a sorted one (asc)!
function secondBiggestNumberFinder(sortedArray) {
    // prendo un array di numeri
    return sortedArray[sortedArray.length - 2];
}

const secondBiggestNum = secondBiggestNumberFinder(newMultipliedArray);
console.log('Secondo numero piu grande: ', secondBiggestNum);

// FINAL STEP: Obiettivo: Ricevete il numero trovato. Se è pari, il tesoro è vostro. Se è dispari, è una trappola!
function finalCripta(number) {
    // ! se non e' numero OR e minore di 0

    console.log(number);
    console.log(typeof number);

    if (typeof number != 'number' || number <= 0) {
        console.log('finalCripta(number) ACCETTA SOLO NUMERI Positivi!');
        return;
    }

    // restituisce true se e' pari, e viceversa
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(finalCripta(secondBiggestNum));


const parolaFinale = '';
// Giovanni: false
// Sirio: true
// Michele: true
// Edoardo: false
// Salvatore: true
// Stefano: False
// Artur: true

const resultFinale = finalCripta(secondBiggestNumberFinder(multiplyForThree(arrayGenerator(vowelsCounter(parolaFinale)))));




console.timeLog('timer1');

