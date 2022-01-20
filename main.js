(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\n\n<!-- this is for same router animation -->\n<!-- <main [@myFlyInRouteAnimations]=\"myOutlet.isActivated ? myOutlet.activatedRoute : ''\" >\n  <router-outlet #myOutlet=\"outlet\"></router-outlet>\n</main>  -->\n\n<main [@myFlyInRouteAnimations]=\"prepareRoute(myOutlet)\" *ngIf=\"routerAnimation === 'FlyInAnimations'\">\n  <router-outlet #myOutlet=\"outlet\"></router-outlet>\n</main>\n\n<main [@mySliderRouteAnimations]=\"prepareRoute(myOutlet)\" *ngIf=\"routerAnimation === 'SliderAnimations'\">\n  <router-outlet #myOutlet=\"outlet\"></router-outlet>\n</main>\n\n<main [@myTransformRouteAnimations]=\"prepareRoute(myOutlet)\" *ngIf=\"routerAnimation === 'TransformAnimations'\">\n  <router-outlet #myOutlet=\"outlet\"></router-outlet>\n</main>\n\n<main [@myStepperRouteAnimations]=\"prepareRoute(myOutlet)\" *ngIf=\"routerAnimation === 'StepperAnimations'\">\n  <router-outlet #myOutlet=\"outlet\"></router-outlet>\n</main>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h1>Animations</h1>\n      <div class=\"animation-buttons\">\n        <button class=\"btn btn-primary\" (click)=\"onAnimate()\">Animate!</button>\n        <button class=\"btn btn-warning\" (click)=\"onShrink()\">Shrink!</button>\n        <button (click)=\"toggle()\" class=\"btn btn-info\">Show Hint</button>\n        <button class=\"btn btn-primary\" (click)=\"onRouterAnimationChange()\">{{ routerAnimation }}</button>\n      </div>\n      <hr>\n      <div [@popOverAni]=\"stateName\">\n        <p><img src=\"https://www.maxpixel.net/static/photo/1x/Rose-Red-Rose-Red-Flower-266785.jpg\" alt=\"ludo-dice\" width=\"100px\"></p>\n        <p>Hello! click <span class=\"popover-span\">{{ routerAnimation }}</span> to see animation.</p>\n      </div>\n      <hr>\n      <div [@divState]=\"state\" class=\"my-square\"\n      (@divState.start)=\"animationStarted($event)\"\n      (@divState.done)=\"animationFinished($event)\"></div>\n      <br>\n      <div [@wildState]=\"wildState\" class=\"my-square\"></div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"animation-form\">\n        <input type=\"text\" #input (keyup.enter)=\"onAdd(input.value)\" placeholder=\"Press 'enter' to add item\">\n        <button class=\"btn btn-primary\" (click)=\"onAdd(input.value)\">Add Item!</button>\n      </div>\n      <hr>\n      <ul class=\"list-group\">\n        <li [@list1]\n          class=\"list-group-item\"\n          (click)=\"onDelete(item)\"\n          *ngFor=\"let item of list\">\n          {{ item }}\n        </li>\n      </ul>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <ul class=\"list-group\">\n        <li [@list2]\n          class=\"list-group-item\"\n          (click)=\"onDelete(item)\"\n          *ngFor=\"let item of list\">\n          {{ item }}\n        </li>\n      </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animation/app.animation.ts":
/*!********************************************!*\
  !*** ./src/app/animation/app.animation.ts ***!
  \********************************************/
/*! exports provided: divStateAnimation, wildStateAnimation, list1Animation, list2Animation, flyInOut, fader, slider, transformer, stepper, popOverAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divStateAnimation", function() { return divStateAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wildStateAnimation", function() { return wildStateAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list1Animation", function() { return list1Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list2Animation", function() { return list2Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepper", function() { return stepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popOverAnimation", function() { return popOverAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// export the various triggers as constants or functions :)
var divStateAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('divState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'background-color': 'red',
        transform: 'translateX(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        backgroundColor: 'green',
        transform: 'translateX(100px)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('normal => highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('highlighted => normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(700))
]);
function wildStateAnimation() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('wildState', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'background-color': 'red',
            transform: 'translateX(0) scale(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            backgroundColor: 'green',
            transform: 'translateX(100px) scale(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shrunken', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            backgroundColor: 'blue',
            transform: 'translateX(0) scale(0.5)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('shrunken <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                'background-color': 'orange'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                borderRadius: '50px'
            }))
        ])
    ]);
}
function list1Animation() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list1', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateX(-100px)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100px)',
                opacity: 0
            }))
        ])
    ]);
}
function list2Animation() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list2', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(-100px)',
                    opacity: 0,
                    offset: 0
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(-50px)',
                    opacity: 0.5,
                    offset: 0.3
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(-20px)',
                    opacity: 1,
                    offset: 0.8
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(0)',
                    opacity: 1,
                    offset: 1
                })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    color: 'red'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(100px)',
                    opacity: 0
                }))
            ])
        ])
    ]);
}
function flyInOut() {
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        // route 'enter' transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            // css styles at start of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            // animation and styles at end of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)',
                opacity: 0
            }))
        ])
    ]);
}
// The query function has three params.
// First is the event, so this will apply on entering or when the element is added to the DOM.
// Second is a list of styles or animations to apply.
// Third we add a config object with optional set to true, this is to signal
// angular that the animation may not apply as it may or may not be in the DOM.
var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myFlyInRouteAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ], { optional: true }),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], { optional: true })
    ]),
]);
var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('mySliderRouteAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))
]);
function slideTo(direction) {
    var _a, _b, _c, _d;
    var optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_a = {
                    position: 'absolute',
                    top: 0
                },
                _a[direction] = 0,
                _a.width = '100%',
                _a))
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_b = {}, _b[direction] = '-100%', _b))
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_c = {}, _c[direction] = '100%', _c)))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_d = {}, _d[direction] = '0%', _d)))
            ], optional)
        ]),
    ];
}
var transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myTransformRouteAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 }))
]);
function transformTo(_a) {
    var _b = _a.x, x = _b === void 0 ? 100 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.rotate, rotate = _d === void 0 ? 0 : _d;
    var optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translate(" + x + "%, " + y + "%) rotate(" + rotate + "deg)" })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translate(" + x + "%, " + y + "%) rotate(" + rotate + "deg)" }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translate(0, 0) rotate(0)" }))
            ], optional)
        ]),
    ];
}
var stepper = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myStepperRouteAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0) translateX(100%)', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1) translateX(0%)', offset: 1 }),
                ])),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                ])),
            ], { optional: true })
        ]),
    ])
]);
var popOverAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('popOverAni', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-in'))
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page1.component */ "./src/app/pages/page1.component.ts");
/* harmony import */ var _pages_page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page2.component */ "./src/app/pages/page2.component.ts");
/* harmony import */ var _pages_page3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page3.component */ "./src/app/pages/page3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'page-1', pathMatch: 'full' },
    { path: 'page-1', component: _pages_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1"] },
    { path: 'page-2', component: _pages_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2"], data: { animation: 'isRight' } },
    { path: 'page-3', component: _pages_page3_component__WEBPACK_IMPORTED_MODULE_4__["Page3"], data: { animation: 'isLeft' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animation-buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 400px;\n}\n\n.my-square {\n  width: 100px;\n  height: 100px;\n}\n\n.animation-form {\n  display: flex;\n  justify-content: space-between;\n  width: 30rem;\n}\n\n.popover-span {\n  color: green;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmltYXRpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubXktc3F1YXJlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYW5pbWF0aW9uLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAzMHJlbTtcbn1cblxuLnBvcG92ZXItc3BhbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/app.animation */ "./src/app/animation/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.list = ['Milk', 'Sugar', 'Bread'];
        this.state = 'normal'; // begining state of animation for 'divState'
        this.wildState = 'normal'; // begining state of animation for 'wildState'
        this.routerAnimation = 'FlyInAnimations';
        this.counter = 0;
        this.show = false;
    }
    Object.defineProperty(AppComponent.prototype, "stateName", {
        get: function () {
            return this.show ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // console.log(this.inputvalue.nativeElement.value);
    };
    AppComponent.prototype.onAdd = function (item) {
        this.list.unshift(item);
        console.log(this.inputvalue.nativeElement.value);
        this.inputvalue.nativeElement.value = '';
    };
    AppComponent.prototype.onDelete = function (item) {
        this.list = this.list.filter(function (it) { return it !== item; });
    };
    AppComponent.prototype.onAnimate = function () {
        this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    };
    AppComponent.prototype.onShrink = function () {
        this.wildState = 'shrunken';
    };
    AppComponent.prototype.animationStarted = function (event) {
        console.log(event);
    };
    AppComponent.prototype.animationFinished = function (event) {
        console.log(event);
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent.prototype.onRouterAnimationChange = function () {
        this.counter++;
        if (this.counter > 3) {
            this.counter = 0;
        }
        switch (this.counter) {
            case 0:
                this.routerAnimation = 'FlyInAnimations';
                break;
            case 1:
                this.routerAnimation = 'SliderAnimations';
                break;
            case 2:
                this.routerAnimation = 'TransformAnimations';
                break;
            case 3:
                this.routerAnimation = 'StepperAnimations';
                break;
            default:
                this.routerAnimation = 'FlyInAnimations';
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "inputvalue", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            // attach the 'flyInOut' animation to the host (root) element of this component
            // host: {
            //   '[@flyInOut]': 'true',
            //   'style': 'display: block;'
            // },
            animations: [
                _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["divStateAnimation"],
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["wildStateAnimation"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["list1Animation"])(),
                Object(_animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["list2Animation"])(),
                _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["fader"],
                _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["slider"],
                _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["transformer"],
                _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["stepper"],
                _animation_app_animation__WEBPACK_IMPORTED_MODULE_1__["popOverAnimation"]
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_page1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page1.component */ "./src/app/pages/page1.component.ts");
/* harmony import */ var _pages_page2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page2.component */ "./src/app/pages/page2.component.ts");
/* harmony import */ var _pages_page3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page3.component */ "./src/app/pages/page3.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_page1_component__WEBPACK_IMPORTED_MODULE_5__["Page1"],
                _pages_page2_component__WEBPACK_IMPORTED_MODULE_6__["Page2"],
                _pages_page3_component__WEBPACK_IMPORTED_MODULE_7__["Page3"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1", function() { return Page1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Page1 = /** @class */ (function () {
    function Page1() {
    }
    Page1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page1',
            template: "\n  <div class=\"page-container\">\n    <h3>Hello Friends! I'm in the center. This is Page 1</h3>\n    <button class=\"btn btn-success\" routerLink=\"/page-2\">Page 2</button>\n  </div>",
            styles: ["\n  .page-container {\n    max-width: 40rem;\n    margin: 2rem auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 2rem;\n    border: 2px solid #ccc;\n    border-radius: 12px;\n  }\n  "]
        })
    ], Page1);
    return Page1;
}());



/***/ }),

