import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';

import { CentroCostos } from './../../models/centrocostos.model';
import { CentroCostosService } from './../../services/centro-costos.service';

@Component({
  selector: 'app-centro-costos',
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.scss']
})
export class CentroCostosComponent implements OnInit, DoCheck, AfterContentInit {
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
    this.centroCostosService.listar()
    .subscribe((data:any) => {
      console.log(data);
    });
  }
}
