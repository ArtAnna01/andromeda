// Написать функцию принимающую на вход массив положительных чисел, отсортировать числа в порядке увеличения и убрать повторяющиеся значения
function getResult(array) {
  return array.sort((a, b) => a - b).filter((i, j, a) => a.indexOf(i) === j);
}

console.log(getResult([1, 2, 5, 4, 4, 4, 3, 2, 1]));
