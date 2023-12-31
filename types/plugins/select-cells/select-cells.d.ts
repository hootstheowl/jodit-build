/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * @module plugins/select-cells
 */
import type { IJodit } from "../../types";
import { Plugin } from "../../core/plugin";
import "./config";
export declare class selectCells extends Plugin {
    static requires: string[];
    /**
     * Shortcut for Table module
     */
    private get module();
    protected afterInit(jodit: IJodit): void;
    /**
     * First selected cell
     */
    private selectedCell;
    /**
     * User is selecting cells now
     */
    private isSelectionMode;
    /**
     * Mouse click inside the table
     */
    protected onStartSelection(cell: HTMLTableCellElement): void | false;
    protected onOutsideClick(): void;
    protected onChange(): void;
    /**
     * Mouse move inside the table
     */
    private onMove;
    /**
     * On click in outside - remove selection
     */
    private onRemoveSelection;
    /**
     * Stop selection process
     */
    private onStopSelection;
    /**
     * Remove selection for all cells
     */
    private unselectCells;
    /**
     * Execute custom commands for table
     */
    private onExecCommand;
    /**
     * Add some align after native command
     */
    private onAfterCommand;
    /** @override */
    protected beforeDestruct(jodit: IJodit): void;
}
