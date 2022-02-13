import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';

import { CentroCostos } from './../../models/centrocostos.model';
import { CentroCostosService } from './../../services/centro-costos.service';
import { ModalGuardarComponent } from './modal-guardar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-centro-costos',
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.scss']
})
export class CentroCostosComponent implements OnInit, DoCheck, AfterContentInit {
  cargando:boolean = false;
  lista: CentroCostos[] = [];
  centroCostosActual:CentroCostos = {};

  constructor(public centroCostosService: CentroCostosService,
              private modalService:NgbModal) { }

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
  public nuevo(): void {
    console.log('nuevo');
    this.mostrarModal('NUEVO');
  }

  public mostrarModal(tipo: string):void {
    const modalRef = this.modalService.open(ModalGuardarComponent, {size:'lg'});
    //Enviar informacion a la instacia del componente:
    modalRef.componentInstance.tipo =tipo;
    modalRef.componentInstance.centroCostos = this.centroCostosActual;

    //Obtener el resultado cuando se cierra de alguna forma el modal.
    modalRef.result.then((result) => {
      console.log(result);
    });
  }
}
