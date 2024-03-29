import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { Http } from '@angular/http';
import {AddPage} from '../add/add'
import {DetailsPage} from '../details/details';
import {Storage} from '@ionic/storage'


@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  searchQuery: string = ''
  csearch=0
  category=""
  cc: boolean=false;
  uid:any
  questions: any;
  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing,
              public http: Http,
              public navParams: NavParams, public storage:Storage) {

                this.http.get('http://34.93.191.211:5555/disquestions').subscribe(res=>{
                    this.questions = res.json();
                },err =>{
                    console.log("Server Down")
                })
                this.storage.set('status','true');
                this.storage.get('userid').then((val1)=>{
                  this.uid =val1;
                })
                
  }

  
  Share(){
    this.socialSharing.share("Hey! Check This Out!  ",
                             "SRM Connect Forum Question",
                             "",
                             "    https://drive.google.com/open?id=1HL-sjAZze8j-eBqbUWzCWpWQNiAdDtMn")
  }
  Details(i:number){
    this.navCtrl.push(DetailsPage,{
      detail:this.questions[i]
    });
  }
  
  AddPage(){
    this.navCtrl.push(AddPage)
  }

  Search(){
    if(this.csearch==0)
      this.csearch=1;
    else 
      this.csearch=0;
  }

  Filter(category:string){
    var body={
      category: category
    }
    this.http.post('http://34.93.191.211:5555/filter',body).subscribe(res=>{
      this.questions=res.json();
    })
  }

  onCancel(){
    this.http.get('http://34.93.191.211:5555/disquestions').subscribe(res=>{
                    this.questions = res.json();
                },err =>{
                    console.log("Server Down")
                })
    
  }


  SearchString(term:string){
    var body={
      term:term
    }
    this.http.post('http://34.93.191.211:5555/search',body).subscribe(res=>{
      this.questions=res.json();
    })
  }
  Delete(i:number){
    var body= {
      questionid : this.questions[i].questionid
    }
    this.http.post('http://34.93.191.211:5555/delquestion',body).subscribe(res=>{
    
      },err =>{
        console.log("Server Down")
    })
    this.ionViewWillEnter();
    this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    this.http.get('http://34.93.191.211:5555/disquestions').subscribe(res=>{
                    this.questions = res.json();
                },err =>{
                    console.log("Server Down")
                })
  }

}
