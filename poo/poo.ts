/*
1)Cree la clase “Persona” con atributos privados nombre,apellido, edad y sexo ademásincluir un constructor por defecto vacío y sus respectivos getters and setters, por último incluir un método que sea “cumpleaños” 
el cual lesuma en 1 a la edad de la persona. 
*/

class Persona {

    private _nombre: string;
    private _apellido: string;
    private _edad: number;
    private _sexo: string;
   
    constructor(){
        this._nombre='hola';
        this._apellido='mundo'
        this._edad=1000;
        this._sexo='m'
    }

    public getNombre(): string {
        return this._nombre;
    }
    public setNombre(value: string) {
        this._nombre = value;
    }
    public getApellido(): string {
        return this._apellido;
    }
    public setApellido(value: string) {
        this._apellido = value;
    }
    public getEdad(): number {
        return this._edad;
    }
    public setEdad(value: number) {
        this._edad = value;
    }
    public getSexo(): string {
        return this._sexo;
    }
    public setSexo(value: string) {
        this._sexo = value;
    }
}

const persona = new Persona()
persona.setNombre('persona')
console.log(persona.getNombre())
console.log(persona.getApellido())
console.log(persona.getEdad())
console.log(persona.getSexo())