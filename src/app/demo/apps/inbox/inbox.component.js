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
var inbox_compose_component_1 = require("./inbox-compose/inbox-compose.component");
var InboxComponent = (function () {
    function InboxComponent(mailService, renderer, composeDialog, snackBar) {
        this.mailService = mailService;
        this.renderer = renderer;
        this.composeDialog = composeDialog;
        this.snackBar = snackBar;
        this.shownMails = [];
        this.allMails = [];
        this.selectedMails = [];
        this.clickListeners = [];
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mailSubscription = this.mailService.mails$.subscribe(function (mails) {
            _this.allMails = _.sortBy(mails, 'when').reverse();
        });
        this.setShownMailsByGroup('primary');
    };
    InboxComponent.prototype.ngAfterViewChecked = function () {
        this.createMailListClickListeners();
    };
    InboxComponent.prototype.openComposeDialog = function () {
        var _this = this;
        var dialogRef = this.composeDialog.open(inbox_compose_component_1.InboxComposeComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.snackBar.open(result);
            }
        });
    };
    InboxComponent.prototype.createMailListClickListeners = function () {
        var _this = this;
        this.clickListeners.forEach(function (listener) {
            listener();
        });
        this.mailList.forEach(function (elem, index) {
            _this.clickListeners.push(_this.renderer.listen(elem.nativeElement, 'click', function (event) {
                if (event.target.className != 'md-checkbox-inner-container' && event.target.className != 'md-ripple-background') {
                    _this.showMailDetail(_this.shownMails[index]);
                }
            }));
        });
    };
    InboxComponent.prototype.resetTemporaries = function () {
        this.shownMailDetail = null;
        this.respondActive = false;
    };
    InboxComponent.prototype.showMailDetail = function (mail) {
        this.shownMailDetail = mail;
        mail.read = true;
    };
    InboxComponent.prototype.setShownMailsByGroup = function (group) {
        this.shownMails = this.allMails.filter(function (mail) {
            return (mail.group == group);
        });
        this.shownMailsTypeGroup = group;
        this.resetTemporaries();
    };
    InboxComponent.prototype.setShownMailsByType = function (type) {
        this.shownMails = this.allMails.filter(function (mail) {
            return (mail.type == type);
        });
        this.shownMailsTypeGroup = type;
        this.resetTemporaries();
    };
    InboxComponent.prototype.setShownMailsToStarred = function () {
        this.shownMails = this.allMails.filter(function (mail) {
            return (mail.starred == true);
        });
        this.shownMailsTypeGroup = 'starred';
        this.resetTemporaries();
    };
    InboxComponent.prototype.toggleSelectAllThreads = function () {
        if (this.selectedMails && this.selectedMails.length > 0) {
            this.selectedMails = this.shownMails;
        }
        else {
            this.selectedMails = [];
        }
    };
    InboxComponent.prototype.toggleStarred = function (mail) {
        mail.starred = !mail.starred;
    };
    InboxComponent.prototype.isSelected = function (mail) {
        return _.includes(this.selectedMails, mail);
    };
    InboxComponent.prototype.unreadMailsCount = function (group) {
        var count = this.allMails.filter(function (mail) { return (mail.read == false && mail.group == group); }).length;
        var text = '';
        if (count > 0) {
            text = "(" + count + ")";
        }
        return text;
    };
    InboxComponent.prototype.setRespondActive = function (active) {
        this.respondActive = active;
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        this.mailSubscription.unsubscribe();
        this.clickListeners.forEach(function (listener) {
            listener();
        });
    };
    __decorate([
        core_1.ViewChildren('mailList')
    ], InboxComponent.prototype, "mailList", void 0);
    InboxComponent = __decorate([
        core_1.Component({
            selector: 'ms-inbox',
            templateUrl: './inbox.component.html',
            styleUrls: ['./inbox.component.scss'],
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], InboxComponent);
    return InboxComponent;
}());
exports.InboxComponent = InboxComponent;
