let extDino: number = 76_000_000
let favDino: string = "T-rex"
let extintos = true

function chanchitoFeliz(config: any) {
    return config
}

let animales = ['coshi', 'feli', 'pejelagarto']
let nums: number[] = [ 1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//animales.map(x => x.) el autocompletado sugiere metodos segun el tipo de dato
let tupla : [number, string[]] = [1, ['lola', 'lolo']]

enum Talla {Chica = 'S', Mediana = 'M', Grande = 'L', ExtraGrande = 'XL'}
const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success
type Direccion = {
        numero: number,
        calle: string,
        pais: string,
    }
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion,
}
const objeto: Persona = {
    id: 1, 
    nombre: "Holis", 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'por aqui a la derecha',
        pais: 'aqui mero'
    }
}

const arr: Persona[] = []