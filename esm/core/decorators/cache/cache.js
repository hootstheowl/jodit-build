/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { isFunction, isViewObject } from "../../helpers/checker/index.js";
import { error } from "../../helpers/utils/error/error.js";
import { Dom } from "../../dom/dom.js";
import { STATUSES } from "../../component/statuses.js";
export function cache(target, name, descriptor) {
    const getter = descriptor.get;
    if (!getter) {
        throw error('Getter property descriptor expected');
    }
    descriptor.get = function () {
        const value = getter.call(this);
        if (value && value.noCache === true) {
            return value;
        }
        Object.defineProperty(this, name, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: false,
            value
        });
        return value;
    };
}
export function cacheHTML(target, name, descriptor) {
    const fn = descriptor.value;
    if (!isFunction(fn)) {
        throw error('Handler must be a Function');
    }
    let useCache = true;
    const cached = new WeakMap();
    descriptor.value = function (...attrs) {
        if (useCache && cached.has(this.constructor)) {
            return cached.get(this.constructor)?.cloneNode(true);
        }
        const value = fn.apply(this, attrs);
        if (useCache && Dom.isElement(value)) {
            cached.set(this.constructor, value);
        }
        return useCache ? value.cloneNode(true) : value;
    };
    target.hookStatus(STATUSES.ready, (component) => {
        const view = isViewObject(component)
            ? component
            : component.jodit;
        useCache = Boolean(view.options.cache);
    });
}