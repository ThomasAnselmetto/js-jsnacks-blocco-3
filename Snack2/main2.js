// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// creo un array vuoto
// creo un prompt o un input per chiedere numeri all'utente
// creo un cinclo in cui inserisco un numero e lo faccio sommare al precedente,la condizione e' che la somma debba essere inferiore a 50,quando raggiungo 50 esco da ciclo

let numbers = [];

let clientNumber = parseInt(prompt("inserisci un numero da sommare..."))
console.log(clientNumber);

numbers.push(clientNumber);

console.log(numbers);
let userNumberSum = 0

let i = 0
while (userNumberSum < 50) {
    userNumberSum += clientNumber;
}
