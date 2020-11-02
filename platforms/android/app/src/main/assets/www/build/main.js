webpackJsonp([0],{

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Storage } from '@ionic/storage';





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, http, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.menu = menu;
        this.unpattern = "^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
        this.paspattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        this.mobpattern = "^[0-9]{10}$";
        this.regpattern = "^[A-Z]{2}[0-9]{13}$";
        this.sup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.unpattern)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(6000000000), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(9999999999), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.mobpattern)]],
            regno: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.regpattern)]],
            batch: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            course: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.unpattern)]],
            dept: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        }, {});
        this.menu1Active();
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.menu.swipeEnable(false);
    };
    SignupPage.prototype.supForm = function () {
        console.log(this.sup.value);
    };
    SignupPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.store = function () {
        var body = new FormData();
        this.profpicname = Date.now();
        body.append('profpic', this.file, this.profpicname);
        body.append('name', this.name);
        body.append('em', this.em);
        body.append('pas', this.pas);
        body.append('mob', this.mob);
        body.append('reg', this.reg);
        body.append('batch', this.batch);
        body.append('dept', this.dept);
        body.append('course', this.course);
        body.append('year', this.year);
        var userdata = {
            name: this.name,
            em: this.em,
            pas: this.pas,
            mob: this.mob,
            reg: this.reg,
            batch: this.batch,
            dept: this.dept,
            course: this.course,
            year: this.year,
            body: body
        };
        userdata;
        this.http.post('http://34.93.191.211:5555/signup', body).subscribe(function (res) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
    };
    SignupPage.prototype.uploadpic = function () {
        var body = new FormData();
        this.profpicname = Date.now();
        body.append('profpic', this.file, this.profpicname);
        this.http.post('http://34.93.191.211:5555/uploadpic', body).subscribe(function (res) {
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/signup/signup.html"*/'<ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <div id="signup">Sign-Up</div>\n</div>\n</ion-header>\n\n<ion-content class="master" padding>\n  \n  <ion-card>\n  <form id="join" [formGroup]="sup" (ngSubmit)="supForm()">\n\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Username</h2>\n      </ion-label>\n      <ion-input id="name" name="name" [(ngModel)]="name" type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.username.hasError(\'required\') && sup.controls.username.touched">\n      <p>username is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.username.hasError(\'pattern\') && sup.controls.username.touched">\n      <p>Invalid Username</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Email</h2>\n      </ion-label>\n      <ion-input id="em" name="em" [(ngModel)]="em" type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.email.hasError(\'required\') && sup.controls.email.touched">\n      <p>email is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.email.hasError(\'email\') && sup.controls.email.touched">\n      <p> Invalid email</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Password</h2>\n      </ion-label>\n      <ion-input id="pas" name="pas" [(ngModel)]="pas" type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'required\') && sup.controls.password.touched">\n      <p>password is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'minlength\') && sup.controls.password.touched">\n      <p>Invalid password</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'pattern\') && sup.controls.password.touched">\n      <p>Password strength is low</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Mobile</h2>\n      </ion-label>\n      <ion-input id="mob" name="mob" [(ngModel)]="mob" type="string" formControlName="mobile"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'required\') && sup.controls.mobile.touched">\n      <p>mobile number is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'pattern\') && sup.controls.mobile.touched">\n      <p>Invalid mobile number</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Registration Number</h2>\n      </ion-label>\n      <ion-input id="reg" name="reg" [(ngModel)]="reg" type="string" formControlName="regno"></ion-input>\n    </ion-item>\n    <ion-item  no-lines *ngIf="sup.controls.regno.hasError(\'required\') && sup.controls.regno.touched">\n      <p>Registration number is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.regno.hasError(\'pattern\') && sup.controls.regno.touched">\n      <p>Registration number is wrong</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Course</h2>\n      </ion-label>\n      <ion-input id="course" name="course" [(ngModel)]="course" type="text" formControlName="course"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.course.hasError(\'required\') && sup.controls.course.touched">\n      <p>Course is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.course.hasError(\'pattern\') && sup.controls.course.touched">\n      <p>Invalid Course</p>\n    </ion-item>\n\n    <br><br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Batch</h2>\n        </ion-label>\n        <ion-select name="batch" [(ngModel)]="batch" formControlName="batch">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n        </ion-select>\n      </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.batch.hasError(\'required\') && sup.controls.batch.touched">\n      <p>Batch is required</p>\n    </ion-item>\n    </ion-list>\n\n    <br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Department</h2>\n        </ion-label>\n        <ion-select name="dept" [(ngModel)]="dept" formControlName="dept">\n          <ion-option value="A1">A1</ion-option>\n          <ion-option value="B1">B1</ion-option>\n          <ion-option value="C1">C1</ion-option>\n          <ion-option value="A2">A2</ion-option>\n          <ion-option value="B2">B2</ion-option>\n          <ion-option value="C2">C2</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.dept.hasError(\'required\') && sup.controls.dept.touched">\n          <p>Department is required</p>\n        </ion-item>\n    </ion-list>\n\n<br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Year</h2>\n        </ion-label>\n        <ion-select name="year" [(ngModel)]="year" formControlName="year">\n          <ion-option value="1">1st</ion-option>\n          <ion-option value="2">2nd</ion-option>\n          <ion-option value="3">3rd</ion-option>\n          <ion-option value="4">4th</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.year.hasError(\'required\') && sup.controls.year.touched">\n          <p>year is required</p>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Picture</ion-label>\n          <ion-icon item-start md="md-image" class="text-primary"></ion-icon>\n          <ion-input type="file" name="image" accept="image/*" (change)="changeListener($event)">Choose Image</ion-input>\n        </ion-item>\n    </ion-list>\n      \n  </form>\n</ion-card>\n\n    <button ion-button type="submit" (click)="store()" [disabled]="!sup.valid">Register</button>\n    \n    <!-- <button ion-button type="submit" (click)="uploadpic()" >upload your profile </picture></button>\n    -->\n  </ion-content>\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventformPage = /** @class */ (function () {
    function EventformPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.storage.get('id').then(function (val) {
            _this.id = val;
            console.log(_this.id);
            var body = {
                eventid: _this.id
            };
            _this.http.post('http://34.93.191.211:5555/showdescription', body).subscribe(function (response) {
                _this.events = response.json();
            });
        });
    }
    EventformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventformPage');
    };
    EventformPage.prototype.next1 = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */]);
    };
    EventformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventform',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/eventform/eventform.html"*/'\n<ion-content class="master" padding *ngFor="let event of events">\n  <ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next1()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2>{{event.venue}}</h2>\n</div>\n</ion-header>\n  \n  <img id="image" src="http://34.93.191.211:5555/{{event.image}}" />\n  <h3>{{event.title}}</h3>\n  <h6>{{event.date}}</h6>\n  <div id="text">{{event.description}}</div>\n</ion-content>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/eventform/eventform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], EventformPage);
    return EventformPage;
}());

