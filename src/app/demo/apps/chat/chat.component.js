"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var chat_demo_1 = require("./chat.demo");
var _ = require('lodash');
var moment = require('moment');
var route_animation_1 = require("../../../route.animation");
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chats = _.sortBy(chat_demo_1.chatDemoData, 'lastMessageTime').reverse();
        this.activeChat = this.chats[0];
        setTimeout(function () {
            _this.chatScroll.elementRef.nativeElement.scrollTop = _this.chatScroll.elementRef.nativeElement.scrollHeight;
        }, 0);
    };
    ChatComponent.prototype.setActiveChat = function (chat) {
        this.activeChat = chat;
    };
    ChatComponent.prototype.send = function () {
        if (this.newMessage) {
            this.chats[0].messages.push({
                message: this.newMessage,
                when: moment(),
                who: 'me'
            });
            this.newMessage = '';
        }
    };
    ChatComponent.prototype.clearMessages = function (activeChat) {
        activeChat.messages.length = 0;
    };
    __decorate([
        core_1.ViewChild('chatScroll')
    ], ChatComponent.prototype, "chatScroll", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'ms-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss'],
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
