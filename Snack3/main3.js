// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// chiedo N
let n = parseInt(prompt("Inserisci N"));

// per 0 o per N volte quindi finche i < n continuo

let i = 0;

// finche

while (i < n) {

    // creo un array

    const arrayGenerator = [];

    // creo elementi dentro array da 0 a 10

    let y = 0;
    while (y < 10) {

        // genero un numero casuale da 0 a 100

        let randoNumber = Math.floor(Math.random() * 100) + 1;

        arrayGenerator.push(randoNumber);

        y++;
    }

    // stampo l'array
    i++;


};