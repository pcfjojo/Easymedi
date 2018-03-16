import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinePage } from './medicine';

@NgModule({
  declarations: [
    MedicinePage,
  ],
  imports: [
    IonicPageModule.forChild(MedicinePage),
  ],
})
export class MedicinePageModule {}
