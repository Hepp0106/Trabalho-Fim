import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPetPageRoutingModule } from './cadastro-pet-routing.module';

import { CadastroPetPage } from './cadastro-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPetPageRoutingModule
  ],
  declarations: [CadastroPetPage]
})
export class CadastroPetPageModule {}
