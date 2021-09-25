let arr = ["orange", 1, 2, 0, 1, 2, 2.5, 3, 3, "blues"];
let countOdd = 0;
let countEven = 0;
let countZero = 0;
arr.forEach(function(item, index, array) {
    if (typeof(item) === 'number') {
        if (item === 0) {
            countZero++;
        } else if (item % 2 === 0) {
            countEven++;
        } else if (item % 2 === 1) {
            countOdd++;
        }
    }
});
console.log('Количество нулей: ' + countZero);
console.log('Количество четных: ' + countEven);
console.log('Количество нечётных: ' + countOdd);