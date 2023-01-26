webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_service_notification_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_create__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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








var CreatePage = /** @class */ (function () {
    function CreatePage(popoverCtrl, navCtrl, navParams, viewCtrl, dialogService, httpService, notificationService, storage, event) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dialogService = dialogService;
        this.httpService = httpService;
        this.notificationService = notificationService;
        this.storage = storage;
        this.event = event;
        this.params = {
            name: '',
            database: '',
            from: '',
            to: '',
            subject: '',
            message: '',
            created_at: '',
            is_read: false,
        };
        __WEBPACK_IMPORTED_MODULE_7_moment__["locale"]('es');
        this.params.database = this.navParams.data.database;
        this.params.name = '';
        this.params.from = 'alexchristianqr@utp.edu.pe';
        this.params.to = 'teacher2022@utp.edu.pe';
        this.params.created_at = __WEBPACK_IMPORTED_MODULE_7_moment__().format('YYYY-MM-DD HH:mm');
        this.params.is_read = false;
    }
    CreatePage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    CreatePage.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.viewCtrl.dismiss()];
            });
        });
    };
    CreatePage.prototype.fnCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var validate, self;
            return __generator(this, function (_a) {
                validate = false;
                if (this.params.name == null || this.params.name == '') {
                    validate = false;
                }
                else if (this.params.from == null || this.params.from == '') {
                    validate = false;
                }
                else if (this.params.to == null || this.params.to == '') {
                    validate = false;
                }
                else if (this.params.subject == null || this.params.subject == '') {
                    validate = false;
                }
                else
                    validate = !(this.params.message == null || this.params.message == '');
                // Validation
                if (!validate)
                    return [2 /*return*/, this.dialogService.dialogNotification('Fields detected empty!')];
                self = this;
                return [2 /*return*/, this.storage
                        .get('SHARED_PREFERENCE')
                        .then(function (data) {
                        function doFunc() {
                            self.notificationService.notifyInfo('Sending...', 0);
                            self.httpService.create(self);
                        }
                        if (data != null) {
                            if (data.CONFIRM_BEFORE_SENDING) {
                                _this.dialogService.dialogQuestion('', 'Do you want to send this message?', function () {
                                    doFunc();
                                });
                            }
                            else {
                                doFunc();
                            }
                        }
                        else {
                            doFunc();
                        }
                    })
                        .catch(function (error) {
                        console.error(error);
                    })];
            });
        });
    };
    CreatePage.prototype.presentPopover = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popover_create__["a" /* PopoverCreatePage */]).present({ ev: myEvent })];
            });
        });
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\create\create.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Create</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fnCreate()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!--    <ion-buttons left>-->\n    <!--          <button ion-button icon-only class="p-l-15 p-r-15" (click)="back()">-->\n    <!--            <ion-icon name="md-arrow-back"></ion-icon>-->\n    <!--          </button>-->\n    <!--    </ion-buttons>-->\n    <!--    <ion-title>Create</ion-title>-->\n    <!--    <ion-buttons right>-->\n    <!--      <button ion-button (click)="fnCreate()">-->\n    <!--        <ion-icon name="send"></ion-icon>-->\n    <!--      </button>-->\n    <!--      <button ion-button (click)="presentPopover($event)">-->\n    <!--        <ion-icon name="more" md="md-more"></ion-icon>-->\n    <!--      </button>-->\n    <!--    </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Database</ion-label>\n      <ion-select [(ngModel)]="params.database">\n        <ion-option value="DATABASE_INBOX">Inbox</ion-option>\n        <ion-option value="DATABASE_SENT">Sent</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Name</ion-label>\n      <ion-input [(ngModel)]="params.name" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>From</ion-label>\n      <ion-input [(ngModel)]="params.from" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>To</ion-label>\n      <ion-input [(ngModel)]="params.to" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Subject</ion-label>\n      <ion-input [(ngModel)]="params.subject" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <textarea [(ngModel)]="params.message" #myInput id="myInput" rows="5" cols="10" (keyup)="resize()" placeholder="Input Message" style="text-align: justify; text-justify: inter-word"> </textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\create\create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_preference__ = __webpack_require__(45);
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





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, storage, navParams, event, viewCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.event = event;
        this.viewCtrl = viewCtrl;
        this.items = [];
    }
    SearchPage.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.navParams.data.database === __WEBPACK_IMPORTED_MODULE_4__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DI) {
                    this.event.publish('eventMailsInboxFetch');
                }
                else if (this.navParams.data.database === __WEBPACK_IMPORTED_MODULE_4__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DS) {
                    this.event.publish('eventMailsSentFetch');
                }
                return [2 /*return*/, this.viewCtrl.dismiss()];
            });
        });
    };
    SearchPage.prototype.fnViewDetail = function (data, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { data: data, index: index })];
            });
        });
    };
    SearchPage.prototype.getItems = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = e.target.value;
                        return [4 /*yield*/, this.storage.set('text_search', e.target.value)];
                    case 1:
                        _a.sent();
                        this.items = [];
                        return [2 /*return*/, this.storage
                                .get(this.navParams.data.database)
                                .then(function (data) {
                                if (data != null) {
                                    if (text.toLowerCase().length == 0) {
                                        return (_this.items = []);
                                    }
                                    else {
                                        return (_this.items = data.filter(function (objeto) {
                                            if (objeto.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                                                objeto.subject.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                                                objeto.message.toLowerCase().indexOf(text.toLowerCase()) > -1) {
                                                return true;
                                            }
                                        }));
                                    }
                                }
                            })
                                .catch(function (error) {
                                console.error(error);
                            })];
                }
            });
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar [placeholder]="\'Search here\'" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="items.length >= 1">\n    <button ion-item unset *ngFor="let item of items;let i = index" detail-none (click)="fnViewDetail(item,i)">\n      <ion-avatar item-left style="opacity: 0.8">\n        <button ion-fab [ngClass]="\'button-profile color-\' + item.name.charAt(0).toUpperCase()">\n          <span style="font-size: 1.8em">{{item.name.charAt(0).toUpperCase()}}</span>\n        </button>\n      </ion-avatar>\n      <h2 *ngIf="item.is_read">{{item.name}}</h2>\n      <h2 *ngIf="!item.is_read"><b>{{item.name}}</b></h2>\n      <h3 *ngIf="item.is_read">{{item.subject}}</h3>\n      <h3 *ngIf="!item.is_read"><b>{{item.subject}}</b></h3>\n      <p *ngIf="item.is_read">{{item.message}}</p>\n      <p *ngIf="!item.is_read"><b>{{item.message}}</b></p>\n    </button>\n  </ion-list>\n  <ion-list *ngIf="items.length <= 0">\n    <div class="list-empty">\n      <i class="fa fa-exclamation-triangle fa-2x text-danger"></i>\n      <h4 class="text-muted">Search value not found</h4>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverMailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_mail__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_service_notification_service__ = __webpack_require__(31);
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






