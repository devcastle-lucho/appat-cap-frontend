import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';

import { CentroCostos } from './../../models/centrocostos.model';
import { CentroCostosService } from './../../services/centro-costos.service';

@Component({
  selector: 'app-centro-costos',
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.scss']
})
export class CentroCostosComponent implements OnInit, DoCheck, AfterContentInit {
  cargando:boolean = false;
  lista: CentroCostos[] = [];

  constructor(public centroCostosService: CentroCostosService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.listar();
  }
  ngDoCheck(): void {
   // console.log('ngDoCheck');
  }
  ngAfterContentInit():void {
    //console.log('ngAfterContentInit');
  }

  public listar(): void {
    this.lista = [];
    this.cargando =true;
    this.centroCostosService.listar()
    .subscribe((data:CentroCostos[]) => {
      console.log(data);
      this.lista = data;
      this.cargando =false;
    },
    (error: any) => {
      this.cargando =false;
    })    ;
  }
}
