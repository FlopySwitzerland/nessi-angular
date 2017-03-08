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
var ListsComponent = (function () {
    function ListsComponent() {
        this.twoLineListHTML = "\n  <md-list class=\"demo-list md-elevation-z2\">\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/John.png\">\n      <h3 md-line>John</h3>\n      <p md-line>\n        <span>Brunch?</span>\n        <span class=\"subline\">-- Did you want to go on Sunday? I was thinking</span>\n      </p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Peter.png\">\n      <h3 md-line>Peter</h3>\n      <p md-line>\n        <span>Summer BBQ</span>\n        <span class=\"subline\">-- Wish I could come, but I have some special</span>\n      </p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Nancy.png\">\n      <h3 md-line>Nancy</h3>\n      <p md-line>\n        <span>Oui oui</span>\n        <span class=\"subline\">-- Have you booked the Paris trip?</span>\n      </p>\n    </md-list-item>\n  </md-list>\n  ";
        this.threeLineListHTML = "\n  <md-list class=\"demo-list md-elevation-z2\">\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/John.png\">\n      <h3 md-line>John</h3>\n      <p md-line>Brunch?</p>\n      <p md-line class=\"subline\">Did you want to go on Sunday? I was thinking</p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Peter.png\">\n      <h3 md-line>Peter</h3>\n      <p md-line>Summer BBQ</p>\n      <p md-line class=\"subline\">Wish I could come, but I have some special</p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Nancy.png\">\n      <h3 md-line>Nancy</h3>\n      <p md-line>Oui oui</p>\n      <p md-line class=\"subline\">Have you booked the Paris trip?</p>\n    </md-list-item>\n  </md-list>\n  ";
        this.threeLineListWithoutAvatarsHTML = "\n  <md-list class=\"demo-list md-elevation-z2\">\n    <md-list-item>\n      <h3 md-line>John</h3>\n      <p md-line>Brunch?</p>\n      <p md-line class=\"subline\">Did you want to go on Sunday? I was thinking</p>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Peter</h3>\n      <p md-line>Summer BBQ</p>\n      <p md-line class=\"subline\">Wish I could come, but I have some special</p>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Nancy</h3>\n      <p md-line>Oui oui</p>\n      <p md-line class=\"subline\">Have you booked the Paris trip?</p>\n    </md-list-item>\n  </md-list>\n  ";
        this.oneLineList = "\n  <md-list class=\"demo-list md-elevation-z2\">\n    <md-list-item>\n      <h3 md-line>John</h3>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Peter</h3>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Nancy</h3>\n    </md-list-item>\n  </md-list>\n  ";
    }
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    ListsComponent = __decorate([
        core_1.Component({
            selector: 'ms-lists',
            templateUrl: './lists.component.html',
            styleUrls: ['./lists.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [
                route_animation_1.routeAnimation
            ]
        })
    ], ListsComponent);
    return ListsComponent;
}());
exports.ListsComponent = ListsComponent;
