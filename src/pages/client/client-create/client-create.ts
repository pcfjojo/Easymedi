import { Client } from './../../../entities/client';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Repository, getRepository } from 'typeorm';

/**
 * Generated class for the ClientCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-create',
  templateUrl: 'client-create.html',
})
export class ClientCreatePage {
  client:Client;
  formgroup:FormGroup;
  id:AbstractControl;
  fname:AbstractControl;
  lemail:AbstractControl;
  address:AbstractControl;
  mobile:AbstractControl;
  phone:AbstractControl;
  date:AbstractControl;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder:FormBuilder,
    public toastCtrl: ToastController) {

      if(this.navParams.get('client_id') != null){
        let client_id =this.navParams.get('client_id');
        let clientRepo = getRepository('client') as Repository<Client>;
        this.getClient(client_id);
      }
    
      this.formgroup = formbuilder.group({
        id:['',[]],
        fname:['',Validators.compose([Validators.required,Validators.minLength(5)])],
        lemail:['',Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")])],
        address:['',[Validators.required]],
        mobile:['',Validators.compose([Validators.minLength(9),Validators.maxLength(15)])],
        phone:['',Validators.compose([Validators.minLength(9),Validators.maxLength(15)])],
        date:['',[]]
      });

      this.id = this.formgroup.controls['id'];
      this.fname = this.formgroup.controls['fname'];
      this.lemail = this.formgroup.controls['lemail'];
      this.address = this.formgroup.controls['address'];
      this.mobile = this.formgroup.controls['mobile'];
      this.phone = this.formgroup.controls['phone'];
      this.date = this.formgroup.controls['date'];
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad ClientCreatePage');
  }

 async save(){
    const client = new Client();
    if(this.id.value != ""){ //update 
      client.id = this.id.value;
    }
    client.name = this.fname.value;
    client.email = this.lemail.value
    client.address = this.address.value;
    client.mobile = this.mobile.value;
    client.phone = this.phone.value;
    client.dob = this.date.value;
    const clientRepository = getRepository('client') as Repository<Client>;
    if(this.id.value != ""){ //update 
      await clientRepository.updateById(client.id, client);
      this.presentToast();
      this.navCtrl.pop(); //todo 
    }else{
      await clientRepository.save(client);
      this.presentToast();
      this.navCtrl.pop();
    }
  }
 
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Client saved successfully',
        duration: 3000
      });
      toast.present();
    }

  async getClient(client_id : number){
    let clientRepo = getRepository('client') as Repository<Client>;
    this.client = await clientRepo.findOneById(client_id);
  }
}
