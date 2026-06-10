const days = [];
let i;


for (i = 0; i < 5; i++) {
    days[i] = Number(prompt(`Inserisci le ore lavorative di 5 giorni (giorno numero ${i + 1})`));
}

const convertMinutes = days.map(day => day * 60);

console.log(convertMinutes);