var PopoverMailPage = /** @class */ (function () {
    function PopoverMailPage(notificationService, viewCtrl, modalCtrl, navCtrl, dialogService, storage, event) {
        this.notificationService = notificationService;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.dialogService = dialogService;
        this.storage = storage;
        this.event = event;
        this.list = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_2__modal_mail__["a" /* ModalMailPage */], dispatch: null },
            { title: 'Clean database', component: null, dispatch: 'fnClean' },
        ];
    }
    PopoverMailPage.prototype.fnClean = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dialogService.dialogQuestion('Warning', 'Do you want to clean the database INBOX?', function () {
                        _this.storage.remove('DATABASE_INBOX').then(function () {
                            console.log('DATABASE_INBOX removido!');
                            _this.event.publish('eventMailsInboxFetch');
                            _this.notificationService.notifyInfo('Database cleaned');
                            console.log('Storage cleaned!');
                        });
                    })];
            });
        });
    };
    PopoverMailPage.prototype.open = function (objeto) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!objeto.component) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.navCtrl.push(objeto.component)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        _a = objeto.dispatch;
                        switch (_a) {
                            case 'fnClean': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.fnClean()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PopoverMailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-mail',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\mail\popover-mail.html"*/'<ion-list class="menu-list" style="margin: 0">\n\n  <button ion-item *ngFor="let item of list" (click)="open(item)">{{item.title}}</button>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\mail\popover-mail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], PopoverMailPage);
    return PopoverMailPage;
}());

//# sourceMappingURL=popover-mail.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsInboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_service_notification_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mail_popover_mail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_shared_preference__ = __webpack_require__(45);
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











var MailsInboxPage = /** @class */ (function () {
    function MailsInboxPage(popoverCtrl, httpService, notificationService, navCtrl, event, modalCtrl, dialogService, storage, navParams) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.httpService = httpService;
        this.notificationService = notificationService;
        this.navCtrl = navCtrl;
        this.event = event;
        this.modalCtrl = modalCtrl;
        this.dialogService = dialogService;
        this.storage = storage;
        this.navParams = navParams;
        this.database = [];
        this.MYSHAREDPREFERENCES = {};
        this.fnFetch().then(function (r) {
            _this.event.subscribe('eventMailsInboxFetch', function () { return _this.fnFetch(); });
            _this.event.subscribe('eventMailsInboxPreferences', function () { return _this.httpService.loadPreferences(_this); });
        });
    }
    MailsInboxPage.prototype.ngOnDestroy = function () {
        this.event.unsubscribe('eventMailsInboxFetch');
        console.log('Events destroyed!');
    };
    MailsInboxPage.prototype.doInfinite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('infinite');
                return [2 /*return*/];
            });
        });
    };
    MailsInboxPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Begin async operation', { refresher: refresher });
                return [2 /*return*/, this.storage
                        .get('DATABASE_INBOX')
                        .then(function (data) {
                        setTimeout(function () {
                            _this.database = data;
                            _this.httpService.loadPreferences(_this);
                            console.log('Async operation has ended');
                            refresher.complete();
                        }, 2000);
                    })
                        .catch(function (error) {
                        console.error(error);
                        _this.dialogService.closeLoading();
                    })];
            });
        });
    };
    MailsInboxPage.prototype.fnViewDetail = function (data, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], { data: data, index: index })];
            });
        });
    };
    MailsInboxPage.prototype.fnViewSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], { database: __WEBPACK_IMPORTED_MODULE_10__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DI })];
            });
        });
    };
    MailsInboxPage.prototype.fnViewCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_create__["a" /* CreatePage */], { database: __WEBPACK_IMPORTED_MODULE_10__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DI })];
            });
        });
    };
    MailsInboxPage.prototype.fnFetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.dialogService.showLoading();
                return [2 /*return*/, this.storage
                        .get('DATABASE_INBOX')
                        .then(function (data) {
                        if (data) {
                            _this.database = data;
                        }
                        else {
                            var initDB = [
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'alexchristianqr@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Alex Christian Quispe Roque',
                                    subject: 'Funciones lineales',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'maria@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Maria',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'yolanda@utp.edu.pe',
                                    is_read: true,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Yolanda',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'nando@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Nando',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'jorge@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Jorge',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'teresa@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Teresa',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'beatriz@utp.edu.pe',
                                    is_read: true,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Beatriz',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'carlos@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Carlos',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'estefany@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Estefany',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'gerardo@utp.edu.pe',
                                    is_read: false,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Gerardo',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                                {
                                    created_at: '2023-01-25 11:50',
                                    database: 'DATABASE_INBOX',
                                    from: 'kathy@utp.edu.pe',
                                    is_read: true,
                                    message: 'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
                                    name: 'Kathy',
                                    subject: 'Matricula Marzo 2023',
                                    to: 'sae@utp.edu.pe',
                                },
                            ];
                            _this.httpService.savedInitialize({ data: initDB, database: 'DATABASE_INBOX', self: _this });
                            _this.database = [];
                        }
                        _this.httpService.loadPreferences(_this);
                        _this.dialogService.closeLoading();
                        console.log('Fetch storage from Mails Inbox!');
                    })
                        .catch(function (error) {
                        console.error(error);
                        _this.dialogService.closeLoading();
                    })];
            });
        });
    };
    MailsInboxPage.prototype.presentPopover = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__mail_popover_mail__["a" /* PopoverMailPage */]).present({ ev: myEvent })];
            });
        });
    };
    MailsInboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mails-inbox',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\mails-inbox\mails-inbox.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Inbox</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_SEARCH" class="p-r-15 my-icon" (click)="fnViewSearch()"><ion-icon name="search"></ion-icon></button>\n      <button ion-button icon-only class="p-r-15 my-icon" (click)="presentPopover($event)"><ion-icon name="more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content> </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf="database.length >= 1">\n    <ion-item-sliding #item *ngFor="let data of database;let i = index" (click)="fnViewDetail(data,i)">\n      <ion-item>\n        <ion-avatar item-left style="opacity: 0.8">\n          <button ion-fab [ngClass]="\'button-profile color-\' + data.name.charAt(0).toUpperCase()">\n            <span style="font-size: 1.8em">{{data.name.charAt(0).toUpperCase()}}</span>\n          </button>\n        </ion-avatar>\n        <h2 *ngIf="data.is_read">{{data.name}}</h2>\n        <h2 *ngIf="!data.is_read"><b>{{data.name}}</b></h2>\n        <h3 *ngIf="data.is_read">{{data.subject}}</h3>\n        <h3 *ngIf="!data.is_read"><b>{{data.subject}}</b></h3>\n        <p *ngIf="data.is_read">{{data.message}}</p>\n        <p *ngIf="!data.is_read"><b>{{data.message}}</b></p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="archive"></ion-icon>\n          Archivar\n        </button>\n        <button ion-button color="dark" class="my-icon">\n          <ion-icon name="trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="dark" class="my-icon">\n          <ion-icon name="trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf="database.length <= 0">\n    <div class="list-empty">\n      <i class="fa fa-exclamation-triangle fa-2x text-danger"></i>\n      <h4 class="text-muted">There is nothing in the mails inbox</h4>\n    </div>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" class="my-icon" (click)="fnViewCreate()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\mails-inbox\mails-inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MailsInboxPage);
    return MailsInboxPage;
}());

