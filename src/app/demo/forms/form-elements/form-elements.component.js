"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../../route.animation");
var _ = require('lodash');
var FormElementsComponent = (function () {
    function FormElementsComponent() {
        this.switch1 = false;
        this.switch2 = true;
        this.switch3 = true;
        this.switch4 = false;
        this.switch5 = true;
        this.checkbox1 = false;
        this.checkbox2 = true;
        this.checkbox3 = true;
        this.checkbox4 = false;
        this.checkbox5 = true;
        this.inputFieldHTML = "\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"First Name\">\n    </md-input-container>\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"Last Name\">\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex dividerColor=\"accent\">\n      <input md-input\n             placeholder=\"Pre-filled Input + Accent color\" value=\"Material Design\">\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"Address\">\n      <span md-prefix><md-icon>place</md-icon></span>\n    </md-input-container>\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"City\">\n      <span md-prefix><md-icon>location_city</md-icon></span>\n    </md-input-container>\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"Country\">\n      <span md-suffix><md-icon>local_airport</md-icon></span>\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"Character count (max. 100)\"\n             maxlength=\"100\"\n             #characterCountHintExample\n             value=\"Hello! How are you today?\">\n      <md-hint align=\"end\">{{ characterCountHintExample.value.length }} / 100</md-hint>\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input md-input\n             placeholder=\"Primary Color\">\n    </md-input-container>\n    <md-input-container dividerColor=\"accent\" fxFlex>\n      <input md-input\n             placeholder=\"Accent Color\">\n    </md-input-container>\n    <md-input-container dividerColor=\"warn\" fxFlex>\n      <input md-input\n             placeholder=\"Warn Color\">\n    </md-input-container>\n  </div>\n  ";
    }
    FormElementsComponent.prototype.ngOnInit = function () {
    };
    FormElementsComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    FormElementsComponent = __decorate([
        core_1.Component({
            selector: 'ms-form-elements',
            templateUrl: './form-elements.component.html',
            styleUrls: ['./form-elements.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], FormElementsComponent);
    return FormElementsComponent;
}());
exports.FormElementsComponent = FormElementsComponent;
