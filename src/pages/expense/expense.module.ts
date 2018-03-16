import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePage } from './expense';

@NgModule({
  declarations: [
    ExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensePage),
  ],
})
export class ExpensePageModule {}
