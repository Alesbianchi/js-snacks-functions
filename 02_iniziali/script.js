/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(arr) {
    const initials = arr.map((names) => names[0]);
    return initials;
}


// Invoca la funzione qui e stampa il risultato in console
getInitials(names);
console.log(getInitials(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]