import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientPage } from './client';

@NgModule({
  declarations: [
    ClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientPage),
  ],
})
export class ClientPageModule {}
