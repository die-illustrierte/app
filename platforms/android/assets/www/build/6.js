webpackJsonp([6],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Module = (function () {
    function Module() {
    }
    Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */])
            ]
        })
    ], Module);
    return Module;
}());

//# sourceMappingURL=page1.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Page = (function () {
    function Page1Page(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.rootNavCtrl = navParams.get('rootNavCtrl');
    }
    Page1Page.prototype.ionViewWillLoad = function () {
        console.log('[1] will load fired');
    };
    Page1Page.prototype.ionViewDidLoad = function () {
        console.log('[1] did load fired');
    };
    Page1Page.prototype.ionViewWillEnter = function () {
        console.log('[1] will enter fired');
    };
    Page1Page.prototype.ionViewDidEnter = function () {
        console.log('[1] did enter fired');
    };
    Page1Page.prototype.pushPage = function (localNavCtrl) {
        if (localNavCtrl === void 0) { localNavCtrl = false; }
        if (localNavCtrl) {
            this.navCtrl.push('PageToPushPage');
        }
        else {
            this.rootNavCtrl.push('PageToPushPage');
        }
    };
    Page1Page.prototype.showLoading = function () {
        this.loadingCtrl.create({
            duration: 1500,
            content: 'Loading ...'
        }).present();
    };
    Page1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"/home/pojntfx/die-illustrierte-app/src/pages/page1/page1.html"*/'<ion-content padding>\n  <h1>\n    This is the first page\n  </h1>\n  <button ion-button (click)="pushPage()">Push page</button>\n  <button ion-button (click)="pushPage(true)">Push page in here</button>\n  <button ion-button (click)="showLoading()">Show loading</button>\n  \n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et iaculis mauris. Nunc blandit viverra enim vehicula efficitur. Sed neque neque, tempus ac molestie non, blandit ut eros. Cras vulputate id nunc eget efficitur. Maecenas a dictum orci. Nullam sodales et est in euismod. Ut eget nibh consequat, molestie metus in, tristique lacus. Phasellus a elementum lectus. Morbi cursus mauris dapibus odio convallis convallis. Nulla et nisi nec augue consectetur rhoncus. Ut in tellus sit amet eros bibendum placerat ut a mi.\n  </p>\n  <p>\n    Quisque sagittis et nunc id dapibus. Curabitur placerat nec sem id hendrerit. Mauris tempus ante ac ante semper, non semper lacus maximus. Mauris in sem eros. Cras interdum nisl mollis magna lacinia, vitae vehicula enim ornare. Curabitur et lectus vel dolor venenatis pulvinar. Nullam malesuada vitae turpis at cursus.\n  </p>\n  <p>\n    Quisque turpis nisl, semper vel scelerisque sit amet, accumsan eu tellus. Maecenas non justo interdum, bibendum nisi eget, egestas enim. Aliquam suscipit ultrices magna, porttitor dapibus ipsum rhoncus at. Vivamus consectetur tortor a accumsan finibus. Aenean eleifend a tortor non porta. Sed iaculis eros sed lorem lacinia, ac imperdiet nisl molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nullam finibus condimentum eleifend. Pellentesque vel sapien et sem posuere ornare eu ac leo.\n  </p>\n  <p>\n    Praesent non ullamcorper turpis. Praesent eleifend est eget iaculis lobortis. Fusce elementum arcu lacus. Cras sed erat convallis, euismod augue at, euismod nisi. Morbi ac ligula rhoncus, venenatis sem et, posuere dui. Vivamus porta viverra massa, elementum vehicula diam euismod sed. Curabitur euismod justo magna, dapibus gravida est cursus sed. Ut nec blandit purus. Phasellus a auctor nibh.\n  </p>\n  <p>\n    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut faucibus mauris et sapien fermentum vehicula. Cras consectetur, nisi vel elementum viverra, turpis nibh tempor lacus, sit amet faucibus mi ex lobortis tellus. Aenean lobortis, augue et laoreet vehicula, arcu massa molestie mauris, vitae ullamcorper enim tortor vel ligula. Suspendisse quis facilisis leo, nec tempus tortor. Sed quis faucibus nisi. Cras molestie ornare aliquam. Integer faucibus commodo mauris a tempor. Aliquam rhoncus magna vulputate erat posuere sagittis. Vivamus tincidunt finibus ante quis condimentum. Vestibulum eget elit sed sapien suscipit aliquam ut nec ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget erat turpis. Nunc vitae maximus augue, et lacinia sapien.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/pojntfx/die-illustrierte-app/src/pages/page1/page1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], Page1Page);
    return Page1Page;
}());

//# sourceMappingURL=page1.js.map

/***/ })

});
//# sourceMappingURL=6.js.map