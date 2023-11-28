// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// FUNZIONI
// 1) Creo la funzione per generare un numero random da 1 a 5
function randomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

// 2) Creo la funzione per stabilire se un numero è pari o dispari
function oddOrEven(num){
    return num % 2 === 0;
}

// 3) Chiediamo all'utente di scegliere pari o dispari
let oddOrEven_choice = prompt('Scegli pari o dispari:');

// 4) Chiediamo all'utente di inserire un numero da 1 a 5
let number_choice = parseInt(prompt('Scegli un numero da 1 a 5 compresi'));

// 5) Controllo che l'utente inserisca un numero da 1 a 5
while (!(number_choice > 0 && number_choice < 6)){ 
    number_choice = prompt('Attenzione, hai inserito un valore errato. Inserisci un numero da 1 a 5 compresi');
}

// 6) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
let cpu_number = randomNumber();

// 7) Procedo con la somma dei due numeri
let sum = number_choice + cpu_number;

// 8) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let isSumEven = oddOrEven(sum);


// 9) Dichiariamo chi ha vinto
if (isSumEven && oddOrEven_choice === "pari"){
    alert("La somma dei numeri è pari, hai vinto!")
} 
else if (!isSumEven && oddOrEven_choice === "dispari") {
    alert("La somma dei numeri è dispari, hai vinto!");
}
else {
    alert("Hai perso!");
}