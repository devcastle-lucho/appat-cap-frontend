import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CentroCostos } from './../../models/centrocostos.model';
import { CentroCostosService } from './../../services/centro-costos.service';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-guardar',
  templateUrl: './modal-guardar.component.html',
  styles: [
  ]
})
export class ModalGuardarComponent implements OnInit {
  formCC?:FormGroup;
  private centroCostos: CentroCostos = {} as CentroCostos;
  @Input()
  private tipo?: String;
  constructor(public activeModal: NgbActiveModal,
    private fb:FormBuilder,
    private  centroCostosService:CentroCostosService) {
      this.crearFormulario();
    }

  ngOnInit(): void {
    console.log(`Desde modal guardar "TIPO:" `+this.tipo);
  }
  private crearFormulario(): void {
    this.formCC = this.fb.group({
      codigo: ['',Validators.required],
      nombre: ['',Validators.required],
    });
  }
  public guardar():void {
    console.log(this.formCC);
    if(this.tipo ==='NUEVO')
      this.crear();
    else this.editar();
  }
  private crear():void{
    this.obtenerDatos();
    this.activeModal.close(this.centroCostos);
  }
  private editar():void{

  }

  private obtenerDatos(): void{
    const codigo = this.formCC?.value.codigo;
    const nombre= this.formCC?.value.nombre;

    this.centroCostos.codigo =codigo;
    this.centroCostos.nombre = nombre;
  }
}
