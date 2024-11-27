/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/stations/route";
exports.ids = ["app/api/stations/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstations%2Froute&page=%2Fapi%2Fstations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstations%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstations%2Froute&page=%2Fapi%2Fstations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstations%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_gorandevetak_Documents_progettoIng_testDB_ProgettoIngegneriaSoftware_src_app_api_stations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/stations/route.ts */ \"(rsc)/./src/app/api/stations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stations/route\",\n        pathname: \"/api/stations\",\n        filename: \"route\",\n        bundlePath: \"app/api/stations/route\"\n    },\n    resolvedPagePath: \"/Users/gorandevetak/Documents/progettoIng/testDB/ProgettoIngegneriaSoftware/src/app/api/stations/route.ts\",\n    nextConfigOutput,\n    userland: _Users_gorandevetak_Documents_progettoIng_testDB_ProgettoIngegneriaSoftware_src_app_api_stations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdGF0aW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3RhdGlvbnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdGF0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmdvcmFuZGV2ZXRhayUyRkRvY3VtZW50cyUyRnByb2dldHRvSW5nJTJGdGVzdERCJTJGUHJvZ2V0dG9JbmdlZ25lcmlhU29mdHdhcmUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZ29yYW5kZXZldGFrJTJGRG9jdW1lbnRzJTJGcHJvZ2V0dG9JbmclMkZ0ZXN0REIlMkZQcm9nZXR0b0luZ2VnbmVyaWFTb2Z0d2FyZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUQ7QUFDdEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz9hYTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZ29yYW5kZXZldGFrL0RvY3VtZW50cy9wcm9nZXR0b0luZy90ZXN0REIvUHJvZ2V0dG9JbmdlZ25lcmlhU29mdHdhcmUvc3JjL2FwcC9hcGkvc3RhdGlvbnMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N0YXRpb25zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3RhdGlvbnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N0YXRpb25zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2dvcmFuZGV2ZXRhay9Eb2N1bWVudHMvcHJvZ2V0dG9JbmcvdGVzdERCL1Byb2dldHRvSW5nZWduZXJpYVNvZnR3YXJlL3NyYy9hcHAvYXBpL3N0YXRpb25zL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstations%2Froute&page=%2Fapi%2Fstations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstations%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/stations/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/stations/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/dbConnect */ \"(rsc)/./src/app/lib/dbConnect.ts\");\n/* harmony import */ var _app_lib_models_Parcheggio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/models/Parcheggio */ \"(rsc)/./src/app/lib/models/Parcheggio.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    await (0,_app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const parcheggi = await _app_lib_models_Parcheggio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(parcheggi);\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdGF0aW9ucy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ1M7QUFDVjtBQUdwQyxlQUFlRztJQUNsQixNQUFNSCw4REFBU0E7SUFDZixJQUFHO1FBQ0MsTUFBTUksWUFBWSxNQUFNSCxrRUFBVUEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7UUFFekMsT0FBT0gscURBQVlBLENBQUNJLElBQUksQ0FBQ0Y7SUFDN0IsRUFBQyxPQUFNRyxLQUFTO1FBQ1osT0FBT0wscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFDRSxPQUFPRCxJQUFJRSxPQUFPO1FBQUE7SUFDaEQ7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXBpL3N0YXRpb25zL3JvdXRlLnRzPzU5N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9hcHAvbGliL2RiQ29ubmVjdFwiO1xuaW1wb3J0IFBhcmNoZWdnaW8gZnJvbSBcIkAvYXBwL2xpYi9tb2RlbHMvUGFyY2hlZ2dpb1wiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpe1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcGFyY2hlZ2dpID0gYXdhaXQgUGFyY2hlZ2dpby5maW5kKHt9KTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocGFyY2hlZ2dpKTtcbiAgICB9Y2F0Y2goZXJyOiBhbnkpe1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2Vycm9yOiBlcnIubWVzc2FnZX0pXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlBhcmNoZWdnaW8iLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJwYXJjaGVnZ2kiLCJmaW5kIiwianNvbiIsImVyciIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/stations/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/dbConnect.ts":
/*!**********************************!*\
  !*** ./src/app/lib/dbConnect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const uri = \"mongodb+srv://gorandevetak2004:KPJGy5T59BC52rNW@progingegneria.xdw19.mongodb.net/?retryWrites=true&w=majority&appName=ProgIngegneria\";\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQXNDLENBQUM7QUFFN0MsZUFBZUM7SUFDWCxJQUFHRCxXQUFXRSxXQUFXLEVBQUM7UUFDdEI7SUFDSjtJQUNBLE1BQU1DLE1BQU07SUFDWixNQUFNQyxLQUFLLE1BQU1MLHVEQUFnQixDQUFDSTtJQUVsQ0gsV0FBV0UsV0FBVyxHQUFHRSxHQUFHRSxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0FBRXpEO0FBRUEsaUVBQWVOLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHM/N2VhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb246IHtpc0Nvbm5lY3RlZCA/OiBudW1iZXJ9ID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9nb3JhbmRldmV0YWsyMDA0OktQSkd5NVQ1OUJDNTJyTldAcHJvZ2luZ2VnbmVyaWEueGR3MTkubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPVByb2dJbmdlZ25lcmlhXCI7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSk7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwidXJpIiwiZGIiLCJjb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/Parcheggio.ts":
/*!******************************************!*\
  !*** ./src/app/lib/models/Parcheggio.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Schema for Indirizzo\nconst IndirizzoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    via: {\n        type: String,\n        required: true\n    },\n    numero: {\n        type: Number,\n        required: true\n    },\n    comune: {\n        type: String,\n        required: true\n    },\n    cap: {\n        type: Number,\n        required: true\n    },\n    longitudine: {\n        type: Number,\n        required: false\n    },\n    latitudine: {\n        type: Number,\n        required: false\n    }\n});\n// Schema for Parcheggio\nconst ParcheggioSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    nome: {\n        type: String,\n        required: true\n    },\n    Indirizzo: {\n        type: IndirizzoSchema,\n        required: true\n    },\n    numPosti: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"operativo\",\n            \"inattivo\",\n            \"segnalato\"\n        ],\n        required: true\n    },\n    posti: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: 'Posto',\n            required: false\n        }\n    ],\n    idSegnalazioni: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: 'Segnalazione',\n            required: false\n        }\n    ]\n});\n// Create and export the model\nconst Parcheggio = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Parcheggio || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Parcheggio\", ParcheggioSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parcheggio);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvUGFyY2hlZ2dpby50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFZN0QsdUJBQXVCO0FBQ3ZCLE1BQU1DLGtCQUEwQixJQUFJRCx3REFBZSxDQUFDO0lBQ2hERyxLQUFLO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNwQ0MsUUFBUTtRQUFFSCxNQUFNSTtRQUFRRixVQUFVO0lBQUs7SUFDdkNHLFFBQVE7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3ZDSSxLQUFLO1FBQUVOLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUNwQ0ssYUFBYTtRQUFFUCxNQUFNSTtRQUFRRixVQUFVO0lBQU07SUFDN0NNLFlBQVk7UUFBRVIsTUFBTUk7UUFBUUYsVUFBVTtJQUFNO0FBQ2hEO0FBWUEsd0JBQXdCO0FBQ3hCLE1BQU1PLG1CQUEyQixJQUFJYix3REFBZSxDQUFDO0lBQ2pEYyxNQUFNO1FBQUVWLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ1MsV0FBVztRQUFFWCxNQUFNSDtRQUFpQkssVUFBVTtJQUFLO0lBQ25EVSxVQUFVO1FBQUVaLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUN6Q1csUUFBUTtRQUNKYixNQUFNQztRQUNOYSxNQUFNO1lBQUM7WUFBYTtZQUFZO1NBQVk7UUFDNUNaLFVBQVU7SUFDZDtJQUNBYSxPQUFPO1FBQUM7WUFDSmYsTUFBTUosd0RBQWUsQ0FBQ29CLEtBQUssQ0FBQ0MsUUFBUTtZQUNwQ0MsS0FBSztZQUNMaEIsVUFBVTtRQUNkO0tBQUU7SUFDRmlCLGdCQUFnQjtRQUFDO1lBQ2JuQixNQUFNSix3REFBZSxDQUFDb0IsS0FBSyxDQUFDQyxRQUFRO1lBQ3BDQyxLQUFLO1lBQ0xoQixVQUFVO1FBQ2Q7S0FBRTtBQUNOO0FBRUEsOEJBQThCO0FBQzlCLE1BQU1rQixhQUFheEIsd0RBQWUsQ0FBQ3dCLFVBQVUsSUFBSXhCLHFEQUFjLENBQWMsY0FBY2E7QUFDM0YsaUVBQWVXLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9tb2RlbHMvUGFyY2hlZ2dpby50cz8xYjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50LCBUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG4vLyBJbnRlcmZhY2UgZm9yIHRoZSBJbmRpcml6em8gc2NoZW1hXG5pbnRlcmZhY2UgSUluZGlyaXp6byB7XG4gICAgdmlhOiBzdHJpbmc7XG4gICAgbnVtZXJvOiBudW1iZXI7XG4gICAgY29tdW5lOiBzdHJpbmc7XG4gICAgY2FwOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRpbmU6IG51bWJlcjtcbiAgICBsYXRpdHVkaW5lOiBudW1iZXI7XG59XG5cbi8vIFNjaGVtYSBmb3IgSW5kaXJpenpvXG5jb25zdCBJbmRpcml6em9TY2hlbWE6IFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHZpYTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbnVtZXJvOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBjb211bmU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGNhcDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbG9uZ2l0dWRpbmU6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBsYXRpdHVkaW5lOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IGZhbHNlIH1cbn0pO1xuXG4vLyBJbnRlcmZhY2UgZm9yIHRoZSBQYXJjaGVnZ2lvIGRvY3VtZW50XG5pbnRlcmZhY2UgSVBhcmNoZWdnaW8gZXh0ZW5kcyBEb2N1bWVudCB7XG4gICAgbm9tZTogc3RyaW5nO1xuICAgIEluZGlyaXp6bzogSUluZGlyaXp6bztcbiAgICBudW1Qb3N0aTogbnVtYmVyO1xuICAgIHN0YXR1czogXCJvcGVyYXRpdm9cIiB8IFwiaW5hdHRpdm9cIiB8IFwic2VnbmFsYXRvXCI7XG4gICAgcG9zdGk6IFR5cGVzLk9iamVjdElkW107XG4gICAgaWRTZWduYWxhemlvbmk6IFR5cGVzLk9iamVjdElkW107XG59XG5cbi8vIFNjaGVtYSBmb3IgUGFyY2hlZ2dpb1xuY29uc3QgUGFyY2hlZ2dpb1NjaGVtYTogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbm9tZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgSW5kaXJpenpvOiB7IHR5cGU6IEluZGlyaXp6b1NjaGVtYSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBudW1Qb3N0aTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgc3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZW51bTogW1wib3BlcmF0aXZvXCIsIFwiaW5hdHRpdm9cIiwgXCJzZWduYWxhdG9cIl0sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwb3N0aTogW3tcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdQb3N0bycsXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH1dLFxuICAgIGlkU2VnbmFsYXppb25pOiBbe1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ1NlZ25hbGF6aW9uZScsXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH1dXG59KTtcblxuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIG1vZGVsXG5jb25zdCBQYXJjaGVnZ2lvID0gbW9uZ29vc2UubW9kZWxzLlBhcmNoZWdnaW8gfHwgbW9uZ29vc2UubW9kZWw8SVBhcmNoZWdnaW8+KFwiUGFyY2hlZ2dpb1wiLCBQYXJjaGVnZ2lvU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFBhcmNoZWdnaW87XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJJbmRpcml6em9TY2hlbWEiLCJTY2hlbWEiLCJ2aWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJudW1lcm8iLCJOdW1iZXIiLCJjb211bmUiLCJjYXAiLCJsb25naXR1ZGluZSIsImxhdGl0dWRpbmUiLCJQYXJjaGVnZ2lvU2NoZW1hIiwibm9tZSIsIkluZGlyaXp6byIsIm51bVBvc3RpIiwic3RhdHVzIiwiZW51bSIsInBvc3RpIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImlkU2VnbmFsYXppb25pIiwiUGFyY2hlZ2dpbyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/Parcheggio.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstations%2Froute&page=%2Fapi%2Fstations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstations%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();