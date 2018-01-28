webpackJsonp([2],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(303);
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
                __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */])
            ]
        })
    ], Module);
    return Module;
}());

//# sourceMappingURL=page3.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Page; });
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


var Page3Page = (function () {
    function Page3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page3Page.prototype.ionViewWillLoad = function () {
        console.log('[3] will load fired');
    };
    Page3Page.prototype.ionViewDidLoad = function () {
        console.log('[3] did load fired');
    };
    Page3Page.prototype.ionViewWillEnter = function () {
        console.log('[3] will enter fired');
    };
    Page3Page.prototype.ionViewDidEnter = function () {
        console.log('[3] did enter fired');
    };
    Page3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page3',template:/*ion-inline-start:"/home/pojntfx/die-illustrierte-app/src/pages/page3/page3.html"*/'<ion-content padding>\n  <p>\n    Praesent non ullamcorper turpis. Praesent eleifend est eget iaculis lobortis. Fusce elementum arcu lacus. Cras sed erat convallis, euismod augue at, euismod nisi. Morbi ac ligula rhoncus, venenatis sem et, posuere dui. Vivamus porta viverra massa, elementum vehicula diam euismod sed. Curabitur euismod justo magna, dapibus gravida est cursus sed. Ut nec blandit purus. Phasellus a auctor nibh.\n  </p>\n  <p>\n    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut faucibus mauris et sapien fermentum vehicula. Cras consectetur, nisi vel elementum viverra, turpis nibh tempor lacus, sit amet faucibus mi ex lobortis tellus. Aenean lobortis, augue et laoreet vehicula, arcu massa molestie mauris, vitae ullamcorper enim tortor vel ligula. Suspendisse quis facilisis leo, nec tempus tortor. Sed quis faucibus nisi. Cras molestie ornare aliquam. Integer faucibus commodo mauris a tempor. Aliquam rhoncus magna vulputate erat posuere sagittis. Vivamus tincidunt finibus ante quis condimentum. Vestibulum eget elit sed sapien suscipit aliquam ut nec ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget erat turpis. Nunc vitae maximus augue, et lacinia sapien.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/pojntfx/die-illustrierte-app/src/pages/page3/page3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], Page3Page);
    return Page3Page;
}());

//# sourceMappingURL=page3.js.map

/***/ })

});
//# sourceMappingURL=2.js.map