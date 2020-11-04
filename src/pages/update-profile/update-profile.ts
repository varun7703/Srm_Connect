import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { MyprofilePage } from '../myprofile/myprofile';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,public http:Http, public alertCtrl: AlertController, public storage: Storage) {
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

    let userdata = this.navParams.get('userdata');
    this.name = userdata[0].name;
    this.em = userdata[0].email;
    this.mob = userdata[0].phone;
    this.reg = userdata[0].regno;
    this.batch = userdata[0].batch;
    this.dept = userdata[0].dept;
    this.course = userdata[0].course;
    this.year = userdata[0].year;

  }
  ionViewWillEnter(){
    this.storage.get('userid').then((val1) => {
      this.user = val1;

      // let body = { userid: this.user }
      // console.log(body);
      // this.http.post('http://34.93.191.211:5555/disprofile', body).subscribe(res => {
      //   this.details = res.json();
      //   console.log("Details:", this.details);
      //   if (res.json() != null) {
      //     this.items = res.json();
      //   }
      //   else {
      //     alert("failed");
      //   }
      // })
    })
  }

  store(){
    let userdata={
    name: this.name,
    em:this.em,
    mob:this.mob,
    reg:this.reg,
    batch:this.batch,
    dept:this.dept,
    course:this.course,
    year:this.year,
    userid:this.user
  }
  console.log("Userdata: ",userdata);
  this.http.post('http://34.93.191.211:5555/updateprofile',userdata).subscribe(res=>{
        
  })
  const alert = this.alertCtrl.create({
    title: 'Changes Saved',
    buttons: ['OK']
  });
  alert.present();
  this.navCtrl.push(MyprofilePage);
}

cancel(){
  this.navCtrl.push(MyprofilePage);
}

}
