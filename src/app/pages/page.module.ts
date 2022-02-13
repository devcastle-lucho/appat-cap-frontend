import { RouterModule, Routes } from '@angular/router';

import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { CommonModule } from '@angular/common';
import { ModalGuardarComponent } from './centro-costos/modal-guardar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "centro-costos",
    data: {
      title: "Centro de costos",
      urls: [{ title: "Centro de costos" }],
    },
    component: CentroCostosComponent,
  },
];

@NgModule({
  declarations: [
    CentroCostosComponent,
    ModalGuardarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageModule { }
