import { PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './../../../entities/client';
import { getRepository, Repository } from 'typeorm';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Content } from 'ionic-angular/navigation/nav-interfaces';

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
  clients: Client[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientListPage');
  
  }

  ionViewDidEnter(){
    this.getClients();
  }

  async getClients(){
    let clientRepo = getRepository('client') as Repository<Client>;
    this.clients = await clientRepo.find();
    console.log(this.clients);
  
  }

  public showDetails(event, item) {
    event.stopPropagation();
    this.navCtrl.push('ClientDetailPage', {'client_id' : item.id});

  }

  public async delete(item, client){
    item.close();
    const clientRepository = getRepository('client') as Repository<Client>;
    await clientRepository.removeById(client.id);
    this.presentToast();
    this.getClients();
  }
  
  goToPage(pageName : string){
    this.navCtrl.push(pageName);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Client deleted successfully',
      duration: 3000
    });
    toast.present();
  }
  

}
