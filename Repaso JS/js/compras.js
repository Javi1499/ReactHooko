class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad= cantidad;
    }
}
//CRear los objetos
let tarea1 = new Tarea('Aprender JS', 'Alta')
let tarea2 = new Tarea('Aprender CSS', 'Baja')
let tarea3 = new Tarea('Aprender a cantar', 'Media')

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
