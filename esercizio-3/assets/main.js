const consumi = [];
let i;


for (i = 0; i < 3; i++) {
    consumi[i] = Number(prompt("Inserisci un consumo elettrico giornaliero"));
}


consumi.forEach(consumo => {

    if (consumo > 15) {
        console.warn(`Consumo Alto: ${consumo}kWh`);
    } else {
        console.log(`Consumo Normale: ${consumo}kWh`);
    }
});