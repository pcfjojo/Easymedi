import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientCreatePage } from '../client-create/client-create';

/**
 * Generated class for the ClientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html',
})
export class ClientListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientListPage');
  }


  goToPage(pageName : string){
    this.navCtrl.push(pageName);
  }
}
