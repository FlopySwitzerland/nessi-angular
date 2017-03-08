"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var moment = require('moment');
var calendar_edit_component_1 = require("./calendar-edit/calendar-edit.component");
var rxjs_1 = require("rxjs");
var route_animation_1 = require("../../../route.animation");
var CalendarComponent = (function () {
    function CalendarComponent(dialogRef, snackBar) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.view = 'month';
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.actions = [{
                label: '<i class="icon">mode_edit</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="icon">delete</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.snackBar.open('Deleted Event: ' + event.title);
                    //this.handleEvent('Deleted', event);
                }
            }];
        this.viewDate = new Date();
        this.events = [{
                start: moment().subtract(1, "days"),
                end: moment().add(1, "days"),
                title: 'A 3 day event',
                color: 'red',
                actions: this.actions
            }, {
                start: moment(),
                end: moment(),
                title: 'A draggable one day event',
                color: 'yellow',
                actions: this.actions,
                draggable: true
            }, {
                start: moment().add(9, "days"),
                end: moment().add(9, "days").add(2, "months"),
                title: 'A long event that spans 2 months',
                color: 'blue'
            }, {
                start: moment().add(2, "hours"),
                end: moment(),
                title: 'A draggable and resizable event',
                color: 'yellow',
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
    }
    CalendarComponent.prototype.handleEvent = function (action, event) {
        var _this = this;
        var dialogRef = this.dialogRef.open(calendar_edit_component_1.CalendarEditComponent);
        dialogRef.componentInstance.event = event;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                event.title = result.title;
                _this.snackBar.open('Changed Event: ' + event.title);
                _this.refresh.next();
            }
        });
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (moment(this.viewDate).isSame(date, 'month')) {
            if ((moment(this.viewDate).isSame(date, 'day') && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.snackBar.open('Moved Event: \'' + event.title + '\' to ' + newEnd.getDate() + '.' + newEnd.getMonth() + '.' + newEnd.getFullYear());
        //this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'ms-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.scss'],
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
