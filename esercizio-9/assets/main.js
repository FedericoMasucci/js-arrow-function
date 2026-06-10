const reviews = [];
let i;


for (i = 0; i < 5; i++) {
    reviews[i] = Number(prompt(`Inserisci il numero di stelle della recensione (recensione numero ${i + 1})`));
}


const trovaReviewstop = reviews.filter(review => review > 4);

console.log(trovaReviewstop);
