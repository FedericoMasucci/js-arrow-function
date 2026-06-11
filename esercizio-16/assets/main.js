const days = [];
let i;


for (i = 0; i < 5; i++) {
    days[i] = Number(prompt(`Inserisci i giorni di scadenza rimanenti a 5 documenti (documento numero ${i + 1})`));
}

const expirationDays = days.find(day => day <= 7);

console.log(expirationDays);