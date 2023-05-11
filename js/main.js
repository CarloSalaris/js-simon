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

// Selezione outputs
const outputRandomNum = document.getElementById("outputRandomNum");
const outputCountdown = document.getElementById("countdown");
const outputResult = document.getElementById("outputResult");
// Creazione Arrays
const randomNumArr = [];
const InputArr =[];
const rightNumArr = [];

// Generazione di un array con 5 numeri casuali non ripetuti tra 1 e 100 
randomNumFunc(5);
// Visualizzazione numeri in pagina 
outputRandomNum.innerHTML = randomNumArr;
console.log("Numeri casuali: " + randomNumArr);

//Timer 30 secondi (setInterval perché voglio far vedere il tempo che manca nel countdown)
let countdownCounter = 3;
const countdown = setInterval(function(){
    outputCountdown.innerHTML = countdownCounter;
    countdownCounter--
    if (countdownCounter < 0) {
        outputRandomNum.innerHTML = "TEMPO SCADUTO! Vediamo cosa ti ricordi...";
        console.log("TEMPO SCADUTO! Vediamo cosa ti ricordi...");
        clearInterval(countdown);
        InputArrFunc(5);
        commonElemArrFunc(randomNumArr, InputArr);

        //Output risulato (console)
        if (rightNumArr.length === randomNumArr.length) {
            outputResult.innerHTML = `Hai ricordato tutti i numeri! ${rightNumArr}`;
            console.log(`Hai ricordato tutti i numeri! ${rightNumArr}`);
        }else if (rightNumArr.length > 0) {
            outputResult.innerHTML = `Hai ricordato ${rightNumArr.length} numeri: ${rightNumArr}`;
            console.log(`Hai ricordato ${rightNumArr.length} numeri: ${rightNumArr}`);   
        }else{
            outputResult.innerHTML = `Non te ne sei ricordato nemmeno uno!`;
            console.log(`Non te ne sei ricordato nemmeno uno!`);            
        }
    }
}, 1000);


/* FUNZIONI */

// Generazione di array di "num" numeri casuali (stabiliamo che siano numeri interi compresi tra 1 e 100)
function randomNumFunc(howManyNums) {
    for (let i = 0; randomNumArr.length < howManyNums; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1
        if (!randomNumArr.includes(randomNum)) {
            randomNumArr.push(randomNum);
        }
    }
}

// Generazione array di un numero stabilito di inputs
function InputArrFunc(howManyInputs) {
    for (let i = 0; i < howManyInputs; i++) {
       let inputElement = parseInt(prompt("inserisci un numero: "))
       InputArr.push(inputElement);
    }
    console.log("Inseriti dall'utente: " + InputArr);
    return InputArr;
};

// Generazione array di elementi comuni tra 2 arrays stabiliti
function commonElemArrFunc(arr1, arr2) {
    // Confronto dei due arrays. Se ci sono elementi in comune li metto in un nuovo array.
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            rightNumArr.push(arr2[i]);
        }
    }
    console.log("Numeri corretti: " + rightNumArr);
    return rightNumArr
};
