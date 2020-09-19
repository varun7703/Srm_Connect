import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-newevent',
  templateUrl: 'newevent.html',
})
export class NeweventPage {
  title:any;
  venue:any;
  link:any;
  desc:any;
  date:any;
  category:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeweventPage');
  }
back(){
  this.navCtrl.push(EventsPage);
}
next(){
  var body= {
    title:this.title,
    venue:this.venue,
    link:this.link,
    des:this.desc,
    date:this.date,
    category:this.category
  }
  if(this.title&&this.venue&&this.desc&&this.date&&this.category){
  this.http.post('http://34.93.191.211:5555/uploadevent',body).subscribe(res =>{
    console.log("success")
  })     
  const alert = this.alertCtrl.create({
    title: 'Changes Saved',
    buttons: ['OK']
  });
  alert.present();               

this.navCtrl.pop();
}
}
}
