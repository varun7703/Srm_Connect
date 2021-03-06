import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http'
import {Storage} from '@ionic/storage'
import {ForumPage} from '../forum/forum'


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  query:any
  searchQuery: string=''; 
  username=""
  check1: boolean=false
  check: boolean=false
  today = Date.now();
  d= new Date();
  answer="";
  comments: any;
  uid : any
  items: any;
  upcheck: any;
  xx:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public http: Http, public storage:Storage) {
                this.query=navParams.get("detail")
          
    this.storage.get('userid').then((val1)=>{
      this.uid =val1;
    })
    this.storage.get('uname').then((val1)=>{
      this.username =val1;
    })
  }
  
  submit(){
    if(this.answer!=""){

      var body= {
          questionid : this.query.questionid,
          date: new Date().toDateString(),
          userid: this.uid,
          answer: this.answer,
          time: new Date().toTimeString()  ,
          username: this.username
        }
      this.http.post('http://34.93.191.211:5555/answers',body).subscribe(res =>{
        this.http.post('http://34.93.191.211:5555/inc_count',body).subscribe(res=>{
          this.http.post('http://34.93.191.211:5555/disanswers',body).subscribe(res=>{
            this.comments = res.json();
      
          },err =>{
            console.log("Server Down")
          })
        })
      })               

      
  
    }
    this.answer="";
  }

  Delete(i:number){
    var body= {
      answer : this.comments[i].answers,
      questionid : this.comments[i].questionid
    }
    this.http.post('http://34.93.191.211:5555/delanswer',body).subscribe(res=>{
      this.http.post('http://34.93.191.211:5555/dec_count',body).subscribe(res=>{
        this.http.post('http://34.93.191.211:5555/disanswers',body).subscribe(res=>{
          this.comments = res.json();
      
        },err =>{
           console.log("Server Down")
        })
      })
    },err =>{
        console.log("Server Down")
    })
    
  }

  Answer(){
    this.check1=!(this.check1);
  }
  ionViewWillLoad() {
    var body= {
      questionid : this.query.questionid
    }
    
  this.http.post('http://34.93.191.211:5555/disanswers',body).subscribe(res=>{
    this.comments = res.json();
    
  },err =>{
    console.log("Server Down")
  })
  var body1 = {
    userid:this.uid
  }
  this.http.post('http://34.93.191.211:5555/upvote',body1).subscribe(res=>{
    this.items = res.json();
  },err =>{
    console.log("Server Down")
  })


  }
upvote(answerid,index:number){
  var body = {
    userid:this.uid,
    answerid:answerid

  }
  this.http.post('http://34.93.191.211:5555/doupvote',body).subscribe(res =>{
    
    if(res.json().status==500){
      
      var body = {
        userid:this.uid,
        answerid:answerid
      }
      this.http.post('http://34.93.191.211:5555/delupvote',body).subscribe(res=>{
        
        
      })
      this.comments[index].upvotes=this.comments[index].upvotes-1;
      
    }else{this.comments[index].upvotes=this.comments[index].upvotes+1;}
  
      })
  
  
}
next1(){
  this.navCtrl.push(ForumPage);
}
downvote(answerid,index:number){
  var body = {
    userid:this.uid,
    answerid:answerid
    
      }
      this.http.post('http://34.93.191.211:5555/dodownvote',body).subscribe(res =>{
        
        if(res.json().status==500){
          
          var body = {
            userid:this.uid,
            answerid:answerid
          }
          this.http.post('http://34.93.191.211:5555/deldownvote',body).subscribe(res=>{
            
            this.comments[index].downvotes=this.comments[index].downvotes-1;
          })
        
        }else{ this.comments[index].downvotes=this.comments[index].downvotes+1;}
      
          })
      
}
} 