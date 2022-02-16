let titolo = document.getElementById('titolo');

let sommaCifre = prompt('Inserisci numero a 4 cifre');
    sum = sommaCifre
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);


titolo.innerHTML = sum;