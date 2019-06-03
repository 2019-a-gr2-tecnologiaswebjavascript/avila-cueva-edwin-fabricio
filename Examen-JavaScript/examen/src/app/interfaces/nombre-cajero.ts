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
            }
        ],
        }
    ];
}