const prices = [10, 20, 30];
const iva = 22;

const newPrices = prices.map(price => price + (price * iva / 100));

console.log(newPrices);
