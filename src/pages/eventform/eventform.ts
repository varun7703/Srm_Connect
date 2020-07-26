import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { Storage }from '@ionic/storage';
import { Http }from '@angular/http';


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
        console.log(response.json())
        this.events=response.json();
          console.log(this.events);
    })
    })

    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventformPage');
  }
  next1(){
    this.navCtrl.push(EventsPage);
   }
}
