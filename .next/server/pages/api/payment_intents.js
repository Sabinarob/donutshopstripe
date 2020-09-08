module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/payment_intents.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/payment_intents.js":
/*!**************************************!*\
  !*** ./pages/api/payment_intents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.SECRET_KEY);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === \"POST\") {\n    try {\n      const {\n        amount\n      } = req.body; // Psst. For production-ready applications we recommend not using the\n      // amount directly from the client without verifying it first. This is to\n      // prevent bad actors from changing the total amount on the client before\n      // it gets sent to the server. A good approach is to send the quantity of\n      // a uniquely identifiable product and calculate the total price server-side.\n      // Then, you would only fulfill orders using the quantity you charged for.\n\n      const paymentIntent = await stripe.paymentIntents.create({\n        amount,\n        currency: \"usd\",\n        metadata: {\n          integration_check: 'accept_a_payment'\n        }\n      });\n      res.status(200).send(paymentIntent.client_secret);\n    } catch (err) {\n      res.status(500).json({\n        statusCode: 500,\n        message: err.message\n      });\n    }\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method Not Allowed\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcGF5bWVudF9pbnRlbnRzLmpzPzc1NzQiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhbW91bnQiLCJib2R5IiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiY3VycmVuY3kiLCJtZXRhZGF0YSIsImludGVncmF0aW9uX2NoZWNrIiwic3RhdHVzIiwic2VuZCIsImNsaWVudF9zZWNyZXQiLCJlcnIiLCJqc29uIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDZDQUFKLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUF2QixDQUFmO0FBRWUsc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixRQUFJO0FBQ0YsWUFBTTtBQUFFQztBQUFGLFVBQWFILEdBQUcsQ0FBQ0ksSUFBdkIsQ0FERSxDQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFNQyxhQUFhLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxjQUFQLENBQXNCQyxNQUF0QixDQUE2QjtBQUN2REosY0FEdUQ7QUFFdkRLLGdCQUFRLEVBQUUsS0FGNkM7QUFHdkRDLGdCQUFRLEVBQUU7QUFBQ0MsMkJBQWlCLEVBQUU7QUFBcEI7QUFINkMsT0FBN0IsQ0FBNUI7QUFNQVQsU0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJQLGFBQWEsQ0FBQ1EsYUFBbkM7QUFDRCxLQWhCRCxDQWdCRSxPQUFPQyxHQUFQLEVBQVk7QUFDWmIsU0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUI7QUFBRUMsa0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxlQUFPLEVBQUVILEdBQUcsQ0FBQ0c7QUFBaEMsT0FBckI7QUFDRDtBQUNGLEdBcEJELE1Bb0JPO0FBQ0xoQixPQUFHLENBQUNpQixTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBakIsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQlEsR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRixDQXpCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wYXltZW50X2ludGVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGFtb3VudCB9ID0gcmVxLmJvZHk7XG4gICAgICAvLyBQc3N0LiBGb3IgcHJvZHVjdGlvbi1yZWFkeSBhcHBsaWNhdGlvbnMgd2UgcmVjb21tZW5kIG5vdCB1c2luZyB0aGVcbiAgICAgIC8vIGFtb3VudCBkaXJlY3RseSBmcm9tIHRoZSBjbGllbnQgd2l0aG91dCB2ZXJpZnlpbmcgaXQgZmlyc3QuIFRoaXMgaXMgdG9cbiAgICAgIC8vIHByZXZlbnQgYmFkIGFjdG9ycyBmcm9tIGNoYW5naW5nIHRoZSB0b3RhbCBhbW91bnQgb24gdGhlIGNsaWVudCBiZWZvcmVcbiAgICAgIC8vIGl0IGdldHMgc2VudCB0byB0aGUgc2VydmVyLiBBIGdvb2QgYXBwcm9hY2ggaXMgdG8gc2VuZCB0aGUgcXVhbnRpdHkgb2ZcbiAgICAgIC8vIGEgdW5pcXVlbHkgaWRlbnRpZmlhYmxlIHByb2R1Y3QgYW5kIGNhbGN1bGF0ZSB0aGUgdG90YWwgcHJpY2Ugc2VydmVyLXNpZGUuXG4gICAgICAvLyBUaGVuLCB5b3Ugd291bGQgb25seSBmdWxmaWxsIG9yZGVycyB1c2luZyB0aGUgcXVhbnRpdHkgeW91IGNoYXJnZWQgZm9yLlxuXG4gICAgICBjb25zdCBwYXltZW50SW50ZW50ID0gYXdhaXQgc3RyaXBlLnBheW1lbnRJbnRlbnRzLmNyZWF0ZSh7XG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgIG1ldGFkYXRhOiB7aW50ZWdyYXRpb25fY2hlY2s6ICdhY2NlcHRfYV9wYXltZW50J30sXG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQocGF5bWVudEludGVudC5jbGllbnRfc2VjcmV0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/payment_intents.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });