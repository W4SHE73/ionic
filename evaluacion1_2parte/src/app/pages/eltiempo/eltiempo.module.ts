import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EltiempoPageRoutingModule } from './eltiempo-routing.module';

import { EltiempoPage } from './eltiempo.page';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EltiempoPageRoutingModule,
  ],
  declarations: [EltiempoPage]
})
export class EltiempoPageModule {}
