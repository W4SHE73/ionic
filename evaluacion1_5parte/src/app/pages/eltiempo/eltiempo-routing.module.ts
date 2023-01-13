import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EltiempoPage } from './eltiempo.page';

const routes: Routes = [
  {
    path: '',
    component: EltiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EltiempoPageRoutingModule {}
