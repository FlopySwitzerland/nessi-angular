"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var moment = require('moment');
var QuickpanelComponent = (function () {
    function QuickpanelComponent() {
    }
    QuickpanelComponent.prototype.ngOnInit = function () {
        this.todayDay = moment().format('dddd');
        this.todayDate = moment().format('Do');
        this.todayDate = this.todayDate.replace(/\D/g, '');
        this.todayDateSuffix = moment().format('Do');
        this.todayDateSuffix = this.todayDateSuffix.replace(/[0-9]/g, '');
        this.todayMonth = moment().format('MMMM');
    };
    QuickpanelComponent = __decorate([
        core_1.Component({
            selector: 'ms-quickpanel',
            templateUrl: './quickpanel.component.html',
            styleUrls: ['./quickpanel.component.scss']
        })
    ], QuickpanelComponent);
    return QuickpanelComponent;
}());
exports.QuickpanelComponent = QuickpanelComponent;
