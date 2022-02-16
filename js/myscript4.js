let arrayInvitati = ['luca', 'gianvito', 'nicolas', 'giuseppe', 'nicola'];

let titolo = document.getElementById('titolo');

let nomeUtente = prompt('Inserisci il tuo nome');

let boolFlag = false;

for(let i = 0; i < arrayInvitati.length; i++) {
    if(nomeUtente == arrayInvitati[i]) {
        boolFlag = true;
        break;
    } else {
        boolFlag = false;
    }
}

if(boolFlag == true) {
    titolo.innerHTML = 'benvenuto';
} else {
    titolo.innerHTML = 'nope';
}