//# sourceMappingURL=eventform.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeweventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NeweventPage = /** @class */ (function () {
    function NeweventPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    NeweventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NeweventPage');
    };
    NeweventPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    NeweventPage.prototype.next = function () {
        var body = {
            title: this.title,
            venue: this.venue,
            link: this.link,
            des: this.desc,
            date: this.date,
            category: this.category
        };
        if (this.title && this.venue && this.desc && this.date && this.category) {
            this.http.post('http://34.93.191.211:5555/uploadevent', body).subscribe(function (res) {
                console.log("success");
            });
            var alert_1 = this.alertCtrl.create({
                title: 'Changes Saved',
                buttons: ['OK']
            });
            alert_1.present();
            this.navCtrl.pop();
        }
    };
    NeweventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newevent',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/newevent/newevent.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" type="submit" (click)="back()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n\n    <h2 id="head">Add Event</h2>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="title" placeholder="Title"></ion-input>\n    </ion-item>\n    <br>\n  \n    <ion-item>\n      <ion-input type="text" [(ngModel)]="venue" placeholder="Venue"></ion-input>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="link" placeholder="Link"></ion-input>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-input type="date" [(ngModel)]="date" placeholder="Date of Event"></ion-input>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-textarea type="text" [(ngModel)]="desc" placeholder="Description"></ion-textarea>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label>Select Category</ion-label>\n      <ion-select placeholder="Select" [(ngModel)]="category">\n        <ion-option value="College Life">Technical</ion-option>\n          <ion-option value="Discussion">Fun</ion-option>\n          <ion-option value="Technical">Recruitment</ion-option>\n          <ion-option value="Placement">Social</ion-option>\n          <ion-option value="Confessions">Seminar</ion-option>\n          <ion-option value="Education">Workshop</ion-option>\n          <ion-option value="Movies">Enviroment</ion-option>\n          <ion-option value="Other">Other</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n  <div class="item-center">\n  <button class="next" ion-button type="submit" (click)="next()">Create Event</button>\n</div>\n  </ion-content>\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/newevent/newevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NeweventPage);
    return NeweventPage;
}());

