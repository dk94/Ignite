/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 391);
/******/ })
/************************************************************************/
/******/ ({

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n ### Задача 1\r\n Дано следующий объект:\r\n ```\r\n let options = {\r\n title: \"Menu\",\r\n width: 100,\r\n height: 200\r\n };\r\n ```\r\n Используя деструктуризацию, присвойте свойства объекта options переменным с соответствующими именами и выведите их на экран.  */\n\n\n\nvar options = {\n  title: \"Menu\",\n  width: 100,\n  height: 200\n};\n\nvar title = options.title,\n    width = options.width,\n    height = options.height;\n\n\nalert(title);\nalert(width);\nalert(height);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sZXNzb24yMi9DbGFzc3dvcmsvY2xhc3N3b3JrMjJfMS9tYWluLmpzeD84MTVlIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWxlcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFZQTs7QUFHQSxJQUFJQSxVQUFVO0FBQ1ZDLFNBQU8sTUFERztBQUVWQyxTQUFPLEdBRkc7QUFHVkMsVUFBUTtBQUhFLENBQWQ7O0lBTUtGLEssR0FBd0JELE8sQ0FBeEJDLEs7SUFBT0MsSyxHQUFpQkYsTyxDQUFqQkUsSztJQUFPQyxNLEdBQVVILE8sQ0FBVkcsTTs7O0FBRW5CQyxNQUFNSCxLQUFOO0FBQ0FHLE1BQU1GLEtBQU47QUFDQUUsTUFBTUQsTUFBTiIsImZpbGUiOiIzOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gIyMjINCX0LDQtNCw0YfQsCAxXHJcbiDQlNCw0L3QviDRgdC70LXQtNGD0Y7RidC40Lkg0L7QsdGK0LXQutGCOlxyXG4gYGBgXHJcbiBsZXQgb3B0aW9ucyA9IHtcclxuIHRpdGxlOiBcIk1lbnVcIixcclxuIHdpZHRoOiAxMDAsXHJcbiBoZWlnaHQ6IDIwMFxyXG4gfTtcclxuIGBgYFxyXG4g0JjRgdC/0L7Qu9GM0LfRg9GPINC00LXRgdGC0YDRg9C60YLRg9GA0LjQt9Cw0YbQuNGOLCDQv9GA0LjRgdCy0L7QudGC0LUg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsCBvcHRpb25zINC/0LXRgNC10LzQtdC90L3Ri9C8INGBINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQvNC4INC40LzQtdC90LDQvNC4INC4INCy0YvQstC10LTQuNGC0LUg0LjRhSDQvdCwINGN0LrRgNCw0L0uICAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbmxldCBvcHRpb25zID0ge1xyXG4gICAgdGl0bGU6IFwiTWVudVwiLFxyXG4gICAgd2lkdGg6IDEwMCxcclxuICAgIGhlaWdodDogMjAwXHJcbn07XHJcblxyXG5sZXQge3RpdGxlLCB3aWR0aCwgaGVpZ2h0fSA9IG9wdGlvbnM7XHJcblxyXG5hbGVydCh0aXRsZSk7XHJcbmFsZXJ0KHdpZHRoKTtcclxuYWxlcnQoaGVpZ2h0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGVzc29uMjIvQ2xhc3N3b3JrL2NsYXNzd29yazIyXzEvbWFpbi5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });