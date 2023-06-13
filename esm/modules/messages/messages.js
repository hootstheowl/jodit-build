/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * [[include:modules/messages/README.md]]
 * @packageDocumentation
 * @module modules/messages
 */
import { UIGroup } from "../../core/ui/group/group.js";
import { component } from "../../core/decorators/component/component.js";
import { UIMessage } from "./message.js";
/**
 * Plugin display pop-up messages in the lower right corner of the editor
 */
export let UIMessages = class UIMessages extends UIGroup {
    className() {
        return 'UIMessages';
    }
    constructor(jodit, __box, options = {
        defaultTimeout: 3000,
        defaultOffset: 5
    }) {
        super(jodit);
        this.__box = __box;
        this.options = options;
        this.__messages = new Set();
    }
    info(text, timeout) {
        this.__message(text, 'info', timeout);
    }
    success(text, timeout) {
        this.__message(text, 'success', timeout);
    }
    error(text, timeout) {
        this.__message(text, 'error', timeout);
    }
    message(text, variant, timeout) {
        this.__message(text, variant, timeout);
    }
    __message(text, variant = 'info', timeout) {
        const key = text + ':' + variant;
        if (this.__messages.has(key)) {
            this.async.updateTimeout(key, timeout || this.options.defaultTimeout);
            return;
        }
        this.__box.appendChild(this.container);
        const msg = new UIMessage(this.j, { text, variant });
        this.append(msg);
        this.__calcOffsets();
        this.__messages.add(key);
        const remove = this.__getRemoveCallback(msg, key);
        this.j.e.on(msg.container, 'pointerdown', remove);
        this.async.setTimeout(remove, {
            label: key,
            timeout: timeout || this.options.defaultTimeout
        });
    }
    __getRemoveCallback(msg, key) {
        const remove = (e) => {
            e && e.preventDefault();
            if (msg.isInDestruct) {
                return;
            }
            this.async.clearTimeout(key);
            this.j.e.off(msg.container, 'pointerdown', remove);
            this.__messages.delete(key);
            msg.setMod('active', false);
            this.async.setTimeout(() => {
                this.remove(msg);
                msg.destruct();
                this.__calcOffsets();
            }, 300);
        };
        return remove;
    }
    __calcOffsets() {
        let height = 5;
        this.elements.forEach(elm => {
            css(elm.container, 'bottom', height + 'px');
            height += elm.container.offsetHeight + this.options.defaultOffset;
        });
    }
};
UIMessages = __decorate([
    component
], UIMessages);