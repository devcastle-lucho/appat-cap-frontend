import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CentroCostos } from './../../models/centrocostos.model';
import { CentroCostosService } from './../../services/centro-costos.service';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-guardar',
  templateUrl: './modal-guardar.component.html',
  styles: [
  ]
})
export class ModalGuardarComponent implements OnInit {
  formCC?:FormGroup;
  @Input()
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
    if(this.tipo == 'EDICION') {
      this.cargarDataFormulario();
    }
  }
  private crearFormulario(): void {
    this.formCC = this.fb.group({
      codigo: ['',[Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(2)]],
      nombre: ['',Validators.required],
    });
  }
  private cargarDataFormulario(): void {
    this.formCC?.reset({
      codigo: this.centroCostos.codigo,
      nombre: this.centroCostos.nombre
    });
  }
  get f() {
    return this.formCC?.controls;
  }
  get codigoNoValido(){
    return this.formCC?.get('codigo')?.invalid && this.formCC.get('codigo')?.touched;
  }
  get nombreNoValido(){
    return this.formCC?.get('nombre')?.invalid && this.formCC.get('nombre')?.touched;
  }
  public guardar():void {
    console.log(this.formCC);
    if(this.formCC?.invalid) {
      Object.values(this.formCC.controls).forEach((control)=> {
        if(control instanceof FormGroup) {
          Object.values(control.controls).forEach((control2)=>control2.markAsTouched() );
        } else control.markAsTouched();
      });
      Swal.fire('Mensaje','¡Datos inválidos!','warning');
      return;
    }
    Swal.fire({
      title:'Confirmación',
      text:'¿Está seguro de guardar el registro?',
      icon:'question',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText:'Cancelar'
    }).then((r: any)=> {
       if(r.value) {
          if(this.tipo ==='NUEVO')
            this.crear();
          else this.editar();
       }
    });

  }
  private crear():void{
    this.obtenerDatos();
    this.centroCostosService.crear(this.centroCostos)
    .subscribe((data:CentroCostos) => {
      console.log('creado: '+data);
      Swal.fire('Confirmación','¡El registro fue creado correctamente!','success');
      this.activeModal.close('OK');
    },
    (error: any) => {
      console.log(error);
      console.log(error.error);
      Swal.fire('Confirmación','¡Hubo problemas al guardar el registro de centro de costos!','error');
    });
  }

  private editar():void{
    this.obtenerDatos();
    this.centroCostosService.editar(this.centroCostos)
    .subscribe((data:CentroCostos) => {
      console.log('creado: '+data);
      Swal.fire('Confirmación','¡El registro fue editado correctamente!','success');
      this.activeModal.close('OK');
    },
    (error: any) => {
      Swal.fire('Confirmación','¡Hubo problemas al guardar el registro de centro de costos!','error');
    });
  }

  private obtenerDatos(): void{
    const codigo = this.formCC?.value.codigo;
    const nombre= this.formCC?.value.nombre;

    this.centroCostos.codigo =codigo;
    this.centroCostos.nombre = nombre;
  }
}
