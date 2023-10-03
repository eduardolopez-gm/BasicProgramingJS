//Arrays
let a = []
console.log(a)
a = [1,2,3]
console.log(a)
console.log('\n')

console.log('cambio el valor del array')
a = Array.of(4,5,6)
console.log(a)
console.log('\n')

console.log('array en array')
let b = Array()
console.log(b)
b = [1, [2,3], 4, 5]
console.log(b)
console.log('\n')

console.log('nivelo el array ')
console.log(b.flat())

console.log('\n')
console.log('Creo un array con un valor por defecto')
let c = Array(10).fill(100)
console.log(c)
console.log(c.length)
console.log('\n')
console.log('Modifico la longitud del array')
c.length = 150;
console.log('Consulto el valor de un elemento que no esta definido')
console.log(c[100])
console.log('Imprimo el array')
console.log(c)
console.log(c.length)


console.log('\n')
console.log('UTILIZANDO METODOS DE ARRAYS')
let d = Array()
// push agregar elemento al array en la ultima posicion
d.push('a','b','c')
console.log(d)
//pop remueve el ultimo elemento del array
let e = d.pop()
console.log(e); console.log(d)
//unshift agrega elementos al inicio
d.unshift(0,1,2,3)
console.log(d)
//shift elimina el primer elemento del array
e = d.shift()
console.log(e); console.log(d)

d = Array()
console.log(Array.isArray(d))







