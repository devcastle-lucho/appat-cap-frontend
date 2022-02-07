import { EstacionTrabajo } from './estaciontrabajo.model';

export class Sucursal {
  constructor(
    public id: number,
    public codigo:string,
    public nombre:string,
    public codigoEstablecimiento:string,
    public direccionCompleta:string,
    public telefono:string,
    public correoElectronico:string,
    public tipo:string,
    public estacionesTrabajo: EstacionTrabajo[]
  ) {

  }
}
