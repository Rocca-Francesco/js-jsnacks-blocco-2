// assegno un valore al mio pulsante
const numSendEl = document.getElementById("numSend");

// assegno un evento al click del pulsante
numSendEl.addEventListener(
    "click",
    function () {
        // assegno un valore al numero inserito
        const numUserEl = document.getElementById("numUser").value;
        // controllo che il valore inserito sia un numero
        if (isNaN(numUserEl)) {
            alert("Inserire dei numeri.");
        } else if (numUserEl % 2 == 0) {
            // controllo che il numero inserito sia pari
            document.getElementById("numResult").innerHTML = "Il tuo numero è pari!";
        } else {
            document.getElementById("numResult").innerHTML = "Il tuo numero è dispari!";
        }
    }
)