export interface Cajero{
    nombreCajero?:string;
    arregloEntrenador?:[
        {
        nombreEntrenador?:string,
        apellidoEntrenador?:string,
        fechaNacimiento?:Date,
        numeroMedallas?: number,
        campeonActual?: boolean,   
        arregloPokemon?:[
            {
            numeroPokemon?: number,
            nombrePokemon?:string,  
            poderEspecialUno?: string,
            poderEspecialDos?: string,
            fechaCaptura?: Date,  
            nivel?: number 
            }
        ],
        }
    ];
}