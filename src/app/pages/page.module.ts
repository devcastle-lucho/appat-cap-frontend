import { RouterModule, Routes } from '@angular/router';

import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { CommonModule } from '@angular/common';
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
    CentroCostosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageModule { }
