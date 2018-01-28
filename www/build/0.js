webpackJsonp([0],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partial_home__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(295);
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
                __WEBPACK_IMPORTED_MODULE_2__partial_home__["a" /* PartialHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__partial_home__["a" /* PartialHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
            ]
        })
    ], Module);
    return Module;
}());

//# sourceMappingURL=partial-home.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_super_tabs_src__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { SuperTabsModule } from 'ionic2-super-tabs';
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__ionic2_super_tabs_src__["b" /* SuperTabsModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartialHomePage; });
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


var PartialHomePage = (function () {
    function PartialHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page1 = 'Page1Page';
        this.page2 = 'Page2Page';
        this.page3 = 'Page3Page';
        this.showIcons = true;
        this.showTitles = true;
        this.pageTitle = 'Partial Home';
        var type = navParams.get('type');
        switch (type) {
            case 'icons-only':
                this.showTitles = false;
                this.pageTitle += ' - Icons only';
                break;
            case 'titles-only':
                this.showIcons = false;
                this.pageTitle += ' - Titles only';
                break;
        }
    }
    PartialHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partial-home',template:/*ion-inline-start:"/home/pojntfx/die-illustrierte-app/src/pages/partial-home/partial-home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-row text-uppercase text-center style="height: 20%; background: linear-gradient(#c1c1c1, rgb(210, 210, 210));font-size: 20px;">\n      <h2>Some content goes here</h2>\n    </ion-row>\n    <super-tabs style="height: 80%" [config]="{ sideMenu: \'left\' }" [toolbarColor]="\'primary\'">\n      <super-tab [root]="page1" [title]="showTitles? \'First page\' : \'\'" [icon]="showIcons? \'home\': \'\'"></super-tab>\n      <super-tab [root]="page2" [title]="showTitles? \'Second page\' : \'\'" [icon]="showIcons? \'pin\' : \'\'"></super-tab>\n      <super-tab [root]="page3" [title]="showTitles? \'Third page\' : \'\'" [icon]="showIcons? \'heart\' : \'\'"></super-tab>\n    </super-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/home/pojntfx/die-illustrierte-app/src/pages/partial-home/partial-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PartialHomePage);
    return PartialHomePage;
}());

//# sourceMappingURL=partial-home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map