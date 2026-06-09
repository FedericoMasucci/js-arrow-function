const votes = [];
let i;


for (i = 0; i < 5; i++) {
    votes[i] = Number(prompt("Inserisci 5 voti"));
}

const controllo = votes.every(vote => vote <= 30);

if (controllo) {
    const trovato = votes.find(vote => vote < 18);
    console.log(trovato);

} else
    console.log("Hai inserito un voto che supera il 30, riaggiorna la pagina");