/***/ "./src/app/pages/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2", function() { return Page2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Page2 = /** @class */ (function () {
    function Page2() {
    }
    Page2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page2',
            template: "\n  <div class=\"page-container\">\n    <h3>Hey there! I'm in the left side. This is Page 2</h3>\n    <button class=\"btn btn-success\" routerLink=\"/page-3\">Page 3</button>\n  </div>",
            styles: ["\n  .page-container {\n    max-width: 40rem;\n    margin: 2rem auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 2rem;\n    border: 2px solid #ccc;\n    border-radius: 12px;\n  }\n  "]
        })
    ], Page2);
    return Page2;
}());



/***/ }),

/***/ "./src/app/pages/page3.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/page3.component.ts ***!
  \******************************************/
/*! exports provided: Page3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3", function() { return Page3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Page3 = /** @class */ (function () {
    function Page3() {
    }
    Page3 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page3',
            template: "\n  <div class=\"page-container\">\n    <h3>See you all! I'm in the right side. This is Page 3</h3>\n    <button class=\"btn btn-success\" routerLink=\"/page-1\">Page 1</button>\n  </div>",
            styles: ["\n  .page-container {\n    max-width: 40rem;\n    margin: 2rem auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 2rem;\n    border: 2px solid #ccc;\n    border-radius: 12px;\n  }\n  "]
        })
    ], Page3);
    return Page3;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/ng-animation-ex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map