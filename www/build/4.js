webpackJsonp([4],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_to_push__ = __webpack_require__(299);
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
                __WEBPACK_IMPORTED_MODULE_2__page_to_push__["a" /* PageToPushPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_to_push__["a" /* PageToPushPage */])
            ]
        })
    ], Module);
    return Module;
}());

//# sourceMappingURL=page-to-push.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageToPushPage; });
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


var PageToPushPage = (function () {
    function PageToPushPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PageToPushPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-to-push',template:/*ion-inline-start:"/home/pojntfx/die-illustrierte-app/src/pages/page-to-push/page-to-push.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PageToPush</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    I\'m just any page that you can open in a modal, or push using your NavController.\n  </div>\n  <ion-item>\n    <ion-label>Text field</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/pojntfx/die-illustrierte-app/src/pages/page-to-push/page-to-push.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PageToPushPage);
    return PageToPushPage;
}());

//# sourceMappingURL=page-to-push.js.map

/***/ })

});
//# sourceMappingURL=4.js.map