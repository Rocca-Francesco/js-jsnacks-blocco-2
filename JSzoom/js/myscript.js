// dichiaro i risultati della mia squadra
const partiteEl = ["W", "W", "L", "X", "X", "W", "L", "X"];

// creo delle variabili per le mie vittorie/sconfitte/pareggi
let winEl = 0;
let loseEl = 0;
let drawEl = 0;

// per ogni variabile di partita verifico se è vittoria/sconfitta/pareggio
for (let i = 0; i < partiteEl.length; i++) {
    if (partiteEl[i] == "W") {
        winEl++;
    } else if (partiteEl[i] == "L") {
        loseEl++;
    } else if (partiteEl[i] == "X") {
        drawEl++;
    }
}

// scrivo il totale delle mie variabili
console.log("vittorie " + winEl, "perdite " + loseEl, "pareggi " + drawEl);