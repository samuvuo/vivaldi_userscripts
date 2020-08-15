// ==UserScript==
// @name         No black focus ring
// @namespace    userscript.for.vivaldi
// @description  Do not show black focus ring (3px wide solid black outline)
// @include      http*
// @version      1.0
// ==/UserScript==
"use strict";

function makeStyle(){
    const style = document.createElement('style');
    style.innerHTML = `
    button:focus, button:focus:after { outline: none !important; }
    a:focus, a:focus:after, a:visited:focus { outline: none !important; }
    :focus, :focus-within, :focus-visible, :focus:not(:focus-visible) { outline: none !important; }
    `;
    document.body.appendChild(style);
}

makeStyle();
