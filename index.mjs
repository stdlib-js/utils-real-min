// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-smallest-normal@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";var n=t,a=s,l=e,o=r;var m=function(t){switch(t){case"float64":return o;case"float32":return l;case"float16":return a;default:throw new TypeError(n("invalid argument. Must provide a recognized type. Value: `%s`.",t))}};export{m as default};
//# sourceMappingURL=index.mjs.map