//# sourceMappingURL=mails-inbox.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_create__ = __webpack_require__(206);
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



var PopoverCreatePage = /** @class */ (function () {
    function PopoverCreatePage(viewCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.list = [
            { title: 'Add Contacts', component: __WEBPACK_IMPORTED_MODULE_2__modal_create__["a" /* ModalCreatePage */] },
            { title: 'Discard', component: __WEBPACK_IMPORTED_MODULE_2__modal_create__["a" /* ModalCreatePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_2__modal_create__["a" /* ModalCreatePage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_2__modal_create__["a" /* ModalCreatePage */] },
        ];
    }
    PopoverCreatePage.prototype.open = function (objeto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.modalCtrl.create(objeto.component).present()];
                }
            });
        });
    };
    PopoverCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-create',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\create\popover-create.html"*/'<ion-list class="menu-list" style="margin: 0">\n  <button ion-item *ngFor="let item of list" (click)="open(item)">{{item.title}}</button>\n</ion-list>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\create\popover-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PopoverCreatePage);
    return PopoverCreatePage;
}());

//# sourceMappingURL=popover-create.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_preference__ = __webpack_require__(45);
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
 * Created by aquispe on 25/11/2017.
 */




var ModalCreatePage = /** @class */ (function () {
    function ModalCreatePage(viewCtrl, storage) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.MYSHAREDPREFERENCES = {
            CONFIRM_BEFORE_SENDING: false,
            CONFIRM_BEFORE_REMOVING: false,
            CONFIRM_BEFORE_FILING: false,
        };
        this.storage
            .get('SHARED_PREFERENCE')
            .then(function (data) {
            if (data != null) {
                _this.MYSHAREDPREFERENCES = data;
            }
            else {
                _this.storage
                    .set('SHARED_PREFERENCE', __WEBPACK_IMPORTED_MODULE_3__app_shared_preference__["a" /* SHARED_PREFERENCE */])
                    .then(function (data) {
                    _this.MYSHAREDPREFERENCES = data;
                    console.log('Loaded shared preferences by default!');
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ModalCreatePage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ModalCreatePage.prototype.fnFetchMyPreferences = function () {
        if (Object.keys(this.MYSHAREDPREFERENCES).length) {
            this.storage
                .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
                .then(function (data) {
                console.log(data);
                console.log('Fetch shared preferences!');
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    ModalCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-create',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\create\modal-create.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only class="p-l-15 p-r-15" (click)="back()">\n\n        <ion-icon name="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Create Setting</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h2>Request Confirmations</h2>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>\n\n        <span>Confirm before sending mail</span>\n\n        <p>mail</p>\n\n      </ion-label>\n\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.CONFIRM_BEFORE_SENDING" (click)="fnFetchMyPreferences()"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h2>Allow Actions</h2>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>\n\n        <span>Confirmar antes de enviar correo</span>\n\n        <p>envio de mensaje</p>\n\n      </ion-label>\n\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.CONFIRM_BEFORE_SENDING" (click)="fnFetchMyPreferences()"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>\n\n        <span>Confirmar antes de enviar correo</span>\n\n        <p>envio de mensaje</p>\n\n      </ion-label>\n\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.CONFIRM_BEFORE_SENDING" (click)="fnFetchMyPreferences()"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\create\modal-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ModalCreatePage);
    return ModalCreatePage;
}());

//# sourceMappingURL=modal-create.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_preference__ = __webpack_require__(45);
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


// import { Storage } from '@ionic/storage';
// import { Events, NavController } from 'ionic-angular';
// import { NotificationServiceProvider } from '../notification-service/notification-service';
var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider() {
    } // private storage: Storage // private event: Events, // private navCtrl: NavController, // private notificationService: NotificationServiceProvider,
    HttpServiceProvider.prototype.loadPreferences = function (self) {
        self.storage
            .get('SHARED_PREFERENCE')
            .then(function (data) {
            if (data != null) {
                if (self.MYSHAREDPREFERENCES != undefined) {
                    self.MYSHAREDPREFERENCES = data;
                    console.log(data);
                }
                console.log('Loaded shared preferences cache!');
            }
            else {
                self.storage
                    .set('SHARED_PREFERENCE', __WEBPACK_IMPORTED_MODULE_1__app_shared_preference__["a" /* SHARED_PREFERENCE */])
                    .then(function (data) {
                    if (self.MYSHAREDPREFERENCES != undefined) {
                        self.MYSHAREDPREFERENCES = data;
                    }
                    console.log('Loaded shared preferences by default!');
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HttpServiceProvider.prototype.create = function (self) {
        // Get storage
        var msg = '';
        self.storage
            .get(self.params.database)
            .then(function (data) {
            console.log({ data: data }, 'jejej');
            var init = [
                {
                    created_at: '2023-01-25 11:50',
                    database: 'DATABASE_INBOX',
                    from: 'alexchristianqr@utp.edu.pe',
                    is_read: true,
                    message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
                    name: 'Alex',
                    subject: 'Clase 001',
                    to: 'teacher2022@utp.edu.pe',
                },
                {
                    created_at: '2023-01-25 11:50',
                    database: 'DATABASE_INBOX',
                    from: 'alexchristianqr@utp.edu.pe',
                    is_read: true,
                    message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
                    name: 'Alex',
                    subject: 'Clase 001',
                    to: 'teacher2022@utp.edu.pe',
                },
                {
                    created_at: '2023-01-25 11:50',
                    database: 'DATABASE_INBOX',
                    from: 'alexchristianqr@utp.edu.pe',
                    is_read: true,
                    message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
                    name: 'Alex',
                    subject: 'Clase 001',
                    to: 'teacher2022@utp.edu.pe',
                },
                {
                    created_at: '2023-01-25 11:50',
                    database: 'DATABASE_INBOX',
                    from: 'alexchristianqr@utp.edu.pe',
                    is_read: true,
                    message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
                    name: 'Alex',
                    subject: 'Clase 001',
                    to: 'teacher2022@utp.edu.pe',
                },
                {
                    created_at: '2023-01-25 11:50',
                    database: 'DATABASE_INBOX',
                    from: 'alexchristianqr@utp.edu.pe',
                    is_read: true,
                    message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
                    name: 'Alex',
                    subject: 'Clase 001',
                    to: 'teacher2022@utp.edu.pe',
                },
                {
                    created_at: '2023-01-25 11:50',
                    database: 'DATABASE_INBOX',
                    from: 'alexchristianqr@utp.edu.pe',
                    is_read: true,
                    message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
                    name: 'Yolanda',
                    subject: 'Clase 001',
                    to: 'teacher2022@utp.edu.pe',
                },
            ];
            if (!data) {
                data = init;
            }
            // data = data == null ? [] : data;
            data.unshift(self.params);
            // Set storage
            self.storage
                .set(self.params.database, data)
                .then(function (data) {
                switch (self.params.database) {
                    case __WEBPACK_IMPORTED_MODULE_1__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DI:
                        self.event.publish('eventMailsInboxFetch');
                        msg = 'inbox';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DS:
                        self.event.publish('eventMailsSentFetch');
                        msg = 'sent';
                        break;
                    default:
                        throw new Error('Not shared preference database');
                }
                self.navCtrl.pop();
                self.notificationService.toast.dismiss();
                self.notificationService.notifyInfo('Message ' + msg + ' successfully');
            })
                .catch(function (error) {
                console.error(error);
                self.notificationService.toast.dismiss();
                self.notificationService.notifyError('Error, Getting list of database');
            });
        })
            .catch(function (error) {
            console.error(error);
            self.notificationService.toast.dismiss();
            self.notificationService.notifyError('Error, Message not this process');
        });
    };
    HttpServiceProvider.prototype.savedInitialize = function (_a) {
        var data = _a.data, database = _a.database, self = _a.self;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (!data)
                    throw new Error('Not found data');
                // Set storage
                return [2 /*return*/, self.storage
                        .set(database, data)
                        .then(function (response) {
                        console.log({ response: response });
                    })
                        .catch(function (error) {
                        console.error(error);
                    })];
            });
        });
    };
    HttpServiceProvider.prototype.remove = function (self, database) {
        self.storage
            .get(database)
            .then(function (data) {
            data.forEach(function (item, i) {
                if (self.index === i) {
                    data.splice(i, 1);
                    self.storage.set(database, data).then(function () {
                        if (database === 'DATABASE_SENT') {
                            //enviados
                            self.event.publish('eventMailsSentFetch');
                        }
                        else if (database === 'DATABASE_INBOX') {
                            //bandeja de entrada
                            self.event.publish('eventMailsInboxFetch');
                        }
                        else if (database === 'DATABASE_OUTBOX') {
                            //bandeja de salida
                        }
                        else if (database === 'DATABASE_DRAFTS') {
                            //borradores
                        }
                        self.navCtrl.pop();
                    });
                    self.notificationService.toast.dismiss();
                    self.notificationService.notifyInfo('1 element removed successfully');
                }
            });
        })
            .catch(function (error) {
            console.error(error);
            self.notificationService.toast.dismiss();
            self.notificationService.notifyError('Error, element not removed');
        });
    };
    HttpServiceProvider.prototype.archive = function (objeto) { };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationServiceProvider = /** @class */ (function () {
    function NotificationServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        // not implement
    }
    NotificationServiceProvider.prototype.notifyInfo = function (message, duration, showButton) {
        if (duration === void 0) { duration = 3000; }
        if (showButton === void 0) { showButton = true; }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'bottom',
            showCloseButton: showButton,
            closeButtonText: 'close',
        });
        this.toast.present();
    };
    NotificationServiceProvider.prototype.notifyError = function (message) {
        this.toast = this.toastCtrl.create({
            message: message,
            duration: 0,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'close',
        });
        this.toast.present();
    };
    NotificationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], NotificationServiceProvider);
    return NotificationServiceProvider;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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


var DialogServiceProvider = /** @class */ (function () {
    function DialogServiceProvider(alertCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // not implemented
    }
    DialogServiceProvider.prototype.dialogNotification = function (message, btnOut) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    title: 'Warning',
                    message: message,
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'cancel',
                            handler: typeof btnOut === 'function' ? btnOut : function () { },
                        },
                    ],
                });
                return [2 /*return*/, alert.present()];
            });
        });
    };
    DialogServiceProvider.prototype.dialogQuestion = function (title, message, btnOk, btnCancel) {
        if (title === void 0) { title = 'Alert'; }
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: typeof btnOk === 'function' ? btnOk : function () { },
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: typeof btnCancel === 'function' ? btnCancel : function () { },
                },
            ],
        });
        alert.present();
    };
    DialogServiceProvider.prototype.showLoading = function (content) {
        if (content === void 0) { content = 'Loading Please Wait...'; }
        this.loading = this.loadingCtrl.create({
            content: content,
        });
        this.loading.present();
    };
    DialogServiceProvider.prototype.closeLoading = function () {
        this.loading.dismiss();
    };
    DialogServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DialogServiceProvider);
    return DialogServiceProvider;
}());

