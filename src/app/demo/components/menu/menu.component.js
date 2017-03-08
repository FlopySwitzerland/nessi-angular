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
var MenuComponent = (function () {
    function MenuComponent() {
        this.menuHTML = "\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item>\n      <md-icon> dialpad </md-icon>\n      <span> Redial </span>\n    </button>\n    <button md-menu-item disabled>\n      <md-icon> voicemail </md-icon>\n      <span> Check voicemail </span>\n    </button>\n    <button md-menu-item>\n      <md-icon> notifications_off </md-icon>\n      <span> Disable alerts </span>\n    </button>\n  </md-menu>\n  ";
        this.menu2HTML = "\n  <button md-icon-button [mdMenuTriggerFor]=\"menu2\">\n    <md-icon>grade</md-icon>\n  </button>\n  \n  <md-menu #menu2=\"mdMenu\">\n    <button md-menu-item> Refresh </button>\n    <button md-menu-item> Settings </button>\n    <button md-menu-item> Help </button>\n    <button md-menu-item disabled> Sign Out </button>\n  </md-menu>\n  ";
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'ms-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
