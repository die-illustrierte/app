webpackJsonp([11],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/austausch/austausch.module": [
		286,
		1
	],
	"../pages/home/home.module": [
		287,
		0
	],
	"../pages/ionic-tabs-page-1/ionic-tabs-page-1.module": [
		288,
		10
	],
	"../pages/ionic-tabs-page-2/ionic-tabs-page-2.module": [
		289,
		9
	],
	"../pages/mainpage/mainpage.module": [
		290,
		8
	],
	"../pages/page-to-push/page-to-push.module": [
		291,
		7
	],
	"../pages/page1/page1.module": [
		292,
		6
	],
	"../pages/page2/page2.module": [
		293,
		5
	],
	"../pages/partnersuche/partnersuche.module": [
		294,
		4
	],
	"../pages/unterstuetzung/unterstuetzung.module": [
		295,
		3
	],
	"../pages/zusammenkuenfte/zusammenkuenfte.module": [
		296,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* DieIllustrierte */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* DieIllustrierte */], {}, {
                    links: [
                        { loadChildren: '../pages/austausch/austausch.module#Module', name: 'Austausch', segment: 'austausch/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#Module', name: 'HomePage', segment: 'home/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-tabs-page-1/ionic-tabs-page-1.module#IonicTabsPage_1PageModule', name: 'IonicTabsPage_1Page', segment: 'ionic-tabs-page-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-tabs-page-2/ionic-tabs-page-2.module#IonicTabsPage_2PageModule', name: 'IonicTabsPage_2Page', segment: 'ionic-tabs-page-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainpage/mainpage.module#MainPageModule', name: 'MainPage', segment: 'mainpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-to-push/page-to-push.module#Module', name: 'PageToPushPage', segment: 'page-to-push', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page1/page1.module#Module', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page2/page2.module#Module', name: 'Page2Page', segment: 'page2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partnersuche/partnersuche.module#Module', name: 'PartnersuchePage', segment: 'partnersuche', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unterstuetzung/unterstuetzung.module#Module', name: 'UnterstuetzungPage', segment: 'unterstuetzung', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zusammenkuenfte/zusammenkuenfte.module#Module', name: 'ZusammenkuenftePage', segment: 'zusammenkuenfte', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* DieIllustrierte */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DieIllustrierte; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DieIllustrierte = (function () {
    function DieIllustrierte(platform, splashScreen, statusBar) {
        this.menuItems = [
            {
                name: 'Aktuelle Ausgabe',
                page: 'MainPage'
            },
            {
                name: 'Archiv',
                page: 'MainPage'
            },
            {
                name: 'Web-Ansicht',
                page: 'MainPage'
            },
            {
                name: 'Einstellungen',
                page: 'MainPage'
            },
            {
                name: 'Über uns',
                page: 'MainPage'
            }
        ];
        this.rootPage = this.menuItems[0].page;
        this.rootParams = this.menuItems[0].params;
        platform.ready().then(function () {
            splashScreen.hide();
            statusBar.backgroundColorByHexString('#BBBBBB');
        });
    }
    DieIllustrierte.prototype.openPage = function (page) {
        this.nav.setRoot(page.page, page.params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], DieIllustrierte.prototype, "nav", void 0);
    DieIllustrierte = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pojntfx/die-illustrierte-app/src/app/app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content">\n    <ion-content>\n      <ion-list>\n        <button ion-item menuClose *ngFor="let item of menuItems" (click)="openPage(item)">{{ item.name }}</button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-nav [root]="rootPage" [rootParams]="rootParams" main #content></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/home/pojntfx/die-illustrierte-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], DieIllustrierte);
    return DieIllustrierte;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map