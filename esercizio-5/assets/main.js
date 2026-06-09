const words = [];
let i;

for (i = 0; i < 5; i++) {
    words[i] = prompt("Inserisci 5 parole");
}

const allLowercase = words.every(word => word === word.toLowerCase());

if (allLowercase) {
    console.log("Tutte le parole sono scritte in minuscolo");
} else
    console.log("C'è almeno un carattere Maiuscolo in una sola parola");