const cities = [];
let i;

for (i = 0; i < 5; i++) {
    cities[i] = prompt(`Inserisci 5 città (citta numero ${i + 1})`);
}

const controlTwoCity = cities.some(city => city.includes(" "));
console.log(controlTwoCity);