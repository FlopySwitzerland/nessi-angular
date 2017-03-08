"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LineChartWidgetComponent = (function () {
    function LineChartWidgetComponent(nvD3Service) {
        this.d3 = nvD3Service.getD3();
    }
    LineChartWidgetComponent.prototype.ngOnInit = function () {
        this.revenueSum = this.data[0].values.reduce(function (a, b) { return a + b.value; }, 0);
        this.taxSum = this.data[1].values.reduce(function (a, b) { return a + b.value; }, 0);
        this.shippingSum = this.data[2].values.reduce(function (a, b) { return a + b.value; }, 0);
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'stackedAreaChart',
                height: 400,
                margin: {
                    top: 0,
                    right: 60,
                    bottom: 20,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                xAxis: {
                    tickFormat: function (d) {
                        return d3.time.format('%B')(new Date(d));
                    },
                    showMaxMin: false
                },
                yAxis: {
                    tickFormat: d3.format(',.2f')
                },
                rightAlignYAxis: true,
                useInteractiveGuideline: true,
                interpolate: 'cardinal'
            },
        };
    };
    __decorate([
        core_1.Input('data')
    ], LineChartWidgetComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input('options')
    ], LineChartWidgetComponent.prototype, "options", void 0);
    LineChartWidgetComponent = __decorate([
        core_1.Component({
            selector: 'ms-line-chart-widget',
            templateUrl: './line-chart-widget.component.html',
            styleUrls: ['./line-chart-widget.component.scss']
        })
    ], LineChartWidgetComponent);
    return LineChartWidgetComponent;
}());
exports.LineChartWidgetComponent = LineChartWidgetComponent;
