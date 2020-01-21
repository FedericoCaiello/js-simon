// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Un alert espone 5 numeri casuali.
var numeriCasuali = [];

for (var i = 1; i < 6; i++) {
  numeriCasuali.push(getRandomIntInclusive(1, 100));
}
console.log(numeriCasuali);
alert('5 numeri casuali da 1 a 100 ' + numeriCasuali);












function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
