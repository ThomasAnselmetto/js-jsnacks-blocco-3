// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.


let userArrayNumber = parseFloat(prompt("inserisci un numero per stabilire gli arry da creare!!"));

console.log(userArrayNumber);



const numberOfArrays = userArrayNumber;
let arrays = [];

let i = 0;
while (i <= numberOfArrays) {
    const randomArrays = Math.floor(Math.random() * 100) + 10;
    arrays.push(randomArrays);
    i++
    console.log(arrays);
}