//# sourceMappingURL=dialog-service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detail__ = __webpack_require__(343);
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



var PopoverDetailPage = /** @class */ (function () {
    function PopoverDetailPage(viewCtrl, modalCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.list = [{ title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_2__modal_detail__["a" /* ModalDetailPage */] }];
    }
    PopoverDetailPage.prototype.open = function (objeto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.navCtrl.push(objeto.component)];
            });
        });
    };
    PopoverDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-detail',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\detail\popover-detail.html"*/'<ion-list class="menu-list" style="margin: 0">\n\n  <button ion-item *ngFor="let item of list" (click)="open(item)">{{item.title}}</button>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\detail\popover-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], PopoverDetailPage);
    return PopoverDetailPage;
}());

//# sourceMappingURL=popover-detail.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(27);
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
/**
 * Created by aquispe on 28/11/2017.
 */




var ModalDetailPage = /** @class */ (function () {
    function ModalDetailPage(event, storage, httpService, viewCtrl) {
        this.event = event;
        this.storage = storage;
        this.httpService = httpService;
        this.viewCtrl = viewCtrl;
        this.MYSHAREDPREFERENCES = {};
        this.httpService.loadPreferences(this);
    }
    ModalDetailPage.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalDetailPage.prototype.fnFetchMyPreferences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!Object.keys(this.MYSHAREDPREFERENCES).length)
                    throw new Error('Not found shared prefernces');
                return [2 /*return*/, this.storage
                        .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
                        .then(function () {
                        _this.event.publish('eventDetailFetch');
                        console.log('Fetch shared preferences!');
                    })
                        .catch(function (error) {
                        console.error(error);
                    })];
            });
        });
    };
    ModalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-detail',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\detail\modal-detail.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Mail Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <h2>Request Confirmations</h2>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>\n        <span>Confirm before remove mail</span>\n        <p>mail</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.CONFIRM_BEFORE_REMOVING" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-list>\n    <ion-list-header>\n      <h2>Allow Actions</h2>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>\n        <span>Show remove</span>\n        <p>button</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_REMOVE" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <span>Show archive</span>\n        <p>button</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_ARCHIVE" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <span>Show un-read</span>\n        <p>button</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_UN_READ" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\detail\modal-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalDetailPage);
    return ModalDetailPage;
}());

