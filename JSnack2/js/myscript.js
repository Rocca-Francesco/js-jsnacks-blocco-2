// creo il mio array di numeri
let numList = [];
console.log(numList);

// decido quanti numeri devo avere
const numTot = Math.floor((Math.random() * 20) + 1);
console.log(numTot);
// genero dei numeri casuali e li aggiungo al mio array, finchè la quantità di numeri non è uguale a quella che devo avere, generata in precedenza

for (i = 0; i < numTot; i++) {
    let numRandom = Math.floor((Math.random() * 100) + 1);
    numList.push(numRandom);
    console.log(numList);
}

