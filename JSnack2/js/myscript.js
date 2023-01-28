// assegno un valore al mio bottone per generare e un evento
const generaEl = document.getElementById("genera");

generaEl.addEventListener(
    "click",
    function () {
        // creo il mio array di numeri
        let numList = [];

        // decido quanti numeri devo avere
        const numTot = Math.floor((Math.random() * 30) + 1);

        // genero dei numeri casuali e li aggiungo al mio array, finchè la quantità di numeri non è uguale a quella che devo avere, generata in precedenza
        for (let i = 0; i < numTot; i++) {
            let numRandom = Math.floor((Math.random() * 100) + 1);
            numList.push(numRandom);
        };

        // dichiaro altri due array per i numeri pari e dispari
        let dispariList = [];
        let pariList = [];

        // per ogni numero generato, scelgo se è pari o dispari e lo divido negli array rispettivi
        for (let i = 0; i < numList.length; i++) {
            if (numList[i] % 2 == 0) {
                pariList.push(numList[i]);
            } else {
                dispariList.push(numList[i]);
            }
        };

        // scrivo la mia lista generata random e le relative suddivisioni
        document.getElementById("random").innerHTML = "Questi sono i numeri generati randomicamente: " + numList + ".";
        document.getElementById("dispari").innerHTML = "Questi sono i numeri dispari: " + dispariList + ".";
        document.getElementById("pari").innerHTML = "Questi sono i numeri pari: " + pariList + ".";
    }
);




