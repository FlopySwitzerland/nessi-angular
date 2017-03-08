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
var LineChartComponent = (function () {
    function LineChartComponent(d3ChartService) {
        this.interpolate = false;
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    LineChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        var interpolate = (this.interpolate) ? 'cardinal' : false;
        var min = d3.min(widgetDemoData_data_1.lineChartDemoValues) - 20;
        var max = d3.max(widgetDemoData_data_1.lineChartDemoValues) + 20;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'lineChart',
                    height: 120,
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
                            return d3.time.format('%a %d.%m.%Y')(new Date(d));
                        }
                    },
                    yDomain: [min, max],
                    showLegend: false,
                    useInteractiveGuideline: true,
                    color: [this.chartColor],
                    interpolate: interpolate
                },
            };
        }
    };
    LineChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    __decorate([
        core_1.Input('data')
    ], LineChartComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input('chartOptions')
    ], LineChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        core_1.Input('title')
    ], LineChartComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('bgColor')
    ], LineChartComponent.prototype, "bgColor", void 0);
    __decorate([
        core_1.Input('textColor')
    ], LineChartComponent.prototype, "textColor", void 0);
    __decorate([
        core_1.Input('chartColor')
    ], LineChartComponent.prototype, "chartColor", void 0);
    __decorate([
        core_1.Input('interpolate')
    ], LineChartComponent.prototype, "interpolate", void 0);
    __decorate([
        core_1.Input('gain')
    ], LineChartComponent.prototype, "gain", void 0);
    __decorate([
        core_1.Input('comparedTo')
    ], LineChartComponent.prototype, "comparedTo", void 0);
    LineChartComponent = __decorate([
        core_1.Component({
            selector: 'ms-line-chart',
            templateUrl: './line-chart.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Inject(nvD3_service_1.D3ChartService))
    ], LineChartComponent);
    return LineChartComponent;
}());
exports.LineChartComponent = LineChartComponent;
