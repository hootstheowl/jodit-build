/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:plugins/paste-storage/README.md]]
 * @packageDocumentation
 * @module plugins/paste-storage
 */

import { Plugin } from "../../core/plugin/plugin";
/**
 * Show dialog choose content to paste
 */
export declare class pasteStorage extends Plugin {
    private currentIndex;
    private list;
    private container;
    private listBox;
    private previewBox;
    private dialog;
    private paste;
    private onKeyDown;
    private selectIndex;
    private showDialog;
    private createDialog;
    afterInit(): void;
    beforeDestruct(): void;
}
