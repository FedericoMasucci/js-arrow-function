const prices = [];
let i;
discount = 20;

for (i = 0; i < 5; i++) {
    prices[i] = Number(prompt("Inserisci 5 prezzi"));
}

const addDisconut = prices.map(price => price - (price * discount / 100));

console.log(addDisconut);
