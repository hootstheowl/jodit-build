/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:modules/table/README.md]]
 * @packageDocumentation
 * @module modules/table
 */
import type { ICreate, IJodit } from "../../types";
import { ViewComponent } from "../../core/component";
export declare class Table extends ViewComponent<IJodit> {
    /** @override */
    className(): string;
    private selected;
    private static selectedByTable;
    private recalculateStyles;
    addSelection(td: HTMLTableCellElement): void;
    removeSelection(td: HTMLTableCellElement): void;
    /**
     * Returns array of selected cells
     */
    getAllSelectedCells(): HTMLTableCellElement[];
    static getSelectedCellsByTable(table: HTMLTableElement): HTMLTableCellElement[];
    /** @override **/
    destruct(): any;
    /**
     * Returns rows count in the table
     */
    static getRowsCount(table: HTMLTableElement): number;
    /**
     * Returns columns count in the table
     */
    static getColumnsCount(table: HTMLTableElement): number;
    /**
     * Generate formal table martix columns*rows
     * @param callback - if return false cycle break
     */
    static formalMatrix(table: HTMLTableElement, callback?: (cell: HTMLTableCellElement, row: number, col: number, colSpan: number, rowSpan: number) => false | void): HTMLTableCellElement[][];
    /**
     * Get cell coordinate in formal table (without colspan and rowspan)
     */
    static formalCoordinate(table: HTMLTableElement, cell: HTMLTableCellElement, max?: boolean): number[];
    /**
     * Inserts a new line after row what contains the selected cell
     *
     * @param line - Insert a new line after/before this
     * line contains the selected cell
     * @param after - Insert a new line after line contains the selected cell
     */
    static appendRow(table: HTMLTableElement, line: false | HTMLTableRowElement, after: boolean, create: ICreate): void;
    /**
     * Remove row
     */
    static removeRow(table: HTMLTableElement, rowIndex: number): void;
    /**
     * Insert column before / after all the columns containing the selected cells
     */
    static appendColumn(table: HTMLTableElement, j: number, after: boolean, create: ICreate): void;
    /**
     * Remove column by index
     */
    static removeColumn(table: HTMLTableElement, j: number): void;
    /**
     * Define bound for selected cells
     */
    static getSelectedBound(table: HTMLTableElement, selectedCells: HTMLTableCellElement[]): number[][];
    /**
     * Try recalculate all coluns and rows after change
     */
    static normalizeTable(table: HTMLTableElement): void;
    /**
     * It combines all of the selected cells into one. The contents of the cells will also be combined
     */
    static mergeSelected(table: HTMLTableElement, jodit: IJodit): void;
    /**
     * Divides all selected by `jodit_focused_cell` class table cell in 2 parts vertical. Those division into 2 columns
     */
    static splitHorizontal(table: HTMLTableElement, jodit: IJodit): void;
    /**
     * It splits all the selected cells into 2 parts horizontally. Those. are added new row
     */
    static splitVertical(table: HTMLTableElement, jodit: IJodit): void;
    /**
     * Set column width used delta value
     */
    static setColumnWidthByDelta(table: HTMLTableElement, column: number, delta: number, noUnmark: boolean, marked: HTMLTableCellElement[]): void;
    private static mark;
    private static unmark;
}
