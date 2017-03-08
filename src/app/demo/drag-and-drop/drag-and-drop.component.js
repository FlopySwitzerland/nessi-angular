"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../route.animation");
var DragAndDropComponent = (function () {
    function DragAndDropComponent() {
        this.groupOptions = {
            group: 'testGroup',
            handle: '.drag-handle',
            animation: 300
        };
        this.simpleOptions = {
            animation: 300
        };
    }
    DragAndDropComponent.prototype.ngOnInit = function () {
        this.listArray = [
            {
                image: 'assets/img/avatars/10.png',
                name: 'Sophie',
                subject: 'Dinner?',
                content: 'Are we still going out tonight?'
            },
            {
                image: 'assets/img/avatars/11.png',
                name: 'Jack',
                subject: 'Golf weekend',
                content: 'Hey! You wanted to go play Golf?'
            },
            {
                image: 'assets/img/avatars/12.png',
                name: 'Cody',
                subject: 'Code Quality',
                content: 'Love your newest theme, so clean and slick!'
            },
            {
                image: 'assets/img/avatars/13.png',
                name: 'James',
                subject: 'Party?',
                content: 'You wanna throw a party this weekend?'
            },
            {
                image: 'assets/img/avatars/14.png',
                name: 'Jessica',
                subject: 'Love you...',
                content: 'Hope we can see us again soon :)'
            }
        ];
        this.listWithoutAvatarArray = [
            {
                name: 'Sophia Levin'
            },
            {
                name: 'James Long'
            },
            {
                name: 'Jennifer Miller'
            },
            {
                name: 'John Don'
            }
        ];
        this.numberListArray = [
            {
                name: 'Number 1'
            },
            {
                name: 'Number 2'
            },
            {
                name: 'Number 3'
            },
            {
                name: 'Number 4'
            }
        ];
    };
    DragAndDropComponent = __decorate([
        core_1.Component({
            selector: 'ms-drag-and-drop',
            templateUrl: './drag-and-drop.component.html',
            styleUrls: ['./drag-and-drop.component.scss'],
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], DragAndDropComponent);
    return DragAndDropComponent;
}());
exports.DragAndDropComponent = DragAndDropComponent;
