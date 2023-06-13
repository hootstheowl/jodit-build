/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Dom } from "../../dom/dom.js";
/**
 * @module helpers/utils
 */
export const inView = (elm, root, doc) => {
    let rect = elm.getBoundingClientRect(), el = elm;
    const top = rect.top, height = rect.height;
    do {
        if (el && el.parentNode) {
            el = el.parentNode;
            rect = el.getBoundingClientRect();
            if (!(top <= rect.bottom)) {
                return false;
            }
            // Check if the element is out of view due to a container scrolling
            if (top + height <= rect.top) {
                return false;
            }
        }
    } while (el && el !== root && el.parentNode);
    // Check its within the document viewport
    return (top <= ((doc.documentElement && doc.documentElement.clientHeight) || 0));
};
export function scrollIntoViewIfNeeded(elm, root, doc) {
    if (Dom.isHTMLElement(elm) && !inView(elm, root, doc)) {
        if (root.clientHeight !== root.scrollHeight) {
            root.scrollTop = elm.offsetTop;
        }
        if (!inView(elm, root, doc)) {
            elm.scrollIntoView();
        }
    }
}
