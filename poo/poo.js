class Persona {
  constructor() {
    // Constructor vacío
  }
  nombre;
    getNombre() {
        return this.nombre;
    }
    setNombre(value) {
        this.nombre = value;
    }
  apellido;
    getApellido() {
        return this.apellido;
    }
    setApellido(value) {
        this.apellido = value;
    }
  edad;
    getEdad() {
        return this.edad;
    }
    setEdad(value) {
        this.edad = value;
    }
  sexo;
    getSexo() {
        return this.sexo;
    }
    setSexo(value) {
        this.sexo = value;
    }

  cumpleanios(){
    this.edad++;
  }

}
class Uruguayo extends Persona{
    CI;
    getCI() {
        return this.CI;
    }
    setCI(value) {
        this.CI = value;
    }
    Departamento;
    getDepartamento() {
        return this.Departamento;
    }
    setDepartamento(value) {
        this.Departamento = value;
    }
    Barrio;
    getBarrio() {
        return this.Barrio;
    }
    setBarrio(value) {
        this.Barrio = value;
    }
    imprimirInfo() {
        console.log(this)
    }
    mudarse(nuevoDepartamento, nuevoBarrio){
        this.Departamento = nuevoDepartamento;
        this.Barrio = nuevoBarrio;
    }
}

// Ejemplo de uso
const persona = new Persona();
persona.setNombre('edu');
persona.setApellido('Lopez')
persona.setSexo('M')
persona.setEdad(25)
for(let i=0; i< 10; i++){
    persona.cumpleanios()    
}
persona.cumpleanios()

const uru = new Uruguayo()
console.log(uru)
uru.setApellido('uruguayo')
uru.imprimirInfo()
uru.mudarse('depa1', 'barrio1')
uru.imprimirInfo()
