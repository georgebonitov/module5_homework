let arr = ["orange", 1, 2, "blues"];
console.log('Длина массива — ' + arr.length + '. Его элементы:')
arr.map(function(item, index, array) {
    console.log(item)
 });