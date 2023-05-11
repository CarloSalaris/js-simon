/****************
 *  SIMON SAYS  *
 ****************/

/*  CONSEGNA

- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* SVOLGIMENTO */

const outputRandomNum = document.getElementById("outputRandomNum");
const outputCountdown = document.getElementById("countdown");
const randomNumArr = [];

// Generazione 5 numeri casuali (stabiliamo che siano numeri interi compresi tra 1 e 100)
for (let i = 0; randomNumArr.length < 5; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1
    if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
    }
}

// Visualizzazione numeri in pagina 
outputRandomNum.innerHTML = randomNumArr;
console.log(randomNumArr);

//Timer 30 secondi (setInterval perché voglio far vedere il tempo che manca nel countdown)
let countdownCounter = 30;
const countdown = setInterval(function(){
    outputCountdown.innerHTML = countdownCounter;
    countdownCounter--
    if (countdownCounter < 0) {
        outputRandomNum.innerHTML = "TEMPO SCADUTO! Vediamo cosa ti ricordi";
        console.log("TEMPO SCADUTO! Vediamo cosa ti ricordi...");
        clearInterval(countdown);
        InputArrFunc(5);
    }
}, 1000);



/* FUNZIONI */

// Generazione array di un numero stabilito di inputs
function InputArrFunc(howManyInputs) {
    const InputArr =[];
    for (let i = 0; i < howManyInputs; i++) {
       let inputElement = parseInt(prompt("inserisci un numero: "))
       InputArr.push(inputElement);
    }
    console.log(InputArr);
    return InputArr;
}
