
import { DatePipe } from "@angular/common";
import { CicloOffer } from './ciclooffer';

export interface OfferC{
    EmpresaId:number;
    nombre:string;
    descripcion:string;
    remuneracion:number;
    fechaI:Date;
    fechaF:Date;
    horario:string;
    listaCiclos:Array<CicloOffer>



}