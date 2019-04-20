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
// 80. Среди столбцов целочисленной матрицы A(n х m), содержащих только положительные эле­менты, найти столбец
// с минимальным произведением элементов.

/* Algorithm
=> 
*/
const matrix = [[100, 51, 4], [20, 3, 7], [6, 8, 50]];

const getColumns = matrix => {
  const columns = [];

  for (let m of matrix) {
    for (let i = 0; i < m.length; i++) {
      columns[i] = columns[i] ? [...columns[i]] : [];
      columns[i].push(m[i]);
    }
  }

  return columns;
};

const getMatrixFromColumn = columns => {
  const matrix = [];

  for (let c of columns) {
    for (let i = 0; i < c.length; i++) {
      matrix[i] = matrix[i] ? [...matrix[i]] : [];
      matrix[i].push(c[i]);
    }
  }

  return matrix;
};

const multipliableCol = matrix => {
  if (!matrix || !matrix.length) {
    return [];
  }

  const columns = getColumns(matrix);
  const colsMultArr = [];

  for (let c of columns) {
    colsMultArr.push(c.reduce((a, b) => a * b));
  }

  const minColVal = Math.min(...colsMultArr);
  const minColIndex = colsMultArr.indexOf(minColVal);
  const minColumn = columns[minColIndex];

  console.log(
    `Column ${minColIndex +
      1} has the minimum multipliable with values of: ${minColumn}`
  );
  return minColumn;
};

// console.log(multipliableCol(matrix));

// Exercise 3 = 107
// 107. Из элементов массива a, состоящего из 2n элементов, получить массивы b и c следующим обра­зом: выбрать в массиве a
// два наиболее близких по значению элемента, меньший из них поме­стить в массив b, а больший - в массив c.
// Исключить из рассмотрения в массиве a эти элементы и продолжить выбор из оставшихся элементов.

const closestArr = arr => {
  if (!arr || !arr.length) {
    return [];
  }
  const b = [];
  const c = [];
  const allDiff = [];

  for (let a of arr) {
    for (let i = 0; i < a.length; i++) {
      if (a[i + 1]) {
        const left = a[i];
        const right = a[i + 1];

        const diff = parseInt(left) - parseInt(right);
        allDiff.push(diff);
      }
    }

    const minDiff = Math.min(...allDiff);
    const minDiffIndex = allDiff.indexOf(minDiff);
    const closests = [a[minDiffIndex], a[minDiffIndex + 1]];
    const [min, max] = [Math.min(...closests), Math.max(...closests)];
    b.push(min);
    c.push(max);
  }

  return {
    a: arr,
    b,
    c
  };
};

// console.log(closestArr(matrix));

// Exercise 4 = 155
// 155. Поменять местами столбцы матрицы так, чтобы элементы первой строки оказались упорядо­ченными.

const rearrangeColBySortingFirstRow = matrix => {
  if (!matrix || !matrix.length) {
    return [];
  }
  console.log(matrix);

  const columns = getColumns(matrix);
  const sortedFirstRow = matrix[0].sort((a, b) => a - b);
  console.log("Sorted first row: ", sortedFirstRow);
  console.log("Columns: ", columns);
  const sortedColumns = [];

  for (let i = 0; i < sortedFirstRow.length; i++) {
    const row = sortedFirstRow[i];

    const filterCol = columns.filter(arr => arr[0] === row);
    console.log(filterCol);
    sortedColumns.push(filterCol[0]);
  }
  console.log("Sorted columns ", sortedColumns);
  const initMatrix = getMatrixFromColumn(sortedColumns);
  console.log("initMatrix ", initMatrix);

  return initMatrix;
};

// console.log(rearrangeColBySortingFirstRow(matrix));

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
const matrix2 = [[100, 100, 4], [20, 3, 7], [6, 8, 50, 1, 5, 8]];

const removeRowWithoutRepeat = matrix => {
  if (!matrix || !matrix.length) {
    return [];
  }

  console.log("BEFORE =========", matrix);

  for (let ma of matrix) {
    const box = [];

    for (let m of ma) {
      if (!box.includes(m)) {
        box.push(m);
      } else {
        const maIndex = matrix.indexOf(ma);
        matrix.splice(maIndex, 1);
        break;
      }
    }
  }

  console.log("AFTER=========", matrix);
};

removeRowWithoutRepeat(matrix2);
