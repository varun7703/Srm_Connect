import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage }from '@ionic/storage';
import { Http }from '@angular/http';
import { EventsPage } from '../events/events';


@Component({
  selector: 'page-eventform',
  templateUrl: 'eventform.html',
})
export class EventformPage {
  id:any;
  events:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public http:Http) {
    this.storage.get('id').then(val=>{
      this.id=val;
      console.log(this.id);

      let body = {
        eventid:this.id
      }
      this.http.post('http://34.93.191.211:5555/showdescription',body).subscribe(response =>{
        this.events=response.json();
    })
    })

    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventformPage');
  }
  next1(){
    this.navCtrl.popTo(EventsPage);
   }
}
