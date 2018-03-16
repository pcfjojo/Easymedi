import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

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

  formgroup:FormGroup;
  fname:AbstractControl;
  lemail:AbstractControl;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder:FormBuilder) {

      this.formgroup = formbuilder.group({
        fname:['',[Validators.required,Validators.minLength(5)]],
        lemail:['',[Validators.required,Validators.email]]
      });

      this.fname = this.formgroup.controls['fname'];
      this.lemail = this.formgroup.controls['lemail'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientCreatePage');
  }

}
