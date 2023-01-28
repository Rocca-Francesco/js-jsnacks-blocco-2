// assegno i miei valori random fuori da tutto per questioni di scope
// dichiaro i miei array di numeri casuali
let randomFirst = [];
let randomSecond = [];

// assegno un valore al mio bottone per generare e un evento
const generaEl = document.getElementById("genera");

generaEl.addEventListener(
    "click",
    function () {
        // aggiungo una condizione per verificare che sia il primo click e che i miei array siano vuoti
        if (randomFirst.length != 0 || randomSecond.length != 0) {
            randomFirst = [];
            randomSecond = [];
        }

        // scelgo la quantità di numeri da stampare
        let totRandomFirst = Math.floor((Math.random() * 30) + 1);
        let totRandomSecond = Math.floor((Math.random() * 30) + 1);

        /******************
         PRIMO
         ******************/
        // genero un numero finchè il mio totale non corrisponde alla quantità di numeri da generare del primo array
        for (let i = 0; i != totRandomFirst; i++) {

            // genero un nuovo numero e lo salvo nella variabile
            let numRandom = Math.floor((Math.random() * 100) + 1);

            // pusho il numero appena generato nel mio array per salvarlo
            randomFirst.push(numRandom);
        };

        /******************
         SECONDO
         ******************/
        // genero un numero finchè il mio totale non corrisponde alla quantità di numeri da generare del secondo array
        for (let i = 0; i != totRandomSecond; i++) {

            // genero un nuovo numero e lo salvo nella variabile
            let numRandom = Math.floor((Math.random() * 100) + 1);

            // pusho il numero appena generato nel mio array per salvarlo
            randomSecond.push(numRandom);
        };

        // stampo gli array originali
        document.getElementById("arrayFirst").innerHTML = "Ciao, sono il tuo primo array! E ho ben " + randomFirst.length + " elementi! <br>Che sono " + randomFirst + ".";
        document.getElementById("arraySecond").innerHTML = "Ciao, sono il tuo secondo array! E ho ben " + randomSecond.length + " elementi! <br>Che sono " + randomSecond + ".";
    }
);

// assegno un valore al mio secondo bottone per generare e un evento
const fixaEl = document.getElementById("fixa");

fixaEl.addEventListener(
    "click",
    function () {
        // creo una variabile per la lunghezza finale da usare a fini di visualizzazione
        let maxLenght;

        // confronto i due array
        if (randomFirst.length < randomSecond.lenght) {
            // trovo la differenza
            const totRepair = randomSecond.lenght - randomFirst.length;
            // aggiungo elementi finchè i due array non sono uguali
            for (let i = 0; i < totRepair; i++) {

                // genero un nuovo numero e lo salvo nella variabile
                let numRandom = Math.floor((Math.random() * 100) + 1);

                // pusho il numero appena generato nel mio array per salvarlo
                randomFirst.push(numRandom);

                // salvo la lunghezza massima generata a fini di visualizzazione
                maxLenght = randomSecond.lenght;
            }
        } else if (randomSecond.lenght < randomFirst.length) {
            // trovo la differenza
            const totRepair = randomFirst.length - randomSecond.lenght;
            // aggiungo elementi finchè i due array non sono uguali
            for (let i = 0; i < totRepair; i++) {

                // genero un nuovo numero e lo salvo nella variabile
                let numRandom = Math.floor((Math.random() * 100) + 1);

                // pusho il numero appena generato nel mio array per salvarlo
                randomSecond.push(numRandom);

                // salvo la lunghezza massima generata a fini di visualizzazione
                maxLenght = randomFirst.length;
            }
        };

        // stampo gli array finali
        document.getElementById("arrayFirstFinal").innerHTML = "Ciao, siamo i tuoi nuovi array! E ora abbiamo entrambi " + maxLenght + " elementi. <br>Io sono il primo e ora contengo: " + randomFirst + ".";
        document.getElementById("arraySecondFinal").innerHTML = "Io sono il secondo e ora contengo: " + randomSecond + ".";
    }
);