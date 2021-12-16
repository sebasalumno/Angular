import { Provincia } from "./provincia";

export class Empresa{
    id!:number;
    name!:string;
    email!:string;
    provinciaId!:number;
    localidad!:String;
    direccion!:String;
    PV!:String|undefined;
    provincia?:Provincia;
}