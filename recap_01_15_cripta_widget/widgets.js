document.addEventListener('DOMContentLoaded', function () {

    createPasswordWidget(document.querySelector('#widget-password'));


    createPasswordWidget(document.querySelector('#widget-password2'));

});


function createPasswordWidget(parent) {
    const passLength = parent.querySelector(".passLength");
    const passResult = parent.querySelector(".passResult");
    const passButton = parent.querySelector('button');

    passButton.addEventListener("click", function () {
        console.log("click");

        console.log(createPassword(passLength.value));
        passResult.innerText = createPassword(passLength.value);
    });
}












function getRandomNumber(min, maxIncluded) {
    const randomNum = Math.floor(Math.random() * (maxIncluded - min + 1) + min);
    return randomNum;
}

function createPassword(passwordLength) {
    // 10 caratteri alfanumerici a-zA-Z0-9
    // array / stringa con l'alfabeto a disposizione
    // ciclo
    // come scelgo il singolo carattere????????
    // random min: 0, max: passwordLength - 1
    const charAlphabet = "abcdefghilmnopqrstu12323131!@##$%#%#$%#$#%$^";
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        // FIRST: LET'S GENERATE THE INDEX!!!!
        let index = getRandomNumber(0, charAlphabet.length - 1);
        console.log(index);
        // SECOND: LET'S FIND THE CHAR
        let char = charAlphabet[index]
        console.log(char);
        // THIRD: APPEND concatenzazione
        password += char;
    }

    return password;
}