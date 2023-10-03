// Triangle of symbols
function triangleOfSymbols(length, symbols) {
  let output = '';
  for (let idx = 1; idx <= length; idx++) {
    output += symbols;
    console.log(output);
  }
}
triangleOfSymbols(20, '$');

// FizzBuzz
function FizzBuzz(arrLength) {
  for (let idx = 1; idx <= arrLength; idx++) {
    if (idx % 3 == 0 && idx % 5 == 0) console.log('FizzBuzz');
    else if (idx % 5 == 0) console.log('Buzz');
    else if (idx % 3 == 0) console.log('Fizz');
    else console.log(idx);
  }
}
FizzBuzz(15);

function chessTable(size) {
  for (let idxX = 0; idxX <= size; idxX++) {
    let output = '';
    for (let idxY = 0; idxY <= size; idxY++) {
      if ((idxX + idxY) % 2 === 0) {
        output += '  ';
      } else output += '##';
    }
    console.log(output);
  }
}
chessTable(10);

const square = function (x) {
  return x * x;
};
console.log(square(10));

setTimeout(() => console.log('set'), 2000);
Promise.resolve('promise');
console.log('console');


let array = ['classesScores', 'studentsScores']
let array2 = ['tito', 'puente']
array.forEach( (element , index) => {
  console.log(element, index)
  // array2.forEach((el) => {
  //   console.log(element, el)
  // })
})

console.log(17+33+17+17+17)