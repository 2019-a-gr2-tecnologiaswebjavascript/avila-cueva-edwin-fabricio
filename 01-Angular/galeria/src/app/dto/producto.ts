export interface Producto{
    createdAt?: number;
    updatedAt?: number;
    id: number;
    valor:string,
    nombreTienda: string,
    cantidad?:number,
    fechaCompra?: Date
}