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
exports.id = "app/api/reports/route";
exports.ids = ["app/api/reports/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freports%2Froute&page=%2Fapi%2Freports%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freports%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freports%2Froute&page=%2Fapi%2Freports%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freports%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_gorandevetak_Documents_progettoIng_testDB_ProgettoIngegneriaSoftware_src_app_api_reports_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/reports/route.ts */ \"(rsc)/./src/app/api/reports/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reports/route\",\n        pathname: \"/api/reports\",\n        filename: \"route\",\n        bundlePath: \"app/api/reports/route\"\n    },\n    resolvedPagePath: \"/Users/gorandevetak/Documents/progettoIng/testDB/ProgettoIngegneriaSoftware/src/app/api/reports/route.ts\",\n    nextConfigOutput,\n    userland: _Users_gorandevetak_Documents_progettoIng_testDB_ProgettoIngegneriaSoftware_src_app_api_reports_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXBvcnRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXBvcnRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmVwb3J0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmdvcmFuZGV2ZXRhayUyRkRvY3VtZW50cyUyRnByb2dldHRvSW5nJTJGdGVzdERCJTJGUHJvZ2V0dG9JbmdlZ25lcmlhU29mdHdhcmUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZ29yYW5kZXZldGFrJTJGRG9jdW1lbnRzJTJGcHJvZ2V0dG9JbmclMkZ0ZXN0REIlMkZQcm9nZXR0b0luZ2VnbmVyaWFTb2Z0d2FyZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0Q7QUFDckk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz9kOWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZ29yYW5kZXZldGFrL0RvY3VtZW50cy9wcm9nZXR0b0luZy90ZXN0REIvUHJvZ2V0dG9JbmdlZ25lcmlhU29mdHdhcmUvc3JjL2FwcC9hcGkvcmVwb3J0cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVwb3J0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlcG9ydHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlcG9ydHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZ29yYW5kZXZldGFrL0RvY3VtZW50cy9wcm9nZXR0b0luZy90ZXN0REIvUHJvZ2V0dG9JbmdlZ25lcmlhU29mdHdhcmUvc3JjL2FwcC9hcGkvcmVwb3J0cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freports%2Froute&page=%2Fapi%2Freports%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freports%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/reports/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/reports/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/dbConnect */ \"(rsc)/./src/app/lib/dbConnect.ts\");\n/* harmony import */ var _app_lib_models_report_Report_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/models/report/Report.model */ \"(rsc)/./src/app/lib/models/report/Report.model.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    await (0,_app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const reports = await _app_lib_models_report_Report_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(reports);\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: err.message\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        await (0,_app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { description, photo, contacts } = await req.json();\n        const newReport = new _app_lib_models_report_Report_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            description,\n            photo,\n            contacts,\n            state: false\n        });\n        await newReport.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'New report created successfully',\n            report: newReport\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXBvcnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ21CO0FBQ3BCO0FBR3BDLGVBQWVHO0lBQ2xCLE1BQU1ILDhEQUFTQTtJQUNmLElBQUc7UUFDQyxNQUFNSSxVQUFVLE1BQU1ILDJFQUFXQSxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDRjtJQUM3QixFQUFDLE9BQU1HLEtBQVM7UUFDWixPQUFPTCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUNFLE9BQU9ELElBQUlFLE9BQU87UUFBQTtJQUNoRDtBQUNKO0FBR08sZUFBZUMsS0FBS0MsR0FBWTtJQUNuQyxJQUFJO1FBQ0YsTUFBTVgsOERBQVNBO1FBRWYsTUFBTSxFQUFFWSxXQUFXLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUgsSUFBSUwsSUFBSTtRQUV2RCxNQUFNUyxZQUFZLElBQUlkLDJFQUFXQSxDQUFDO1lBQ2hDVztZQUNBQztZQUNBQztZQUNBRSxPQUFPO1FBQ1Q7UUFFQSxNQUFNRCxVQUFVRSxJQUFJO1FBRXBCLE9BQU9mLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUcsU0FBUztZQUFtQ1MsUUFBUUg7UUFBVTtJQUMzRixFQUFFLE9BQU9QLE9BQVk7UUFDbkIsT0FBT04scURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFVSxRQUFRO1FBQUk7SUFDbkU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXBpL3JlcG9ydHMvcm91dGUudHM/YmYwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2FwcC9saWIvZGJDb25uZWN0XCI7XG5pbXBvcnQgUmVwb3J0TW9kZWwgZnJvbSBcIkAvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC5tb2RlbFwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpe1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVwb3J0cyA9IGF3YWl0IFJlcG9ydE1vZGVsLmZpbmQoe30pO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVwb3J0cyk7XG4gICAgfWNhdGNoKGVycjogYW55KXtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG5cbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIHBob3RvLCBjb250YWN0cyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgXG4gICAgICBjb25zdCBuZXdSZXBvcnQgPSBuZXcgUmVwb3J0TW9kZWwoe1xuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgcGhvdG8sXG4gICAgICAgIGNvbnRhY3RzLFxuICAgICAgICBzdGF0ZTogZmFsc2UsXG4gICAgICB9KTtcbiAgXG4gICAgICBhd2FpdCBuZXdSZXBvcnQuc2F2ZSgpO1xuXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnTmV3IHJlcG9ydCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsIHJlcG9ydDogbmV3UmVwb3J0IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxuICB9XG5cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJSZXBvcnRNb2RlbCIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcG9ydHMiLCJmaW5kIiwianNvbiIsImVyciIsImVycm9yIiwibWVzc2FnZSIsIlBPU1QiLCJyZXEiLCJkZXNjcmlwdGlvbiIsInBob3RvIiwiY29udGFjdHMiLCJuZXdSZXBvcnQiLCJzdGF0ZSIsInNhdmUiLCJyZXBvcnQiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/reports/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/dbConnect.ts":
/*!**********************************!*\
  !*** ./src/app/lib/dbConnect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const uri = \"mongodb+srv://gorandevetak2004:KPJGy5T59BC52rNW@progingegneria.xdw19.mongodb.net/?retryWrites=true&w=majority&appName=ProgIngegneria\";\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQXNDLENBQUM7QUFFN0MsZUFBZUM7SUFDWCxJQUFHRCxXQUFXRSxXQUFXLEVBQUM7UUFDdEI7SUFDSjtJQUNBLE1BQU1DLE1BQU07SUFDWixNQUFNQyxLQUFLLE1BQU1MLHVEQUFnQixDQUFDSTtJQUVsQ0gsV0FBV0UsV0FBVyxHQUFHRSxHQUFHRSxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0FBRXpEO0FBRUEsaUVBQWVOLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHM/N2VhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb246IHtpc0Nvbm5lY3RlZCA/OiBudW1iZXJ9ID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9nb3JhbmRldmV0YWsyMDA0OktQSkd5NVQ1OUJDNTJyTldAcHJvZ2luZ2VnbmVyaWEueGR3MTkubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPVByb2dJbmdlZ25lcmlhXCI7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSk7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwidXJpIiwiZGIiLCJjb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/report/Report.model.ts":
/*!***************************************************!*\
  !*** ./src/app/lib/models/report/Report.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report */ \"(rsc)/./src/app/lib/models/report/Report.ts\");\n\n\nconst ReportModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Report || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Report\", _Report__WEBPACK_IMPORTED_MODULE_1__.ReportSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC5tb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBQ087QUFFaEQsTUFBTUUsY0FBNkJGLHdEQUFlLENBQUNJLE1BQU0sSUFBSUoscURBQWMsQ0FBUyxVQUFVQyxpREFBWUE7QUFDMUcsaUVBQWVDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC5tb2RlbC50cz84MmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwge01vZGVsfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBSZXBvcnQsIFJlcG9ydFNjaGVtYSB9IGZyb20gJy4vUmVwb3J0JztcblxuY29uc3QgUmVwb3J0TW9kZWw6IE1vZGVsPFJlcG9ydD4gPSBtb25nb29zZS5tb2RlbHMuUmVwb3J0IHx8IG1vbmdvb3NlLm1vZGVsPFJlcG9ydD4oXCJSZXBvcnRcIiwgUmVwb3J0U2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydE1vZGVsOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlJlcG9ydFNjaGVtYSIsIlJlcG9ydE1vZGVsIiwibW9kZWxzIiwiUmVwb3J0IiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/report/Report.model.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/models/report/Report.ts":
/*!*********************************************!*\
  !*** ./src/app/lib/models/report/Report.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReportSchema: () => (/* binding */ ReportSchema)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ReportSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    state: {\n        type: Boolean,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    photo: {\n        type: String,\n        required: false\n    },\n    contacts: {\n        email: {\n            type: String\n        },\n        phone: {\n            type: Number\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFZakMsTUFBTUMsZUFBZSxJQUFJRCw0Q0FBTUEsQ0FBUztJQUM3Q0UsT0FBTztRQUFFQyxNQUFNQztRQUFTQyxVQUFVO0lBQUs7SUFDdkNDLGFBQWE7UUFBRUgsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQzVDRyxPQUFPO1FBQUVMLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUN0Q0ksVUFBVTtRQUNSQyxPQUFPO1lBQUVQLE1BQU1JO1FBQU87UUFDdEJJLE9BQU87WUFBRVIsTUFBTVM7UUFBTztJQUN4QjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xpYi9tb2RlbHMvcmVwb3J0L1JlcG9ydC50cz80YzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLCBEb2N1bWVudH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcG9ydCBleHRlbmRzIERvY3VtZW50e1xuICAgIHN0YXRlOiBib29sZWFuO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcGhvdG8/OiBzdHJpbmc7XG4gICAgY29udGFjdHM/OiB7XG4gICAgICBlbWFpbD86IHN0cmluZztcbiAgICAgIHBob25lPzogbnVtYmVyO1xuICAgIH07XG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBSZXBvcnRTY2hlbWEgPSBuZXcgU2NoZW1hPFJlcG9ydD4oe1xuICAgIHN0YXRlOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHBob3RvOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlfSxcbiAgICBjb250YWN0czoge1xuICAgICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICBwaG9uZTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICB9LFxuICB9KTtcbiAgIl0sIm5hbWVzIjpbIlNjaGVtYSIsIlJlcG9ydFNjaGVtYSIsInN0YXRlIiwidHlwZSIsIkJvb2xlYW4iLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiU3RyaW5nIiwicGhvdG8iLCJjb250YWN0cyIsImVtYWlsIiwicGhvbmUiLCJOdW1iZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/models/report/Report.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freports%2Froute&page=%2Fapi%2Freports%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freports%2Froute.ts&appDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fgorandevetak%2FDocuments%2FprogettoIng%2FtestDB%2FProgettoIngegneriaSoftware&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();