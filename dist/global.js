/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global/index.js":
/*!*****************************!*\
  !*** ./src/global/index.js ***!
  \*****************************/
/***/ (() => {

eval("\nwp.hooks.addFilter(\n    'blocks.registerBlockType',\n    'bwdssb/attribute/resMode',\n    function addResModeAttribute(settings, name) {\n        const targetBlocks = ['wiztm/team-member', 'bwdssb/service-showcase'];\n\n        if (targetBlocks.includes(name)) {\n            settings.attributes = {\n                ...settings.attributes,\n                resMode: {\n                    type: 'string',\n                    default: 'Desktop',\n                },\n            };\n        }\n\n        return settings;\n    }\n);\n\n\n//# sourceURL=webpack://bwd-team-member/./src/global/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/global/index.js"]();
/******/ 	
/******/ })()
;