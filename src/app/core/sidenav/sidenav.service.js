"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var sidenav_item_model_1 = require("../sidenav-item/sidenav-item.model");
var rxjs_1 = require("rxjs");
var _ = require('lodash');
var SidenavService = (function () {
    function SidenavService() {
        this._itemsSubject = new rxjs_1.BehaviorSubject([]);
        this._items = [];
        this.items$ = this._itemsSubject.asObservable();
        this._currentlyOpenSubject = new rxjs_1.BehaviorSubject([]);
        this._currentlyOpen = [];
        this.currentlyOpen$ = this._currentlyOpenSubject.asObservable();
        var menu = this;
        var dashboard = menu.addItem('Dashboard', 'dashboard', '/', 1);
        menu.addItem('Inbox', 'mail', '/apps/inbox', 1, '22', '#7986CC');
        menu.addItem('Chat', 'chat', '/apps/chat', 2, '14', '#E15C74');
        menu.addItem('Calendar', 'date_range', '/apps/calendar', 3);
        var components = menu.addItem('Components', 'layers', null, 3);
        menu.addSubItem(components, 'Buttons', '/components/buttons', 1);
        menu.addSubItem(components, 'Cards', '/components/cards', 2);
        menu.addSubItem(components, 'Dialogs', '/components/dialogs', 3);
        menu.addSubItem(components, 'Grid List', '/components/grid-list', 4);
        menu.addSubItem(components, 'Lists', '/components/lists', 5);
        menu.addSubItem(components, 'Menu', '/components/menu', 6);
        menu.addSubItem(components, 'Slider', '/components/slider', 7);
        menu.addSubItem(components, 'Snack-Bar', '/components/snack-bar', 8);
        menu.addSubItem(components, 'Tooltips', '/components/tooltips', 8);
        var forms = menu.addItem('Forms', 'insert_comment', null, 4);
        menu.addSubItem(forms, 'Form Elements', '/forms/form-elements', 1);
        menu.addSubItem(forms, 'Form Wizard', '/forms/form-wizard', 1);
        var tables = menu.addItem('Tables', 'format_line_spacing', null, 5);
        menu.addSubItem(tables, 'Simple Table', '/tables/simple-table', 1);
        menu.addSubItem(tables, 'Fixed Header Table', '/tables/fixed-header-table', 2);
        var maps = menu.addItem('Maps', 'map', null, 6, '3', '#4CAF50');
        menu.addSubItem(maps, 'Google Maps', '/maps/google-maps', 1);
        var icons = menu.addItem('Material Icons', 'grade', '/icons', 7);
        var customPages = menu.addItem('Custom Pages', 'web', null, 8);
        menu.addSubItem(customPages, 'Login Page', '/login', 1);
        menu.addSubItem(customPages, 'Register Page', '/register', 2);
        menu.addSubItem(customPages, 'Forgot Password', '/forgot-password', 3);
        menu.addSubItem(customPages, 'Dashboard v1', '/dashboard-v1', 4);
        var dragAndDrop = menu.addItem('Drag & Drop', 'mouse', '/drag-and-drop', 9);
        var editor = menu.addItem('WYSIWYG Editor', 'format_shapes', '/editor', 10, 'NEW', '#3F51B5');
        var dynamicMenu = menu.addItem('Dynamic Menu', 'extension', '/dynamic-menu', 11);
        var multiLevel = menu.addItem('Multi-Level Menu', 'menu', null, 12);
        var level1 = menu.addSubItem(multiLevel, 'Level 1', '/level1', 1);
        var level2 = menu.addSubItem(level1, 'Level 2', '/level1/level2', 2);
        var level3 = menu.addSubItem(level2, 'Level 3', '/level1/level2/level3', 3);
        var level4 = menu.addSubItem(level3, 'Level 4', '/level1/level2/level3/level4', 4);
        var level5 = menu.addSubItem(level4, 'Level 5', '/level1/level2/level3/level4/level5', 5);
    }
    SidenavService.prototype.addItem = function (name, icon, route, position, badge, badgeColor) {
        var item = new sidenav_item_model_1.SidenavItem({
            name: name,
            icon: icon,
            route: route,
            subItems: [],
            position: position || 99,
            badge: badge || null,
            badgeColor: badgeColor || null
        });
        this._items.push(item);
        this._itemsSubject.next(this._items);
        return item;
    };
    SidenavService.prototype.addSubItem = function (parent, name, route, position) {
        var item = new sidenav_item_model_1.SidenavItem({
            name: name,
            route: route,
            parent: parent,
            subItems: [],
            position: position || 99
        });
        parent.subItems.push(item);
        this._itemsSubject.next(this._items);
        return item;
    };
    SidenavService.prototype.removeItem = function (item) {
        var index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
        }
        this._itemsSubject.next(this._items);
    };
    SidenavService.prototype.isOpen = function (item) {
        return (this._currentlyOpen.indexOf(item) != -1);
    };
    SidenavService.prototype.toggleCurrentlyOpen = function (item) {
        var currentlyOpen = this._currentlyOpen;
        if (this.isOpen(item)) {
            if (currentlyOpen.length > 1) {
                currentlyOpen.length = this._currentlyOpen.indexOf(item);
            }
            else {
                currentlyOpen = [];
            }
        }
        else {
            currentlyOpen = this.getAllParents(item);
        }
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    };
    SidenavService.prototype.getAllParents = function (item, currentlyOpen) {
        if (currentlyOpen === void 0) { currentlyOpen = []; }
        currentlyOpen.unshift(item);
        if (item.hasParent()) {
            return this.getAllParents(item.parent, currentlyOpen);
        }
        else {
            return currentlyOpen;
        }
    };
    SidenavService.prototype.nextCurrentlyOpen = function (currentlyOpen) {
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    };
    SidenavService.prototype.nextCurrentlyOpenByRoute = function (route) {
        var currentlyOpen = [];
        var item = this.findByRouteRecursive(route, this._items);
        if (item && item.hasParent()) {
            currentlyOpen = this.getAllParents(item);
        }
        else if (item) {
            currentlyOpen = [item];
        }
        this.nextCurrentlyOpen(currentlyOpen);
    };
    SidenavService.prototype.findByRouteRecursive = function (route, collection) {
        var _this = this;
        var result = _.find(collection, { 'route': route });
        if (!result) {
            _.each(collection, function (item) {
                if (item.hasSubItems()) {
                    var found = _this.findByRouteRecursive(route, item.subItems);
                    if (found) {
                        result = found;
                        return false;
                    }
                }
            });
        }
        return result;
    };
    Object.defineProperty(SidenavService.prototype, "currentlyOpen", {
        get: function () {
            return this._currentlyOpen;
        },
        enumerable: true,
        configurable: true
    });
    SidenavService = __decorate([
        core_1.Injectable()
    ], SidenavService);
    return SidenavService;
}());
exports.SidenavService = SidenavService;
