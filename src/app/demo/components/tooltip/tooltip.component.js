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
var TooltipComponent = (function () {
    function TooltipComponent() {
        this.tooltipHTML = "<button md-icon-button mdTooltip=\"Favorite this\"><md-icon>favorite</md-icon></button>";
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    TooltipComponent = __decorate([
        core_1.Component({
            selector: 'ms-tooltip',
            templateUrl: './tooltip.component.html',
            styleUrls: ['./tooltip.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());
exports.TooltipComponent = TooltipComponent;
