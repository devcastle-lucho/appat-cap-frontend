import { RouterModule, Routes } from '@angular/router';

import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalGuardarComponent } from './centro-costos/modal-guardar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PageModule { }
