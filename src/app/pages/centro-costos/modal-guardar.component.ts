import { Component, Input, OnInit } from '@angular/core';

import { CentroCostos } from './../../models/centrocostos.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-guardar',
  templateUrl: './modal-guardar.component.html',
  styles: [
  ]
})
export class ModalGuardarComponent implements OnInit {
  private centroCostos: CentroCostos = {} as CentroCostos;
  @Input()
  private tipo?: String;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(`Desde modal guardar "TIPO:" `+this.tipo);
  }

}
