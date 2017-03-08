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
var SliderComponent = (function () {
    function SliderComponent() {
        this.slider1HTML = "\n  <md-slider min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\"></md-slider>\n  ";
        this.slider2HTML = "<md-slider vertical min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\"></md-slider>";
        this.slider3HTML = "<md-slider min=\"1\" max=\"10\"></md-slider>";
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'ms-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
