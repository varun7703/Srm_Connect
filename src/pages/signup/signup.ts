import { Component } from '@angular/core';
//import { Storage } from '@ionic/storage';
import { NavController, NavParams} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import {MenuController} from 'ionic-angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage { 
  name:any;
  em:any;
  pas:any;
  mob:any;
  reg:any;
  batch:any;
  course:any;
  dept:any;
  year:any;
  profpic:File;
  file:File;
  profpicname:any;
  activeMenu:string;

  private sup: FormGroup;
  unpattern="^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
  paspattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
  mobpattern="^[0-9]{10}$";
  regpattern="^[A-Z]{2}[0-9]{13}$";
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder,public http:Http,
              public menu: MenuController) {

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

    this.menu1Active();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  menu1Active(){
    this.activeMenu = 'menu1';
    this.menu.swipeEnable(false);
    }

  supForm() {
    console.log(this.sup.value);
  }
  next() {
  this.navCtrl.push(HomePage);
  this.navCtrl.setRoot(HomePage);
  }
  store(){
    const body = new FormData();
    this.profpicname = Date.now()
     body.append('profpic', this.file,this.profpicname)
     body.append('name', this.name,)
     body.append('em', this.em)
     body.append('pas', this.pas)
     body.append('mob', this.mob)
     body.append('reg', this.reg)
     body.append('batch', this.batch)
     body.append('dept', this.dept)
     body.append('course', this.course)
     body.append('year', this.year)

    let userdata={
    name: this.name,
    em:this.em,
    pas:this.pas,
    mob:this.mob,
    reg:this.reg,
    batch:this.batch,
    dept:this.dept,
    course:this.course,
    year:this.year,
    body:body
  }
  userdata;
  this.http.post('http://34.93.191.211:5555/signup',body).subscribe(res=>{
        
  })

  this.navCtrl.push(HomePage);
  this.navCtrl.setRoot(HomePage);

}
changeListener($event): void {
  this.file = $event.target.files[0];
}
uploadpic(){
  
  const body = new FormData();
 this.profpicname = Date.now()
  body.append('profpic', this.file,this.profpicname)
  this.http.post('http://34.93.191.211:5555/uploadpic',body).subscribe(res=>{
        
  })
}
}