//# sourceMappingURL=newevent.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(navCtrl, formBuilder, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.unpattern = "^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
        this.regpattern = "^[A-Z]{2}[0-9]{13}$";
        this.paspattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        this.check1 = false;
        this.log = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            regno: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.regpattern)]],
        }, {});
        this.sup = this.formBuilder.group({
            password1: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            password2: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        }, {});
    }
    ForgotpassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpassPage');
    };
    ForgotpassPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ForgotpassPage.prototype.check = function () {
        var _this = this;
        var body = {
            name: this.name,
            email: this.email,
            regno: this.regno
        };
        this.http.post('http://34.93.191.211:5555/forgotpass', body).subscribe(function (response) {
            console.log(response.json());
            if (response.json().length == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Invalid Credentials',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                _this.check1 = !(_this.check1);
            }
        });
    };
    ForgotpassPage.prototype.change = function () {
        var _this = this;
        if (this.pass1 != this.pass2) {
            var alert_2 = this.alertCtrl.create({
                title: 'Passwords does not match',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var body = {
                newpass: this.pass1,
                name: this.name
            };
            this.http.post('http://34.93.191.211:5555/forgotpass2', body).subscribe(function (response) {
                var alert = _this.alertCtrl.create({
                    title: 'Passwords changed successfully',
                    buttons: ['OK']
                });
                alert.present();
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    ForgotpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpass',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/forgotpass/forgotpass.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" type="submit" (click)="next()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n\n    <h2 id="head">Forgot Password </h2>\n  </div>\n</ion-header>\n\n<ion-content class="master" padding>\n  <form id="join" [formGroup]="log" (ngSubmit)="logForm()">\n\n  <ion-item no-lines>\n  <ion-label floating><h2>Name</h2></ion-label>\n  <ion-input name="name" [(ngModel)]="name" type="text" formControlName="name"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf="log.controls.name.hasError(\'required\') && log.controls.name.touched">\n  <p>username is required</p>\n</ion-item>\n<ion-item no-lines *ngIf="log.controls.name.hasError(\'pattern\') && log.controls.name.touched">\n  <p>Invalid Username</p>\n</ion-item>\n\n<ion-item no-lines>\n  <ion-label floating><h2>Email</h2></ion-label>\n  <ion-input name="email" [(ngModel)]="email" type="email" formControlName="email"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf="log.controls.email.hasError(\'required\') && log.controls.email.touched">\n  <p>email is required</p>\n</ion-item>\n<ion-item no-lines *ngIf="log.controls.email.hasError(\'pattern\') && log.controls.email.touched">\n  <p>Invalid email</p>\n</ion-item>\n\n<ion-item no-lines>\n  <ion-label floating><h2>Registration Number</h2></ion-label>\n  <ion-input name="regno" [(ngModel)]="regno" type="text" formControlName="regno"></ion-input>\n</ion-item>\n<ion-item no-lines *ngIf="log.controls.regno.hasError(\'required\') && log.controls.regno.touched">\n  <p>Registration Numbe is required</p>\n</ion-item>\n<ion-item no-lines *ngIf="log.controls.regno.hasError(\'pattern\') && log.controls.regno.touched">\n  <p>Invalid Registration Number</p>\n</ion-item>\n\n</form>\n<div class=item-center>\n<button class="next" ion-button type="submit" (click)="check()" [disabled]="!log.valid">check</button>\n</div>\n<div *ngIf="check1">\n  <form id="join" [formGroup]="sup" (ngSubmit)="supForm()">\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Password</h2>\n      </ion-label>\n      <ion-input name="pass1" [(ngModel)]="pass1" type="password" formControlName="password1"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password1.hasError(\'required\') && sup.controls.password1.touched">\n      <p>password is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password1.hasError(\'minlength\') && sup.controls.password1.touched">\n      <p>Invalid password</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password1.hasError(\'pattern\') && sup.controls.password1.touched">\n      <p>Password strength is low</p>\n    </ion-item>\n  \n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Password</h2>\n      </ion-label>\n      <ion-input name="pass2" [(ngModel)]="pass2" type="password" formControlName="password2"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password2.hasError(\'required\') && sup.controls.password2.touched">\n      <p>password is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password2.hasError(\'minlength\') && sup.controls.password2.touched">\n      <p>Invalid password</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password2.hasError(\'pattern\') && sup.controls.password2.touched">\n      <p>Password strength is low</p>\n    </ion-item>\n\n  </form>\n  <div class="item-center">\n  <button class="next" ion-button type="submit" (click)="change()" [disabled]="!sup.valid">Change</button>\n  </div>\n</div>\n</ion-content>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/forgotpass/forgotpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());

//# sourceMappingURL=forgotpass.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.next = function () {
        var _this = this;
        this.storage.get('userid').then(function (val) {
            _this.userid = val;
            var body = {
                userid: _this.userid,
                title: _this.title,
                feed: _this.feed
            };
            _this.http.post('http://34.93.191.211:5555/feedback', body).subscribe(function (res) {
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/feedback/feedback.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">Feedback </h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n<form id="join">\n  <ion-item no-lines>\n  <ion-label floating><h2>Title</h2></ion-label>\n  <ion-input id="title" name="title" [(ngModel)]="title" type="text"></ion-input>\n</ion-item>\n<ion-item no-lines>\n  <ion-label floating><h2>Feedback</h2></ion-label>\n  <ion-textarea id="feed" name="feed" [(ngModel)]="feed" type="text"></ion-textarea>\n</ion-item>\n</form>\n<div class="text-center">\n<button class="next" ion-button type="submit" (click)="next()">Send</button>\n</div>\n</ion-content>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/aboutus/aboutus.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">About Us </h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/aboutus/aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_forum__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.details = [];
        this.category = "";
        this.question = "";
        this.desc = "";
        this.storage.set('status', 'true');
        this.storage.get('userid').then(function (val1) {
            _this.uid = val1;
        });
        this.storage.get('uname').then(function (val2) {
            _this.username = val2;
        });
        console.log(this.uid);
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    AddPage.prototype.Submit = function () {
        if (this.category != "" && this.desc != "" && this.question != "") {
            var body = {
                username: this.username,
                question: this.question,
                date: new Date().toDateString(),
                questiontitle: this.question,
                userid: this.uid,
                description: this.desc,
                time: new Date().toTimeString(),
                qtype: this.category
            };
            this.http.post('http://34.93.191.211:5555/uploadquestion', body).subscribe(function (res) {
                console.log("success");
            });
            this.navCtrl.pop();
        }
    };
    AddPage.prototype.next1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forum_forum__["a" /* ForumPage */]);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/add/add.html"*/'<ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next1()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2 id="signup">Add Query</h2>\n</div>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="question" placeholder="Question"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="text" [(ngModel)]="desc" placeholder="Description"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n      <ion-label>Select Category</ion-label>\n      <ion-select placeholder="Select" [(ngModel)]="category">\n        <ion-option value="College Life">College Life</ion-option>\n          <ion-option value="Discussion">Discussion</ion-option>\n          <ion-option value="Technical">Technical</ion-option>\n          <ion-option value="Placement">Placement</ion-option>\n          <ion-option value="Confessions">Confessions</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="Movies">Movies</ion-option>\n          <ion-option value="Fun">Fun</ion-option>\n          <ion-option value="Other">Other</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <br>\n\n  <div class="item-center">\n    <button ion-button (click)="Submit()">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/add/add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forum_forum__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.searchQuery = '';
        this.username = "";
        this.check1 = false;
        this.check = false;
        this.today = Date.now();
        this.d = new Date();
        this.answer = "";
        this.query = navParams.get("detail");
        this.storage.get('userid').then(function (val1) {
            _this.uid = val1;
        });
        this.storage.get('uname').then(function (val1) {
            _this.username = val1;
        });
    }
    DetailsPage.prototype.submit = function () {
        var _this = this;
        if (this.answer != "") {
            var body = {
                questionid: this.query.questionid,
                date: new Date().toDateString(),
                userid: this.uid,
                answer: this.answer,
                time: new Date().toTimeString(),
                username: this.username
            };
            this.http.post('http://34.93.191.211:5555/answers', body).subscribe(function (res) {
                _this.http.post('http://34.93.191.211:5555/inc_count', body).subscribe(function (res) {
                    _this.http.post('http://34.93.191.211:5555/disanswers', body).subscribe(function (res) {
                        _this.comments = res.json();
                    }, function (err) {
                        console.log("Server Down");
                    });
                });
            });
        }
        this.answer = "";
    };
    DetailsPage.prototype.Delete = function (i) {
        var _this = this;
        var body = {
            answer: this.comments[i].answers,
            questionid: this.comments[i].questionid
        };
        this.http.post('http://34.93.191.211:5555/delanswer', body).subscribe(function (res) {
            _this.http.post('http://34.93.191.211:5555/dec_count', body).subscribe(function (res) {
                _this.http.post('http://34.93.191.211:5555/disanswers', body).subscribe(function (res) {
                    _this.comments = res.json();
                }, function (err) {
                    console.log("Server Down");
                });
            });
        }, function (err) {
            console.log("Server Down");
        });
    };
    DetailsPage.prototype.Answer = function () {
        this.check1 = !(this.check1);
    };
    DetailsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        var body = {
            questionid: this.query.questionid
        };
        this.http.post('http://34.93.191.211:5555/disanswers', body).subscribe(function (res) {
            _this.comments = res.json();
        }, function (err) {
            console.log("Server Down");
        });
        var body1 = {
            userid: this.uid
        };
        this.http.post('http://34.93.191.211:5555/upvote', body1).subscribe(function (res) {
            _this.items = res.json();
        }, function (err) {
            console.log("Server Down");
        });
    };
    DetailsPage.prototype.upvote = function (answerid, index) {
        var _this = this;
        var body = {
            userid: this.uid,
            answerid: answerid
        };
        this.http.post('http://34.93.191.211:5555/doupvote', body).subscribe(function (res) {
            if (res.json().status == 500) {
                var body = {
                    userid: _this.uid,
                    answerid: answerid
                };
                _this.http.post('http://34.93.191.211:5555/delupvote', body).subscribe(function (res) {
                });
                _this.comments[index].upvotes = _this.comments[index].upvotes - 1;
            }
            else {
                _this.comments[index].upvotes = _this.comments[index].upvotes + 1;
            }
        });
    };
    DetailsPage.prototype.next1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forum_forum__["a" /* ForumPage */]);
    };
    DetailsPage.prototype.downvote = function (answerid, index) {
        var _this = this;
        var body = {
            userid: this.uid,
            answerid: answerid
        };
        this.http.post('http://34.93.191.211:5555/dodownvote', body).subscribe(function (res) {
            if (res.json().status == 500) {
                var body = {
                    userid: _this.uid,
                    answerid: answerid
                };
                _this.http.post('http://34.93.191.211:5555/deldownvote', body).subscribe(function (res) {
                    _this.comments[index].downvotes = _this.comments[index].downvotes - 1;
                });
            }
            else {
                _this.comments[index].downvotes = _this.comments[index].downvotes + 1;
            }
        });
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/details/details.html"*/'<ion-header no-border>\n  <div class="item-center">\n    <button id="menu" class="white" type="submit" (click)="next1()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  \n    <ion-item class="deet">\n      <ion-avatar class="head" item-start>\n        <img src="assets/imgs/images.png">\n      </ion-avatar>\n      <h4 class="white">{{query.name}}</h4>\n      <p class="wheat">{{query.date}} {{query.time}}</p>\n    </ion-item>\n  </div>\n</ion-header>\n\n<ion-content class="master">\n\n<div></div>\n  <ion-card>\n    \n    <ion-card-content class="questions">\n    <div class="question inline-block white">\n      Q: {{query.question}}\n    </div>\n    <br/>\n    <br>\n    <div class="description inline-block white">\n       {{query.description}}\n    </div>\n  \n    </ion-card-content>\n  </ion-card>\n\n\n\n  <div class="item-center">\n    <button ion-button clear (click)="Answer()" class="white">\n      ANSWERS\n    </button>\n\n    <div  *ngFor="let comment of comments; let i = index">\n      <ion-card>\n        <ion-item class="deets">\n            <ion-avatar item-start>\n              <img src="assets/imgs/images.png">\n            </ion-avatar>\n            <h2 class="white">{{comment.username}}</h2>\n            <p class="wheat">{{comment.date}} {{comment.time}}</p>\n          </ion-item>\n          <br>\n          <ion-card-content>\n            <div class="description white">\n              {{comment.answers}}\n            </div>\n  \n            <br>\n            <button ion-button clear class="vote white" (click)="upvote(comment.answerid,i)">\n              <ion-icon name="arrow-round-up"></ion-icon>\n              &ensp;\n              \n            {{comment.upvotes-comment.downvotes}}\n            </button>\n            &ensp;\n              <span>\n               <button ion-button clear class="vote white" (click)="downvote(comment.answerid,i)">\n                  <ion-icon name="arrow-round-down"></ion-icon>\n                </button>\n              </span>\n  \n            <button ion-button clear class="delete white" (click)="Delete(i)" *ngIf="uid==comment.userid">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n    \n\n\n   \n \n</ion-content>\n<ion-footer >\n  <ion-input type="text" placeholder="Add an Answer.." class="textbox white" [(ngModel)]="answer"></ion-input>\n  <ion-fab right bottom>\n    <button ion-fab (click)="submit()"><ion-icon name="paper-plane"></ion-icon></button>\n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(navCtrl, navParams, formBuilder, http, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.unpattern = "^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
        this.paspattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        this.mobpattern = "^[0-9]{10}$";
        this.regpattern = "^[A-Z]{2}[0-9]{13}$";
        this.sup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.unpattern)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(6000000000), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(9999999999), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.mobpattern)]],
            regno: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.regpattern)]],
            batch: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            course: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.unpattern)]],
            dept: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        }, {});
    }
    MyprofilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userid').then(function (val1) {
            _this.user = val1;
            var body = { userid: _this.user };
            _this.http.post('http://34.93.191.211:5555/disprofile', body).subscribe(function (res) {
                _this.details = res.json();
                if (res.json() != null) {
                    _this.items = res.json();
                }
                else {
                    alert("failed");
                }
            });
        });
    };
    MyprofilePage.prototype.store = function () {
        var userdata = {
            name: this.name,
            em: this.em,
            mob: this.mob,
            reg: this.reg,
            batch: this.batch,
            dept: this.dept,
            course: this.course,
            year: this.year,
            userid: this.user
        };
        this.http.post('http://34.93.191.211:5555/updateprofile', userdata).subscribe(function (res) {
        });
        var alert = this.alertCtrl.create({
            title: 'Changes Saved',
            buttons: ['OK']
        });
        alert.present();
        this.ionViewWillEnter();
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/myprofile/myprofile.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">My Profile</h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n  <ion-avatar class="pic" item-start>\n    <img class="pic" src="assets/imgs/images.png">\n  </ion-avatar>\n\n  <div *ngFor="let item of items">\n    <form id="join" [formGroup]="sup" (ngSubmit)="supForm()">\n\n\n      <ion-item no-lines>\n        <ion-label stacked>\n          <h2>Username</h2>\n        </ion-label>\n        <ion-input value= "{{item.name}}"id="name" name="name" [(ngModel)]="name" type="text" formControlName="username"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.username.hasError(\'pattern\') && sup.controls.username.touched">\n        <p>Invalid Username</p>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label stacked>\n          <h2>Email</h2>\n        </ion-label>\n        <ion-input value= "{{item.email}}" id="em" name="em" [(ngModel)]="em" type="text" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.email.hasError(\'email\') && sup.controls.email.touched">\n        <p> Invalid email</p>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label stacked>\n          <h2>Mobile</h2>\n        </ion-label>\n        <ion-input value= "{{item.phone}}" id="mob" name="mob" [(ngModel)]="mob" type="string" formControlName="mobile">}</ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'pattern\') && sup.controls.mobile.touched">\n        <p>Invalid mobile number</p>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label stacked>\n          <h2>Registration Number</h2>\n        </ion-label>\n        <ion-input value= "{{item.regno}}" id="reg" name="reg" [(ngModel)]="reg" type="string" formControlName="regno"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.regno.hasError(\'pattern\') && sup.controls.regno.touched">\n        <p>Registration number is wrong</p>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label stacked>\n          <h2>Course</h2>\n        </ion-label>\n        <ion-input value= "{{item.course}}" id="course" name="course" [(ngModel)]="course" type="text" formControlName="course"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.course.hasError(\'pattern\') && sup.controls.course.touched">\n        <p>Invalid Course</p>\n      </ion-item>\n\n\n      <ion-list>\n        <ion-item no-lines>\n          <ion-label>\n            <h2>Batch</h2>\n          </ion-label>\n          <ion-select placeholder= "{{item.batch}}" name="batch" [(ngModel)]="batch" formControlName="batch">\n            <ion-option value="1">1</ion-option>\n            <ion-option value="2">2</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item no-lines>\n          <ion-label>\n            <h2>Department</h2>\n          </ion-label>\n          <ion-select placeholder= "{{item.dept}}" name="dept" [(ngModel)]="dept" formControlName="dept">\n            <ion-option value="A1">A1</ion-option>\n            <ion-option value="B1">B1</ion-option>\n            <ion-option value="C1">C1</ion-option>\n            <ion-option value="A2">A2</ion-option>\n            <ion-option value="B2">B2</ion-option>\n            <ion-option value="C2">C2</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item no-lines>\n          <ion-label>\n            <h2>Year</h2>\n          </ion-label>\n          <ion-select placeholder="{{item.year}}" name="year" [(ngModel)]="year" formControlName="year">\n            <ion-option value="1">1st</ion-option>\n            <ion-option value="2">2nd</ion-option>\n            <ion-option value="3">3rd</ion-option>\n            <ion-option value="4">4th</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n    </form>\n  </div>\n  <div class="item-center">\n  <button ion-button type="submit" (click)="store()" >Save Changes</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/myprofile/myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal_ngx__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_events_events__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_eventform_eventform__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aboutus_aboutus__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_details_details__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_add__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forgotpass_forgotpass__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_newevent_newevent__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_eventform_eventform__["a" /* EventformPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__["a" /* NewpagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forgotpass_forgotpass__["a" /* ForgotpassPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_newevent_newevent__["a" /* NeweventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_eventform_eventform__["a" /* EventformPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__["a" /* NewpagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forgotpass_forgotpass__["a" /* ForgotpassPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_newevent_newevent__["a" /* NeweventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal_ngx__["a" /* OneSignal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventform_eventform__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newevent_newevent__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, http, storage, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.selCategories = "";
    }
    EventsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.set('status', 'true');
        this.storage.get('token').then(function (val) {
            _this.as = val;
            var body = {
                as: _this.as
            };
            _this.http.post('http://34.93.191.211:5555/disevents', body).subscribe(function (response) {
                // this.events = response.json();
                if (response.json().status == 500) {
                    alert("session expired");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    _this.storage.set('status', "false");
                }
                else {
                    if (response.json() != null) {
                        _this.events = response.json();
                    }
                    else {
                        alert("failed");
                    }
                }
            });
        });
        this.storage.get('userid').then(function (val1) {
            _this.user = val1;
            var body = { userid: _this.user };
            _this.http.post('http://34.93.191.211:5555/fetchfavourites', body).subscribe(function (res) {
                _this.favs = res.json();
                if (res.json() != null) {
                    _this.items = res.json();
                }
                else {
                    alert("failed");
                }
            });
            _this.http.post('http://34.93.191.211:5555/fetchinterests', body).subscribe(function (res) {
                _this.int = res;
                _this.interests = (_this.int._body).toString();
            });
        });
    };
    EventsPage.prototype.ionViewDidLoad = function () {
        this.selectedSegment = 'all';
    };
    EventsPage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__newevent_newevent__["a" /* NeweventPage */]);
    };
    EventsPage.prototype.next1 = function (id) {
        this.storage.set('id', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__eventform_eventform__["a" /* EventformPage */]);
    };
    EventsPage.prototype.next2 = function (eventid) {
        var _this = this;
        var body = {
            userid: this.user,
            eventid: eventid
        };
        this.http.post('http://34.93.191.211:5555/addfavourites', body).subscribe(function (res) {
            if (res.json().status == 500) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Already a Favourite',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Added to Favourites',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
        this.ionViewDidLoad();
        this.ionViewWillEnter();
    };
    EventsPage.prototype.next = function () {
        var _this = this;
        var body = {
            userid: this.user,
            interests: this.selCategories
        };
        this.http.post('http://34.93.191.211:5555/uploadinterests', body).subscribe(function (res) {
            if (res.json().status == 200) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Interests Updated!',
                    buttons: ['OK']
                });
                alert_3.present();
                _this.ionViewWillEnter();
                _this.ionViewDidLoad();
                _this.ionViewWillEnter();
            }
        });
    };
    EventsPage.prototype.Delete = function (eventid) {
        var _this = this;
        var body = {
            userid: this.user,
            eventid: eventid
        };
        this.http.post('http://34.93.191.211:5555/delfavourites', body).subscribe(function (res) {
            var alert = _this.alertCtrl.create({
                title: 'Deleted from Favourites',
                buttons: ['OK']
            });
            alert.present();
        });
        this.ionViewDidLoad();
        this.ionViewWillEnter();
        this.selectedSegment = "favo";
    };
    EventsPage.prototype.all = function () {
        this.ionViewWillEnter();
    };
    EventsPage.prototype.favourites = function () {
    };
    EventsPage.prototype.share = function (title, description, link) {
        this.socialSharing.share(description, title, link).then(function () {
            console.log('Shared Successfully');
        }).catch(function () {
            console.log('Sharing Failed');
        });
    };
    ;
    EventsPage.prototype.Has = function (category) {
        if (this.interests) {
            return ((this.interests).indexOf(category));
        }
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/events/events.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">Events </h2>\n  </div>\n  <ion-segment class="seg" [(ngModel)]="selectedSegment">\n    <ion-segment-button (click)="all()" class="tab" value="all" style="border-bottom-width:0px;color: white;">\n      All\n    </ion-segment-button>\n    <ion-segment-button (click)="favourites()" class="tab" value="favourites" style="border-bottom-width:0px ;color: white;">\n      Favourites\n    </ion-segment-button>\n    <ion-segment-button class="tab" value="interest" style="border-bottom-width:0px ;color: white;">\n      Interest\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content class="master" padding>\n<!-- [virtualScroll]="events" [approxItemHeight]="\'100px\'"  *virtualItem="let event"   -->\n<div [ngSwitch]="selectedSegment">\n  <div>\n    <ion-list *ngSwitchCase="\'all\'" id="first">\n      <div *ngFor="let event of events">\n        <div *ngIf="Has(event.category)>-1">\n        <ion-card id="card">\n\n        <ion-card-header class="cardhead" (click)="next1(event.eventid)">\n          <button id="host">\n            <ion-icon style="font-size: 50px;" name="contact"></ion-icon>\n          </button>\n          <span id="name" name="date">{{event.venue}}</span><br>\n          {{event.date}}\n\n          <img src="http://34.93.191.211:5555/{{event.image}}" class="photo" />\n        </ion-card-header>\n        <ion-card-content class="cardbody" (click)="next1(event.eventid)">\n\n          <ion-card-title name="title" id="title">\n            {{event.title}}\n          </ion-card-title>\n          <hr>\n          <p name="des" class="des" >{{event.description}}</p>\n\n        </ion-card-content>\n        <div>\n          <ion-grid id="grid" class="item-center">\n            <ion-row>\n              <ion-col>\n                      <button (click)="next2(event.eventid)" id="heart" ion-button icon-start clear small>\n                       <ion-icon style="font-size: xx-large; text-align: center;" name=\'heart-outline\'></ion-icon>\n                      </button>\n              </ion-col>\n\n              <ion-col>\n                <button (click)="share()" ion-button icon-start clear small>\n                  <ion-icon style="font-size: xx-large; text-align: center;" name="share-alt"></ion-icon>\n                  <div></div>\n                </button>\n              </ion-col>\n\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n    </ion-list>\n  </div>\n</div>\n<ion-fab right bottom>\n  <button ion-fab (click)="addEvent()"><ion-icon name="add-outline" id="addbutton"></ion-icon></button>\n</ion-fab>\n\n<div [ngSwitch]="selectedSegment">\n  <ion-list class="favo" *ngSwitchCase="\'favourites\'">\n\n    <ion-card *ngFor="let fav of favs">\n      <ion-card-header class="cardhead" (click)="next1(fav.eventid)">\n        <button id="host">\n          <ion-icon style="font-size: 50px;" name="contact"></ion-icon>\n        </button>\n        <span id="name" name="date">{{fav.venue}}</span><br>\n        {{fav.date}}\n        <img src="http://34.93.191.211:5555/{{fav.image}}" class="photo" (click)="next1(fav.eventid)" />\n      </ion-card-header>\n      <ion-card-content (click)="next1(fav.eventid)">\n        <ion-card-title name="title" id="title">\n          {{fav.title}}\n        </ion-card-title>\n        <hr>\n        <p name="des" class="des">\n          {{fav.description}}\n        </p>\n      </ion-card-content>\n      <ion-grid id="grid" class="item-center">\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="Delete(fav.eventid)">\n              <ion-icon style="font-size: xx-large; text-align: center;" name="heart-outline"></ion-icon>\n              <div></div>\n            </button>\n          </ion-col>\n\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon style="font-size: xx-large; text-align: center;" name="share-alt"></ion-icon>\n              <div></div>\n            </button>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>\n</div>\n\n<div [ngSwitch]="selectedSegment">\n  <ion-list class="fav" *ngSwitchCase="\'interest\'">\n    <div class="item-center interests">\n     Choose what to see : \n    </div>\n    <br>\n    <br>\n    <ion-item>\n    <ion-select placeholder="Select Categories" class="join" [(ngModel)]="selCategories" multiple="true">\n      <ion-option>Technical</ion-option>\n      <ion-option>Fun</ion-option>\n      <ion-option>Placement</ion-option>\n      <ion-option>Recruitment</ion-option>\n      <ion-option>Social</ion-option>\n      <ion-option>Seminar</ion-option>\n      <ion-option>Workshop</ion-option>\n      <ion-option>Enviroment</ion-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <br>\n    <div class="item-center">\n      <button ion-button class="submit" (click)="next()">Submit</button>\n    </div>\n\n  </ion-list>\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgotpass_forgotpass__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder, navParams, http, storage, menu) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.menu = menu;
        this.storage.set('status', "false");
        this.log = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
        }, {});
        this.menu1Active();
        console.log('http://34.93.191.211:5555/1578132847421.jpg');
    }
    HomePage.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.menu.swipeEnable(false);
    };
    HomePage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.next1 = function () {
        var _this = this;
        var body = {
            name1: this.name1,
            pas1: this.pas1
        };
        this.http.post('http://34.93.191.211:5555/passcheck', body).subscribe(function (response) {
            console.log(response.json());
            if (response.json().status == 400) {
                alert("Username or Password incorrect");
            }
            else {
                _this.token = response.json().token;
                _this.userid = response.json().result;
                console.log("your id : ", _this.userid);
                console.log("your id : ", _this.name1);
                console.log(_this.token);
                _this.storage.set('token', _this.token);
                _this.storage.set('userid', _this.userid);
                _this.storage.set('uname', _this.name1);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */]);
                //this.storage.set('status','true');
                _this.storage.set('status', "true");
            }
        });
    };
    HomePage.prototype.logForm = function () {
        console.log(this.log.value);
    };
    HomePage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgotpass_forgotpass__["a" /* ForgotpassPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/home/home.html"*/'\n<ion-content class="master" padding>\n  <p id=\'head\' ><b>SRM Connect</b></p>\n  <img id="image" src="../assets/imgs/social2.png" />\n  \n  <div>\n  <h3 class="share-tech">  Login</h3>\n  <form id="join" [formGroup]="log" (ngSubmit)="logForm()">\n\n    <ion-item no-lines>\n      <ion-label floating><h2>Username</h2></ion-label>\n      <ion-input  [(ngModel)]="name1" type="text" formControlName="username" no-lines></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="log.controls.username.hasError(\'required\') && log.controls.username.touched">\n      <p>Username Required</p>\n    </ion-item>\n    \n\n    <ion-item no-lines class="password">\n      <ion-label floating><h2>Password</h2></ion-label>\n      <ion-input [(ngModel)]="pas1" type="password" formControlName="password" no-lines></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="log.controls.password.hasError(\'required\') && log.controls.password.touched">\n      <p>Password Required</p>\n    </ion-item>\n\n    <button class="forgot text-right" (click)=forgot()>Forgot Password?</button>\n        \n  </form>\n</div>\n  <br>\n  <br>\n  <div class="text-center">\n    <p></p>\n  <button ion-button class="submit" type="submit" (click)="next1()"  [disabled]="!log.valid">Login</button>\n  <hr>\n  <br>\n  \n  <p>Logging in for the first time?</p>\n    <button ion-button class="submit" type="submit" (click)="next()" >Sign up</button>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal_ngx__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, storage, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.setupPush();
            }
            _this.storage.get('status').then(function (status) {
                if (status == "true") {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */];
                }
            });
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__["a" /* MyprofilePage */] },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */] },
            { title: 'Forum', component: __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__["a" /* ForumPage */] },
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutusPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.setupPush = function () {
        var _this = this;
        // I recommend to put these into your environment.ts
        this.oneSignal.startInit('fab234a9-d23e-4530-8f3b-baadccd67fa2', '871625015250');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
        // Notifcation was received in general
        this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            var msg = data.payload.body;
            var title = data.payload.title;
            var additionalData = data.payload.additionalData;
            _this.showAlert(title, msg, additionalData.task);
        });
        // Notification was really clicked/opened
        this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            // Just a note that the data is a different place here!
            var additionalData = data.notification.payload.additionalData;
            _this.showAlert('Notification opened', 'You already read this before', additionalData.task);
        });
        this.oneSignal.endInit();
    };
    MyApp.prototype.showAlert = function (title, msg, task) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            buttons: [
                                {
                                    text: "Action: " + task,
                                    handler: function () {
                                        // E.g: Navigate to a specific screen
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/app/app.html"*/'\n<ion-menu [content]="content" type="overlay">\n  <ion-header no-border>\n    <ion-toolbar color="secondary">\n      <ion-title style="margin: 5px;">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list >\n      <button color="secondary" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal_ngx__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewpagePage = /** @class */ (function () {
    function NewpagePage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http.get('http://jsonplaceholder.typicode.com/todos').subscribe(function (res) {
            _this.todos = res.json();
            console.log(_this.todos);
        });
    }
    NewpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewpagePage');
    };
    NewpagePage.prototype.add = function () {
        var body = { name: "hardik", value: "student" };
        this.http.post('/', body).subscribe(function (res) {
        });
    };
    NewpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newpage',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/newpage/newpage.html"*/'<!--\n  Generated template for the NewpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>newpage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card *ngFor="let todo of todos">\n  <p>{{todo.id}}</p>\n  <p>{{todo.title}}</p>\n  <p>{{todo.completed}}</p>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/newpage/newpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], NewpagePage);
    return NewpagePage;
}());

