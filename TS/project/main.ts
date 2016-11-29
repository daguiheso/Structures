import './datos'

class Usuarios {
    // definiendo atributo que hace referencia a interface
    usuario : Usuario
    constructor( name: string, age: number ) {
        this.usuario = {
            name : name,
            age : age
        }
    }
}

const u = new Usuarios('Daniel', 23)