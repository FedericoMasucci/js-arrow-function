const votes = [];
let i;


for (i = 0; i < 5; i++) {
    votes[i] = Number(prompt(`Inserisci 5 voti in trentesemi (voto numero ${i + 1})`));
}

const addDecimi = votes.map(vote => (vote <= 30 && vote > 0) ? vote / 3 : vote);

console.log(addDecimi);