/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:plugins/sticky/README.md]]
 * @packageDocumentation
 * @module plugins/sticky
 */

import type { IJodit } from "../../types";
import { Plugin } from "../../core/plugin/plugin";
import "./config";
export declare class sticky extends Plugin {
    private isToolbarSticked;
    private dummyBox?;
    private createDummy;
    /**
     * Add sticky
     */
    addSticky: (toolbar: HTMLElement) => void;
    /**
     * Remove sticky behaviour
     */
    removeSticky: (toolbar: HTMLElement) => void;
    afterInit(jodit: IJodit): void;
    /**
     * Scroll handler
     */
    private onScroll;
    /**
     * Is mobile device
     */
    private isMobile;
    /** @override */
    beforeDestruct(jodit: IJodit): void;
}
