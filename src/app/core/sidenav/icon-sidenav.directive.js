"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var IconSidenavDirective = (function () {
    function IconSidenavDirective(sidenavService, media) {
        this.sidenavService = sidenavService;
        this.media = media;
        this.isMobile = false;
    }
    Object.defineProperty(IconSidenavDirective.prototype, "isIconSidenav", {
        get: function () {
            return this.sidenavService.isIconSidenav;
        },
        enumerable: true,
        configurable: true
    });
    IconSidenavDirective.prototype.onMouseEnter = function () {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = false;
            this.sidenavService.nextCurrentlyOpen(this.currentlyOpen);
        }
    };
    IconSidenavDirective.prototype.onMouseLeave = function () {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = true;
            this.currentlyOpen = this.sidenavService.currentlyOpen;
            this.sidenavService.nextCurrentlyOpen([]);
        }
    };
    IconSidenavDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.media.asObservable().subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
        });
    };
    IconSidenavDirective.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('class.icon-sidenav')
    ], IconSidenavDirective.prototype, "isIconSidenav", null);
    __decorate([
        core_1.HostBinding('class.collapsed')
    ], IconSidenavDirective.prototype, "collapsed", void 0);
    __decorate([
        core_1.HostListener('mouseenter')
    ], IconSidenavDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave')
    ], IconSidenavDirective.prototype, "onMouseLeave", null);
    IconSidenavDirective = __decorate([
        core_1.Directive({
            selector: '[msIconSidenav]'
        })
    ], IconSidenavDirective);
    return IconSidenavDirective;
}());
exports.IconSidenavDirective = IconSidenavDirective;
