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
var PieChartComponent = (function () {
    function PieChartComponent(d3ChartService) {
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    PieChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'pieChart',
                    height: 400,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    x: function (d) { return d.label; },
                    y: function (d) { return d.value; },
                    showXAxis: false,
                    showYAxis: false,
                    showLegend: true,
                    useInteractiveGuideline: true,
                    donut: true,
                    color: ['#1E88E5', '#D81B60', '#00897B', '#3949AB', '#e53935']
                },
            };
        }
    };
    PieChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    __decorate([
        core_1.Input('data')
    ], PieChartComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input('chartOptions')
    ], PieChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        core_1.Input('title')
    ], PieChartComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('subTitle')
    ], PieChartComponent.prototype, "subTitle", void 0);
    __decorate([
        core_1.Input('bgColor')
    ], PieChartComponent.prototype, "bgColor", void 0);
    __decorate([
        core_1.Input('textColor')
    ], PieChartComponent.prototype, "textColor", void 0);
    PieChartComponent = __decorate([
        core_1.Component({
            selector: 'ms-pie-chart',
            templateUrl: './pie-chart.component.html'
        }),
        __param(0, core_1.Inject(nvD3_service_1.D3ChartService))
    ], PieChartComponent);
    return PieChartComponent;
}());
exports.PieChartComponent = PieChartComponent;
