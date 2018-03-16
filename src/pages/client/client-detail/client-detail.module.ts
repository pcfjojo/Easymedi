import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientDetailPage } from './client-detail';

@NgModule({
  declarations: [
    ClientDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientDetailPage),
  ],
})
export class ClientDetailPageModule {}
