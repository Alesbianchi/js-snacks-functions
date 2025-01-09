/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocals (word) {
    let vocal = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vocal.includes(word[i])) {
            count++;
        }
    }
    // devo far comparire il risultato seguito dalle vocali che compongono il risultato
    return count + ' (' + word.split('').filter(letter => vocal.includes(letter)).join(', ') + ')';
    
}

// Invoca la funzione qui e stampa il risultato in console
countVocals(word);
console.log(countVocals(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
