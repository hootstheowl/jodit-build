/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { isFunction, isPlainObject, isString } from "../checker/index.js";
import { CamelCaseToKebabCase } from "../string/kebab-case.js";
/**
 * Alias for `elm.getAttribute` but if set second argument `-{key}`
 * it will also check `data-{key}` attribute
 * if set `value` it is alias for setAttribute with same logic
 */
export function attr(elm, keyOrAttributes, value) {
    if (!elm || !isFunction(elm.getAttribute)) {
        return null;
    }
    if (!isString(keyOrAttributes)) {
        Object.keys(keyOrAttributes).forEach(key => {
            const value = keyOrAttributes[key];
            if (isPlainObject(value) && key === 'style') {
                css(elm, value);
            }
            else {
                if (key === 'className') {
                    key = 'class';
                }
                attr(elm, key, value);
            }
        });
        return null;
    }
    let key = CamelCaseToKebabCase(keyOrAttributes);
    if (/^-/.test(key)) {
        const res = attr(elm, `data${key}`);
        if (res) {
            return res;
        }
        key = key.substr(1);
    }
    if (value !== undefined) {
        if (value == null) {
            elm.hasAttribute(key) && elm.removeAttribute(key);
        }
        else {
            elm.setAttribute(key, value.toString());
            return value.toString();
        }
    }
    return elm.getAttribute(key);
}