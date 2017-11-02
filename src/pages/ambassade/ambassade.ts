import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Ambassade} from '../../models/ambassade';

@Component({
  selector: 'page-ambassade',
  templateUrl: 'ambassade.html'
})
export class AmbassadePage {
  //recupere les ambassade en base
  ambassade_bdd: Ambassade[];
  
  ambassade: Ambassade = new Ambassade();


  pays: String[] = new Array<String>('Afriaue du sud', 'Ailgerie');
  //ville_localisation: String = 'Abidjan';
  adresse: String[] = new Array<String>('Cocody President 08 BP 1806 Abidjan 08', 
    ' 53 Boulevard clozel 01 BP 1015 Abidjan 01');
  telephone:String[] = new Array<String>('22 44 59 63', '20 32 32 40');
  fax: String[] = new Array<String>('22 44 74 50', '20 22 37 12');
  email: String[] = new Array<String>('abidjan@dirco.gov.za', 'aucun');
  site_web: String[] = new Array<String>('aucun', 'aucun');
  heure_ouverture: String[] = new Array<String>('Lundi-jeudi 08H-16h30 / vend 8H-14H', 'inconnue');
  chef_mission: String[] = new Array<String>('Dayamand Naidoo', 'Boumediene Guennad');

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
        this.load();
  }

  //initialisation de la liste des amabassades
  initAmbassade()
  {
    this.storage.get('amabassade').then((resultat)=>{
      var result = resultat;
      var i = 0;
      if(result == null)
      {
        result = new Array<any>();
      }

      for(var item of this.pays)
      {
        result[i] = item;
        i = i+1;
        for(var item2 of this.adresse)
        {
          result[i] = item2;
          i = i+1;
          for(var item3 of this.telephone)
          {
            result[i] = item3;
            i = i+1;
            for(var item4 of this.fax)
            {
              result[i] = item4;
              i = i+1;
              for(var item5 of this.email)
              {
                result[i] = item5;
                i = i+1;
                for(var item6 of this.site_web)
                {
                  result[i] = item6;
                  i = i+1;
                  for(var item7 of this.heure_ouverture)
                  {
                    result[i] = item7;
                    i = i+1;
                    for(var item8 of this.chef_mission)
                    {
                      result[i] = item8;
                      i = i+1;
                    }
                  }
                }
              }
            }
          }
        }
      }
      
        this.storage.set('ambassade', result);
    })
      
  
  }

  //charger les ambassade presente et les afficher
  load()
  {
    this.initAmbassade();
   this.storage.get("ambassade").then((result)=>{
    this.ambassade_bdd = result;
    if(this.ambassade_bdd== null)
    {
      this.ambassade_bdd = new Array<Ambassade>();
    }
   });
  }
  

}
