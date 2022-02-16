let titolo = document.getElementById('titolo');

let counter = 0;

let i = 0;

//for loop

// for(i = 0; i < 5; i++) {
//     let prmtNum = parseInt(prompt('inserisci numero:'));
//     counter += prmtNum;
// }

// titolo.innerHTML = counter;

//while loop

while(i < 5) {
    let prmtNum = parseInt(prompt('inserisci numero:'));
    counter += prmtNum;
    i++;
}

titolo.innerHTML = counter;