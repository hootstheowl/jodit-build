/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * @module selection
 */
import type { HTMLTagNames, IJodit, IStyleOptions, ICommitStyle } from "../../../types";
export declare const WRAP = "wrap";
export declare const UNWRAP = "unwrap";
export declare const CHANGE = "change";
export declare const UNSET = "unset";
export declare const INITIAL = "initial";
export declare const REPLACE = "replace";
export declare const _PREFIX = "commitStyle";
export declare class CommitStyle implements ICommitStyle {
    readonly options: IStyleOptions;
    private __applyMap;
    isApplied(elm: HTMLElement, key: string): boolean;
    setApplied(elm: HTMLElement, key: string): void;
    get elementIsList(): boolean;
    get element(): HTMLTagNames;
    /**
     * New element is block
     */
    get elementIsBlock(): boolean;
    /**
     * The commit applies the tag change
     */
    get isElementCommit(): boolean;
    get defaultTag(): HTMLTagNames;
    get elementIsDefault(): Boolean;
    constructor(options: IStyleOptions);
    apply(jodit: IJodit): void;
}
