let arrayDispari = [];

let numeroInserito;

let titolo = document.getElementById('titolo');

for(let i = 0; i < 6; i++) {
    numeroInserito = prompt('inserisci numero');
    if(numeroInserito % 2 == 0) {
        
    } else {
        arrayDispari.push(numeroInserito);
    }
}

titolo.innerHTML = arrayDispari;