let arrayVariable = [1, 4, 2, 6, 7];
let arrayLength = arrayVariable.length;
console.time()
let sum = 0;
for (counter = 0; counter < arrayLength; counter++) {
    sum += arrayVariable[counter];
}
console.timeEnd();

let arrayContainer = [1, 4, 2, 6, 7];

function sumArray(first, second, third, fourth, fifth) {
    console.time();
    let sum = first + second + third + fourth + fifth;
    console.log("The sum : ", sum);
    console.timeEnd();
}
sumArray(...arrayContainer);

console.time();
let arrayStore = [1, 4, 2, 6, 7];
let arrayStoreLength = arrayStore.length;
let sumAll = 0;
let counter = 0;
while (counter < arrayStoreLength) {
    sumAll += arrayStore[counter];
    counter++;
}
console.log("Summation is : ", sumAll);
console.timeEnd();