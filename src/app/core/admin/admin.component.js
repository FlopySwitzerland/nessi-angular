"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var screenfull = require('screenfull');
var AdminComponent = (function () {
    function AdminComponent(media, router) {
        this.media = media;
        this.router = router;
        this.sidenavOpen = false;
        this.sidenavMode = 'side';
        this.isMobile = false;
        this.quickpanelOpen = false;
        this.isFullscreen = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.media.asObservable().subscribe(function (change) {
            var isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.isMobile = isMobile;
            _this.sidenavMode = (isMobile) ? 'over' : 'side';
            _this.sidenavOpen = !isMobile;
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd && _this.isMobile) {
                _this.sidenav.close();
            }
        });
    };
    AdminComponent.prototype.toggleFullscreen = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    AdminComponent.prototype.onActivate = function (e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    };
    __decorate([
        core_1.ViewChild('sidenav')
    ], AdminComponent.prototype, "sidenav", void 0);
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'ms-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
