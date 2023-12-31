/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:plugins/add-new-line/README.md]]
 * @packageDocumentation
 * @module plugins/add-new-line
 */

import type { IJodit } from "../../types";
import { Plugin } from "../../modules";
import "./config";
/**
 * Create helper for adding new paragraph(Jodit.defaultOptions.enter tag) before iframe, table or image
 */
export declare class addNewLine extends Plugin {
    private line;
    private isMatchedTag;
    private timeout;
    private preview;
    private current;
    private lineInFocus;
    private isShown;
    private show;
    private hideForce;
    protected onLock(isLocked: true): void;
    private hide;
    private canGetFocus;
    protected afterInit(editor: IJodit): void;
    private addEventListeners;
    private onClickLine;
    protected onDblClickEditor(e: MouseEvent): void;
    private onMouseMove;
    /** @override */
    protected beforeDestruct(): void;
}
