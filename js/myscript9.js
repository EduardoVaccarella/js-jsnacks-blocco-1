let titolo = document.getElementById('titolo');

let titolo2 = document.getElementById('titolo2');

let somma = 0;

let media = 0;

for(let i = 0; i < 10; i++) {
    somma += i;
    media = somma / 10;
}

titolo.innerHTML = somma;
titolo2.innerHTML = media;