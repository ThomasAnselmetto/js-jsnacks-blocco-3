//Ottieni un numero casuale in un range specificato. Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.

// creare un arrai con un push dato dal Math.random che si trova nel range dell'utente

// richiedi all'utente un valore minimo ed un valore massimo per stabilire il range

let numbers = [];

let valoreMinimo = parseInt(prompt("inserisci il valore minimo del range"));

let valoreMassimo = parseInt(prompt("inserisci il valore massimo del range"));

numbers.push(valoreMinimo);
numbers.push(valoreMassimo);

console.log(numbers);



Math.floor(Math.random() * numbers.length);

