

function groceryTracker() {
let sumTotal = 0;
arrayCrocery = document.getElementsByClassName("grocery");

for(let i = 0; i<arrayCrocery.length;i++){
    sumTotal= sumTotal + parseFloat(arrayCrocery[i].value);
}
 document.getElementById('result').innerText = `El precio total es: ${sumTotal}`;
}