//# sourceMappingURL=modal-detail.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalMailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(27);
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
/**
 * Created by aquispe on 26/11/2017.
 */




var ModalMailPage = /** @class */ (function () {
    function ModalMailPage(event, httpService, viewCtrl, storage) {
        this.event = event;
        this.httpService = httpService;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.MYSHAREDPREFERENCES = {};
        this.httpService.loadPreferences(this);
    }
    ModalMailPage.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.viewCtrl.dismiss()];
            });
        });
    };
    ModalMailPage.prototype.fnFetchMyPreferences = function () {
        var _this = this;
        if (Object.keys(this.MYSHAREDPREFERENCES).length) {
            this.storage
                .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
                .then(function () {
                _this.event.publish('eventMailsInboxPreferences');
                _this.event.publish('eventMailsSentPreferences');
                console.log('Fetch shared preferences!');
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    ModalMailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-mail',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\mail\modal-mail.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Mail Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <h2>Allow Actions</h2>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <span>Show sync</span>\n        <p>button</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_SYNC" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <span>Show clean</span>\n        <p>button</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_CLEAN" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <span>Show search</span>\n        <p>button</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_SEARCH" (click)="fnFetchMyPreferences()"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\mail\modal-mail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ModalMailPage);
    return ModalMailPage;
}());

//# sourceMappingURL=modal-mail.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsSentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_service_notification_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mail_popover_mail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_shared_preference__ = __webpack_require__(45);
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











var MailsSentPage = /** @class */ (function () {
    function MailsSentPage(popoverCtrl, httpService, notificationService, navCtrl, event, modalCtrl, dialogService, storage, navParams) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.httpService = httpService;
        this.notificationService = notificationService;
        this.navCtrl = navCtrl;
        this.event = event;
        this.modalCtrl = modalCtrl;
        this.dialogService = dialogService;
        this.storage = storage;
        this.navParams = navParams;
        this.database = [];
        this.MYSHAREDPREFERENCES = {};
        this.fnFetch();
        this.event.subscribe('eventMailsSentFetch', function () {
            _this.fnFetch();
        });
        this.event.subscribe('eventMailsSentPreferences', function () {
            _this.httpService.loadPreferences(_this);
        });
    }
    MailsSentPage.prototype.ngOnDestroy = function () {
        this.event.unsubscribe('eventMailsSentFetch');
        console.log('Events destroyed!');
    };
    MailsSentPage.prototype.fnViewDetail = function (data, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], { data: data, index: index })];
            });
        });
    };
    MailsSentPage.prototype.fnViewSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], { database: __WEBPACK_IMPORTED_MODULE_10__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DS }).present()];
            });
        });
    };
    MailsSentPage.prototype.fnViewCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__create_create__["a" /* CreatePage */], { database: __WEBPACK_IMPORTED_MODULE_10__app_shared_preference__["a" /* SHARED_PREFERENCE */].DB.DS }).present()];
            });
        });
    };
    MailsSentPage.prototype.fnFetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.dialogService.showLoading();
                return [2 /*return*/, this.storage
                        .get('DATABASE_SENT')
                        .then(function (data) {
                        _this.database = data == null ? [] : data;
                        _this.httpService.loadPreferences(_this);
                        _this.dialogService.closeLoading();
                        console.log('Fetch storage from Mails Sent!');
                    })
                        .catch(function (error) {
                        console.error(error);
                        _this.dialogService.closeLoading();
                    })];
            });
        });
    };
    MailsSentPage.prototype.fnClean = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dialogService.dialogQuestion('Warning', 'Do you want to clean the database SENT?', function () {
                        _this.storage.remove('DATABASE_SENT').then(function () {
                            console.log('DATABASE_SENT removido!');
                            _this.fnFetch();
                            _this.notificationService.notifyInfo('Database cleaned');
                            console.log('Storage cleaned!');
                        });
                    }, function () {
                        console.log('Click on cancelled');
                    })];
            });
        });
    };
    MailsSentPage.prototype.presentPopover = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__mail_popover_mail__["a" /* PopoverMailPage */]).present({ ev: myEvent })];
            });
        });
    };
    MailsSentPage.prototype.fnUnRead = function () {
        console.log('unread!');
    };
    MailsSentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mails-sent',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\mails-sent\mails-sent.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Sent</ion-title>\n\n    <ion-buttons right>\n\n      <button *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_SYNC" ion-button class="p-r-15 my-icon" (click)="fnFetch()"><ion-icon name="sync"></ion-icon></button>\n\n      <button *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_CLEAN" ion-button class="p-r-15 my-icon" (click)="fnClean()"><ion-icon name="trash"></ion-icon></button>\n\n      <button *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_SEARCH" ion-button class="p-r-15 my-icon" (click)="fnViewSearch()"><ion-icon name="search"></ion-icon></button>\n\n      <button ion-button class="p-r-15 my-icon" (click)="presentPopover($event)"><ion-icon name="more"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list *ngIf="database.length >= 1">\n\n    <button ion-item unset *ngFor="let data of database;let i = index" detail-none (click)="fnViewDetail(data,i)">\n\n      <ion-avatar item-left style="opacity: 0.8">\n\n        <button ion-fab [ngClass]="\'button-profile color-\' + data.name.charAt(0).toUpperCase()">\n\n          <span style="font-size: 1.8em">{{data.name.charAt(0).toUpperCase()}}</span>\n\n        </button>\n\n      </ion-avatar>\n\n      <h2 *ngIf="data.is_read">{{data.name}}</h2>\n\n      <h2 *ngIf="!data.is_read"><b>{{data.name}}</b></h2>\n\n      <h3 *ngIf="data.is_read">{{data.subject}}</h3>\n\n      <h3 *ngIf="!data.is_read"><b>{{data.subject}}</b></h3>\n\n      <p *ngIf="data.is_read">{{data.message}}</p>\n\n      <p *ngIf="!data.is_read"><b>{{data.message}}</b></p>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="database.length <= 0">\n\n    <div class="list-empty">\n\n      <i class="fa fa-exclamation-triangle fa-2x text-danger"></i>\n\n      <h4 class="text-muted">There is nothing in the mails sent</h4>\n\n    </div>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" class="my-icon" (click)="fnViewCreate()">\n\n      <ion-icon name="create"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\mails-sent\mails-sent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MailsSentPage);
    return MailsSentPage;
}());

