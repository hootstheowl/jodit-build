/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2023 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
/**
 * @module plugins/paste
 */
import type { IUIOption } from "../../types";
declare module 'jodit/config' {
    interface Config {
        /**
         * Ask before paste HTML in WYSIWYG mode
         */
        askBeforePasteHTML: boolean;
        /**
         * When the user inserts a piece of HTML, the plugin will ask - How to insert it.
         * If after that user insert the same fragment again, the previous option will be used without extra question.
         */
        memorizeChoiceWhenPasteFragment: boolean;
        /**
         * Handle pasted text - similar to HTML
         */
        processPasteHTML: boolean;
        /**
         * Inserts HTML line breaks before all newlines in a string
         */
        nl2brInPlainText: boolean;
        /**
         * Options when inserting HTML string
         */
        pasteHTMLActionList: IUIOption[];
    }
}
