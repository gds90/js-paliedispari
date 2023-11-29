// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1) creo una funzione che mi permetta di sapere se la parola inserita dall'utente è palindroma o no
function palindromeWord(word){
    
    // 1.1) converto la parola tutta in minuscolo per evitare problemi di case sensitive e la associo ad una variabile
    const reverseWord = word.toLowerCase();
    
    // 1.2) controllo che la parola inserita dall'utente sia uguale alla parola invertita
    return reverseWord == reverseWord.split('').reverse().join('');
}

// 2) Permetto all'utente di inserire una parola tramite prompt
const userWord = prompt('Inserisci la parola che vuoi controllare se sia palindroma:');

// 3) controllo se la parola inserita dall'utente sia palindroma tramite la funzione precedentemente creata e avviso l'utente tramite un alert
if (palindromeWord(userWord)){
    alert(`${userWord} è una parola palindroma`);
}
else {
    alert(`${userWord} non è una parola palindroma`);
}
