"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../../route.animation");
var _ = require('lodash');
var DialogsComponent = (function () {
    function DialogsComponent(dialog) {
        this.dialog = dialog;
        this.dialogHTML = "\n  <button md-raised-button type=\"button\" (click)=\"openDialog()\" color=\"primary\">Open Dialog</button>\n  <p *ngIf=\"result\">You chose: {{ result }}</p>\n  ";
    }
    DialogsComponent.prototype.openDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(DemoDialog, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.result = result;
            _this.dialogRef = null;
        });
    };
    DialogsComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    DialogsComponent = __decorate([
        core_1.Component({
            selector: 'ms-dialogs',
            templateUrl: './dialogs.component.html',
            styleUrls: ['./dialogs.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], DialogsComponent);
    return DialogsComponent;
}());
exports.DialogsComponent = DialogsComponent;
var DemoDialog = (function () {
    function DemoDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DemoDialog = __decorate([
        core_1.Component({
            selector: 'ms-demo-dialog',
            template: "\n  <h1>Would you like to order pizza?</h1>\n\n  <md-dialog-actions align=\"end\">\n    <button md-button (click)=\"dialogRef.close('No!')\">No</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close('Yes!')\">Yes</button>\n  </md-dialog-actions>\n  "
        })
    ], DemoDialog);
    return DemoDialog;
}());
exports.DemoDialog = DemoDialog;
