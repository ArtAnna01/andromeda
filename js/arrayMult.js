// Написать функцию принимающую на вход 2 аргумента, первый - массив чисел, второй - число на которое нужно умножить каждый Элемент массива. Функция должна возвращать массив с умноженными числами
function getResult(array, tar) {
  // Вариант 1
  //   return array.map((el) => {
  //     return el * tar;
  //   });

  //   Вариант 2
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(array[i] * tar);
  }
  return res;
}

console.log(getResult([1, 2, 3], 2));
