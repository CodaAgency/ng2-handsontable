/* tslint:disable:no-any max-file-line-count */
import { Component, EventEmitter, ElementRef, Input, Output, NgZone, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable';
import { handsontableStyles } from './handsontable.component.css';
import * as _ from 'lodash';
var HotTableComponent = (function () {
    function HotTableComponent(element, ngZone) {
        this.element = element;
        this.ngZone = ngZone;
        this.data = [];
        this.afterAddChild = new EventEmitter();
        this.afterBeginEditing = new EventEmitter();
        this.afterCellMetaReset = new EventEmitter();
        this.afterChange = new EventEmitter();
        this.afterChangesObserved = new EventEmitter();
        this.afterColumnMove = new EventEmitter();
        this.afterColumnResize = new EventEmitter();
        this.afterColumnSort = new EventEmitter();
        this.afterContextMenuDefaultOptions = new EventEmitter();
        this.afterContextMenuHide = new EventEmitter();
        this.afterContextMenuShow = new EventEmitter();
        this.afterCopy = new EventEmitter();
        this.afterCopyLimit = new EventEmitter();
        this.afterCreateCol = new EventEmitter();
        this.afterCreateRow = new EventEmitter();
        this.afterCut = new EventEmitter();
        this.afterDeselect = new EventEmitter();
        this.afterDestroy = new EventEmitter();
        this.afterDetachChild = new EventEmitter();
        this.afterDocumentKeyDown = new EventEmitter();
        this.afterDropdownMenuDefaultOptions = new EventEmitter();
        this.afterDropdownMenuHide = new EventEmitter();
        this.afterDropdownMenuShow = new EventEmitter();
        this.afterePaste = new EventEmitter();
        this.afterFilter = new EventEmitter();
        this.afterGetCellMeta = new EventEmitter();
        this.afterGetColHeader = new EventEmitter();
        this.afterGetColumnHeaderRenderers = new EventEmitter();
        this.afterGetRowHeader = new EventEmitter();
        this.afterGetRowHeaderRenderers = new EventEmitter();
        this.afterInit = new EventEmitter();
        this.afterLoadData = new EventEmitter();
        this.afterModifyTransformEnd = new EventEmitter();
        this.afterModifyTransformStart = new EventEmitter();
        this.afterMomentumScroll = new EventEmitter();
        this.afterOnCellCornerDblClick = new EventEmitter();
        this.afterOnCellCornerMouseDown = new EventEmitter();
        this.afterOnCellMouseDown = new EventEmitter();
        this.afterOnCellMouseOver = new EventEmitter();
        this.afterPluginsInitialized = new EventEmitter();
        this.afterRedo = new EventEmitter();
        this.afterRemoveCol = new EventEmitter();
        this.afterRemoveRow = new EventEmitter();
        this.afterRender = new EventEmitter();
        this.afterRenderer = new EventEmitter();
        this.afterRowMove = new EventEmitter();
        this.afterRowResize = new EventEmitter();
        this.afterScrollHorizontally = new EventEmitter();
        this.afterScrollVertically = new EventEmitter();
        this.afterSelection = new EventEmitter();
        this.afterSelectionByProp = new EventEmitter();
        this.afterSelectionEnd = new EventEmitter();
        this.afterSelectionEndByProp = new EventEmitter();
        this.afterSetCellMeta = new EventEmitter();
        this.afterSetDataAtCell = new EventEmitter();
        this.afterSetDataAtRowProp = new EventEmitter();
        this.afterTrimRow = new EventEmitter();
        this.afterUndo = new EventEmitter();
        this.afterUntrimRow = new EventEmitter();
        this.afterUpdateSettings = new EventEmitter();
        this.afterValidate = new EventEmitter();
        this.afterViewportColumnCalculatorOverride = new EventEmitter();
        this.afterViewportRowCalculatorOverride = new EventEmitter();
        this.beforeAddChild = new EventEmitter();
        this.beforeAutofill = new EventEmitter();
        this.beforeAutofillInsidePopulate = new EventEmitter();
        this.beforeCellAlignment = new EventEmitter();
        this.beforeChange = new EventEmitter();
        this.beforeChangeRender = new EventEmitter();
        this.beforeColumnMove = new EventEmitter();
        this.beforeColumnResize = new EventEmitter();
        this.beforeColumnSort = new EventEmitter();
        this.beforeContextMenuSetItems = new EventEmitter();
        this.beforeCopy = new EventEmitter();
        this.beforeCreateCol = new EventEmitter();
        this.beforeCreateRow = new EventEmitter();
        this.beforeCut = new EventEmitter();
        this.beforeDetachChild = new EventEmitter();
        this.beforeDrawBorders = new EventEmitter();
        this.beforeDropdownMenuSetItems = new EventEmitter();
        this.beforeFilter = new EventEmitter();
        this.beforeGetCellMeta = new EventEmitter();
        this.beforeInit = new EventEmitter();
        this.beforeInitWalkontable = new EventEmitter();
        this.beforeKeyDown = new EventEmitter();
        this.beforeOnCellMouseDown = new EventEmitter();
        this.beforeOnCellMouseOut = new EventEmitter();
        this.beforeOnCellMouseOver = new EventEmitter();
        this.beforePaste = new EventEmitter();
        this.beforeRedo = new EventEmitter();
        this.beforeRemoveCol = new EventEmitter();
        this.beforeRemoveRow = new EventEmitter();
        this.beforeRender = new EventEmitter();
        this.beforeRenderer = new EventEmitter();
        this.beforeRowMove = new EventEmitter();
        this.beforeRowResize = new EventEmitter();
        this.beforeSetRangeEnd = new EventEmitter();
        this.beforeSetRangeStart = new EventEmitter();
        this.beforeStretchingColumnWidth = new EventEmitter();
        this.beforeTouchScroll = new EventEmitter();
        this.beforeUndo = new EventEmitter();
        this.beforeValidate = new EventEmitter();
        this.beforeValueRender = new EventEmitter();
        this.construct = new EventEmitter();
        this.hiddenColumn = new EventEmitter();
        this.hiddenRow = new EventEmitter();
        this.init = new EventEmitter();
        this.manualRowHeights = new EventEmitter();
        this.modifyAutofillRange = new EventEmitter();
        this.modifyCol = new EventEmitter();
        this.modifyColHeader = new EventEmitter();
        this.modifyColumnHeaderHeight = new EventEmitter();
        this.modifyColWidth = new EventEmitter();
        this.modifyCopyableRange = new EventEmitter();
        this.modifyData = new EventEmitter();
        this.modifyRow = new EventEmitter();
        this.modifyRowHeader = new EventEmitter();
        this.modifyRowHeaderWidth = new EventEmitter();
        this.modifyRowHeight = new EventEmitter();
        this.modifyRowSourceData = new EventEmitter();
        this.modifyTransformEnd = new EventEmitter();
        this.modifyTransformStart = new EventEmitter();
        this.persistentStateLoad = new EventEmitter();
        this.persistentStateReset = new EventEmitter();
        this.persistentStateSave = new EventEmitter();
        this.skipLengthCache = new EventEmitter();
        this.unmodifyCol = new EventEmitter();
        this.unmodifyRow = new EventEmitter();
        this.zoneQueue = [];
        this.zoneQueueTimeout = 0;
    }
    HotTableComponent.prototype.getHandsontableInstance = function () {
        return this.inst;
    };
    HotTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkInputs();
        this.view = document.createElement('div');
        this.view.className = 'handsontable-container';
        this.element.nativeElement.appendChild(this.view);
        var options = this.getCurrentOptions();
        this.ngZone.runOutsideAngular(function () {
            _this.inst = new Handsontable(_this.view, options);
        });
        this.parseAutoComplete(options);
        if (this.pagedData) {
            this.data = [];
            this.pagedDataSubscription = this.pagedData.subscribe(function (newPagedData) {
                Array.prototype.push.apply(_this.data, newPagedData);
                _this.inst.loadData(_this.data);
                _this.parseAutoComplete(options);
                _this.inst.updateSettings(options, false);
            });
        }
    };
    HotTableComponent.prototype.ngOnDestroy = function () {
        if (this.view && this.view.parentElement) {
            this.view.parentElement.removeChild(this.view);
        }
        if (this.pagedDataSubscription) {
            this.pagedDataSubscription.unsubscribe();
        }
        if (this.inst) {
            this.inst.destroy();
        }
    };
    HotTableComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes && this.inst) {
            this.inst.updateSettings(this.getCurrentOptions(), false);
        }
        // tslint:disable-next-line:no-string-literal
        if (changes['data'] && !changes['data'].isFirstChange()) {
            this.inst.loadData(this.data);
        }
    };
    HotTableComponent.prototype.parseAutoComplete = function (options) {
        var inst = this.inst;
        var columns = this.columns || options.columns;
        var dataSet = options.data;
        if (columns) {
            columns.forEach(function (column) {
                if (typeof column.source === 'string') {
                    var relatedField_1 = column.source;
                    column.source = function (_query, process) {
                        var row = inst.getSelected()[0];
                        var data = dataSet[row];
                        if (!data) {
                            return;
                        }
                        var fieldParts = relatedField_1.split('.');
                        var o = data;
                        for (var _i = 0, fieldParts_1 = fieldParts; _i < fieldParts_1.length; _i++) {
                            var part = fieldParts_1[_i];
                            o = o[part];
                        }
                        process(o.map(function (item) {
                            return !column.optionField ? item : item[column.optionField];
                        }));
                    };
                }
            });
        }
    };
    HotTableComponent.prototype.checkInputs = function () {
        var dataCount = Number(!!this.pagedData) + Number(!!this.data) +
            Number(!!(this.options && this.options.data));
        if (dataCount > 1) {
            // tslint:disable-next-line:no-console
            console.error('[pagedData], [data] and [options.data] are all mutually' +
                ' exclusive');
            return false;
        }
        else if (dataCount === 0) {
            // tslint:disable-next-line:no-console
            console.error('One of [pagedData], [data] and [options.data] needs' +
                ' to be provided');
            return false;
        }
    };
    HotTableComponent.prototype.getCurrentOptions = function () {
        var _this = this;
        var htOptions = {
            data: this.data || null
        };
        _.forOwn(this, function (output, key) {
            if (output instanceof EventEmitter) {
                // Only register the event if the emitter has an observer (i.e., if the output is actually being used)
                if (output.observers.length) {
                    htOptions[key] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var data = [];
                        // Handsontable event handlers are always called with 6 arguments. Cut off any trailing undefined values.
                        for (var index = args.length; index >= 0; index--) {
                            if (args[index] !== void 0) {
                                data = args.slice(0, index + 1);
                                break;
                            }
                        }
                        // Queue all emissions to only cause 1 Zone.run() call per tick.
                        _this.queueForRunningInZone(function () {
                            output.emit(data);
                        });
                    };
                }
            }
        });
        var additionalFields = ['colHeaders', 'colWidths', 'columns'];
        additionalFields.forEach(function (field) {
            if (_this[field]) {
                Object.assign(htOptions, (_a = {},
                    _a[field] = _this[field],
                    _a));
            }
            var _a;
        });
        if (this.options) {
            Object.assign(htOptions, this.options);
        }
        return htOptions;
    };
    HotTableComponent.prototype.queueForRunningInZone = function (fn) {
        var _this = this;
        if (this.zoneQueueTimeout) {
            clearTimeout(this.zoneQueueTimeout);
        }
        this.zoneQueue.push(fn);
        this.zoneQueueTimeout = setTimeout(function () {
            _this.ngZone.run(function () {
                _this.zoneQueue.forEach(function (f) { return f(); });
            });
            _this.zoneQueue = [];
            _this.zoneQueueTimeout = 0;
        });
    };
    return HotTableComponent;
}());
export { HotTableComponent };
HotTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'hotTable',
                template: '',
                encapsulation: ViewEncapsulation.None,
                styles: [handsontableStyles]
            },] },
];
/** @nocollapse */
HotTableComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
]; };
HotTableComponent.propDecorators = {
    'data': [{ type: Input },],
    'pagedData': [{ type: Input },],
    'colHeaders': [{ type: Input },],
    'columns': [{ type: Input },],
    'colWidths': [{ type: Input },],
    'options': [{ type: Input },],
    'afterAddChild': [{ type: Output },],
    'afterBeginEditing': [{ type: Output },],
    'afterCellMetaReset': [{ type: Output },],
    'afterChange': [{ type: Output },],
    'afterChangesObserved': [{ type: Output },],
    'afterColumnMove': [{ type: Output },],
    'afterColumnResize': [{ type: Output },],
    'afterColumnSort': [{ type: Output },],
    'afterContextMenuDefaultOptions': [{ type: Output },],
    'afterContextMenuHide': [{ type: Output },],
    'afterContextMenuShow': [{ type: Output },],
    'afterCopy': [{ type: Output },],
    'afterCopyLimit': [{ type: Output },],
    'afterCreateCol': [{ type: Output },],
    'afterCreateRow': [{ type: Output },],
    'afterCut': [{ type: Output },],
    'afterDeselect': [{ type: Output },],
    'afterDestroy': [{ type: Output },],
    'afterDetachChild': [{ type: Output },],
    'afterDocumentKeyDown': [{ type: Output },],
    'afterDropdownMenuDefaultOptions': [{ type: Output },],
    'afterDropdownMenuHide': [{ type: Output },],
    'afterDropdownMenuShow': [{ type: Output },],
    'afterePaste': [{ type: Output },],
    'afterFilter': [{ type: Output },],
    'afterGetCellMeta': [{ type: Output },],
    'afterGetColHeader': [{ type: Output },],
    'afterGetColumnHeaderRenderers': [{ type: Output },],
    'afterGetRowHeader': [{ type: Output },],
    'afterGetRowHeaderRenderers': [{ type: Output },],
    'afterInit': [{ type: Output },],
    'afterLoadData': [{ type: Output },],
    'afterModifyTransformEnd': [{ type: Output },],
    'afterModifyTransformStart': [{ type: Output },],
    'afterMomentumScroll': [{ type: Output },],
    'afterOnCellCornerDblClick': [{ type: Output },],
    'afterOnCellCornerMouseDown': [{ type: Output },],
    'afterOnCellMouseDown': [{ type: Output },],
    'afterOnCellMouseOver': [{ type: Output },],
    'afterPluginsInitialized': [{ type: Output },],
    'afterRedo': [{ type: Output },],
    'afterRemoveCol': [{ type: Output },],
    'afterRemoveRow': [{ type: Output },],
    'afterRender': [{ type: Output },],
    'afterRenderer': [{ type: Output },],
    'afterRowMove': [{ type: Output },],
    'afterRowResize': [{ type: Output },],
    'afterScrollHorizontally': [{ type: Output },],
    'afterScrollVertically': [{ type: Output },],
    'afterSelection': [{ type: Output },],
    'afterSelectionByProp': [{ type: Output },],
    'afterSelectionEnd': [{ type: Output },],
    'afterSelectionEndByProp': [{ type: Output },],
    'afterSetCellMeta': [{ type: Output },],
    'afterSetDataAtCell': [{ type: Output },],
    'afterSetDataAtRowProp': [{ type: Output },],
    'afterTrimRow': [{ type: Output },],
    'afterUndo': [{ type: Output },],
    'afterUntrimRow': [{ type: Output },],
    'afterUpdateSettings': [{ type: Output },],
    'afterValidate': [{ type: Output },],
    'afterViewportColumnCalculatorOverride': [{ type: Output },],
    'afterViewportRowCalculatorOverride': [{ type: Output },],
    'beforeAddChild': [{ type: Output },],
    'beforeAutofill': [{ type: Output },],
    'beforeAutofillInsidePopulate': [{ type: Output },],
    'beforeCellAlignment': [{ type: Output },],
    'beforeChange': [{ type: Output },],
    'beforeChangeRender': [{ type: Output },],
    'beforeColumnMove': [{ type: Output },],
    'beforeColumnResize': [{ type: Output },],
    'beforeColumnSort': [{ type: Output },],
    'beforeContextMenuSetItems': [{ type: Output },],
    'beforeCopy': [{ type: Output },],
    'beforeCreateCol': [{ type: Output },],
    'beforeCreateRow': [{ type: Output },],
    'beforeCut': [{ type: Output },],
    'beforeDetachChild': [{ type: Output },],
    'beforeDrawBorders': [{ type: Output },],
    'beforeDropdownMenuSetItems': [{ type: Output },],
    'beforeFilter': [{ type: Output },],
    'beforeGetCellMeta': [{ type: Output },],
    'beforeInit': [{ type: Output },],
    'beforeInitWalkontable': [{ type: Output },],
    'beforeKeyDown': [{ type: Output },],
    'beforeOnCellMouseDown': [{ type: Output },],
    'beforeOnCellMouseOut': [{ type: Output },],
    'beforeOnCellMouseOver': [{ type: Output },],
    'beforePaste': [{ type: Output },],
    'beforeRedo': [{ type: Output },],
    'beforeRemoveCol': [{ type: Output },],
    'beforeRemoveRow': [{ type: Output },],
    'beforeRender': [{ type: Output },],
    'beforeRenderer': [{ type: Output },],
    'beforeRowMove': [{ type: Output },],
    'beforeRowResize': [{ type: Output },],
    'beforeSetRangeEnd': [{ type: Output },],
    'beforeSetRangeStart': [{ type: Output },],
    'beforeStretchingColumnWidth': [{ type: Output },],
    'beforeTouchScroll': [{ type: Output },],
    'beforeUndo': [{ type: Output },],
    'beforeValidate': [{ type: Output },],
    'beforeValueRender': [{ type: Output },],
    'construct': [{ type: Output },],
    'hiddenColumn': [{ type: Output },],
    'hiddenRow': [{ type: Output },],
    'init': [{ type: Output },],
    'manualRowHeights': [{ type: Output },],
    'modifyAutofillRange': [{ type: Output },],
    'modifyCol': [{ type: Output },],
    'modifyColHeader': [{ type: Output },],
    'modifyColumnHeaderHeight': [{ type: Output },],
    'modifyColWidth': [{ type: Output },],
    'modifyCopyableRange': [{ type: Output },],
    'modifyData': [{ type: Output },],
    'modifyRow': [{ type: Output },],
    'modifyRowHeader': [{ type: Output },],
    'modifyRowHeaderWidth': [{ type: Output },],
    'modifyRowHeight': [{ type: Output },],
    'modifyRowSourceData': [{ type: Output },],
    'modifyTransformEnd': [{ type: Output },],
    'modifyTransformStart': [{ type: Output },],
    'persistentStateLoad': [{ type: Output },],
    'persistentStateReset': [{ type: Output },],
    'persistentStateSave': [{ type: Output },],
    'skipLengthCache': [{ type: Output },],
    'unmodifyCol': [{ type: Output },],
    'unmodifyRow': [{ type: Output },],
};
//# sourceMappingURL=handsontable.component.js.map