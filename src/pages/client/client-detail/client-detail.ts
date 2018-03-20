import { Client } from './../../../entities/client';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getRepository, Repository } from 'typeorm';

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage {
  client_id: number;
  client : Client;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client_id = this.navParams.get('client_id');
  //  console.log(this.client_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailPage');
    this.getClient();
  }

  goToPage(pageName : string){
    this.navCtrl.push(pageName, {'client_id' : this.client_id});
  }

  async getClient(){
    let clientRepo = getRepository('client') as Repository<Client>;
    this.client = await clientRepo.findOneById(this.client_id);
    console.log(this.client);
  
  }
}
