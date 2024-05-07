"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.1_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.1_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FocusGuards: () => (/* binding */ $3db38b7d1fb3fe6a$export$ac5b58043b79449b),\n/* harmony export */   Root: () => (/* binding */ $3db38b7d1fb3fe6a$export$be92b6f5f03c0fe9),\n/* harmony export */   useFocusGuards: () => (/* binding */ $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\n/** Number of components which have requested interest to have focus guards */ let $3db38b7d1fb3fe6a$var$count = 0;\nfunction $3db38b7d1fb3fe6a$export$ac5b58043b79449b(props) {\n    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();\n    return props.children;\n}\n/**\n * Injects a pair of focus guards at the edges of the whole DOM tree\n * to ensure `focusin` & `focusout` events can be caught consistently.\n */ function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        var _edgeGuards$, _edgeGuards$2;\n        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');\n        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());\n        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());\n        $3db38b7d1fb3fe6a$var$count++;\n        return ()=>{\n            if ($3db38b7d1fb3fe6a$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()\n            );\n            $3db38b7d1fb3fe6a$var$count--;\n        };\n    }, []);\n}\nfunction $3db38b7d1fb3fe6a$var$createFocusGuard() {\n    const element = document.createElement('span');\n    element.setAttribute('data-radix-focus-guard', '');\n    element.tabIndex = 0;\n    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';\n    return element;\n}\nconst $3db38b7d1fb3fe6a$export$be92b6f5f03c0fe9 = $3db38b7d1fb3fe6a$export$ac5b58043b79449b;\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWZvY3VzLWd1YXJkc0AxLjAuMV9AdHlwZXMrcmVhY3RAMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWZvY3VzLWd1YXJkcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9EOzs7QUFHcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZLGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7Ozs7O0FBS2tMO0FBQ2xMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1mb2N1cy1ndWFyZHNAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1mb2N1cy1ndWFyZHMvZGlzdC9pbmRleC5tanM/NTA5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCBhcyAkMXdFcnokdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuXG4vKiogTnVtYmVyIG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSByZXF1ZXN0ZWQgaW50ZXJlc3QgdG8gaGF2ZSBmb2N1cyBndWFyZHMgKi8gbGV0ICQzZGIzOGI3ZDFmYjNmZTZhJHZhciRjb3VudCA9IDA7XG5mdW5jdGlvbiAkM2RiMzhiN2QxZmIzZmU2YSRleHBvcnQkYWM1YjU4MDQzYjc5NDQ5Yihwcm9wcykge1xuICAgICQzZGIzOGI3ZDFmYjNmZTZhJGV4cG9ydCRiN2VjZTI0YTIyYWVkYThjKCk7XG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuLyoqXG4gKiBJbmplY3RzIGEgcGFpciBvZiBmb2N1cyBndWFyZHMgYXQgdGhlIGVkZ2VzIG9mIHRoZSB3aG9sZSBET00gdHJlZVxuICogdG8gZW5zdXJlIGBmb2N1c2luYCAmIGBmb2N1c291dGAgZXZlbnRzIGNhbiBiZSBjYXVnaHQgY29uc2lzdGVudGx5LlxuICovIGZ1bmN0aW9uICQzZGIzOGI3ZDFmYjNmZTZhJGV4cG9ydCRiN2VjZTI0YTIyYWVkYThjKCkge1xuICAgICQxd0VyeiR1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgdmFyIF9lZGdlR3VhcmRzJCwgX2VkZ2VHdWFyZHMkMjtcbiAgICAgICAgY29uc3QgZWRnZUd1YXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJhZGl4LWZvY3VzLWd1YXJkXScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIChfZWRnZUd1YXJkcyQgPSBlZGdlR3VhcmRzWzBdKSAhPT0gbnVsbCAmJiBfZWRnZUd1YXJkcyQgIT09IHZvaWQgMCA/IF9lZGdlR3VhcmRzJCA6ICQzZGIzOGI3ZDFmYjNmZTZhJHZhciRjcmVhdGVGb2N1c0d1YXJkKCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgKF9lZGdlR3VhcmRzJDIgPSBlZGdlR3VhcmRzWzFdKSAhPT0gbnVsbCAmJiBfZWRnZUd1YXJkcyQyICE9PSB2b2lkIDAgPyBfZWRnZUd1YXJkcyQyIDogJDNkYjM4YjdkMWZiM2ZlNmEkdmFyJGNyZWF0ZUZvY3VzR3VhcmQoKSk7XG4gICAgICAgICQzZGIzOGI3ZDFmYjNmZTZhJHZhciRjb3VudCsrO1xuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIGlmICgkM2RiMzhiN2QxZmIzZmU2YSR2YXIkY291bnQgPT09IDEpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJhZGl4LWZvY3VzLWd1YXJkXScpLmZvckVhY2goKG5vZGUpPT5ub2RlLnJlbW92ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJDNkYjM4YjdkMWZiM2ZlNmEkdmFyJGNvdW50LS07XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xufVxuZnVuY3Rpb24gJDNkYjM4YjdkMWZiM2ZlNmEkdmFyJGNyZWF0ZUZvY3VzR3VhcmQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yYWRpeC1mb2N1cy1ndWFyZCcsICcnKTtcbiAgICBlbGVtZW50LnRhYkluZGV4ID0gMDtcbiAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSAnb3V0bGluZTogbm9uZTsgb3BhY2l0eTogMDsgcG9zaXRpb246IGZpeGVkOyBwb2ludGVyLWV2ZW50czogbm9uZSc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCAkM2RiMzhiN2QxZmIzZmU2YSRleHBvcnQkYmU5MmI2ZjVmMDNjMGZlOSA9ICQzZGIzOGI3ZDFmYjNmZTZhJGV4cG9ydCRhYzViNTgwNDNiNzk0NDliO1xuXG5cblxuXG5leHBvcnQgeyQzZGIzOGI3ZDFmYjNmZTZhJGV4cG9ydCRhYzViNTgwNDNiNzk0NDliIGFzIEZvY3VzR3VhcmRzLCAkM2RiMzhiN2QxZmIzZmU2YSRleHBvcnQkYmU5MmI2ZjVmMDNjMGZlOSBhcyBSb290LCAkM2RiMzhiN2QxZmIzZmU2YSRleHBvcnQkYjdlY2UyNGEyMmFlZGE4YyBhcyB1c2VGb2N1c0d1YXJkc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.1_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs\n");

/***/ })

};
;