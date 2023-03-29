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

// Challenge 2

//Bitte erstelle eine Funktion, welche bei der Eingabe einer Zahl zwischen 1 und 26 den Buchstaben an der entsprechenden Stelle des Alphabets zurückgibt.
//Wenn die Zahl nicht in diesem Bereich liegt oder keine gültige Zahl ist, dann gebe „invalid“ zurück.

//letterAtPosition(1) ➞ "a"
//letterAtPosition(26.0) ➞ "z"
//letterAtPosition(0) ➞ "invalid"
//letterAtPosition(4.5) ➞ "invalid"

function letterAtPosition(number) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  if (Number.isInteger(number) && number >= 1 && number <= 26) {
    return abc[number - 1];
  } else {
    return "invalid";
  }
}
console.log(letterAtPosition(13)); // m
console.log(letterAtPosition(1)); //  a
console.log(letterAtPosition(24)); // x
// = MAX :D
console.log(letterAtPosition(28)); //invalid
