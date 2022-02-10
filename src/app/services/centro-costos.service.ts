import { BASE_ENDPOINT, HTTP_OPTIONS } from './../config/app';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CentroCostos } from './../models/centrocostos.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
