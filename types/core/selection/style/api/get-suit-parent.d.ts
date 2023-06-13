/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import type { Nullable, ICommitStyle } from "../../../../types";
/**
 * Checks if the parent of an element is suitable for applying styles, if applicable, then returns the parent *
 *
 * @param style - styles to be applied
 * @param node - checked item
 * @param root - editor root
 * @private
 */
export declare function getSuitParent(style: ICommitStyle, node: Node, root: Node): Nullable<HTMLElement>;
