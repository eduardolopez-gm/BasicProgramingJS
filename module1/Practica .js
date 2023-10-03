// operadores
let i = 4
let name1 = 'Eduardo' ;
let name2 =  'Vanessa';

console.log(1/2)
console.log(1/0)
console.log(3%2)
console.log(1%0)
console.log(2**3)
console.log('Comparaciones')
console.log(name1 === name2)
console.log(name1 !== name2)

console.log(i++)
console.log(i-=2)
console.log(i*2)
console.log('hello ' + name1)
//Utilizar esta comilla para incluir el contenido de la variable en el string
console.log(`hello world my name is  ${name1}`)


function Device(kind) {
    this.kind =  kind;
    this.printKind = function () {
      console.log(kind)
    }
  }
  var product = new Device("music player");
  product.kind = "radio";
  console.log(product.kind)
  product.printKind();




  
  
