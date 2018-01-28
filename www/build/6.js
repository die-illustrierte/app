webpackJsonp([6],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicTabsPageModule", function() { return IonicTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_tabs__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IonicTabsPageModule = (function () {
    function IonicTabsPageModule() {
    }
    IonicTabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_tabs__["a" /* IonicTabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ionic_tabs__["a" /* IonicTabsPage */]),
            ],
        })
    ], IonicTabsPageModule);
    return IonicTabsPageModule;
}());

//# sourceMappingURL=ionic-tabs.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IonicTabsPage = (function () {
    function IonicTabsPage() {
    }
    IonicTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ionic-tabs',template:/*ion-inline-start:"/home/pojntfx/die-illustrierte-app/src/pages/ionic-tabs/ionic-tabs.html"*/'<ion-tabs>\n  <ion-tab root="HomePage" tabTitle="Start" tabIcon="home"></ion-tab>\n  <ion-tab root="IonicTabsPage_2Page" tabTitle="Aktuell" tabIcon="notifications"></ion-tab>\n  <ion-tab root="HomePage" tabTitle="Blicke" tabIcon="eye"></ion-tab>\n  <ion-tab root="IonicTabsPage_2Page" tabTitle="Kultur" tabIcon="school"></ion-tab>\n  <ion-tab root="HomePage" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/pojntfx/die-illustrierte-app/src/pages/ionic-tabs/ionic-tabs.html"*/,
        })
    ], IonicTabsPage);
    return IonicTabsPage;
}());

//# sourceMappingURL=ionic-tabs.js.map

/***/ })

});
//# sourceMappingURL=6.js.map