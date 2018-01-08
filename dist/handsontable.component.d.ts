import { OnInit, OnDestroy, OnChanges, SimpleChanges, EventEmitter, ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Handsontable from 'handsontable';
export declare class HotTableComponent implements OnInit, OnDestroy, OnChanges {
    private element;
    private ngZone;
    data: any[];
    pagedData: Observable<any[]>;
    colHeaders: string[];
    columns: any[];
    colWidths: number[];
    options: any;
    afterAddChild: EventEmitter<{}>;
    afterBeginEditing: EventEmitter<{}>;
    afterCellMetaReset: EventEmitter<{}>;
    afterChange: EventEmitter<{}>;
    afterChangesObserved: EventEmitter<{}>;
    afterColumnMove: EventEmitter<{}>;
    afterColumnResize: EventEmitter<{}>;
    afterColumnSort: EventEmitter<{}>;
    afterContextMenuDefaultOptions: EventEmitter<{}>;
    afterContextMenuHide: EventEmitter<{}>;
    afterContextMenuShow: EventEmitter<{}>;
    afterCopy: EventEmitter<{}>;
    afterCopyLimit: EventEmitter<{}>;
    afterCreateCol: EventEmitter<{}>;
    afterCreateRow: EventEmitter<{}>;
    afterCut: EventEmitter<{}>;
    afterDeselect: EventEmitter<{}>;
    afterDestroy: EventEmitter<{}>;
    afterDetachChild: EventEmitter<{}>;
    afterDocumentKeyDown: EventEmitter<{}>;
    afterDropdownMenuDefaultOptions: EventEmitter<{}>;
    afterDropdownMenuHide: EventEmitter<{}>;
    afterDropdownMenuShow: EventEmitter<{}>;
    afterePaste: EventEmitter<{}>;
    afterFilter: EventEmitter<{}>;
    afterGetCellMeta: EventEmitter<{}>;
    afterGetColHeader: EventEmitter<{}>;
    afterGetColumnHeaderRenderers: EventEmitter<{}>;
    afterGetRowHeader: EventEmitter<{}>;
    afterGetRowHeaderRenderers: EventEmitter<{}>;
    afterInit: EventEmitter<{}>;
    afterLoadData: EventEmitter<{}>;
    afterModifyTransformEnd: EventEmitter<{}>;
    afterModifyTransformStart: EventEmitter<{}>;
    afterMomentumScroll: EventEmitter<{}>;
    afterOnCellCornerDblClick: EventEmitter<{}>;
    afterOnCellCornerMouseDown: EventEmitter<{}>;
    afterOnCellMouseDown: EventEmitter<{}>;
    afterOnCellMouseOver: EventEmitter<{}>;
    afterPluginsInitialized: EventEmitter<{}>;
    afterRedo: EventEmitter<{}>;
    afterRemoveCol: EventEmitter<{}>;
    afterRemoveRow: EventEmitter<{}>;
    afterRender: EventEmitter<{}>;
    afterRenderer: EventEmitter<{}>;
    afterRowMove: EventEmitter<{}>;
    afterRowResize: EventEmitter<{}>;
    afterScrollHorizontally: EventEmitter<{}>;
    afterScrollVertically: EventEmitter<{}>;
    afterSelection: EventEmitter<{}>;
    afterSelectionByProp: EventEmitter<{}>;
    afterSelectionEnd: EventEmitter<{}>;
    afterSelectionEndByProp: EventEmitter<{}>;
    afterSetCellMeta: EventEmitter<{}>;
    afterSetDataAtCell: EventEmitter<{}>;
    afterSetDataAtRowProp: EventEmitter<{}>;
    afterTrimRow: EventEmitter<{}>;
    afterUndo: EventEmitter<{}>;
    afterUntrimRow: EventEmitter<{}>;
    afterUpdateSettings: EventEmitter<{}>;
    afterValidate: EventEmitter<{}>;
    afterViewportColumnCalculatorOverride: EventEmitter<{}>;
    afterViewportRowCalculatorOverride: EventEmitter<{}>;
    beforeAddChild: EventEmitter<{}>;
    beforeAutofill: EventEmitter<{}>;
    beforeAutofillInsidePopulate: EventEmitter<{}>;
    beforeCellAlignment: EventEmitter<{}>;
    beforeChange: EventEmitter<{}>;
    beforeChangeRender: EventEmitter<{}>;
    beforeColumnMove: EventEmitter<{}>;
    beforeColumnResize: EventEmitter<{}>;
    beforeColumnSort: EventEmitter<{}>;
    beforeContextMenuSetItems: EventEmitter<{}>;
    beforeCopy: EventEmitter<{}>;
    beforeCreateCol: EventEmitter<{}>;
    beforeCreateRow: EventEmitter<{}>;
    beforeCut: EventEmitter<{}>;
    beforeDetachChild: EventEmitter<{}>;
    beforeDrawBorders: EventEmitter<{}>;
    beforeDropdownMenuSetItems: EventEmitter<{}>;
    beforeFilter: EventEmitter<{}>;
    beforeGetCellMeta: EventEmitter<{}>;
    beforeInit: EventEmitter<{}>;
    beforeInitWalkontable: EventEmitter<{}>;
    beforeKeyDown: EventEmitter<{}>;
    beforeOnCellMouseDown: EventEmitter<{}>;
    beforeOnCellMouseOut: EventEmitter<{}>;
    beforeOnCellMouseOver: EventEmitter<{}>;
    beforePaste: EventEmitter<{}>;
    beforeRedo: EventEmitter<{}>;
    beforeRemoveCol: EventEmitter<{}>;
    beforeRemoveRow: EventEmitter<{}>;
    beforeRender: EventEmitter<{}>;
    beforeRenderer: EventEmitter<{}>;
    beforeRowMove: EventEmitter<{}>;
    beforeRowResize: EventEmitter<{}>;
    beforeSetRangeEnd: EventEmitter<{}>;
    beforeSetRangeStart: EventEmitter<{}>;
    beforeStretchingColumnWidth: EventEmitter<{}>;
    beforeTouchScroll: EventEmitter<{}>;
    beforeUndo: EventEmitter<{}>;
    beforeValidate: EventEmitter<{}>;
    beforeValueRender: EventEmitter<{}>;
    construct: EventEmitter<{}>;
    hiddenColumn: EventEmitter<{}>;
    hiddenRow: EventEmitter<{}>;
    init: EventEmitter<{}>;
    manualRowHeights: EventEmitter<{}>;
    modifyAutofillRange: EventEmitter<{}>;
    modifyCol: EventEmitter<{}>;
    modifyColHeader: EventEmitter<{}>;
    modifyColumnHeaderHeight: EventEmitter<{}>;
    modifyColWidth: EventEmitter<{}>;
    modifyCopyableRange: EventEmitter<{}>;
    modifyData: EventEmitter<{}>;
    modifyRow: EventEmitter<{}>;
    modifyRowHeader: EventEmitter<{}>;
    modifyRowHeaderWidth: EventEmitter<{}>;
    modifyRowHeight: EventEmitter<{}>;
    modifyRowSourceData: EventEmitter<{}>;
    modifyTransformEnd: EventEmitter<{}>;
    modifyTransformStart: EventEmitter<{}>;
    persistentStateLoad: EventEmitter<{}>;
    persistentStateReset: EventEmitter<{}>;
    persistentStateSave: EventEmitter<{}>;
    skipLengthCache: EventEmitter<{}>;
    unmodifyCol: EventEmitter<{}>;
    unmodifyRow: EventEmitter<{}>;
    private inst;
    private view;
    private pagedDataSubscription;
    private zoneQueue;
    private zoneQueueTimeout;
    constructor(element: ElementRef, ngZone: NgZone);
    getHandsontableInstance(): Handsontable;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private parseAutoComplete(options);
    private checkInputs();
    private getCurrentOptions();
    private queueForRunningInZone(fn);
}