//# sourceMappingURL=mails-sent.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_service_notification_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__ = __webpack_require__(27);
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






var GeneralPage = /** @class */ (function () {
    function GeneralPage(navCtrl, viewCtrl, httpService, dialogService, storage, notificationService, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.dialogService = dialogService;
        this.storage = storage;
        this.notificationService = notificationService;
        this.navParams = navParams;
        console.log('GeneralPage!');
    }
    GeneralPage.prototype.fnOpenDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dialogService.dialogQuestion('', 'Do you want reset the app', function () {
                        _this.notificationService.notifyInfo('Reset project...', 0);
                        _this.storage.clear();
                        _this.httpService.loadPreferences(_this);
                        _this.notificationService.toast.dismiss();
                        _this.notificationService.notifyInfo('Reset project successfully');
                        console.log('Reset project!');
                    })];
            });
        });
    };
    GeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-general',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\general\general.html"*/'<!--\n\n  Generated template for the GeneralPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle start>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>General</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-button block color="light" (click)="fnOpenDialog()">\n\n            <strong>Reset all data project</strong>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <button ion-button block color="light" text-left>\n\n            <strong>Recovery last session</strong>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <button ion-button block color="light">\n\n            <strong>Clasification by database caché</strong>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\general\general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GeneralPage);
    return GeneralPage;
}());

