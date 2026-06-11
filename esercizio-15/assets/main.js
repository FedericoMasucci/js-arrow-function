const points = [];
let i;


for (i = 0; i < 5; i++) {
    points[i] = Number(prompt(`Inserisci 5 punteggi (punteggio numero ${i + 1})`));
}

const selectPoints = points.filter(point => point >= 70);

alert(` I punteggi più alti sono ${selectPoints}`);