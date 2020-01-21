
// Un alert espone 5 numeri casuali.
var numeriCasuali = [10,];
var arrayPC = [];
var punteggio = 0;
for (var i = 1; i < 6; i++) {
  numeriCasuali.push(getRandomIntInclusive(1, 100));
}
alert('5 numeri casuali da 1 a 100 ' + numeriCasuali);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
var i=0;
setTimeout(function () {
  while(i<5) {
    var numeroUtente = parseInt(prompt('inserisci un numero'));
    arrayPC.push(numeroUtente);
    console.log(arrayPC);
    i++;
  }
  var z=0;
  while (z<5){
    if (numeriListaInArray(numeriCasuali, arrayPC[z]) == true){
      punteggio++;
    }
    z++;
  }
  console.log(punteggio);

}, 1000);
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


// FUNZIONI

function numeriListaInArray(lista, numero) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      return true;
    }
    else {
      return false;
    }
  }
}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
