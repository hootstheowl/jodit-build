/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * @module helpers/checker
 */
import type { IViewBased } from "../../../types";
/**
 * Check if element is instance of View
 */
export declare function isViewObject(jodit: unknown): jodit is IViewBased;
