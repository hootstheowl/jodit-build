/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { isAtom } from "./extend.js";
import { isArray } from "../checker/is-array.js";
import { isPlainObject } from "../checker/is-plain-object.js";
import { isString } from "../checker/is-string.js";
import { isVoid } from "../checker/is-void.js";
import { Config } from "../../../config.js";
import { keys } from "./utils.js";
/**
 * @example
 * ```js
 * const defaultConfig = {
 *   a: {
 *     b: {
 *       c: 2
 *     },
 *     e: 5
 *   },
 *   d: {
 *     g: 7
 *   }
 * };
 *
 * const options = ConfigProto({a: {
 *   b: {
 *     c: 1
 *   }
 * }}, defaultConfig);
 *
 * console.log(options.a.b.c); // 1
 * console.log(options.a.e); // 5
 * console.log(options.d.g); // 7
 *
 * defaultConfig.d.g  = 8;
 * console.log(options.d.g); // 8
 *
 * ```
 */
export function ConfigProto(options, proto, deep = 0) {
    // Already prototyped object should not be prototyped again
    if (Object.getPrototypeOf(options) !== Object.prototype) {
        return options;
    }
    const def = Config.defaultOptions;
    if (isString(options.preset)) {
        if (def.presets[options.preset] !== undefined) {
            const preset = def.presets[options.preset];
            Object.keys(preset).forEach(subKey => {
                if (isVoid(options[subKey])) {
                    options[subKey] = preset[subKey];
                }
            });
        }
        delete options.preset;
    }
    const newOpt = {};
    Object.keys(options).forEach(key => {
        const opt = options[key], protoKey = proto ? proto[key] : null;
        if (isPlainObject(opt) && isPlainObject(protoKey) && !isAtom(opt)) {
            newOpt[key] = ConfigProto(opt, protoKey, deep + 1);
            return;
        }
        // On the first level all array are atomic
        if (deep !== 0 && isArray(opt) && !isAtom(opt) && isArray(protoKey)) {
            newOpt[key] = [...opt, ...protoKey.slice(opt.length)];
            return;
        }
        newOpt[key] = opt;
    });
    Object.setPrototypeOf(newOpt, proto);
    return newOpt;
}
export function ConfigFlatten(obj) {
    return keys(obj, false).reduce((app, key) => {
        app[key] = obj[key];
        return app;
    }, {});
}