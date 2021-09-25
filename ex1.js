let number = prompt('Введите число:');
number = +number;
if (typeof(number) != 'number') {
  console.log('Это не число');
} else if (isNaN(number) === true) {
  console.log('Это NaN');
} else if (number%2 === 0) {
  console.log('Число чётное');
} else {
  console.log('Число нечётное');
}