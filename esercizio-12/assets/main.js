const temps = [];
let i;


for (i = 0; i < 5; i++) {
    temps[i] = Number(prompt(`Inserisci 5 temperature medie giornaliere (temperatura numero ${i + 1})`));
}

const subzero = temps.find(temp => temp < 0);

if (subzero != undefined) {
    console.log(subzero);
} else
    console.log("Nelle temperature che mi hai inserito non si è mai sceso sotto lo zero");