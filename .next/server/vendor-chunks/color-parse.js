"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/color-parse";
exports.ids = ["vendor-chunks/color-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/color-parse/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-parse/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ \"(ssr)/./node_modules/color-parse/node_modules/color-name/index.js\");\n/**\n * @module color-parse\n */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n\n/**\n * Base hues\n * http://dev.w3.org/csswg/css-color/#typedef-named-hue\n */\n//FIXME: use external hue detector\nvar baseHues = {\n\tred: 0,\n\torange: 60,\n\tyellow: 120,\n\tgreen: 180,\n\tblue: 240,\n\tpurple: 300\n}\n\n/**\n * Parse color from the string passed\n *\n * @return {Object} A space indicator `space`, an array `values` and `alpha`\n */\nfunction parse(cstr) {\n\tvar m, parts = [], alpha = 1, space\n\n\t//numeric case\n\tif (typeof cstr === 'number') {\n\t\treturn { space: 'rgb', values: [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff], alpha: 1 }\n\t}\n\tif (typeof cstr === 'number') return { space: 'rgb', values: [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff], alpha: 1 }\n\n\tcstr = String(cstr).toLowerCase();\n\n\t//keyword\n\tif (color_name__WEBPACK_IMPORTED_MODULE_0__[\"default\"][cstr]) {\n\t\tparts = color_name__WEBPACK_IMPORTED_MODULE_0__[\"default\"][cstr].slice()\n\t\tspace = 'rgb'\n\t}\n\n\t//reserved words\n\telse if (cstr === 'transparent') {\n\t\talpha = 0\n\t\tspace = 'rgb'\n\t\tparts = [0, 0, 0]\n\t}\n\n\t//hex\n\telse if (cstr[0] === '#') {\n\t\tvar base = cstr.slice(1)\n\t\tvar size = base.length\n\t\tvar isShort = size <= 4\n\t\talpha = 1\n\n\t\tif (isShort) {\n\t\t\tparts = [\n\t\t\t\tparseInt(base[0] + base[0], 16),\n\t\t\t\tparseInt(base[1] + base[1], 16),\n\t\t\t\tparseInt(base[2] + base[2], 16)\n\t\t\t]\n\t\t\tif (size === 4) {\n\t\t\t\talpha = parseInt(base[3] + base[3], 16) / 255\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tparts = [\n\t\t\t\tparseInt(base[0] + base[1], 16),\n\t\t\t\tparseInt(base[2] + base[3], 16),\n\t\t\t\tparseInt(base[4] + base[5], 16)\n\t\t\t]\n\t\t\tif (size === 8) {\n\t\t\t\talpha = parseInt(base[6] + base[7], 16) / 255\n\t\t\t}\n\t\t}\n\n\t\tif (!parts[0]) parts[0] = 0\n\t\tif (!parts[1]) parts[1] = 0\n\t\tif (!parts[2]) parts[2] = 0\n\n\t\tspace = 'rgb'\n\t}\n\n\t// color space\n\telse if (m = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\\s*\\(([^\\)]*)\\)/.exec(cstr)) {\n\t\tvar name = m[1]\n\t\tspace = name.replace(/a$/, '')\n\t\tvar dims = space === 'cmyk' ? 4 : space === 'gray' ? 1 : 3\n\t\tparts = m[2].trim().split(/\\s*[,\\/]\\s*|\\s+/)\n\n\t\t// color(srgb-linear x x x) -> srgb-linear(x x x)\n\t\tif (space === 'color') space = parts.shift()\n\n\t\tparts = parts.map(function (x, i) {\n\t\t\t//<percentage>\n\t\t\tif (x[x.length - 1] === '%') {\n\t\t\t\tx = parseFloat(x) / 100\n\t\t\t\t// alpha -> 0..1\n\t\t\t\tif (i === 3) return x\n\t\t\t\t// rgb -> 0..255\n\t\t\t\tif (space === 'rgb') return x * 255\n\t\t\t\t// hsl, hwb H -> 0..100\n\t\t\t\tif (space[0] === 'h') return x * 100\n\t\t\t\t// lch, lab L -> 0..100\n\t\t\t\tif (space[0] === 'l' && !i) return x * 100\n\t\t\t\t// lab A B -> -125..125\n\t\t\t\tif (space === 'lab') return x * 125\n\t\t\t\t// lch C -> 0..150, H -> 0..360\n\t\t\t\tif (space === 'lch') return i < 2 ? x * 150 : x * 360\n\t\t\t\t// oklch/oklab L -> 0..1\n\t\t\t\tif (space[0] === 'o' && !i) return x\n\t\t\t\t// oklab A B -> -0.4..0.4\n\t\t\t\tif (space === 'oklab') return x * 0.4\n\t\t\t\t// oklch C -> 0..0.4, H -> 0..360\n\t\t\t\tif (space === 'oklch') return i < 2 ? x * 0.4 : x * 360\n\t\t\t\t// color(xxx) -> 0..1\n\t\t\t\treturn x\n\t\t\t}\n\n\t\t\t//hue\n\t\t\tif (space[i] === 'h' || (i === 2 && space[space.length - 1] === 'h')) {\n\t\t\t\t//<base-hue>\n\t\t\t\tif (baseHues[x] !== undefined) return baseHues[x]\n\t\t\t\t//<deg>\n\t\t\t\tif (x.endsWith('deg')) return parseFloat(x)\n\t\t\t\t//<turn>\n\t\t\t\tif (x.endsWith('turn')) return parseFloat(x) * 360\n\t\t\t\tif (x.endsWith('grad')) return parseFloat(x) * 360 / 400\n\t\t\t\tif (x.endsWith('rad')) return parseFloat(x) * 180 / Math.PI\n\t\t\t}\n\t\t\tif (x === 'none') return 0\n\t\t\treturn parseFloat(x)\n\t\t});\n\n\t\talpha = parts.length > dims ? parts.pop() : 1\n\t}\n\n\t//named channels case\n\telse if (/[0-9](?:\\s|\\/|,)/.test(cstr)) {\n\t\tparts = cstr.match(/([0-9]+)/g).map(function (value) {\n\t\t\treturn parseFloat(value)\n\t\t})\n\n\t\tspace = cstr.match(/([a-z])/ig)?.join('')?.toLowerCase() || 'rgb'\n\t}\n\n\treturn {\n\t\tspace,\n\t\tvalues: parts,\n\t\talpha\n\t}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29sb3ItcGFyc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDOEI7O0FBRTlCLGlFQUFlLEtBQUs7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLHdDQUF3Qzs7QUFFeEM7O0FBRUE7QUFDQSxLQUFLLGtEQUFLO0FBQ1YsVUFBVSxrREFBSztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1wYXJzZS9pbmRleC5qcz82OTQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZSBjb2xvci1wYXJzZVxuICovXG5pbXBvcnQgbmFtZXMgZnJvbSAnY29sb3ItbmFtZSdcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VcblxuLyoqXG4gKiBCYXNlIGh1ZXNcbiAqIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jdHlwZWRlZi1uYW1lZC1odWVcbiAqL1xuLy9GSVhNRTogdXNlIGV4dGVybmFsIGh1ZSBkZXRlY3RvclxudmFyIGJhc2VIdWVzID0ge1xuXHRyZWQ6IDAsXG5cdG9yYW5nZTogNjAsXG5cdHllbGxvdzogMTIwLFxuXHRncmVlbjogMTgwLFxuXHRibHVlOiAyNDAsXG5cdHB1cnBsZTogMzAwXG59XG5cbi8qKlxuICogUGFyc2UgY29sb3IgZnJvbSB0aGUgc3RyaW5nIHBhc3NlZFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQSBzcGFjZSBpbmRpY2F0b3IgYHNwYWNlYCwgYW4gYXJyYXkgYHZhbHVlc2AgYW5kIGBhbHBoYWBcbiAqL1xuZnVuY3Rpb24gcGFyc2UoY3N0cikge1xuXHR2YXIgbSwgcGFydHMgPSBbXSwgYWxwaGEgPSAxLCBzcGFjZVxuXG5cdC8vbnVtZXJpYyBjYXNlXG5cdGlmICh0eXBlb2YgY3N0ciA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4geyBzcGFjZTogJ3JnYicsIHZhbHVlczogW2NzdHIgPj4+IDE2LCAoY3N0ciAmIDB4MDBmZjAwKSA+Pj4gOCwgY3N0ciAmIDB4MDAwMGZmXSwgYWxwaGE6IDEgfVxuXHR9XG5cdGlmICh0eXBlb2YgY3N0ciA9PT0gJ251bWJlcicpIHJldHVybiB7IHNwYWNlOiAncmdiJywgdmFsdWVzOiBbY3N0ciA+Pj4gMTYsIChjc3RyICYgMHgwMGZmMDApID4+PiA4LCBjc3RyICYgMHgwMDAwZmZdLCBhbHBoYTogMSB9XG5cblx0Y3N0ciA9IFN0cmluZyhjc3RyKS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8va2V5d29yZFxuXHRpZiAobmFtZXNbY3N0cl0pIHtcblx0XHRwYXJ0cyA9IG5hbWVzW2NzdHJdLnNsaWNlKClcblx0XHRzcGFjZSA9ICdyZ2InXG5cdH1cblxuXHQvL3Jlc2VydmVkIHdvcmRzXG5cdGVsc2UgaWYgKGNzdHIgPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRhbHBoYSA9IDBcblx0XHRzcGFjZSA9ICdyZ2InXG5cdFx0cGFydHMgPSBbMCwgMCwgMF1cblx0fVxuXG5cdC8vaGV4XG5cdGVsc2UgaWYgKGNzdHJbMF0gPT09ICcjJykge1xuXHRcdHZhciBiYXNlID0gY3N0ci5zbGljZSgxKVxuXHRcdHZhciBzaXplID0gYmFzZS5sZW5ndGhcblx0XHR2YXIgaXNTaG9ydCA9IHNpemUgPD0gNFxuXHRcdGFscGhhID0gMVxuXG5cdFx0aWYgKGlzU2hvcnQpIHtcblx0XHRcdHBhcnRzID0gW1xuXHRcdFx0XHRwYXJzZUludChiYXNlWzBdICsgYmFzZVswXSwgMTYpLFxuXHRcdFx0XHRwYXJzZUludChiYXNlWzFdICsgYmFzZVsxXSwgMTYpLFxuXHRcdFx0XHRwYXJzZUludChiYXNlWzJdICsgYmFzZVsyXSwgMTYpXG5cdFx0XHRdXG5cdFx0XHRpZiAoc2l6ZSA9PT0gNCkge1xuXHRcdFx0XHRhbHBoYSA9IHBhcnNlSW50KGJhc2VbM10gKyBiYXNlWzNdLCAxNikgLyAyNTVcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwYXJ0cyA9IFtcblx0XHRcdFx0cGFyc2VJbnQoYmFzZVswXSArIGJhc2VbMV0sIDE2KSxcblx0XHRcdFx0cGFyc2VJbnQoYmFzZVsyXSArIGJhc2VbM10sIDE2KSxcblx0XHRcdFx0cGFyc2VJbnQoYmFzZVs0XSArIGJhc2VbNV0sIDE2KVxuXHRcdFx0XVxuXHRcdFx0aWYgKHNpemUgPT09IDgpIHtcblx0XHRcdFx0YWxwaGEgPSBwYXJzZUludChiYXNlWzZdICsgYmFzZVs3XSwgMTYpIC8gMjU1XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCFwYXJ0c1swXSkgcGFydHNbMF0gPSAwXG5cdFx0aWYgKCFwYXJ0c1sxXSkgcGFydHNbMV0gPSAwXG5cdFx0aWYgKCFwYXJ0c1syXSkgcGFydHNbMl0gPSAwXG5cblx0XHRzcGFjZSA9ICdyZ2InXG5cdH1cblxuXHQvLyBjb2xvciBzcGFjZVxuXHRlbHNlIGlmIChtID0gL14oKD86cmdiYT98aHNbbHZiXWE/fGh3YmE/fGNteWs/fHh5W3p5XXxncmF5fGxhYnxsY2h1P3Y/fFtseV11dnxsbXN8b2tsY2h8b2tsYWJ8Y29sb3IpKVxccypcXCgoW15cXCldKilcXCkvLmV4ZWMoY3N0cikpIHtcblx0XHR2YXIgbmFtZSA9IG1bMV1cblx0XHRzcGFjZSA9IG5hbWUucmVwbGFjZSgvYSQvLCAnJylcblx0XHR2YXIgZGltcyA9IHNwYWNlID09PSAnY215aycgPyA0IDogc3BhY2UgPT09ICdncmF5JyA/IDEgOiAzXG5cdFx0cGFydHMgPSBtWzJdLnRyaW0oKS5zcGxpdCgvXFxzKlssXFwvXVxccyp8XFxzKy8pXG5cblx0XHQvLyBjb2xvcihzcmdiLWxpbmVhciB4IHggeCkgLT4gc3JnYi1saW5lYXIoeCB4IHgpXG5cdFx0aWYgKHNwYWNlID09PSAnY29sb3InKSBzcGFjZSA9IHBhcnRzLnNoaWZ0KClcblxuXHRcdHBhcnRzID0gcGFydHMubWFwKGZ1bmN0aW9uICh4LCBpKSB7XG5cdFx0XHQvLzxwZXJjZW50YWdlPlxuXHRcdFx0aWYgKHhbeC5sZW5ndGggLSAxXSA9PT0gJyUnKSB7XG5cdFx0XHRcdHggPSBwYXJzZUZsb2F0KHgpIC8gMTAwXG5cdFx0XHRcdC8vIGFscGhhIC0+IDAuLjFcblx0XHRcdFx0aWYgKGkgPT09IDMpIHJldHVybiB4XG5cdFx0XHRcdC8vIHJnYiAtPiAwLi4yNTVcblx0XHRcdFx0aWYgKHNwYWNlID09PSAncmdiJykgcmV0dXJuIHggKiAyNTVcblx0XHRcdFx0Ly8gaHNsLCBod2IgSCAtPiAwLi4xMDBcblx0XHRcdFx0aWYgKHNwYWNlWzBdID09PSAnaCcpIHJldHVybiB4ICogMTAwXG5cdFx0XHRcdC8vIGxjaCwgbGFiIEwgLT4gMC4uMTAwXG5cdFx0XHRcdGlmIChzcGFjZVswXSA9PT0gJ2wnICYmICFpKSByZXR1cm4geCAqIDEwMFxuXHRcdFx0XHQvLyBsYWIgQSBCIC0+IC0xMjUuLjEyNVxuXHRcdFx0XHRpZiAoc3BhY2UgPT09ICdsYWInKSByZXR1cm4geCAqIDEyNVxuXHRcdFx0XHQvLyBsY2ggQyAtPiAwLi4xNTAsIEggLT4gMC4uMzYwXG5cdFx0XHRcdGlmIChzcGFjZSA9PT0gJ2xjaCcpIHJldHVybiBpIDwgMiA/IHggKiAxNTAgOiB4ICogMzYwXG5cdFx0XHRcdC8vIG9rbGNoL29rbGFiIEwgLT4gMC4uMVxuXHRcdFx0XHRpZiAoc3BhY2VbMF0gPT09ICdvJyAmJiAhaSkgcmV0dXJuIHhcblx0XHRcdFx0Ly8gb2tsYWIgQSBCIC0+IC0wLjQuLjAuNFxuXHRcdFx0XHRpZiAoc3BhY2UgPT09ICdva2xhYicpIHJldHVybiB4ICogMC40XG5cdFx0XHRcdC8vIG9rbGNoIEMgLT4gMC4uMC40LCBIIC0+IDAuLjM2MFxuXHRcdFx0XHRpZiAoc3BhY2UgPT09ICdva2xjaCcpIHJldHVybiBpIDwgMiA/IHggKiAwLjQgOiB4ICogMzYwXG5cdFx0XHRcdC8vIGNvbG9yKHh4eCkgLT4gMC4uMVxuXHRcdFx0XHRyZXR1cm4geFxuXHRcdFx0fVxuXG5cdFx0XHQvL2h1ZVxuXHRcdFx0aWYgKHNwYWNlW2ldID09PSAnaCcgfHwgKGkgPT09IDIgJiYgc3BhY2Vbc3BhY2UubGVuZ3RoIC0gMV0gPT09ICdoJykpIHtcblx0XHRcdFx0Ly88YmFzZS1odWU+XG5cdFx0XHRcdGlmIChiYXNlSHVlc1t4XSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gYmFzZUh1ZXNbeF1cblx0XHRcdFx0Ly88ZGVnPlxuXHRcdFx0XHRpZiAoeC5lbmRzV2l0aCgnZGVnJykpIHJldHVybiBwYXJzZUZsb2F0KHgpXG5cdFx0XHRcdC8vPHR1cm4+XG5cdFx0XHRcdGlmICh4LmVuZHNXaXRoKCd0dXJuJykpIHJldHVybiBwYXJzZUZsb2F0KHgpICogMzYwXG5cdFx0XHRcdGlmICh4LmVuZHNXaXRoKCdncmFkJykpIHJldHVybiBwYXJzZUZsb2F0KHgpICogMzYwIC8gNDAwXG5cdFx0XHRcdGlmICh4LmVuZHNXaXRoKCdyYWQnKSkgcmV0dXJuIHBhcnNlRmxvYXQoeCkgKiAxODAgLyBNYXRoLlBJXG5cdFx0XHR9XG5cdFx0XHRpZiAoeCA9PT0gJ25vbmUnKSByZXR1cm4gMFxuXHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoeClcblx0XHR9KTtcblxuXHRcdGFscGhhID0gcGFydHMubGVuZ3RoID4gZGltcyA/IHBhcnRzLnBvcCgpIDogMVxuXHR9XG5cblx0Ly9uYW1lZCBjaGFubmVscyBjYXNlXG5cdGVsc2UgaWYgKC9bMC05XSg/Olxcc3xcXC98LCkvLnRlc3QoY3N0cikpIHtcblx0XHRwYXJ0cyA9IGNzdHIubWF0Y2goLyhbMC05XSspL2cpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdH0pXG5cblx0XHRzcGFjZSA9IGNzdHIubWF0Y2goLyhbYS16XSkvaWcpPy5qb2luKCcnKT8udG9Mb3dlckNhc2UoKSB8fCAncmdiJ1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzcGFjZSxcblx0XHR2YWx1ZXM6IHBhcnRzLFxuXHRcdGFscGhhXG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/color-parse/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/color-parse/node_modules/color-name/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/color-parse/node_modules/color-name/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\taliceblue: [240, 248, 255],\n\tantiquewhite: [250, 235, 215],\n\taqua: [0, 255, 255],\n\taquamarine: [127, 255, 212],\n\tazure: [240, 255, 255],\n\tbeige: [245, 245, 220],\n\tbisque: [255, 228, 196],\n\tblack: [0, 0, 0],\n\tblanchedalmond: [255, 235, 205],\n\tblue: [0, 0, 255],\n\tblueviolet: [138, 43, 226],\n\tbrown: [165, 42, 42],\n\tburlywood: [222, 184, 135],\n\tcadetblue: [95, 158, 160],\n\tchartreuse: [127, 255, 0],\n\tchocolate: [210, 105, 30],\n\tcoral: [255, 127, 80],\n\tcornflowerblue: [100, 149, 237],\n\tcornsilk: [255, 248, 220],\n\tcrimson: [220, 20, 60],\n\tcyan: [0, 255, 255],\n\tdarkblue: [0, 0, 139],\n\tdarkcyan: [0, 139, 139],\n\tdarkgoldenrod: [184, 134, 11],\n\tdarkgray: [169, 169, 169],\n\tdarkgreen: [0, 100, 0],\n\tdarkgrey: [169, 169, 169],\n\tdarkkhaki: [189, 183, 107],\n\tdarkmagenta: [139, 0, 139],\n\tdarkolivegreen: [85, 107, 47],\n\tdarkorange: [255, 140, 0],\n\tdarkorchid: [153, 50, 204],\n\tdarkred: [139, 0, 0],\n\tdarksalmon: [233, 150, 122],\n\tdarkseagreen: [143, 188, 143],\n\tdarkslateblue: [72, 61, 139],\n\tdarkslategray: [47, 79, 79],\n\tdarkslategrey: [47, 79, 79],\n\tdarkturquoise: [0, 206, 209],\n\tdarkviolet: [148, 0, 211],\n\tdeeppink: [255, 20, 147],\n\tdeepskyblue: [0, 191, 255],\n\tdimgray: [105, 105, 105],\n\tdimgrey: [105, 105, 105],\n\tdodgerblue: [30, 144, 255],\n\tfirebrick: [178, 34, 34],\n\tfloralwhite: [255, 250, 240],\n\tforestgreen: [34, 139, 34],\n\tfuchsia: [255, 0, 255],\n\tgainsboro: [220, 220, 220],\n\tghostwhite: [248, 248, 255],\n\tgold: [255, 215, 0],\n\tgoldenrod: [218, 165, 32],\n\tgray: [128, 128, 128],\n\tgreen: [0, 128, 0],\n\tgreenyellow: [173, 255, 47],\n\tgrey: [128, 128, 128],\n\thoneydew: [240, 255, 240],\n\thotpink: [255, 105, 180],\n\tindianred: [205, 92, 92],\n\tindigo: [75, 0, 130],\n\tivory: [255, 255, 240],\n\tkhaki: [240, 230, 140],\n\tlavender: [230, 230, 250],\n\tlavenderblush: [255, 240, 245],\n\tlawngreen: [124, 252, 0],\n\tlemonchiffon: [255, 250, 205],\n\tlightblue: [173, 216, 230],\n\tlightcoral: [240, 128, 128],\n\tlightcyan: [224, 255, 255],\n\tlightgoldenrodyellow: [250, 250, 210],\n\tlightgray: [211, 211, 211],\n\tlightgreen: [144, 238, 144],\n\tlightgrey: [211, 211, 211],\n\tlightpink: [255, 182, 193],\n\tlightsalmon: [255, 160, 122],\n\tlightseagreen: [32, 178, 170],\n\tlightskyblue: [135, 206, 250],\n\tlightslategray: [119, 136, 153],\n\tlightslategrey: [119, 136, 153],\n\tlightsteelblue: [176, 196, 222],\n\tlightyellow: [255, 255, 224],\n\tlime: [0, 255, 0],\n\tlimegreen: [50, 205, 50],\n\tlinen: [250, 240, 230],\n\tmagenta: [255, 0, 255],\n\tmaroon: [128, 0, 0],\n\tmediumaquamarine: [102, 205, 170],\n\tmediumblue: [0, 0, 205],\n\tmediumorchid: [186, 85, 211],\n\tmediumpurple: [147, 112, 219],\n\tmediumseagreen: [60, 179, 113],\n\tmediumslateblue: [123, 104, 238],\n\tmediumspringgreen: [0, 250, 154],\n\tmediumturquoise: [72, 209, 204],\n\tmediumvioletred: [199, 21, 133],\n\tmidnightblue: [25, 25, 112],\n\tmintcream: [245, 255, 250],\n\tmistyrose: [255, 228, 225],\n\tmoccasin: [255, 228, 181],\n\tnavajowhite: [255, 222, 173],\n\tnavy: [0, 0, 128],\n\toldlace: [253, 245, 230],\n\tolive: [128, 128, 0],\n\tolivedrab: [107, 142, 35],\n\torange: [255, 165, 0],\n\torangered: [255, 69, 0],\n\torchid: [218, 112, 214],\n\tpalegoldenrod: [238, 232, 170],\n\tpalegreen: [152, 251, 152],\n\tpaleturquoise: [175, 238, 238],\n\tpalevioletred: [219, 112, 147],\n\tpapayawhip: [255, 239, 213],\n\tpeachpuff: [255, 218, 185],\n\tperu: [205, 133, 63],\n\tpink: [255, 192, 203],\n\tplum: [221, 160, 221],\n\tpowderblue: [176, 224, 230],\n\tpurple: [128, 0, 128],\n\trebeccapurple: [102, 51, 153],\n\tred: [255, 0, 0],\n\trosybrown: [188, 143, 143],\n\troyalblue: [65, 105, 225],\n\tsaddlebrown: [139, 69, 19],\n\tsalmon: [250, 128, 114],\n\tsandybrown: [244, 164, 96],\n\tseagreen: [46, 139, 87],\n\tseashell: [255, 245, 238],\n\tsienna: [160, 82, 45],\n\tsilver: [192, 192, 192],\n\tskyblue: [135, 206, 235],\n\tslateblue: [106, 90, 205],\n\tslategray: [112, 128, 144],\n\tslategrey: [112, 128, 144],\n\tsnow: [255, 250, 250],\n\tspringgreen: [0, 255, 127],\n\tsteelblue: [70, 130, 180],\n\ttan: [210, 180, 140],\n\tteal: [0, 128, 128],\n\tthistle: [216, 191, 216],\n\ttomato: [255, 99, 71],\n\tturquoise: [64, 224, 208],\n\tviolet: [238, 130, 238],\n\twheat: [245, 222, 179],\n\twhite: [255, 255, 255],\n\twhitesmoke: [245, 245, 245],\n\tyellow: [255, 255, 0],\n\tyellowgreen: [154, 205, 50]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29sb3ItcGFyc2Uvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXBhcnNlL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzPzM1NGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuXHRhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1XSxcblx0YW50aXF1ZXdoaXRlOiBbMjUwLCAyMzUsIDIxNV0sXG5cdGFxdWE6IFswLCAyNTUsIDI1NV0sXG5cdGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyXSxcblx0YXp1cmU6IFsyNDAsIDI1NSwgMjU1XSxcblx0YmVpZ2U6IFsyNDUsIDI0NSwgMjIwXSxcblx0YmlzcXVlOiBbMjU1LCAyMjgsIDE5Nl0sXG5cdGJsYWNrOiBbMCwgMCwgMF0sXG5cdGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNV0sXG5cdGJsdWU6IFswLCAwLCAyNTVdLFxuXHRibHVldmlvbGV0OiBbMTM4LCA0MywgMjI2XSxcblx0YnJvd246IFsxNjUsIDQyLCA0Ml0sXG5cdGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzVdLFxuXHRjYWRldGJsdWU6IFs5NSwgMTU4LCAxNjBdLFxuXHRjaGFydHJldXNlOiBbMTI3LCAyNTUsIDBdLFxuXHRjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzBdLFxuXHRjb3JhbDogWzI1NSwgMTI3LCA4MF0sXG5cdGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzN10sXG5cdGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMF0sXG5cdGNyaW1zb246IFsyMjAsIDIwLCA2MF0sXG5cdGN5YW46IFswLCAyNTUsIDI1NV0sXG5cdGRhcmtibHVlOiBbMCwgMCwgMTM5XSxcblx0ZGFya2N5YW46IFswLCAxMzksIDEzOV0sXG5cdGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTFdLFxuXHRkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJrZ3JlZW46IFswLCAxMDAsIDBdLFxuXHRkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJra2hha2k6IFsxODksIDE4MywgMTA3XSxcblx0ZGFya21hZ2VudGE6IFsxMzksIDAsIDEzOV0sXG5cdGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDddLFxuXHRkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDBdLFxuXHRkYXJrb3JjaGlkOiBbMTUzLCA1MCwgMjA0XSxcblx0ZGFya3JlZDogWzEzOSwgMCwgMF0sXG5cdGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyXSxcblx0ZGFya3NlYWdyZWVuOiBbMTQzLCAxODgsIDE0M10sXG5cdGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOV0sXG5cdGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5XSxcblx0ZGFya3NsYXRlZ3JleTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDldLFxuXHRkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTFdLFxuXHRkZWVwcGluazogWzI1NSwgMjAsIDE0N10sXG5cdGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTVdLFxuXHRkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNV0sXG5cdGRpbWdyZXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NV0sXG5cdGZpcmVicmljazogWzE3OCwgMzQsIDM0XSxcblx0ZmxvcmFsd2hpdGU6IFsyNTUsIDI1MCwgMjQwXSxcblx0Zm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNF0sXG5cdGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NV0sXG5cdGdhaW5zYm9ybzogWzIyMCwgMjIwLCAyMjBdLFxuXHRnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NV0sXG5cdGdvbGQ6IFsyNTUsIDIxNSwgMF0sXG5cdGdvbGRlbnJvZDogWzIxOCwgMTY1LCAzMl0sXG5cdGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0Z3JlZW46IFswLCAxMjgsIDBdLFxuXHRncmVlbnllbGxvdzogWzE3MywgMjU1LCA0N10sXG5cdGdyZXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0aG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwXSxcblx0aG90cGluazogWzI1NSwgMTA1LCAxODBdLFxuXHRpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5Ml0sXG5cdGluZGlnbzogWzc1LCAwLCAxMzBdLFxuXHRpdm9yeTogWzI1NSwgMjU1LCAyNDBdLFxuXHRraGFraTogWzI0MCwgMjMwLCAxNDBdLFxuXHRsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTBdLFxuXHRsYXZlbmRlcmJsdXNoOiBbMjU1LCAyNDAsIDI0NV0sXG5cdGxhd25ncmVlbjogWzEyNCwgMjUyLCAwXSxcblx0bGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNV0sXG5cdGxpZ2h0Ymx1ZTogWzE3MywgMjE2LCAyMzBdLFxuXHRsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOF0sXG5cdGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTVdLFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogWzI1MCwgMjUwLCAyMTBdLFxuXHRsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDRdLFxuXHRsaWdodGdyZXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5M10sXG5cdGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMl0sXG5cdGxpZ2h0c2VhZ3JlZW46IFszMiwgMTc4LCAxNzBdLFxuXHRsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwXSxcblx0bGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzbGF0ZWdyZXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyXSxcblx0bGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0XSxcblx0bGltZTogWzAsIDI1NSwgMF0sXG5cdGxpbWVncmVlbjogWzUwLCAyMDUsIDUwXSxcblx0bGluZW46IFsyNTAsIDI0MCwgMjMwXSxcblx0bWFnZW50YTogWzI1NSwgMCwgMjU1XSxcblx0bWFyb29uOiBbMTI4LCAwLCAwXSxcblx0bWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzBdLFxuXHRtZWRpdW1ibHVlOiBbMCwgMCwgMjA1XSxcblx0bWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExXSxcblx0bWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOV0sXG5cdG1lZGl1bXNlYWdyZWVuOiBbNjAsIDE3OSwgMTEzXSxcblx0bWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOF0sXG5cdG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTRdLFxuXHRtZWRpdW10dXJxdW9pc2U6IFs3MiwgMjA5LCAyMDRdLFxuXHRtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzNdLFxuXHRtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMl0sXG5cdG1pbnRjcmVhbTogWzI0NSwgMjU1LCAyNTBdLFxuXHRtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1XSxcblx0bW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxXSxcblx0bmF2YWpvd2hpdGU6IFsyNTUsIDIyMiwgMTczXSxcblx0bmF2eTogWzAsIDAsIDEyOF0sXG5cdG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwXSxcblx0b2xpdmU6IFsxMjgsIDEyOCwgMF0sXG5cdG9saXZlZHJhYjogWzEwNywgMTQyLCAzNV0sXG5cdG9yYW5nZTogWzI1NSwgMTY1LCAwXSxcblx0b3JhbmdlcmVkOiBbMjU1LCA2OSwgMF0sXG5cdG9yY2hpZDogWzIxOCwgMTEyLCAyMTRdLFxuXHRwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MF0sXG5cdHBhbGVncmVlbjogWzE1MiwgMjUxLCAxNTJdLFxuXHRwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOF0sXG5cdHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3XSxcblx0cGFwYXlhd2hpcDogWzI1NSwgMjM5LCAyMTNdLFxuXHRwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1XSxcblx0cGVydTogWzIwNSwgMTMzLCA2M10sXG5cdHBpbms6IFsyNTUsIDE5MiwgMjAzXSxcblx0cGx1bTogWzIyMSwgMTYwLCAyMjFdLFxuXHRwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMF0sXG5cdHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcblx0cmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1M10sXG5cdHJlZDogWzI1NSwgMCwgMF0sXG5cdHJvc3licm93bjogWzE4OCwgMTQzLCAxNDNdLFxuXHRyb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjVdLFxuXHRzYWRkbGVicm93bjogWzEzOSwgNjksIDE5XSxcblx0c2FsbW9uOiBbMjUwLCAxMjgsIDExNF0sXG5cdHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTZdLFxuXHRzZWFncmVlbjogWzQ2LCAxMzksIDg3XSxcblx0c2Vhc2hlbGw6IFsyNTUsIDI0NSwgMjM4XSxcblx0c2llbm5hOiBbMTYwLCA4MiwgNDVdLFxuXHRzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcblx0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyMzVdLFxuXHRzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDVdLFxuXHRzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c2xhdGVncmV5OiBbMTEyLCAxMjgsIDE0NF0sXG5cdHNub3c6IFsyNTUsIDI1MCwgMjUwXSxcblx0c3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyN10sXG5cdHN0ZWVsYmx1ZTogWzcwLCAxMzAsIDE4MF0sXG5cdHRhbjogWzIxMCwgMTgwLCAxNDBdLFxuXHR0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuXHR0aGlzdGxlOiBbMjE2LCAxOTEsIDIxNl0sXG5cdHRvbWF0bzogWzI1NSwgOTksIDcxXSxcblx0dHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4XSxcblx0dmlvbGV0OiBbMjM4LCAxMzAsIDIzOF0sXG5cdHdoZWF0OiBbMjQ1LCAyMjIsIDE3OV0sXG5cdHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXG5cdHdoaXRlc21va2U6IFsyNDUsIDI0NSwgMjQ1XSxcblx0eWVsbG93OiBbMjU1LCAyNTUsIDBdLFxuXHR5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MF1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/color-parse/node_modules/color-name/index.js\n");

/***/ })

};
;