"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../../route.animation");
var FormWizardComponent = (function () {
    function FormWizardComponent() {
        this.selectedIndex = 0;
    }
    FormWizardComponent.prototype.ngOnInit = function () {
    };
    FormWizardComponent.prototype.nextStep = function () {
        this.selectedIndex += 1;
    };
    FormWizardComponent.prototype.previousStep = function () {
        this.selectedIndex -= 1;
    };
    FormWizardComponent = __decorate([
        core_1.Component({
            selector: 'ms-form-wizard',
            templateUrl: './form-wizard.component.html',
            styleUrls: ['./form-wizard.component.scss'],
            host: {
                '[@fadeInAnimation]': 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], FormWizardComponent);
    return FormWizardComponent;
}());
exports.FormWizardComponent = FormWizardComponent;
