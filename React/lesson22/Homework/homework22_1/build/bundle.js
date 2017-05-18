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
/******/ 	return __webpack_require__(__webpack_require__.s = 280);
/******/ })
/************************************************************************/
/******/ ({

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n ### Задача 1\r\n Создайте класс Person со слеюующими свойствами:\r\n *  Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”), lastName(значение по умолчанию – “Doe”),\r\n *  age(по умолчанию, если свойство не указано, то 0)  и gender(по умолчанию – “Male”).\r\n *  Значения записываются в this.firstName, this.lastName, this.age и this.gender соответственно.\r\n *  Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.\r\n *  Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.\r\n */\n\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Person = function () {\n    function Person() {\n        var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"John\";\n        var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Doe\";\n        var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n        var gender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"Male\";\n\n        _classCallCheck(this, Person);\n\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.age = age;\n        this.gender = gender;\n    }\n\n    _createClass(Person, [{\n        key: \"fullName\",\n        value: function fullName() {\n            return this.firstName + \" \" + this.lastName;\n        }\n    }, {\n        key: \"sayHi\",\n        value: function sayHi() {\n            alert(\"Hello, my  name is \" + this.fullName());\n        }\n    }]);\n\n    return Person;\n}();\n\nmodule.exports = Person;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sZXNzb24yMi9Ib21ld29yay9ob21ld29yazIyXzEvbWFpbi5qc3g/ZTMxNSJdLCJuYW1lcyI6WyJQZXJzb24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImdlbmRlciIsImFsZXJ0IiwiZnVsbE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7SUFJTUEsTTtBQUdGLHNCQUEyRTtBQUFBLFlBQS9EQyxTQUErRCx1RUFBbkQsTUFBbUQ7QUFBQSxZQUEzQ0MsUUFBMkMsdUVBQWhDLEtBQWdDO0FBQUEsWUFBekJDLEdBQXlCLHVFQUFuQixDQUFtQjtBQUFBLFlBQWhCQyxNQUFnQix1RUFBUCxNQUFPOztBQUFBOztBQUl2RSxhQUFLSCxTQUFMLEdBQWVBLFNBQWY7QUFDQSxhQUFLQyxRQUFMLEdBQWNBLFFBQWQ7QUFDQSxhQUFLQyxHQUFMLEdBQVNBLEdBQVQ7QUFDQSxhQUFLQyxNQUFMLEdBQVlBLE1BQVo7QUFHSDs7OzttQ0FFUztBQUNOLG1CQUFPLEtBQUtILFNBQUwsR0FBZSxHQUFmLEdBQW1CLEtBQUtDLFFBQS9CO0FBQ0g7OztnQ0FFTTtBQUNIRyxrQkFBTSx3QkFBd0IsS0FBS0MsUUFBTCxFQUE5QjtBQUNIOzs7Ozs7QUFJTEMsT0FBT0MsT0FBUCxHQUFpQlIsTUFBakIiLCJmaWxlIjoiMjgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICMjIyDQl9Cw0LTQsNGH0LAgMVxyXG4g0KHQvtC30LTQsNC50YLQtSDQutC70LDRgdGBIFBlcnNvbiDRgdC+INGB0LvQtdGO0YPRjtGJ0LjQvNC4INGB0LLQvtC50YHRgtCy0LDQvNC4OlxyXG4gKiAg0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQv9GA0LjQvdC40LzQsNC10YIgNCDQsNGA0LPRg9C80LXQvdGC0LA6IGZpcnN0TmFtZSjQt9C90LDRh9C10L3QuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIOKAkyDigJxKb2hu4oCdKSwgbGFzdE5hbWUo0LfQvdCw0YfQtdC90LjQtSDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDigJMg4oCcRG9l4oCdKSxcclxuICogIGFnZSjQv9C+INGD0LzQvtC70YfQsNC90LjRjiwg0LXRgdC70Lgg0YHQstC+0LnRgdGC0LLQviDQvdC1INGD0LrQsNC30LDQvdC+LCDRgtC+IDApICDQuCBnZW5kZXIo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g4oCTIOKAnE1hbGXigJ0pLlxyXG4gKiAg0JfQvdCw0YfQtdC90LjRjyDQt9Cw0L/QuNGB0YvQstCw0Y7RgtGB0Y8g0LIgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUsIHRoaXMuYWdlINC4IHRoaXMuZ2VuZGVyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LXQvdC90L4uXHJcbiAqICDQnNC10YLQvtC0IGZ1bGxOYW1lLCDQutC+0YLQvtGA0YvQuSDQvdC1INC/0YDQuNC90LjQvNCw0LXRgiDQsNGA0LPRg9C80LXQvdGC0L7QsiDQuCDQstC+0LfQstGA0LDRidCw0LXRgiDQv9C+0LvQvdC+0LUg0LjQvNGPOiBlLmcuIOKAnEpvbiBEb2XigJ0uXHJcbiAqICDQnNC10YLQvtC0IHNheUhpLCDQutC+0YLQvtGA0YvQuSDQstGL0LLQvtC00LjRgiDQvdCwINGN0LrRgNCw0L0g0YLQtdC60YHRgiDigJxIZWxsbywgbXkgIG5hbWUgaXMg4oCcICsgZnVsbE5hbWUuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBQZXJzb257XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSA9IFwiSm9oblwiLCBsYXN0TmFtZSA9IFwiRG9lXCIsIGFnZSA9IDAsIGdlbmRlciA9IFwiTWFsZVwiKXtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmZpcnN0TmFtZT1maXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZT1sYXN0TmFtZTtcclxuICAgICAgICB0aGlzLmFnZT1hZ2U7XHJcbiAgICAgICAgdGhpcy5nZW5kZXI9Z2VuZGVyO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVsbE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWUrXCIgXCIrdGhpcy5sYXN0TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXlIaSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiSGVsbG8sIG15ICBuYW1lIGlzIFwiICsgdGhpcy5mdWxsTmFtZSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGVyc29uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9sZXNzb24yMi9Ib21ld29yay9ob21ld29yazIyXzEvbWFpbi5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });