import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { FeedbackPage } from '../pages/feedback/feedback';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { EventsPage } from '../pages/events/events';
import { ForumPage } from '../pages/forum/forum';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { Storage }from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, private oneSignal: OneSignal, public storage:Storage, private alertCtrl: AlertController) {
      this.platform.ready().then(() => {
        this.splashScreen.hide();
        if (this.platform.is('cordova')) {
          this.setupPush();
        }
        this.storage.get('status').then(status=>{
          if(status=="true"){
            this.rootPage=EventsPage
          }
        })
      })
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Profile', component: MyprofilePage},
      { title: 'Home', component: EventsPage },
      { title: 'Forum', component: ForumPage},
      { title: 'Feedback', component: FeedbackPage },
      { title: 'About Us', component: AboutusPage },
      { title: 'Logout', component: HomePage }      
    ];

  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('fab234a9-d23e-4530-8f3b-baadccd67fa2', '871625015250');
 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
 
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }

}
