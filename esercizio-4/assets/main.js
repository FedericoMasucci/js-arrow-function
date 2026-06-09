const names = [];
let i;

for (i = 0; i < 5; i++) {
    names[i] = prompt("Inserisci 5 nomi");
}


const selectNames = names.filter(name => name.length >= 3 && name.length <= 5);

console.log(selectNames);