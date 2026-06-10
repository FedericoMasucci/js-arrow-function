const tests = [];
let i;


for (i = 0; i < 5; i++) {
    tests[i] = prompt(`Inserisci true/false in base a se hai o non hai superato il test (test numero ${i + 1})`);
}


const allTruetest = tests.every(test => test === "true");

if (allTruetest) {
    console.log("Tutti i test sono stati superati");
} else
    console.log("Almeno un test non è stato superato. IMPEGNATI DI PIU'");