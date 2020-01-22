
// Un alert espone 5 numeri casuali.
var numeriCasuali = [];
var arrayPC = [];
var numeriIndovinati = [];
var punteggio = 0;

while (5 > numeriCasuali.length) {
  var numeroCasuale = getRandomIntInclusive(1,5);
  console.log(numeroCasuale);
  if (numeriListaInArray(numeriCasuali,numeroCasuale)==false) {
    numeriCasuali.push(numeroCasuale);

    console.log(numeriCasuali);
  }
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
  // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
  var z=0;
  while (z < arrayPC.length){
    if (numeriListaInArray(numeriCasuali, arrayPC[z]) == true){
      punteggio++;
      numeriIndovinati.push(arrayPC[z]);
    }
    z++;
  }
  console.log(punteggio, numeriIndovinati);

}, 30000);


// FUNZIONI

function numeriListaInArray(lista, numero) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      return true;
    }
  }
  return false;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
