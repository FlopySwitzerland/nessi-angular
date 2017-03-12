"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../route.animation");
var EditorComponent = (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'ms-editor',
            templateUrl: './editor.component.html',
            styleUrls: ['./editor.component.scss'],
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;