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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/dbConnect */ \"(rsc)/./src/app/lib/dbConnect.ts\");\n/* harmony import */ var _app_lib_models_station_Station_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/models/station/Station.model */ \"(rsc)/./src/app/lib/models/station/Station.model.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    await (0,_app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const parcheggi = await _app_lib_models_station_Station_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(parcheggi);\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdGF0aW9ucy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ3NCO0FBQ3ZCO0FBR3BDLGVBQWVHO0lBQ2xCLE1BQU1ILDhEQUFTQTtJQUNmLElBQUc7UUFDQyxNQUFNSSxZQUFZLE1BQU1ILDZFQUFZQSxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUUzQyxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDRjtJQUM3QixFQUFDLE9BQU1HLEtBQVM7UUFDWixPQUFPTCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUNFLE9BQU9ELElBQUlFLE9BQU87UUFBQTtJQUNoRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcGkvc3RhdGlvbnMvcm91dGUudHM/NTk3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2FwcC9saWIvZGJDb25uZWN0XCI7XG5pbXBvcnQgU3RhdGlvbk1vZGVsIGZyb20gXCJAL2FwcC9saWIvbW9kZWxzL3N0YXRpb24vU3RhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpe1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcGFyY2hlZ2dpID0gYXdhaXQgU3RhdGlvbk1vZGVsLmZpbmQoe30pO1xuXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwYXJjaGVnZ2kpO1xuICAgIH1jYXRjaChlcnI6IGFueSl7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3I6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJTdGF0aW9uTW9kZWwiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJwYXJjaGVnZ2kiLCJmaW5kIiwianNvbiIsImVyciIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/stations/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/dbConnect.ts":
/*!**********************************!*\
  !*** ./src/app/lib/dbConnect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const uri = \"mongodb+srv://gorandevetak2004:KPJGy5T59BC52rNW@progingegneria.xdw19.mongodb.net/?retryWrites=true&w=majority&appName=ProgIngegneria\";\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQXNDLENBQUM7QUFFN0MsZUFBZUM7SUFDWCxJQUFHRCxXQUFXRSxXQUFXLEVBQUM7UUFDdEI7SUFDSjtJQUNBLE1BQU1DLE1BQU07SUFDWixNQUFNQyxLQUFLLE1BQU1MLHVEQUFnQixDQUFDSTtJQUVsQ0gsV0FBV0UsV0FBVyxHQUFHRSxHQUFHRSxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0FBRXpEO0FBRUEsaUVBQWVOLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHM/N2VhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb246IHtpc0Nvbm5lY3RlZCA/OiBudW1iZXJ9ID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9nb3JhbmRldmV0YWsyMDA0OktQSkd5NVQ1OUJDNTJyTldAcHJvZ2luZ2VnbmVyaWEueGR3MTkubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPVByb2dJbmdlZ25lcmlhXCI7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSk7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwidXJpIiwiZGIiLCJjb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/address/Address.ts":
/*!***********************************************!*\
  !*** ./src/app/lib/models/address/Address.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddressSchema: () => (/* binding */ AddressSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AddressSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    street: {\n        type: String,\n        required: true\n    },\n    number: {\n        type: Number,\n        required: true\n    },\n    city: {\n        type: String,\n        required: true\n    },\n    zipCode: {\n        type: Number,\n        required: true\n    },\n    longitude: {\n        type: Number,\n        required: true\n    },\n    latitude: {\n        type: Number,\n        required: true\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvYWRkcmVzcy9BZGRyZXNzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQVdyQyxNQUFNQyxnQkFBZ0IsSUFBSUQsNENBQU1BLENBQVU7SUFDL0NFLFFBQVE7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3ZDQyxRQUFRO1FBQUVILE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUN2Q0csTUFBTTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNJLFNBQVM7UUFBRU4sTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQ3hDSyxXQUFXO1FBQUVQLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUMxQ00sVUFBVTtRQUFFUixNQUFNSTtRQUFRRixVQUFVO0lBQUs7QUFDM0MsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvbGliL21vZGVscy9hZGRyZXNzL0FkZHJlc3MudHM/ZDA5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3MgZXh0ZW5kcyBEb2N1bWVudHtcbiAgc3RyZWV0OiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBjaXR5OiBzdHJpbmc7XG4gIHppcENvZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBBZGRyZXNzU2NoZW1hID0gbmV3IFNjaGVtYTxBZGRyZXNzPih7XG4gIHN0cmVldDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG51bWJlcjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNpdHk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB6aXBDb2RlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbG9uZ2l0dWRlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbGF0aXR1ZGU6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxufSk7XG4iXSwibmFtZXMiOlsiU2NoZW1hIiwiQWRkcmVzc1NjaGVtYSIsInN0cmVldCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm51bWJlciIsIk51bWJlciIsImNpdHkiLCJ6aXBDb2RlIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/address/Address.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/report/Report.ts":
/*!*********************************************!*\
  !*** ./src/app/lib/models/report/Report.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReportSchema: () => (/* binding */ ReportSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ReportSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    state: {\n        type: Boolean,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    photo: {\n        type: String,\n        required: false\n    },\n    contacts: {\n        email: {\n            type: String\n        },\n        phone: {\n            type: Number\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFZakMsTUFBTUMsZUFBZSxJQUFJRCw0Q0FBTUEsQ0FBUztJQUM3Q0UsT0FBTztRQUFFQyxNQUFNQztRQUFTQyxVQUFVO0lBQUs7SUFDdkNDLGFBQWE7UUFBRUgsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQzVDRyxPQUFPO1FBQUVMLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUN0Q0ksVUFBVTtRQUNSQyxPQUFPO1lBQUVQLE1BQU1JO1FBQU87UUFDdEJJLE9BQU87WUFBRVIsTUFBTVM7UUFBTztJQUN4QjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC50cz80YzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLCBEb2N1bWVudH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcG9ydCBleHRlbmRzIERvY3VtZW50e1xuICAgIHN0YXRlOiBib29sZWFuO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcGhvdG8/OiBzdHJpbmc7XG4gICAgY29udGFjdHM/OiB7XG4gICAgICBlbWFpbD86IHN0cmluZztcbiAgICAgIHBob25lPzogbnVtYmVyO1xuICAgIH07XG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBSZXBvcnRTY2hlbWEgPSBuZXcgU2NoZW1hPFJlcG9ydD4oe1xuICAgIHN0YXRlOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHBob3RvOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlfSxcbiAgICBjb250YWN0czoge1xuICAgICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICBwaG9uZTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICB9LFxuICB9KTtcbiAgIl0sIm5hbWVzIjpbIlNjaGVtYSIsIlJlcG9ydFNjaGVtYSIsInN0YXRlIiwidHlwZSIsIkJvb2xlYW4iLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiU3RyaW5nIiwicGhvdG8iLCJjb250YWN0cyIsImVtYWlsIiwicGhvbmUiLCJOdW1iZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/report/Report.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/slot/Slot.ts":
/*!*****************************************!*\
  !*** ./src/app/lib/models/slot/Slot.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SlotSchema: () => (/* binding */ SlotSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _use_Use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../use/Use */ \"(rsc)/./src/app/lib/models/use/Use.ts\");\n\n\nconst SlotSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    state: {\n        type: Boolean,\n        required: true\n    },\n    category: {\n        type: String,\n        enum: [\n            'free',\n            'sharing',\n            'private'\n        ],\n        required: true\n    },\n    uses: {\n        type: [\n            _use_Use__WEBPACK_IMPORTED_MODULE_1__.UseSchema\n        ],\n        default: []\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvc2xvdC9TbG90LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDRTtBQVFuQyxNQUFNRSxhQUFhLElBQUlGLDRDQUFNQSxDQUFPO0lBQ3pDRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVNDLFVBQVU7SUFBSztJQUN2Q0MsVUFBVTtRQUFFSCxNQUFNSTtRQUFRQyxNQUFNO1lBQUM7WUFBUTtZQUFXO1NBQVU7UUFBRUgsVUFBVTtJQUFLO0lBQy9FSSxNQUFNO1FBQUVOLE1BQU07WUFBQ0gsK0NBQVNBO1NBQUM7UUFBRVUsU0FBUyxFQUFFO0lBQUM7QUFDekMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvbGliL21vZGVscy9zbG90L1Nsb3QudHM/NWQ1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgRG9jdW1lbnR9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFVzZSwgVXNlU2NoZW1hIH0gZnJvbSAnLi4vdXNlL1VzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdCBleHRlbmRzIERvY3VtZW50e1xuICAgIHN0YXRlOiBib29sZWFuO1xuICAgIGNhdGVnb3J5OiAnZnJlZScgfCAnc2hhcmluZycgfCAncHJpdmF0ZSc7XG4gICAgdXNlczogVXNlW107XG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBTbG90U2NoZW1hID0gbmV3IFNjaGVtYTxTbG90Pih7XG4gICAgc3RhdGU6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFsnZnJlZScsICdzaGFyaW5nJywgJ3ByaXZhdGUnXSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB1c2VzOiB7IHR5cGU6IFtVc2VTY2hlbWFdLCBkZWZhdWx0OiBbXSB9LFxuICB9KTtcbiAgIl0sIm5hbWVzIjpbIlNjaGVtYSIsIlVzZVNjaGVtYSIsIlNsb3RTY2hlbWEiLCJzdGF0ZSIsInR5cGUiLCJCb29sZWFuIiwicmVxdWlyZWQiLCJjYXRlZ29yeSIsIlN0cmluZyIsImVudW0iLCJ1c2VzIiwiZGVmYXVsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/slot/Slot.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/station/Station.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/lib/models/station/Station.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Station__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Station */ \"(rsc)/./src/app/lib/models/station/Station.ts\");\n\n\nconst StationModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Station || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Station\", _Station__WEBPACK_IMPORTED_MODULE_1__.StationSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StationModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvc3RhdGlvbi9TdGF0aW9uLm1vZGVsLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDVTtBQUVuRCxNQUFNRSxlQUErQkYsd0RBQWUsQ0FBQ0ksT0FBTyxJQUFJSixxREFBYyxDQUFVLFdBQVdDLG1EQUFhQTtBQUNoSCxpRUFBZUMsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvbGliL21vZGVscy9zdGF0aW9uL1N0YXRpb24ubW9kZWwudHM/NDI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHtNb2RlbH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgU3RhdGlvbiwgU3RhdGlvblNjaGVtYSB9IGZyb20gJy4vU3RhdGlvbic7XG5cbmNvbnN0IFN0YXRpb25Nb2RlbDogTW9kZWw8U3RhdGlvbj4gPSBtb25nb29zZS5tb2RlbHMuU3RhdGlvbiB8fCBtb25nb29zZS5tb2RlbDxTdGF0aW9uPihcIlN0YXRpb25cIiwgU3RhdGlvblNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBTdGF0aW9uTW9kZWw7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU3RhdGlvblNjaGVtYSIsIlN0YXRpb25Nb2RlbCIsIm1vZGVscyIsIlN0YXRpb24iLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/station/Station.model.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/station/Station.ts":
/*!***********************************************!*\
  !*** ./src/app/lib/models/station/Station.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StationSchema: () => (/* binding */ StationSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _address_Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../address/Address */ \"(rsc)/./src/app/lib/models/address/Address.ts\");\n/* harmony import */ var _slot_Slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slot/Slot */ \"(rsc)/./src/app/lib/models/slot/Slot.ts\");\n/* harmony import */ var _report_Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report/Report */ \"(rsc)/./src/app/lib/models/report/Report.ts\");\n\n\n\n\nconst StationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    address: {\n        type: _address_Address__WEBPACK_IMPORTED_MODULE_1__.AddressSchema,\n        required: true\n    },\n    numSlots: {\n        type: Number,\n        required: true\n    },\n    state: {\n        type: Boolean,\n        required: true\n    },\n    reported: {\n        type: Boolean,\n        required: true\n    },\n    slotList: {\n        type: [\n            _slot_Slot__WEBPACK_IMPORTED_MODULE_2__.SlotSchema\n        ],\n        default: []\n    },\n    reportList: {\n        type: [\n            _report_Report__WEBPACK_IMPORTED_MODULE_3__.ReportSchema\n        ],\n        default: []\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvc3RhdGlvbi9TdGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNrQjtBQUNaO0FBQ1E7QUFZL0MsTUFBTUksZ0JBQWdCLElBQUlKLDRDQUFNQSxDQUFVO0lBQy9DSyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsU0FBUztRQUFFSCxNQUFNTCwyREFBYUE7UUFBRU8sVUFBVTtJQUFLO0lBQy9DRSxVQUFVO1FBQUVKLE1BQU1LO1FBQVFILFVBQVU7SUFBSztJQUN6Q0ksT0FBTztRQUFFTixNQUFNTztRQUFTTCxVQUFVO0lBQUk7SUFDdENNLFVBQVU7UUFBQ1IsTUFBTU87UUFBU0wsVUFBVTtJQUFJO0lBQ3hDTyxVQUFVO1FBQUVULE1BQU07WUFBQ0osa0RBQVVBO1NBQUM7UUFBRWMsU0FBUyxFQUFFO0lBQUM7SUFDNUNDLFlBQVk7UUFBRVgsTUFBTTtZQUFDSCx3REFBWUE7U0FBQztRQUFFYSxTQUFTLEVBQUU7SUFBQztBQUNsRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9saWIvbW9kZWxzL3N0YXRpb24vU3RhdGlvbi50cz80NTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLCBEb2N1bWVudH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gJy4uL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgeyBTbG90LCBTbG90U2NoZW1hIH0gZnJvbSAnLi4vc2xvdC9TbG90JztcbmltcG9ydCB7IFJlcG9ydCwgUmVwb3J0U2NoZW1hIH0gZnJvbSAnLi4vcmVwb3J0L1JlcG9ydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGlvbiBleHRlbmRzIERvY3VtZW50e1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZGRyZXNzOiBBZGRyZXNzO1xuICAgIG51bVNsb3RzOiBudW1iZXI7XG4gICAgc3RhdGU6IGJvb2xlYW47XG4gICAgcmVwb3J0ZWQ6IGJvb2xlYW47XG4gICAgc2xvdExpc3Q6IFNsb3RbXTtcbiAgICByZXBvcnRMaXN0OiBSZXBvcnRbXTtcbiAgfVxuICBcbiAgZXhwb3J0IGNvbnN0IFN0YXRpb25TY2hlbWEgPSBuZXcgU2NoZW1hPFN0YXRpb24+KHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZGRyZXNzOiB7IHR5cGU6IEFkZHJlc3NTY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbnVtU2xvdHM6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHN0YXRlOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlfSxcbiAgICByZXBvcnRlZDoge3R5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlfSxcbiAgICBzbG90TGlzdDogeyB0eXBlOiBbU2xvdFNjaGVtYV0sIGRlZmF1bHQ6IFtdIH0sXG4gICAgcmVwb3J0TGlzdDogeyB0eXBlOiBbUmVwb3J0U2NoZW1hXSwgZGVmYXVsdDogW10gfSxcbiAgfSk7XG4gICJdLCJuYW1lcyI6WyJTY2hlbWEiLCJBZGRyZXNzU2NoZW1hIiwiU2xvdFNjaGVtYSIsIlJlcG9ydFNjaGVtYSIsIlN0YXRpb25TY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiYWRkcmVzcyIsIm51bVNsb3RzIiwiTnVtYmVyIiwic3RhdGUiLCJCb29sZWFuIiwicmVwb3J0ZWQiLCJzbG90TGlzdCIsImRlZmF1bHQiLCJyZXBvcnRMaXN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/station/Station.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/use/Use.ts":
/*!***************************************!*\
  !*** ./src/app/lib/models/use/Use.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UseSchema: () => (/* binding */ UseSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UseSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: Number,\n        required: true\n    },\n    timestamp: {\n        type: Number,\n        required: true\n    },\n    service: {\n        type: String,\n        required: true\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvdXNlL1VzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFRbkMsTUFBTUMsWUFBWSxJQUFJRCw0Q0FBTUEsQ0FBTTtJQUN2Q0UsUUFBUTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdkNDLFdBQVc7UUFBRUgsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzFDRSxTQUFTO1FBQUVKLE1BQU1LO1FBQVFILFVBQVU7SUFBSztBQUMxQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9saWIvbW9kZWxzL3VzZS9Vc2UudHM/N2I3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgRG9jdW1lbnR9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2UgZXh0ZW5kcyBEb2N1bWVudHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBzZXJ2aWNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VTY2hlbWEgPSBuZXcgU2NoZW1hPFVzZT4oe1xuICB1c2VySWQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB0aW1lc3RhbXA6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBzZXJ2aWNlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIlVzZVNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJOdW1iZXIiLCJyZXF1aXJlZCIsInRpbWVzdGFtcCIsInNlcnZpY2UiLCJTdHJpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/use/Use.ts\n");

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