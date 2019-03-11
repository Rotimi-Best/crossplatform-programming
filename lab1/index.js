"use strict";

const { log } = console;
// VARIANT 15
// Exercise 1 = 40
// Exercise 2 = 80
// Exercise 3 = 107
// Exercise 4 = 155
// Exercise 5 = 163
// Questions to answer = 26, 2, 35

// Exercise 1 = 40
// 40. Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'.

/* Algorithm
=> if begins with 'abc'
=> replace with 'www'
=> else add to the end of the string 'zzz'
*/

/* Edge cases
=> if no argument return undefined
=> if not a string return undefined
=> if length is less than 3 return undefined
*/

/**
 *
 * Replace abc in a string with www
 *
 * @param {string} string A valid string
 */
const abcReplacer = string => {
  if (!string || typeof string !== "string" || string.length < 3) {
    return;
  }

  let newString = "";
  let firstThreeLetters = string.substring(0, 3);

  if (firstThreeLetters === "abc") {
    newString = `www${string.slice(3)}`;
  } else {
    newString = `${string}zzz`;
  }

  return newString;
};

/* Solution
 log(abcReplacer([])); // undefined
 log(abcReplacer('abcefgh')); // wwwefgh
 log(abcReplacer('atecew')); // atecewzzz
*/

// Exercise 2 = 80
// 80. Дана строка. Вставить после каждого символа два случайных символа

/* Algorithm
=> loop through every element in a string
=> generate 2 random symbols
=> place the random symbol after each string in the loop
*/

/* Edge cases
=> if not arg empty return undefined
=> if not string return undefined
*/
/**
 *
 * Pick 2 elements from an array
 *
 * @param {array} array Array of symbols
 */
const pickTwoRandomElements = (array = []) => {
  if (!array.length || !Array.isArray(array)) {
    return {};
  }

  const first = array[Math.floor(Math.random() * array.length)];
  const second = array[Math.floor(Math.random() * array.length)];

  return { first, second };
};

/**
 *
 * Add random symbol after each letter in string
 *
 * @param {string} string String to mutate
 */
const generateAndAddToString = string => {
  if (!string || typeof string !== "string") {
    return;
  }

  let newString = "";
  const symbols = ["odessa", 4, "faith", 67, "AI", 95, "Army", 109, "AI-153"];

  for (const str in string) {
    const { first = "car", second = 59 } = pickTwoRandomElements(symbols);

    newString += `${string[str]}${first}${second}`;
  }

  return newString;
};

/* Solution
 log(generateAndAddToString([])); // undefined
 log(generateAndAddToString("ФК")); // Ф495К4Army
*/

// Exercise 3 = 107
// 107. Вывести слова, в которых нет повторяющихся букв; буквы упорядочены по алфавиту; с длиной, максимальной в этой строке.
// Print words that do not contain repeated letters; letters are sorted alphabetically; with a maximum length in this line.

/* Algorithm
=> 
*/

/* Edge cases
=> if not arg empty return undefined
=> if not string return undefined
*/

// Exercise 4 = 155
// 155. Даны натуральные числа от 20 до 50. Напечатать те из них, которые делятся на 3, но не делятся на 5.

/* Algorithm
=> loop through number 20 to 50
=> check if divisible by 3 
=> check if divisible by 5
=> return numbers that are divisible by 3 and not by 5
*/

/**
 * Return an array of numbers divisible by 3 and not by 5
 */
const divisibleByThreeOnly = () => {
  const numbers = [];

  for (let i = 20; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      numbers.push(i);
    }
  }

  return numbers;
};

/* Solution
   log(divisibleByThreeOnly()); // [ 21, 24, 27, 33, 36, 39, 42, 48 ]
*/

// Exercise 5 = 163
// 163. В бригаде, работающей на уборке сена, имеется N сенокосилок. Первая сенокосилка работала m часов,
// а каждая следующая на 10 минут больше, чем предыдущая. Сколько часов проработала вся бригада?

/* Algorithm to solution
=> Get the total number of сенокосилок and the amount of hours of the first сенокосилка
=> loop through the total number of people
=> Get the number of hours of the previous person 
=> Add 0.10 to it
=> Update the current amount of hours worked.

Given
N = 10
m = 5

PEOPLE => N - A0 = An || A0 + An = N;
N = 10 people
A0 = 1 person
An = 9 people

Hours
A0 = m hours
An = A(n-1) + 10min
*/

/* Edge cases
=> if N or m is not given return undefined
=> if N or m is not a number return undefined
*/

const calcNumOfHOursWorked = (N, m) => {
  if (!N || !m) {
    return;
  }

  if (typeof N !== "number" || typeof m !== "number") {
    return;
  }

  let hours = m;
  let prev = m;
  let hoursAndMin = "";
  let totalHours = 0;

  for (let i = 1; i < N; i++) {
    prev = Math.round((prev + 0.1) * 100) / 100;
    console.log("prev", prev);
    // prev = prev + 0.1;

    const [beforeDecimal, afterDecimal] = prev.toString().split(".");

    if (Number(afterDecimal) >= 6) {
      prev =
        Number(beforeDecimal) + 1 + Number(`0.${Number(afterDecimal) - 6}`);
    }

    hours = hours + prev;
    const [hourBeforeDecimal, hourAfterDecimal] = hours.toString().split(".");

    if (Number(hourAfterDecimal) >= 6) {
      hours =
        Number(hourBeforeDecimal) +
        1 +
        Number(`0.${Number(hourAfterDecimal) - 6}`);
    }
    console.log("hours", hours);
  }

  const [hour, minute = 0] = hours.toString().split(".");

  hoursAndMin = `${hour} hours ${minute ? " and " + minute + "0 minutes" : ""}`;

  return hoursAndMin;
};
// 5 + 5.10 +5.20+5.30+5.40
// 10.10 + 5.20 = 15.30+5.30 = 21 +5.40 = 26.40
log(calcNumOfHOursWorked(5, 5));
