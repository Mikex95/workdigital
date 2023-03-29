// Challenge 1:
//Bitte erstelle eine Funktion, welche eine Reihe von Zahlen annimmt und anschließend die zweitgrößte Zahl zurückgibt.

//secondLargest([10, 40, 30, 20, 50]) ➞ 40
//secondLargest([25, 143, 89, 13, 105]) ➞ 105
//secondLargest([54, 23, 11, 17, 10]) ➞ 23

// 1. Pseudo Arrays erstellen
// 2. Funktion mit Parameter array erstellen für dynamik
// 3. Array sortieren und zweit letzten Wert des Arrays ziehen
// 4. Ausgeben

const array1 = [10, 40, 30, 20, 50];
const array2 = [25, 143, 89, 13, 105];
const array3 = [54, 23, 11, 17, 10];

const secondHighestNumber = (array) => {
  sortArray = array.sort(function (a, b) {
    return a - b;
  });
  const getIndex = sortArray.length - 2;
  return sortArray[getIndex];
};

console.log(secondHighestNumber(array1));
console.log(secondHighestNumber(array2));
console.log(secondHighestNumber(array3));
