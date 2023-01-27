// dichiaro il mio array di numeri casuali
let numberEl = [];
// scelgo la quantità di numeri da stampare
let totNumEl = Math.floor((Math.random() * 100) + 1);
console.log("numeri da generare " + totNumEl);
// dichiaro la mia variabile pwer la somma
let sommaDispariEl;

// genero un numero finchè il mio totale non corrisponde allla quantità di numeri da generare
for (i = 0; i != totNumEl; i++) {

    // genero un nuovo numero e lo salvo nella variabile, solo per questo ciclo
    let numRandom = Math.floor((Math.random() * 100) + 1);
    console.log("numero generato " + numRandom);

    // pusho il numero appena generato nel mio array per salvarlo
    numberEl.push[numRandom];
    console.log(numberEl);

    // se il mio numero è dispari allora lo sommo
    if (numRandom % 2 != 0) {
        sommaDispariEl += numRandom;
    }
}

// stampo il mio array completo e la mia somma
// console.log(numberEl);
// console.log(sommaDispariEl);