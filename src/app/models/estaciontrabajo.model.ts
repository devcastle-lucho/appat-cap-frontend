import { Sucursal } from './sucursal.model';

export interface EstacionTrabajo{
  id: string;
  codigo: string;
  nombre: string;
  anfitrion: any;
  sucursal: Sucursal;
}
