
function mainMenu(){
    console.log('Ingrese la opcion del ejercicio a ejecutar \n')
    console.log('1 --> Validar Sexo ')
    console.log('2 --> Suma enteros en un array es par? ')
    console.log('3 --> Arreglo con al menos 1 numero par ')
    console.log('4 --> Palabras iguales ')
    console.log('5 --> Numero capicua ')
    console.log('6 --> Comparacion numeros a < b ?')
    console.log('7 --> Multiplicacion y division iguales ')
    console.log('8 --> Valores entre Arreglos ')
    console.log('9 --> Palabras reversas ')
    console.log('10 --> Palabras cambiando vocales \n')

    function generarNumeroAleatorio() {
        // Generar un número aleatorio entre 0 y 1
        const numeroAleatorio = Math.random();
      
        // Multiplicar por 10 para obtener un número entre 0 y 10
        const numeroEnRango = numeroAleatorio * 11;
      
        // Redondear hacia abajo para obtener un número entero del 0 al 9
        const numeroEntero = Math.floor(numeroEnRango);
      
        // Sumar 1 para obtener un número del 1 al 10
        const numeroFinal = numeroEntero + 1;
      
        return numeroFinal;
    }
    let myArray = [1,2,3,4,5,6]
    let myArray2 = [1,2,-1,5,10,6]
    let myArray3 = [1,-1,'aa',3,true,5]
    let opciones = []

    for(let intentos=0; intentos<5; intentos++){
        let opcionElegida = generarNumeroAleatorio()
        opciones.push(opcionElegida)
        console.log('opcion elegida: '+ opcionElegida)
        console.log(opciones)
    switch (opcionElegida){
        case 1: 
                console.log(validateSex('M'))
                console.log(validateSex('F'))
                break;
        case 2: 
                console.log(addEven(myArray))
                console.log(addEven(myArray2))
                console.log(addEven(myArray3))
                break;
        case 3: console.log(isEvenIn(myArray))
                console.log(isEvenIn(myArray2))
                console.log(isEvenIn(myArray3))
                break;
        case 4: console.log(sameWords('hola','hola'))
                console.log(sameWords('hola', 'mundo'))
                console.log(sameWords('hola', true))
                break;
        case 5: console.log(capicua(20))
                console.log(capicua(202))
                console.log(capicua(12321))
                break;
        case 6: console.log(compareNumbers(2,3))
                console.log(compareNumbers(4,5))
                console.log(compareNumbers(4,2))
                break;
        case 7: console.log(complexOperations(2,3))
                console.log(complexOperations(4,5))
                console.log(complexOperations(2,1))
                break;
        case 8: console.log(compareArrays([1,2,3,4,5],[0,-1,8,2,3]))
                console.log(compareArrays([1,2,3,4,5],[0,-1,8,3]))
                break;
        case 9: console.log(reverseWord('hola'))
                console.log(reverseWord('olalo'))
                break;
        case 10: console.log(changeVowels('hola'))
                break;
        default: console.log('Opcion elegida fuera de las opciones permitidas') 
    }
    }
    
    function validateSex (personSex) {
        if (personSex == 'M' || personSex =='F')
            return true
        else return false
    }
    function addEven(Array){
        let conditionValues = Array[2] + Array[3] + Array[4]
        if ((conditionValues % 2) == 0){
            return true    
        } else return false
    }
    function isEvenIn(Array){
        const isEven = (number) => number % 2 === 0
        return Array.some(isEven)
    }
    function sameWords(word1, word2){
        return word1 === word2
    }
    function capicua(numero){
        let cadena = String(numero)
        let reverseNumber = cadena.split('').reverse().join('');
        return cadena === reverseNumber
    }
    function compareNumbers(num1, num2){
        return num1 < num2
    }
    function complexOperations(num1, num2){
        let multi = num1 * num2
        let division = parseInt( num1 / num2)
        return multi === division
    }
    function compareArrays(Array1, Array2){
        let counter = 0
    
        for(let i=0; i< Array1.length; i++){
            if (Array2.includes(Array1[i])){
                counter++
            }
            if (counter >= 2){
                return true;
            }
        }
        return false
    }
    function reverseWord(word){
        let reverseWord = word.split('').reverse().join('')
        return reverseWord
    }
    function changeVowels(word){
        return word.replace(/[aeiou]/gi, 'x')
    }
}

mainMenu()

