import { ReportPage } from './../pages/report/report';
import { MedicinePage } from './../pages/medicine/medicine';
import { ClientPage } from './../pages/client/client';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExpensePage } from '../pages/expense/expense';
import { SalePage } from '../pages/sale/sale';
import { AppointmentPage } from '../pages/appointment/appointment';
import { StaffPage } from '../pages/staff/staff';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    ExpensePage,
    ClientPage,
    MedicinePage,
    SalePage,
    AppointmentPage,
    ReportPage,
    StaffPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    ExpensePage,
    ClientPage,
    MedicinePage,
    SalePage,
    AppointmentPage,
    ReportPage,
    StaffPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
