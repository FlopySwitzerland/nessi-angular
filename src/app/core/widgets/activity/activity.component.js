"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ActivityComponent = (function () {
    function ActivityComponent() {
        this.title = 'Recent Activities';
        this.subTitle = 'Your daily news feed';
        this.isLoading = false;
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    __decorate([
        core_1.Input('feeds')
    ], ActivityComponent.prototype, "feeds", void 0);
    __decorate([
        core_1.Input('title')
    ], ActivityComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('subTitle')
    ], ActivityComponent.prototype, "subTitle", void 0);
    ActivityComponent = __decorate([
        core_1.Component({
            selector: 'ms-activity',
            templateUrl: './activity.component.html'
        })
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;
