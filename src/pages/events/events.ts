import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EventformPage } from '../eventform/eventform';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';
import { NeweventPage } from '../newevent/newevent';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  selectedSegment: string;
  events: any;
  favs: any;
  as: any;
  items: any;
  user: any;
  checkFav: boolean;
  result: any;
  selCategories="";
  int:any;
  interests:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage: Storage, private socialSharing: SocialSharing, public alertCtrl: AlertController) {



  }



  ionViewWillEnter() {

    this.storage.set('status', 'true');

    this.storage.get('token').then((val) => {
      this.as = val;
      let body = {
        as: this.as
      }
      this.http.post('http://34.93.191.211:5555/disevents', body).subscribe(response => {
        // this.events = response.json();

         
        if (response.json().status == 500) {
          alert("session expired");
          this.navCtrl.setRoot(HomePage);
          this.storage.set('status',"false");
        }
        else {
          if (response.json() != null) {
            this.events = response.json();
          }
          else {
            alert("failed");
          }
        }
      })

    })
    this.storage.get('userid').then((val1) => {
      this.user = val1;

      let body = { userid: this.user }
      this.http.post('http://34.93.191.211:5555/fetchfavourites', body).subscribe(res => {
        this.favs = res.json();
        if (res.json() != null) {
          this.items = res.json();
        }
        else {
          alert("failed");
        }
      })

      this.http.post('http://34.93.191.211:5555/fetchinterests',body).subscribe(res =>{
        
        this.int=res;
        this.interests=(this.int._body).toString();
        
      })
    })


  }



  ionViewDidLoad() {
    this.selectedSegment = 'all';
  }

  addEvent(){
    this.navCtrl.push(NeweventPage);
  }

  next1(id) {
    this.storage.set('id', id);
    this.navCtrl.push(EventformPage);
  }

  next2(eventid) {
    let body = {
      userid: this.user,
      eventid: eventid
    }

    this.http.post('http://34.93.191.211:5555/addfavourites', body).subscribe(res => {
      if(res.json().status==500){
      const alert = this.alertCtrl.create({
        title: 'Already a Favourite',
        buttons: ['OK']
      });
      alert.present();
      }
      else{
      const alert = this.alertCtrl.create({
        title: 'Added to Favourites',
        buttons: ['OK']
      });
      alert.present();
    }
    });
    this.ionViewDidLoad();
    this.ionViewWillEnter();
  }

  next(){
    let body = {
      userid:this.user,
      interests:this.selCategories
    }
  this.http.post('http://34.93.191.211:5555/uploadinterests', body).subscribe(res => {
    if(res.json().status==200){
      const alert = this.alertCtrl.create({
        title: 'Interests Updated!',
        buttons: ['OK']
      });
      alert.present();
      this.ionViewWillEnter();
      this.ionViewDidLoad();
      this.ionViewWillEnter();
    }
    
  })
  }

  Delete(eventid: any) {
    let body = {
      userid: this.user,
      eventid: eventid
    }
    this.http.post('http://34.93.191.211:5555/delfavourites', body).subscribe(res => {
      const alert = this.alertCtrl.create({
        title: 'Deleted from Favourites',
        buttons: ['OK']
      });
      alert.present();
    });
    this.ionViewDidLoad();
    this.ionViewWillEnter();
    this.selectedSegment="favo";
  }

  all() {
    this.ionViewWillEnter();

  }

  favourites() {
  }

  share(title,description,link) {
    this.socialSharing.share( description , title , link).then(() => {

      console.log('Shared Successfully');

    }).catch(() => {

      console.log('Sharing Failed');

    });
  };
  Has(category:string){
    if(this.interests){
    return((this.interests).indexOf(category));
    }
  }
}
