"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _ = require('lodash');
var router_1 = require("@angular/router");
var SidenavComponent = (function () {
    function SidenavComponent(sidenavService, router, breadcrumbService, snackBar) {
        this.sidenavService = sidenavService;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.snackBar = snackBar;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemsSubscription = this.sidenavService.items$
            .subscribe(function (items) {
            _this.items = _this.sortRecursive(items, 'position');
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.sidenavService.nextCurrentlyOpenByRoute(event.url);
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 400);
            }
        });
        this.breadcrumbService.addFriendlyNameForRoute('/', "Dashboard");
        this.breadcrumbService.addFriendlyNameForRoute('/apps', "Apps");
        this.breadcrumbService.addFriendlyNameForRoute('/apps/inbox', "Inbox");
        this.breadcrumbService.addFriendlyNameForRoute('/apps/calendar', "Calendar");
        this.breadcrumbService.addFriendlyNameForRoute('/apps/chat', "Chat");
        this.breadcrumbService.addFriendlyNameForRoute('/components', "Components");
        this.breadcrumbService.addFriendlyNameForRoute('/components/buttons', "Buttons");
        this.breadcrumbService.addFriendlyNameForRoute('/components/cards', "Cards");
        this.breadcrumbService.addFriendlyNameForRoute('/components/dialogs', "Dialogs");
        this.breadcrumbService.addFriendlyNameForRoute('/components/grid-list', "Grid List");
        this.breadcrumbService.addFriendlyNameForRoute('/components/lists', "Lists");
        this.breadcrumbService.addFriendlyNameForRoute('/components/menu', "Menu");
        this.breadcrumbService.addFriendlyNameForRoute('/components/slider', "Slider");
        this.breadcrumbService.addFriendlyNameForRoute('/components/snack-bar', "Snack-Bar");
        this.breadcrumbService.addFriendlyNameForRoute('/components/tooltips', "Tooltips");
        this.breadcrumbService.addFriendlyNameForRoute('/forms', "Forms");
        this.breadcrumbService.addFriendlyNameForRoute('/forms/form-elements', "Form Elements");
        this.breadcrumbService.addFriendlyNameForRoute('/forms/form-wizard', "Form Wizard");
        this.breadcrumbService.addFriendlyNameForRoute('/tables', "Tables");
        this.breadcrumbService.addFriendlyNameForRoute('/tables/simple-table', "Simple Table");
        this.breadcrumbService.addFriendlyNameForRoute('/tables/fixed-header-table', "Fixed Header Table");
        this.breadcrumbService.addFriendlyNameForRoute('/maps', "Maps");
        this.breadcrumbService.addFriendlyNameForRoute('/maps/google-maps', "Google Maps");
        this.breadcrumbService.addFriendlyNameForRoute('/icons', "Material Icons");
        this.breadcrumbService.addFriendlyNameForRoute('/dashboard-v1', "Dashboard v1");
        this.breadcrumbService.addFriendlyNameForRoute('/drag-and-drop', "Drag & Drop");
        this.breadcrumbService.addFriendlyNameForRoute('/editor', "WYSISYG Editor");
        this.breadcrumbService.addFriendlyNameForRoute('/dynamic-menu', "Dynamic Menu");
        this.breadcrumbService.addFriendlyNameForRoute('/level1', "Level 1");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2', "Level 2");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3', "Level 3");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4', "Level 4");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4/level5', "Level 5");
    };
    SidenavComponent.prototype.toggleIconSidenav = function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
        this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;
        if (this.sidenavService.isIconSidenav) {
            this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', {
                duration: 10000
            });
        }
    };
    SidenavComponent.prototype.isIconSidenav = function () {
        return this.sidenavService.isIconSidenav;
    };
    SidenavComponent.prototype.sortRecursive = function (array, propertyName) {
        var that = this;
        array.forEach(function (item) {
            var keys = _.keys(item);
            keys.forEach(function (key) {
                if (_.isArray(item[key])) {
                    item[key] = that.sortRecursive(item[key], propertyName);
                }
            });
        });
        return _.sortBy(array, propertyName);
    };
    ;
    SidenavComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
    };
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'ms-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['./sidenav.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
