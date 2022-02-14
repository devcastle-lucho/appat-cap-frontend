import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';

import { CentroCostos } from './../../models/centrocostos.model';
import { CentroCostosService } from './../../services/centro-costos.service';
import { ModalGuardarComponent } from './modal-guardar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
  public editar(centroCostos: CentroCostos): void {
    this.centroCostosActual = centroCostos;
    this.mostrarModal('EDICION');
  }

  public mostrarModal(tipo: string):void {
    const modalRef = this.modalService.open(ModalGuardarComponent, {size:'lg'});
    //Enviar informacion a la instacia del componente:
    modalRef.componentInstance.tipo =tipo;
    modalRef.componentInstance.centroCostos = this.centroCostosActual;

    //Obtener el resultado cuando se cierra de alguna forma el modal.
    modalRef.result.then((result) => {
      if(result =='OK') {
        console.log(result);
        this.listar();
      }
    });
  }

  public eliminar(id?:number):void {
    console.log(id);
    Swal.fire({
      title:'Confirmación',
      text:'¿Está seguro de eliminar el registro?',
      icon:'question',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((r: any)=> {
       if(r.value) {
        this.cargando =true;
        this.centroCostosService.eliminar(id)
        .subscribe((resp) => {
          this.cargando =false;
          if(resp) {
            Swal.fire('Confirmación','¡El registro fue eliminado correctamente!','success');
            this.listar();
          } else
            Swal.fire('Confirmación','¡No se pudo realizar la eliminación!','warning');
        },
        (error: any) => {
          this.cargando =false;
          Swal.fire('Confirmación','¡Hubo problemas al eliminar el registro de centro de costos!','error');
        });
       }
    });
  }
}
