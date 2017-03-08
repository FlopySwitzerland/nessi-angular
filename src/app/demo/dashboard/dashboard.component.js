"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var widgetDemoData_data_1 = require("../data/widgetDemoData.data");
var route_animation_1 = require("../../route.animation");
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.discreteBarDemoData = widgetDemoData_data_1.discreteBarDemoDataGenerator();
        this.lineChartDemoData = widgetDemoData_data_1.lineChartDemoDataGenerator();
        this.lineChartInterpolatedDemoData = widgetDemoData_data_1.lineChartInterpolatedDemoDataGenerator();
        this.activityFeedsDemoData = [
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
        this.serverLoadDemoData = widgetDemoData_data_1.serverLoadDemoData;
        this.pieChartDemoData = widgetDemoData_data_1.pieChartDemoData;
        this.recentSalesDemoData = widgetDemoData_data_1.recentSalesDemoDataGenerator();
        this.recentSalesProductsDemoData = [
            {
                image: 'assets/img/avatars/1.png',
                itemName: 'Design Lamp',
                value: 39.54,
                timeAgo: '2 minutes ago'
            },
            {
                image: 'assets/img/avatars/2.png',
                itemName: 'Apple MacBook',
                value: 699,
                timeAgo: '19 minutes ago'
            },
            {
                image: 'assets/img/avatars/3.png',
                itemName: 'Apple iPhone 8',
                value: 3113.12,
                timeAgo: '2 hours ago'
            },
            {
                image: 'assets/img/avatars/4.png',
                itemName: 'USB-C Cable',
                value: 87.58,
                timeAgo: '6 hours ago'
            },
            {
                image: 'assets/img/avatars/5.png',
                itemName: 'Lighting Cable',
                value: 24.99,
                timeAgo: '13 hours ago'
            }
        ];
        this.trafficSourcesDemoData = widgetDemoData_data_1.trafficSourcesDemoData;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'ms-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
            host: {
                '[@fadeInAnimation]': 'true'
            },
            animations: [route_animation_1.fadeInAnimation]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