//# sourceMappingURL=general.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>Welcome, clicked your view!</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_service_notification_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_create_popover_create__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_popover_detail__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_modal_create__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_modal_detail__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mail_popover_mail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mail_modal_mail__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mails_inbox_mails_inbox__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mails_sent_mails_sent__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_general_general__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(203);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mails_sent_mails_sent__["a" /* MailsSentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mails_inbox_mails_inbox__["a" /* MailsInboxPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_general_general__["a" /* GeneralPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_popover_create__["a" /* PopoverCreatePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mail_popover_mail__["a" /* PopoverMailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_popover_detail__["a" /* PopoverDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_modal_create__["a" /* ModalCreatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_modal_detail__["a" /* ModalDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mail_modal_mail__["a" /* ModalMailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql'],
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mails_sent_mails_sent__["a" /* MailsSentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mails_inbox_mails_inbox__["a" /* MailsInboxPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_general_general__["a" /* GeneralPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_popover_create__["a" /* PopoverCreatePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mail_popover_mail__["a" /* PopoverMailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_popover_detail__["a" /* PopoverDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_modal_create__["a" /* ModalCreatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_modal_detail__["a" /* ModalDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mail_modal_mail__["a" /* ModalMailPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_mails_inbox_mails_inbox__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mails_sent_mails_sent__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_general_general__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(347);
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




// import { HttpServiceProvider } from '../providers/http-service/http-service'




var MyApp = /** @class */ (function () {
    function MyApp(
        // public httpService: HttpServiceProvider,
        platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_mails_inbox_mails_inbox__["a" /* MailsInboxPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            // { title: 'Home', component: HomePage },
            // { title: 'List', component: ListPage },
            {
                title: 'Inbox',
                icon: 'home',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_mails_inbox_mails_inbox__["a" /* MailsInboxPage */],
                // db: 'DATABASE_INBOX',
                status: false,
            },
            {
                title: 'Social',
                icon: 'people',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_mails_sent_mails_sent__["a" /* MailsSentPage */],
                // db: 'DATABASE_SENT',
                status: false,
            },
            {
                title: 'Promotions',
                icon: 'pricetag',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                // db: 'DATABASE_RECEIVED',
                status: false,
            },
        ];
        this.pagesSecondary = [
            {
                title: 'Mail Saved',
                icon: 'cloud',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                // db: 'DATABASE_SAVED',
                status: false,
            },
            {
                title: 'Mail Span',
                icon: 'alert',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                // db: 'DATABASE_SPAN',
                status: false,
            },
            {
                title: 'General',
                icon: 'cog',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_general_general__["a" /* GeneralPage */],
                // db: '',
                status: false,
            },
            {
                title: 'Downloads',
                icon: 'cloud-download',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_general_general__["a" /* GeneralPage */],
                // db: '',
                status: false,
            },
            {
                title: 'Ayuda',
                icon: 'hand',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_general_general__["a" /* GeneralPage */],
                // db: '',
                status: false,
            },
        ];
        // this.httpService.loadPreferences(this)
        // this.activePage = this.listComponents[0]
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Reset the content nav to have just this page
                // we wouldn't want the back button to show in this scenario
                return [2 /*return*/, this.nav.setRoot(page.component)];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list color="danger">\n      <ion-list-header>\n        <ion-label>PRIMARY</ion-label>\n      </ion-list-header>\n      <ion-item menuClose detail-none icon-only *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon"></ion-icon>\n          <span>{{p.title}}</span>\n      </ion-item>\n    </ion-list>\n\n    <ion-list color="danger">\n    <ion-list-header>\n    <ion-label>SECONDARY</ion-label>\n    </ion-list-header>\n      <ion-item menuClose detail-none icon-only *ngFor="let p of pagesSecondary" (click)="openPage(p)">\n        <ion-icon [name]="p.icon"></ion-icon>\n        <span>{{p.title}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 207,
	"./af.js": 207,
	"./ar": 208,
	"./ar-dz": 209,
	"./ar-dz.js": 209,
	"./ar-kw": 210,
	"./ar-kw.js": 210,
	"./ar-ly": 211,
	"./ar-ly.js": 211,
	"./ar-ma": 212,
	"./ar-ma.js": 212,
	"./ar-sa": 213,
	"./ar-sa.js": 213,
	"./ar-tn": 214,
	"./ar-tn.js": 214,
	"./ar.js": 208,
	"./az": 215,
	"./az.js": 215,
	"./be": 216,
	"./be.js": 216,
	"./bg": 217,
	"./bg.js": 217,
	"./bm": 218,
	"./bm.js": 218,
	"./bn": 219,
	"./bn-bd": 220,
	"./bn-bd.js": 220,
	"./bn.js": 219,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-il": 238,
	"./en-il.js": 238,
	"./en-in": 239,
	"./en-in.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./en-sg": 241,
	"./en-sg.js": 241,
	"./eo": 242,
	"./eo.js": 242,
	"./es": 243,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es-mx": 245,
	"./es-mx.js": 245,
	"./es-us": 246,
	"./es-us.js": 246,
	"./es.js": 243,
	"./et": 247,
	"./et.js": 247,
	"./eu": 248,
	"./eu.js": 248,
	"./fa": 249,
	"./fa.js": 249,
	"./fi": 250,
	"./fi.js": 250,
	"./fil": 251,
	"./fil.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./ga": 257,
	"./ga.js": 257,
	"./gd": 258,
	"./gd.js": 258,
	"./gl": 259,
	"./gl.js": 259,
	"./gom-deva": 260,
	"./gom-deva.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it-ch": 271,
	"./it-ch.js": 271,
	"./it.js": 270,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ku": 279,
	"./ku.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mn": 289,
	"./mn.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./oc-lnc": 300,
	"./oc-lnc.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./tg": 321,
	"./tg.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tk": 323,
	"./tk.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./ug-cn": 330,
	"./ug-cn.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-mo": 340,
	"./zh-mo.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 424;

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_PREFERENCE; });
var SHARED_PREFERENCE = {
    CONFIRM_BEFORE_SENDING: false,
    CONFIRM_BEFORE_REMOVING: true,
    CONFIRM_BEFORE_FILING: true,
    MAIL_SHOW_BUTTON_SYNC: true,
    MAIL_SHOW_BUTTON_CLEAN: false,
    MAIL_SHOW_BUTTON_SEARCH: true,
    MAIL_SHOW_BUTTON_UN_READ: true,
    MAIL_SHOW_BUTTON_REMOVE: false,
    MAIL_SHOW_BUTTON_ARCHIVE: false,
    DB: { DI: 'DATABASE_INBOX', DS: 'DATABASE_SENT' },
};
//# sourceMappingURL=shared-preference.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_service_notification_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_detail__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dialog_service_dialog_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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








