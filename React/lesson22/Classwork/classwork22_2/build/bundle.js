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
/******/ 	return __webpack_require__(__webpack_require__.s = 392);
/******/ })
/************************************************************************/
/******/ ({

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\r\n\r\n ### Задача 2\r\n Используя Promise, асинхронно загрузите на страницу файл image.jpg, находящийся в папке Classwork рядом с файлом с задачами.\r\n. */\n\nvar promise = new Promise(function (resolve, reject) {\n\n    var xhr = new XMLHttpRequest();\n    xhr.open('GET', 'image.jpg', false);\n\n    resolve(xhr.send());\n});\n\n// promise.then навешивает обработчики на успешный результат или ошибку\npromise.then(function (result) {\n\n    document.write(\"<img src='image.jpg'>\");\n}, function (error) {\n\n    alert(\"Error\"); // error - аргумент reject\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sZXNzb24yMi9DbGFzc3dvcmsvY2xhc3N3b3JrMjJfMi9tYWluLmpzeD8wZjBhIl0sIm5hbWVzIjpbInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJ0aGVuIiwicmVzdWx0IiwiZG9jdW1lbnQiLCJ3cml0ZSIsImVycm9yIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQU1BLElBQUlBLFVBQVUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjs7QUFHM0MsUUFBSUMsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsUUFBSUUsSUFBSixDQUFTLEtBQVQsRUFBZ0IsV0FBaEIsRUFBNkIsS0FBN0I7O0FBSUlKLFlBQVFFLElBQUlHLElBQUosRUFBUjtBQUdQLENBWGEsQ0FBZDs7QUFhQTtBQUNBUCxRQUNLUSxJQURMLENBRVEsVUFBQ0MsTUFBRCxFQUFZOztBQUVSQyxhQUFTQyxLQUFULENBQWUsdUJBQWY7QUFDSCxDQUxULEVBTVEsVUFBQ0MsS0FBRCxFQUFXOztBQUVQQyxVQUFNLE9BQU4sRUFGTyxDQUVTO0FBQ25CLENBVFQiLCJmaWxlIjoiMzkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuXHJcbiAjIyMg0JfQsNC00LDRh9CwIDJcclxuINCY0YHQv9C+0LvRjNC30YPRjyBQcm9taXNlLCDQsNGB0LjQvdGF0YDQvtC90L3QviDQt9Cw0LPRgNGD0LfQuNGC0LUg0L3QsCDRgdGC0YDQsNC90LjRhtGDINGE0LDQudC7IGltYWdlLmpwZywg0L3QsNGF0L7QtNGP0YnQuNC50YHRjyDQsiDQv9Cw0L/QutC1IENsYXNzd29yayDRgNGP0LTQvtC8INGBINGE0LDQudC70L7QvCDRgSDQt9Cw0LTQsNGH0LDQvNC4LlxyXG4uICovXHJcblxyXG5sZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcblxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsICdpbWFnZS5qcGcnLCBmYWxzZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmVzb2x2ZSh4aHIuc2VuZCgpKTtcclxuXHJcblxyXG59KTtcclxuXHJcbi8vIHByb21pc2UudGhlbiDQvdCw0LLQtdGI0LjQstCw0LXRgiDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC90LAg0YPRgdC/0LXRiNC90YvQuSDRgNC10LfRg9C70YzRgtCw0YIg0LjQu9C4INC+0YjQuNCx0LrRg1xyXG5wcm9taXNlXHJcbiAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC53cml0ZShcIjxpbWcgc3JjPSdpbWFnZS5qcGcnPlwiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBhbGVydChcIkVycm9yXCIpOyAvLyBlcnJvciAtINCw0YDQs9GD0LzQtdC90YIgcmVqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGVzc29uMjIvQ2xhc3N3b3JrL2NsYXNzd29yazIyXzIvbWFpbi5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });