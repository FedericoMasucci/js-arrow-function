const kilocalories = [];
let i;
const kJ = 4.184;

for (i = 0; i < 5; i++) {
    kilocalories[i] = Number(prompt(`Inserisci 5 calorie (caloria numero ${i + 1})`));
}


const convertKJ = kilocalories.map(kilocalorie => kilocalorie * kJ);

console.log(convertKJ);