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
var ButtonsComponent = (function () {
    function ButtonsComponent() {
        this.flatButtonsHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-button>Button</button>\n      <button md-button color=\"primary\">Primary</button>\n      <button md-button color=\"accent\">Accent</button>\n      <button md-button color=\"warn\">Warn</button>\n      <button md-button disabled=\"true\">Disabled</button>\n    </md-card-content>\n  </md-card>\n  ";
        this.raisedButtonsHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-raised-button>Button</button>\n      <button md-raised-button color=\"primary\">Primary</button>\n      <button md-raised-button color=\"accent\">Accent</button>\n      <button md-raised-button color=\"warn\">Warn</button>\n      <button md-raised-button disabled=\"true\">Disabled</button>\n    </md-card-content>\n  </md-card>\n  ";
        this.fabHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-fab color=\"primary\"><md-icon>grade</md-icon></button>\n      <button md-fab color=\"accent\"><md-icon>favorite</md-icon></button>\n      <button md-fab color=\"warn\"><md-icon>build</md-icon></button>\n      <button md-fab disabled=\"true\"><md-icon>lock</md-icon></button>\n      <button md-mini-fab color=\"primary\"><md-icon>favorite</md-icon></button>\n      <button md-mini-fab color=\"accent\"><md-icon>thumb_up</md-icon></button>\n      <button md-mini-fab color=\"warn\"><md-icon>build</md-icon></button>\n      <button md-mini-fab disabled=\"true\"><md-icon>lock</md-icon></button>\n    </md-card-content>\n  </md-card>\n  ";
        this.buttonToggleHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <md-button-toggle-group name=\"alignment\">\n        <md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle>\n        <md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle>\n        <md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle>\n        <md-button-toggle value=\"justify\"><md-icon>format_align_justify</md-icon></md-button-toggle>\n      </md-button-toggle-group>\n      <md-button-toggle-group multiple>\n        <md-button-toggle>Flour</md-button-toggle>\n        <md-button-toggle>Eggs</md-button-toggle>\n        <md-button-toggle>Sugar</md-button-toggle>\n        <md-button-toggle>Milk</md-button-toggle>\n      </md-button-toggle-group>\n    </md-card-content>\n  </md-card>\n  ";
        this.iconButtonHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-icon-button><md-icon>menu</md-icon></button>\n      <button md-icon-button color=\"primary\"><md-icon>grade</md-icon></button>\n      <button md-icon-button color=\"accent\"><md-icon>favorite</md-icon></button>\n      <button md-icon-button color=\"warn\"><md-icon>build</md-icon></button>\n      <button md-icon-button disabled=\"true\"><md-icon>lock</md-icon></button>\n    </md-card-content>\n  </md-card>\n  ";
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    ButtonsComponent = __decorate([
        core_1.Component({
            selector: 'ms-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());
exports.ButtonsComponent = ButtonsComponent;
