"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var moment = require('moment');
var eventDateFormat = 'DD.MM.YYYY, HH:mm';
var CalendarEditComponent = (function () {
    function CalendarEditComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    CalendarEditComponent.prototype.ngOnInit = function () {
        this.event = this.dialogRef.componentInstance.event;
        this.eventStart = moment(this.event.start).format(eventDateFormat);
        this.eventEnd = moment(this.event.end).format(eventDateFormat);
    };
    CalendarEditComponent.prototype.save = function () {
        if (this.eventStart) {
            this.event.start = moment(this.eventStart, eventDateFormat).toDate();
        }
        if (this.eventEnd) {
            this.event.end = moment(this.eventEnd, eventDateFormat).toDate();
        }
        this.dialogRef.close(this.event);
    };
    CalendarEditComponent = __decorate([
        core_1.Component({
            selector: 'ms-calendar-edit',
            templateUrl: './calendar-edit.component.html',
            styleUrls: ['./calendar-edit.component.scss']
        })
    ], CalendarEditComponent);
    return CalendarEditComponent;
}());
exports.CalendarEditComponent = CalendarEditComponent;
