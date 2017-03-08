"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var nvD3_service_1 = require("../../nvD3/nvD3.service");
var widgetDemoData_data_1 = require("../../../demo/data/widgetDemoData.data");
var moment = require('moment');
var RecentSalesComponent = (function () {
    function RecentSalesComponent(d3ChartService) {
        this.d3 = d3ChartService.getD3();
    }
    RecentSalesComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        var min = 0;
        var max = d3.max(widgetDemoData_data_1.recentCustomersDemoValues);
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 100,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        //return d3.time.format('%H:00')(new Date(d));
                        return moment(new Date(d)).calendar();
                    }
                },
                yDomain: [min, max],
                showLegend: false,
                useInteractiveGuideline: true,
                color: ['#DBF6F9']
            },
        };
    };
    __decorate([
        core_1.Input('sales')
    ], RecentSalesComponent.prototype, "sales", void 0);
    __decorate([
        core_1.Input('chartData')
    ], RecentSalesComponent.prototype, "chartData", void 0);
    __decorate([
        core_1.Input('chartOptions')
    ], RecentSalesComponent.prototype, "chartOptions", void 0);
    RecentSalesComponent = __decorate([
        core_1.Component({
            selector: 'ms-recent-sales',
            templateUrl: './recent-sales.component.html',
            styleUrls: ['./recent-sales.component.scss']
        }),
        __param(0, core_1.Inject(nvD3_service_1.D3ChartService))
    ], RecentSalesComponent);
    return RecentSalesComponent;
}());
exports.RecentSalesComponent = RecentSalesComponent;
