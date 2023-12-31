/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * @module helpers/utils
 */
import type { Nullable } from "../../../types";
/**
 * @module helpers/utils
 */
export declare const inView: (elm: HTMLElement, root: HTMLElement, doc: Document) => boolean;
export declare function scrollIntoViewIfNeeded(elm: Nullable<Node>, root: HTMLElement, doc: Document): void;
