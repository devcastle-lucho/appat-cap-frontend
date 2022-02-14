import { BASE_ENDPOINT, HTTP_OPTIONS } from './../config/app';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CentroCostos } from './../models/centrocostos.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CentroCostosService {
  private baseEnpoint = BASE_ENDPOINT + '/centrocostos';
  private cabeceras: HttpHeaders;

  constructor(private http:HttpClient) {
    this.cabeceras = HTTP_OPTIONS.headers;
  }

  public listar(): Observable<CentroCostos[]> {
    return this.http.get<CentroCostos[]>(this.baseEnpoint+'/', {
      headers: this.cabeceras
    });
  }
  public crear(centroCostos: CentroCostos):Observable<CentroCostos> {
    return this.http.post<CentroCostos>(
          `${this.baseEnpoint}/`,
          centroCostos,
          {headers: this.cabeceras}
        );
  }
  public editar(centroCostos: CentroCostos):Observable<CentroCostos> {
    return this.http.put<CentroCostos>(
      `${this.baseEnpoint}/${centroCostos.id}`,
      centroCostos,
      {headers: this.cabeceras}
    );
  }
  public eliminar(id?: number):Observable<boolean> {
    return this.http.delete(`${this.baseEnpoint}/${id}`,{headers: this.cabeceras})
    .pipe(
      map((resp) => {
        console.log(resp);
        return true;
      })
    );
  }
}