//# sourceMappingURL=newpage.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, socialSharing, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.searchQuery = '';
        this.csearch = 0;
        this.category = "";
        this.cc = false;
        this.http.get('http://34.93.191.211:5555/disquestions').subscribe(function (res) {
            _this.questions = res.json();
        }, function (err) {
            console.log("Server Down");
        });
        this.storage.set('status', 'true');
        this.storage.get('userid').then(function (val1) {
            _this.uid = val1;
        });
    }
    ForumPage.prototype.Share = function () {
        this.socialSharing.share("Hey! Check This Out!  ", "SRM Connect Forum Question", "", "    https://drive.google.com/open?id=1HL-sjAZze8j-eBqbUWzCWpWQNiAdDtMn");
    };
    ForumPage.prototype.Details = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
            detail: this.questions[i]
        });
    };
    ForumPage.prototype.AddPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */]);
    };
    ForumPage.prototype.Search = function () {
        if (this.csearch == 0)
            this.csearch = 1;
        else
            this.csearch = 0;
    };
    ForumPage.prototype.Filter = function (category) {
        var _this = this;
        var body = {
            category: category
        };
        this.http.post('http://34.93.191.211:5555/filter', body).subscribe(function (res) {
            _this.questions = res.json();
        });
    };
    ForumPage.prototype.onCancel = function () {
        var _this = this;
        this.http.get('http://34.93.191.211:5555/disquestions').subscribe(function (res) {
            _this.questions = res.json();
        }, function (err) {
            console.log("Server Down");
        });
    };
    ForumPage.prototype.SearchString = function (term) {
        var _this = this;
        var body = {
            term: term
        };
        this.http.post('http://34.93.191.211:5555/search', body).subscribe(function (res) {
            _this.questions = res.json();
        });
    };
    ForumPage.prototype.Delete = function (i) {
        var body = {
            questionid: this.questions[i].questionid
        };
        this.http.post('http://34.93.191.211:5555/delquestion', body).subscribe(function (res) {
        }, function (err) {
            console.log("Server Down");
        });
        this.ionViewWillEnter();
        this.ionViewWillEnter();
    };
    ForumPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http.get('http://34.93.191.211:5555/disquestions').subscribe(function (res) {
            _this.questions = res.json();
        }, function (err) {
            console.log("Server Down");
        });
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forum',template:/*ion-inline-start:"/home/aayushx/Projects/Srm_Connect/src/pages/forum/forum.html"*/'<ion-header no-border>\n  <div id="top">\n      <button id="menu" menuToggle>\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <h2 id="head">Forum</h2>\n      <span id="nav"><button ion-button clear class="search" class="lnav font-large" (click)="Search()"><ion-icon name="search"></ion-icon></button>\n      <button ion-button clear class="search font-large">\n        \n        <ion-select selectedText=" " cancelText="Clear" #C (ionChange)="Filter(C.value)" (ionCancel)="onCancel()">\n          <ion-option value="College Life">College Life</ion-option>\n          <ion-option value="Discussion">Discussion</ion-option>\n          <ion-option value="Technical">Technical</ion-option>\n          <ion-option value="Placement">Placement</ion-option>\n          <ion-option value="Confessions">Confessions</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="Movies">Movies</ion-option>\n          <ion-option value="Fun">Fun</ion-option>\n          <ion-option value="Other">Other</ion-option>\n        </ion-select>\n\n      <ion-icon class="lnav"  name="ios-funnel-outline"></ion-icon></button></span></div>\n    <ion-item *ngIf="csearch" class="transparent">\n    <ion-searchbar #S (ionChange)="SearchString(S.value)"></ion-searchbar> \n  </ion-item>\n</ion-header>\n\n<br>\n<br>\n<br>\n\n<ion-content class="master">\n\n<div *ngFor="let question of questions; let i= index">\n  \n<ion-card>\n\n  <ion-item class="deets" (click)="Details(i)">\n  \n    <ion-avatar item-start>\n        <img src="assets/imgs/images.png">\n    </ion-avatar>\n\n    <h2 class="white">{{question.name}}</h2>\n\n    <p class="wheat">{{question.date}} &nbsp; {{question.time}}</p>\n\n  </ion-item>\n\n  <br>\n\n    <ion-card-content class="content">\n      <div class="question-type" (click)="Details(i)">\n        {{question.qtype}}\n      </div>\n      \n      <div class="question" (click)="Details(i)">\n        Q: {{question.question}}\n      </div>\n\n      <div class="sh-ans" (click)="Details(i)">\n        {{question.description}}\n      </div>\n\n      \n        <div class="item-center">\n          \n      \n\n    <ion-col>\n        <button ion-button clear class="share" (click)="Share()">\n          <ion-icon name="share"></ion-icon>\n        </button>\n      </ion-col> \n\n      <ion-col>\n        <div class="edits">\n          {{question.comments}}\n          <ion-icon name="md-create"></ion-icon>\n        </div>\n      </ion-col>\n        \n        <ion-col>\n        <button ion-button clear class="delete" (click)="Delete(i)" *ngIf="uid==question.userid">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </ion-col>\n        \n        </div>\n      \n\n    </ion-card-content>\n</ion-card>\n</div>\n\n<ion-fab right bottom>\n  <button ion-fab (click)="AddPage()"><ion-icon name="add-outline" id="addbutton"></ion-icon></button>\n</ion-fab>\n</ion-content>'/*ion-inline-end:"/home/aayushx/Projects/Srm_Connect/src/pages/forum/forum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map