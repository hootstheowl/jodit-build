/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:plugins/paste/README.md]]
 * @packageDocumentation
 * @module plugins/paste
 */
import type { IJodit, InsertMode } from "../../types";
import { Plugin } from "../../core/plugin/plugin";
import type { PasteEvent } from "./interface";
import "./config";
/**
 * Ask before paste HTML source
 */
export declare class paste extends Plugin {
    private pasteStack;
    /** @override **/
    protected afterInit(jodit: IJodit): void;
    /** @override **/
    protected beforeDestruct(jodit: IJodit): void;
    /**
     * Paste event handler
     */
    private onPaste;
    /**
     * Process before paste
     */
    private customPasteProcess;
    /**
     * Default paster process
     */
    private defaultPasteProcess;
    /**
     * The dialog box was already open
     */
    private _isDialogOpened;
    /**
     * Process usual HTML text fragment
     */
    private processHTML;
    /**
     * Insert HTML by option type
     */
    insertByType(e: PasteEvent, html: string | Node, action: InsertMode): void;
    /**
     * Replace all \\n chars in plain text to br
     */
    private onProcessPasteReplaceNl2Br;
}
