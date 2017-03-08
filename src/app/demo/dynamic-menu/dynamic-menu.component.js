"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../route.animation");
var DynamicMenuComponent = (function () {
    function DynamicMenuComponent(sidenavService, dynamicMenuService) {
        this.sidenavService = sidenavService;
        this.dynamicMenuService = dynamicMenuService;
    }
    DynamicMenuComponent.prototype.ngOnInit = function () {
        this.item = this.dynamicMenuService.dynamicItem;
    };
    DynamicMenuComponent.prototype.toggleMenuItem = function () {
        if (this.dynamicMenuService.dynamicItem) {
            this.sidenavService.removeItem(this.dynamicMenuService.dynamicItem);
            this.dynamicMenuService.dynamicItem = null;
            this.item = null;
        }
        else {
            this.dynamicMenuService.dynamicItem = this.sidenavService.addItem('Dynamic Menu Item', 'donut_large', '', 10);
            this.item = this.dynamicMenuService.dynamicItem;
        }
    };
    DynamicMenuComponent = __decorate([
        core_1.Component({
            selector: 'ms-dynamic-menu',
            templateUrl: './dynamic-menu.component.html',
            styleUrls: ['./dynamic-menu.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], DynamicMenuComponent);
    return DynamicMenuComponent;
}());
exports.DynamicMenuComponent = DynamicMenuComponent;