var DetailPage = /** @class */ (function () {
    function DetailPage(popoverCtrl, httpService, notificationService, event, dialogService, navCtrl, navParams, viewCtrl, storage) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.httpService = httpService;
        this.notificationService = notificationService;
        this.event = event;
        this.dialogService = dialogService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.data = {};
        this.MYSHAREDPREFERENCES = {};
        this.httpService.loadPreferences(this);
        this.data = this.navParams.data.data;
        console.log(this.data);
        this.index = this.navParams.data.index;
        this.newdate = __WEBPACK_IMPORTED_MODULE_7_moment__(this.data.created_at).format('ll');
        this.update(this.navParams.data.data, this.navParams.data.index);
        this.event.subscribe('eventDetailFetch', function () {
            _this.httpService.loadPreferences(_this);
        });
    }
    DetailPage.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.viewCtrl.dismiss()];
            });
        });
    };
    DetailPage.prototype.fnRemove = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.storage
                        .get('SHARED_PREFERENCE')
                        .then(function (data) {
                        var doFunc = function () {
                            _this.notificationService.notifyInfo('Removing...', 0);
                            _this.httpService.remove(_this, _this.data.database);
                        };
                        if (data != null) {
                            if (data.CONFIRM_BEFORE_REMOVING) {
                                _this.dialogService.dialogQuestion('', 'Do you want to remove this mail?', function () {
                                    doFunc();
                                });
                            }
                            else {
                                doFunc();
                            }
                        }
                        else {
                            doFunc();
                        }
                    })
                        .catch(function (error) {
                        console.error(error);
                    })];
            });
        });
    };
    DetailPage.prototype.presentPopover = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_detail__["a" /* PopoverDetailPage */]).present({ ev: myEvent })];
            });
        });
    };
    DetailPage.prototype.update = function (objeto, index, bool) {
        var _this = this;
        if (bool === void 0) { bool = null; }
        objeto.is_read = bool != null ? bool : true;
        this.storage
            .get(objeto.database)
            .then(function (data) {
            if (data != null) {
                data.forEach(function (value, key) {
                    if (key == index) {
                        data[key] = objeto;
                    }
                });
                _this.storage
                    .set(objeto.database, data)
                    .then(function () {
                    console.log('Object of database storage updated!');
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    DetailPage.prototype.fnUnRead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.notificationService.notifyInfo('Changing...', 0);
                        return [4 /*yield*/, this.update(this.data, this.index, false)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.pop()];
                    case 2:
                        _a.sent();
                        this.notificationService.toast.dismiss();
                        this.notificationService.notifyInfo('Changed mail to unread');
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"D:\src\src-portfolio\gmail\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_ARCHIVE" class="p-r-15 my-icon"><ion-icon name="archive"></ion-icon></button>\n      <button ion-button icon-only *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_REMOVE" class="p-r-15 my-icon" (click)="fnRemove()"><ion-icon name="trash"></ion-icon></button>\n      <button ion-button icon-only *ngIf="MYSHAREDPREFERENCES.MAIL_SHOW_BUTTON_UN_READ" class="p-r-15 my-icon" (click)="fnUnRead()"><ion-icon name="mail"></ion-icon></button>\n      <button ion-button icon-only class="p-r-15 my-icon" (click)="presentPopover($event)"><ion-icon name="more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div style="padding: 0 16px">\n      <h2>{{data.subject}}</h2>\n    </div>\n    <hr />\n    <div style="padding: 0 16px">\n      <ion-item text-wrap>\n        <ion-avatar item-left style="opacity: 0.8">\n          <button ion-fab [ngClass]="\'button-profile color-\' + data.name.charAt(0).toUpperCase()">\n            <span style="font-size: 1.8em">{{data.name.charAt(0).toUpperCase()}}</span>\n          </button>\n        </ion-avatar>\n        <span class="text-key">{{data.name}}</span>\n        <span class="text-value-second"><{{data.from}}></span>\n        <p>para: {{data.to}}</p>\n        <p>fecha: {{newdate}}&nbsp;&nbsp;<a style="text-decoration: none" href="#">Ver detalle</a></p>\n      </ion-item>\n      <p [innerHTML]="data.message" style="text-align: justify; text-justify: inter-word"></p>\n    </div>\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border>\n  <div text-center>\n    <ion-row>\n      <ion-col>\n        <button ion-button clear class="text-muted">\n          <div>\n            <ion-icon name="undo"></ion-icon>\n            <br />\n            <span class="text-capitalize">Reply</span>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear class="text-muted">\n          <div>\n            <ion-icon name="send"></ion-icon>\n            <br />\n            <span class="text-capitalize">Reply All</span>\n          </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear class="text-muted">\n          <div>\n            <ion-icon name="redo"></ion-icon>\n            <br />\n            <span class="text-capitalize">Forward</span>\n          </div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"D:\src\src-portfolio\gmail\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map