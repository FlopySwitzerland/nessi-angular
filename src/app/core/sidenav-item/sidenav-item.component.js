"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var directives_1 = require("@angular/core/src/metadata/directives");
var SidenavItemComponent = (function () {
    function SidenavItemComponent(sidenavService) {
        this.sidenavService = sidenavService;
        this.sidenavItemClass = true;
    }
    Object.defineProperty(SidenavItemComponent.prototype, "isOpen", {
        get: function () {
            return this.sidenavService.isOpen(this.item);
        },
        enumerable: true,
        configurable: true
    });
    SidenavItemComponent.prototype.ngOnInit = function () {
    };
    SidenavItemComponent.prototype.toggleDropdown = function () {
        if (this.item.hasSubItems()) {
            this.sidenavService.toggleCurrentlyOpen(this.item);
        }
    };
    // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
    SidenavItemComponent.prototype.getSubItemsHeight = function () {
        return (this.getOpenSubItemsCount(this.item) * 48) + "px";
    };
    // Counts the amount of Sub Items there is and returns the count.
    SidenavItemComponent.prototype.getOpenSubItemsCount = function (item) {
        var _this = this;
        var count = 0;
        if (item.hasSubItems() && this.sidenavService.isOpen(item)) {
            count += item.subItems.length;
            item.subItems.forEach(function (subItem) {
                count += _this.getOpenSubItemsCount(subItem);
            });
        }
        return count;
    };
    __decorate([
        directives_1.Input('item')
    ], SidenavItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.HostBinding('class.open')
    ], SidenavItemComponent.prototype, "isOpen", null);
    __decorate([
        core_1.HostBinding('class.sidenav-item')
    ], SidenavItemComponent.prototype, "sidenavItemClass", void 0);
    SidenavItemComponent = __decorate([
        core_1.Component({
            selector: 'ms-sidenav-item',
            templateUrl: './sidenav-item.component.html',
            styleUrls: ['./sidenav-item.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], SidenavItemComponent);
    return SidenavItemComponent;
}());
exports.SidenavItemComponent = SidenavItemComponent;
