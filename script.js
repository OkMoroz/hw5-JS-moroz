// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let length = prompt(`Яка буде довжина масиву? Введіть мінімум п'ять елементів: `);
let elements = [];

for (let i = 0; i < length; i++) {
  let element = prompt(`Введіть елемент: `);
  elements.push(element);
}

let newArray = elements.map((item) => item);

console.log(`Ваш масив: ${newArray}`);

let sortedArray = newArray.sort((a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  } else {
    return 0;
  }
});
console.log(`Відсортований за зростанням масив: ${sortedArray}`);

let deletedArray = sortedArray.splice(1, 3);
console.log(`Видалені елементи з 2 по 4: ${deletedArray}`);
console.log(`Ваш масив тепер такий: ${sortedArray}`);
