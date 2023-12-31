/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * [[include:modules/toolbar/collection/README.md]]
 * @packageDocumentation
 * @module modules/toolbar/collection
 */

import type { IToolbarButton, IToolbarCollection, IUIButton, Nullable, IControlTypeStrong, IViewBased, ButtonsGroups, IViewWithToolbar, IBound } from "../../../types";
import { UIList } from "../../../core/ui";
export declare class ToolbarCollection<T extends IViewWithToolbar = IViewWithToolbar> extends UIList<T> implements IToolbarCollection {
    /** @override */
    className(): string;
    private readonly __listenEvents;
    /**
     * First button in list
     */
    get firstButton(): Nullable<IToolbarButton>;
    protected makeButton(control: IControlTypeStrong, target?: Nullable<HTMLElement>): IUIButton;
    /**
     * Button should be active
     */
    shouldBeActive(button: IToolbarButton): boolean | undefined;
    /**
     * Button should be disabled
     */
    shouldBeDisabled(button: IToolbarButton): boolean | undefined;
    /**
     * Returns current target for button
     */
    getTarget(button: IToolbarButton): Node | null;
    private __immediateUpdate;
    update: import("../../../types").CallbackFunction<any>;
    /**
     * Set direction
     */
    setDirection(direction: 'rtl' | 'ltr'): void;
    private __tooltip;
    constructor(jodit: IViewBased);
    private __initEvents;
    hide(): void;
    show(): void;
    showInline(bound?: IBound): void;
    /** @override **/
    build(items: ButtonsGroups, target?: Nullable<HTMLElement>): this;
    /** @override **/
    destruct(): void;
}
