"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _ = require('lodash');
var route_animation_1 = require("../../../route.animation");
var SnackBarComponent = (function () {
    function SnackBarComponent(snackBar) {
        this.snackBar = snackBar;
        this.snackbarHTML = "<button md-button (click)=\"openSnackbar()\">Trigger Snackbar</button>";
        this.snackbarTS = "this.snackBar.open('I'm a notification!', 'Close', {\n  duration: 3000\n});";
    }
    SnackBarComponent.prototype.ngOnInit = function () {
    };
    SnackBarComponent.prototype.openSnackbar = function () {
        this.snackBar.open('I\'m a notification!', 'Close', {
            duration: 3000
        });
    };
    SnackBarComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    SnackBarComponent = __decorate([
        core_1.Component({
            selector: 'ms-snack-bar',
            templateUrl: './snack-bar.component.html',
            styleUrls: ['./snack-bar.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], SnackBarComponent);
    return SnackBarComponent;
}());
exports.SnackBarComponent = SnackBarComponent;
