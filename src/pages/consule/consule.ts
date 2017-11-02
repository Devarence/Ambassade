import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Consulats} from '../../models/consulats';

@Component({
  selector: 'page-consule',
  templateUrl: 'consule.html'
})
export class ConsulePage {
  consulat_bdd: Consulats[];
  consulat : Consulats = new Consulats();

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {

  }

}
