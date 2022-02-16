let titolo = document.getElementById('titolo');

let potenza = 0;

let risultato = 1;

let arrayRisultati = [];

while(risultato < 1000) {
    risultato = Math.pow(2, potenza);
    arrayRisultati.push(risultato);
    potenza++;
}

titolo.innerHTML = arrayRisultati;