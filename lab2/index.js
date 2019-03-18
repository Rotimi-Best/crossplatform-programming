const { log } = console;

// VARIANT 15
// Exercise 1 = 40
// Exercise 2 = 80
// Exercise 3 = 107
// Exercise 4 = 155
// Exercise 5 = 163
// Questions to answer = 26, 2, 35

// Exercise 1 = 40
// 40. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в мас­сиве, то выведите ноль.

/* Algorithm
=> Get the array from the arg
=> loop through the elements in the array
=> when you find the first 0 indicate it
=> then begin storing all the numbers in another array
=> until you get to another zero
=> if we don't find up to 2 zeros then return zero
=> if we find 2 zeros then add all the numbers in the second array together
*/

/* Edge cases
=> if no argument return 0
=> if not a array return 00
*/

const addInBetweenZero = arr => {
  if (!arr || !Array.isArray(arr)) {
    return 0;
  }

  let foundZeros = 0;
  let numberInBetween = 0;

  for (const no of arr) {
    // if we have gotten the numbers in between 1 and 2 stop the array
    if (foundZeros === 2) {
      break;
    }

    if (foundZeros === 1 && foundZeros < 2) {
      numberInBetween += no;
    }

    if (no === 0) {
      foundZeros += 1;
    }
  }

  if (foundZeros === 2) {
    return numberInBetween;
  } else return 0;
};

/* Solution
 log(addInBetweenZero([])); // 0
 log(addInBetweenZero([1, 2, 3, 0])); // 0
 log(addInBetweenZero([0,1, 2, 3, 0])); // 6
*/

// Exercise 2 = 80
// 80. Среди столбцов целочисленной матрицы A(n х m), содержащих только положительные эле­менты, найти столбец с минимальным произведением элементов.

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

// Exercise 3 = 107
// 107. Из элементов массива a, состоящего из 2n элементов, получить массивы b и c следующим обра­зом: выбрать в массиве a два наиболее близких по значению элемента, меньший из них поме­стить в массив b, а больший - в массив c. Исключить из рассмотрения в массиве a эти элементы и продолжить выбор из оставшихся элементов.

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

// Exercise 4 = 155
// 155. Поменять местами столбцы матрицы так, чтобы элементы первой строки оказались упорядо­ченными.

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

// Exercise 5 = 163
// 163. Удалите строки матрицы, не имеющие ни одного повторяющегося элемента.
