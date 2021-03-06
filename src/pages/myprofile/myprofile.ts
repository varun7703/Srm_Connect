import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { UpdateProfilePage } from '../update-profile/update-profile';



@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  name:any;
  em:any;
  pas:any;
  mob:any;
  reg:any;
  batch:any;
  course:any;
  dept:any;
  year:any;
  user:any;
  details:any;
  items:any;
  public sup: FormGroup;
  unpattern="^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
  paspattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
  mobpattern="^[0-9]{10}$";
  regpattern="^[A-Z]{2}[0-9]{13}$";

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,public http:Http, public storage: Storage, public alertCtrl: AlertController) {
    this.sup = this.formBuilder.group({
      username: ['',[Validators.required,Validators.pattern(this.unpattern)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999) ,Validators.pattern(this.mobpattern)]],
      regno: ['',[Validators.required,Validators.pattern(this.regpattern)]],
      batch: ['',[Validators.required]],
      course: ['',[Validators.required,Validators.pattern(this.unpattern)]],
      dept: ['',[Validators.required]],
      year:['',[Validators.required]]
    }, {});
  }
  ionViewWillEnter(){
    this.storage.get('userid').then((val1) => {
      this.user = val1;

      let body = { userid: this.user }
      console.log(body);
      this.http.post('http://34.93.191.211:5555/disprofile', body).subscribe(res => {
        this.details = res.json();
        console.log("Details:", this.details);
        if (res.json() != null) {
          this.items = res.json();
        }
        else {
          alert("failed");
        }
      })
    })
  }
//   store(){
//     let userdata={
//     name: this.name,
//     em:this.em,
//     mob:this.mob,
//     reg:this.reg,
//     batch:this.batch,
//     dept:this.dept,
//     course:this.course,
//     year:this.year,
//     userid:this.user
//   }
//   this.http.post('http://34.93.191.211:5555/updateprofile',userdata).subscribe(res=>{
        
//   })
//   const alert = this.alertCtrl.create({
//     title: 'Changes Saved',
//     buttons: ['OK']
//   });
//   alert.present();
//   this.ionViewWillEnter();
// }
goToUpdate(){
  this.navCtrl.push(UpdateProfilePage, {userdata: this.details});
}
  
}
