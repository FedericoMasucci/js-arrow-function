const reservations = [];
let i;


for (i = 0; i < 5; i++) {
    reservations[i] = prompt(`Inserisci lo stato della prenotazione  (prenotazione numero ${i + 1})`);
}

const trovaNull = reservations.find(reservation => reservation === "annullata");

console.log(trovaNull);