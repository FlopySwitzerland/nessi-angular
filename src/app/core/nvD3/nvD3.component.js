"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var nvD3 = (function () {
    function nvD3(elementRef, nvD3Service) {
        this.el = elementRef.nativeElement;
        this.d3 = nvD3Service.getD3();
        this.nv = nvD3Service.getNv();
    }
    nvD3.prototype.ngOnChanges = function (changes) {
        if (this.options) {
            if (!this.chart || this.chartType !== this.options.chart.type) {
                this.initChart(this.options);
            }
            else {
                this.updateWithOptions(this.options);
            }
        }
    };
    nvD3.prototype.initChart = function (options) {
        var _this = this;
        // Clearing
        this.clearElement();
        if (!options)
            return;
        // Initialize chart with specific type
        this.chart = this.nv.models[options.chart.type]();
        this.chartType = this.options.chart.type;
        // Generate random chart ID
        this.chart.id = Math.random().toString(36).substr(2, 15);
        this.updateWithOptions(options);
        this.nv.addGraph(function () {
            if (!_this.chart)
                return;
            // Remove resize handler. Due to async execution should be placed here, not in the clearElement
            if (_this.chart.resizeHandler)
                _this.chart.resizeHandler.clear();
            _this.chart.resizeHandler = _this.nv.utils.windowResize(function () {
                _this.chart && _this.chart.update && _this.chart.update();
            });
            return _this.chart;
        }, options.chart['callback']);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    };
    /**
     * Update chart with new options.
     * @param options
     */
    nvD3.prototype.updateWithOptions = function (options) {
        // Exit if options are not yet bound
        if (!options)
            return;
        for (var key in this.chart) {
            if (!this.chart.hasOwnProperty(key))
                continue;
            var value = this.chart[key];
            if (key[0] === '_') { }
            else if ([
                'clearHighlights',
                'highlightPoint',
                'id',
                'options',
                'resizeHandler',
                'state',
                'open',
                'close',
                'tooltipContent'
            ].indexOf(key) >= 0) { }
            else if (key === 'dispatch')
                this.configureEvents(this.chart[key], options.chart[key]);
            else if ([
                'bars',
                'bars1',
                'bars2',
                'boxplot',
                'bullet',
                'controls',
                'discretebar',
                'distX',
                'distY',
                'interactiveLayer',
                'legend',
                'lines',
                'lines1',
                'lines2',
                'multibar',
                'pie',
                'scatter',
                'scatters1',
                'scatters2',
                'sparkline',
                'stack1',
                'stack2',
                'sunburst',
                'tooltip',
                'x2Axis',
                'xAxis',
                'y1Axis',
                'y2Axis',
                'y3Axis',
                'y4Axis',
                'yAxis',
                'yAxis1',
                'yAxis2'
            ].indexOf(key) >= 0 ||
                // stacked is a component for stackedAreaChart, but a boolean for multiBarChart and multiBarHorizontalChart
                (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
                this.configure(this.chart[key], options.chart[key], options.chart.type);
            }
            else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {
            }
            else if ((key === 'tooltips') && options.chart.type === 'boxPlotChart') {
            }
            else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {
            }
            else if (options.chart[key] === undefined || options.chart[key] === null) {
            }
            else
                this.chart[key](options.chart[key]);
        }
        this.updateWithData(this.data);
    };
    /**
     * Update chart with new chartDataArray.
     * @param data
     */
    nvD3.prototype.updateWithData = function (data) {
        if (data) {
            // Select the add <svg> element (create it if necessary) and to render the chart in
            {
                var svgElement = this.el.querySelector('svg');
                if (!svgElement) {
                    this.svg = this.d3.select(this.el).append('svg');
                }
                else {
                    this.svg = this.d3.select(svgElement);
                }
            }
            this.updateSize();
            this.svg.datum(data).call(this.chart);
        }
    };
    /**
     * Update the chart size.
     */
    nvD3.prototype.updateSize = function () {
        if (this.svg) {
            var h = void 0, w = void 0;
            if (h = this.options.chart.height) {
                if (!isNaN(+h))
                    h += 'px';
                this.svg.attr('height', h).style({ height: h });
            }
            if (w = this.options.chart.width) {
                if (!isNaN(+w))
                    w += 'px';
                this.svg.attr('width', w).style({ width: w });
            }
            else {
                this.svg.attr('width', '100%').style({ width: '100%' });
            }
        }
    };
    /**
     * Synchronize the options with the options of the nvd3 chart.
     * @param chart
     * @param options
     * @param chartType
     */
    nvD3.prototype.configure = function (chart, options, chartType) {
        if (chart && options) {
            for (var key in chart) {
                if (!chart.hasOwnProperty(key))
                    continue;
                var value = chart[key];
                if (key[0] === '_') {
                }
                else if (key === 'dispatch')
                    this.configureEvents(value, options[key]);
                else if (key === 'tooltip')
                    this.configure(chart[key], options[key], chartType);
                else if (key === 'contentGenerator') {
                    if (options[key])
                        chart[key](options[key]);
                }
                else if ([
                    'axis',
                    'clearHighlights',
                    'defined',
                    'highlightPoint',
                    'nvPointerEventsClass',
                    'options',
                    'rangeBand',
                    'rangeBands',
                    'scatter',
                    'open',
                    'close'
                ].indexOf(key) === -1) {
                    if (options[key] === undefined || options[key] === null) {
                    }
                    else
                        chart[key](options[key]);
                }
            }
        }
    };
    /**
     * Configure dispatch events.
     * @param dispatch
     * @param options
     */
    nvD3.prototype.configureEvents = function (dispatch, options) {
        if (dispatch && options) {
            for (var key in dispatch) {
                if (!dispatch.hasOwnProperty(key))
                    continue;
                var value = dispatch[key];
                if (options[key] === undefined || options[key] === null) {
                }
                else
                    dispatch.on(key + '._', options[key]);
            }
        }
    };
    /**
     * Cleanup an element.
     */
    nvD3.prototype.clearElement = function () {
        var nv = this.nv;
        this.el.innerHTML = '';
        // remove tooltip if exists
        if (this.chart && this.chart.tooltip && this.chart.tooltip.id) {
            this.d3.select('#' + this.chart.tooltip.id()).remove();
        }
        // To be compatible with old nvd3 (v1.7.1)
        if (nv['graphs'] && this.chart) {
            for (var i = nv['graphs'].length - 1; i >= 0; i--) {
                if (nv['graphs'][i] && (nv['graphs'][i].id === this.chart.id)) {
                    nv['graphs'].splice(i, 1);
                }
            }
        }
        if (nv.tooltip && nv.tooltip.cleanup) {
            nv.tooltip.cleanup();
        }
        if (this.chart && this.chart.resizeHandler)
            this.chart.resizeHandler.clear();
        this.chart = null;
    };
    __decorate([
        core_1.Input()
    ], nvD3.prototype, "options", void 0);
    __decorate([
        core_1.Input()
    ], nvD3.prototype, "data", void 0);
    nvD3 = __decorate([
        core_1.Component({
            selector: 'nvd3',
            template: ""
        })
    ], nvD3);
    return nvD3;
}());
exports.nvD3 = nvD3;
