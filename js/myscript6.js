let titolo = document.getElementById('titolo');

let nNumeri = prompt('inserisci n numeri');

let contatore = 1;

let cubo;

let arrayCubi = [];

while(contatore <= nNumeri) {
    cubo = Math.pow(contatore, 3);
    arrayCubi.push(cubo);
    contatore++;
}

console.log(arrayCubi);