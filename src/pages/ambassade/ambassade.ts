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

  selectedItem: any;

  //variable permettant remplir info_amb
  pays: String[];
  ville_localisation: String[];
  adresse: String[];
  telephone:String[];
  fax: String[];
  email: String[];
  site_web: String[];
  heure_ouverture: String[];
  chef_mission: String[];
  
  //information necessaire aux embassades
  info_amb: Array<{ pays: String, 
    ville_loc: String, 
    adresse: String,
    tel: String, 
    fax: String, 
    email: String, 
    site_web: String,
    Heure_ouv: String, 
    chef_mis: String }>;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
    this.load();
  }

  //initialisation de la liste des amabassades
  initAmbassade()
  {
    //initialisation de nosvariables
    this.pays = ['Afrique du sud', 'Algerie'];
    this.adresse = ['Cocody President 08 BP 1806 Abidjan 08', 
     '53 Boulevard clozel 01 BP 1015 Abidjan 01'];
    this.telephone = ['22 44 59 63', '20 32 32 40'];
    this.fax = ['22 44 74 50', '20 22 37 12'];
    this.email = ['abidjan@dirco.gov.za', 'aucun'];
    this.site_web = ['aucun', 'aucun'];
    this.heure_ouverture = ['Lundi-jeudi 08H-16h30 / vend 8H-14H', 'inconnue'];
    this.chef_mission = ['Dayamand Naidoo', 'Boumediene Guennad'];
    
    this.info_amb = [];
    var j : Number = this.pays.length;

   //boucle pour ajouter les info dans la variable info_amb et dans notre base
    for(let i=0; i <= j ; i++)
    {
      
      for (let a = 0; a<= j; a++){
      this.ville_localisation = ['Abidjan'];
      }

      //recuperation des donnees et initialisation de la variable info_amb
      this.info_amb.push({
        pays: this.pays[i],
        ville_loc: this.ville_localisation[i],
        adresse: this.adresse[i],
        tel: this.telephone[i],
        fax: this.fax[i],
        email: this.email[i],
        site_web: this.site_web[i],
        Heure_ouv: this.heure_ouverture[i],
        chef_mis: this.chef_mission[i]

      });

    
    }
      //stockage en bdd
      this.storage.set('ambassade.ville_localisation', this.ville_localisation);
      this.storage.set('ambassade', this.info_amb);

    /*
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
        result.unshift(this.ambassade);
        this.storage.set('ambassade', result);
    })
      */
  
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
