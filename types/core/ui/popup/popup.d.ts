/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:core/ui/popup/README.md]]
 * @packageDocumentation
 * @module ui/popup
 */

import type { IBound, IPopup, IUIElement, IViewBased, PopupStrategy } from "../../../types";
import { UIElement } from "../element";
type getBoundFunc = () => IBound;
export declare class Popup extends UIElement implements IPopup {
    readonly smart: boolean;
    /** @override */
    className(): string;
    isOpened: boolean;
    strategy: PopupStrategy;
    viewBound: () => IBound;
    private targetBound;
    private childrenPopups;
    /** @override */
    updateParentElement(target: IUIElement): this;
    /**
     * Set popup content
     */
    setContent(content: IUIElement | HTMLElement | string): this;
    /**
     * Open popup near with some bound
     */
    open(getBound: getBoundFunc, keepPosition?: boolean, parentContainer?: HTMLElement): this;
    private calculateZIndex;
    /**
     * Calculate static bound for point
     */
    protected getKeepBound(getBound: getBoundFunc): getBoundFunc;
    /**
     * Update container position
     */
    updatePosition(): this;
    throttleUpdatePosition(): void;
    /**
     * Calculate start point
     */
    private calculatePosition;
    /**
     * Check if one box is inside second
     */
    private static boxInView;
    /**
     * Close popup
     */
    close(): this;
    /**
     * Close popup if click was in outside
     */
    private closeOnOutsideClick;
    isOwnClick(e: MouseEvent): boolean;
    private addGlobalListeners;
    private removeGlobalListeners;
    /**
     * Set ZIndex
     */
    setZIndex(index: number | string): void;
    constructor(jodit: IViewBased, smart?: boolean);
    /** @override **/
    destruct(): any;
}
export {};
