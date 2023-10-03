// HACKERRANK DESAFIO JS
//funciones
function factorial(number){
    if (number == 0 || number == 1){
        return 1;
    } else { return number*factorial(number-1)}} 
console.log(factorial(10))

// calculo area y superficie circulo con constantes
function main(radius){
    const PI = Math.PI;
    
    console.log(PI*(radius**2))
    console.log(PI*2*radius)
}
main(5)
// practica if
function getGrade(score){
    let grade;
    if (score >= 0 && score <= 5){
        grade = 'F';
    } else if (score > 5 && score <= 10) {
        grade = 'E';
    } else if (score > 10  && score <= 15) {
        grade = 'D';
    } else if (score > 15 && score <= 20) {
        grade = 'C';
    }  else if (score > 20 && score <= 25) {
        grade = 'B';
    } else {grade = 'A';}   
    return grade;
}
console.log(getGrade(2))
console.log(getGrade(10))
console.log(getGrade(11))
console.log(getGrade(17))
console.log(getGrade(21))
console.log(getGrade(26))

// SWITCH dependiendo la primer letra de un string
function getLetter(s) {
    let letter;
    
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}
console.log(getLetter('a'))
console.log(getLetter('b'))
console.log(getLetter('j'))
console.log(getLetter('p'))
console.log(getLetter('z'))
let condicion = 'aeiou'.includes('a')
console.log(typeof(condicion))
//el segun numero mas grande de un array
function getSecondLargest(nums) {
    // Complete the function
   let first = nums[0]; 
   let second = -1;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
        second = first;
        first = nums[i]
        console.log(second)
    }

    if (nums[i] > second && nums[i] < first) {
        second = nums[i];
        console.log(second)
    }
    }
    return second
}
console.log(getSecondLargest([1,2,3,49,55]))


//Arrays
function vowelsAndConsonants(s) {
    let consonants = new Array()
    let vowel = new Array()
    const vowels = ['a','e','i','o','u']
    for (let char in s){
        if(vowels.includes(s[char])){
            vowel.push(s[char])
        }else {consonants.push(s[char])}
    }
    for(let char in vowel){
        console.log(vowel[char])
    }
    for(let char in consonants){
        console.log(consonants[char])
    }
}
vowelsAndConsonants('javascriptloops')