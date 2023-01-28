// assegno un valore al mio bottone per generare e un evento
const generaEl = document.getElementById("genera");

generaEl.addEventListener(
    "click",
    function () {
        // dichiaro il mio array di numeri casuali
        let numberEl = [];

        // scelgo la quantità di numeri da stampare
        let totNumEl = Math.floor((Math.random() * 30) + 1);

        // dichiaro la mia variabile per la somma
        let sommaPosDispari = 0;
        // dichiaro un array per segnare i numeri da sommare
        let sommaPosDispariList = [];

        // genero un numero finchè il mio totale non corrisponde alla quantità di numeri da generare
        for (let i = 0; i != totNumEl; i++) {

            // genero un nuovo numero e lo salvo nella variabile
            let numRandom = Math.floor((Math.random() * 100) + 1);

            // pusho il numero appena generato nel mio array per salvarlo
            numberEl.push(numRandom);

            if (i % 2 != 0) {
                // se il mio numero è IN POSIZIONE dispari allora lo scrivo nella lista da sommare
                sommaPosDispariList.push(numRandom);
                // poi lo sommo
                sommaPosDispari += numRandom;
            }
        }

        // stampo il mio array completo e la mia somma
        document.getElementById("number").innerHTML = "I numeri generati sono: " + numberEl + ".";
        document.getElementById("numeriDaSommare").innerHTML = "I numeri da sommare sono: " + sommaPosDispariList + ".";
        document.getElementById("somma").innerHTML = "La somma dei numeri IN POSIZIONE dispari è: " + sommaPosDispari + ".";
    }
);
