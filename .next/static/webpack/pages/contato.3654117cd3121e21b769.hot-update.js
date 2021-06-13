self["webpackHotUpdate_N_E"]("pages/contato",{

/***/ "./src/pages/contato.tsx":
/*!*******************************!*\
  !*** ./src/pages/contato.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendContact": function() { return /* binding */ sendContact; },
/* harmony export */   "default": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\technoe-girl\\tech\\src\\pages\\contato.tsx";
function sendContact() {
  return _sendContact.apply(this, arguments);
}

function _sendContact() {
  _sendContact = (0,C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var name, email, assunto, msg, bodyMsg, axios, data, config;
    return C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = document.getElementById("Nome").value;
            email = document.getElementById("Email").value;
            assunto = document.getElementById("Assunto").value;
            msg = document.getElementById("Mensagem").value;
            bodyMsg = "Nome: " + name + "<br>\n E-mail " + email + "<br>\n Assunto " + assunto + "<br>\n Mensagem " + msg;
            axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            data = JSON.stringify({
              "email": {
                "subject": "Contato - Techno Girls",
                "body": bodyMsg,
                "replayEmail": email,
                "replayName": name,
                "addressEmail": "gabrielhenriquesp@gmail.com",
                "addressName": "Gabriel Name"
              }
            });
            config = {
              method: 'post',
              url: 'https://gabrielhenriq.com.br/send/send',
              headers: {
                'user': 'api-sender-user',
                'password': '123456789@',
                'Content-Type': 'application/json'
              },
              data: data
            };
            axios(config).then(function (response) {
              console.log(JSON.stringify(response.data));
              $(".msg-sucesos").show();
              $("#contato").trigger("reset");
            })["catch"](function (error) {
              $(".msg-error").show();
              console.log(error);
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendContact.apply(this, arguments);
}

function Contact() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "page-heading about-heading header-text",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-md-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text-content",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                children: "Contato"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "best-features about-features",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-md-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "section-heading",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "Entre em contato conosco"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "contact-form",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                onSubmit: /*#__PURE__*/function () {
                  var _ref = (0,C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
                    return C_Users_Gabriel_Desktop_technoe_girl_tech_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            e.preventDefault();
                            sendContact();

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }(),
                id: "contato",
                name: "contato",
                method: "POST",
                action: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "col-lg-12 col-md-12 col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        name: "Nome",
                        type: "text",
                        className: "form-control",
                        id: "Nome",
                        placeholder: "Nome"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "col-lg-12 col-md-12 col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        name: "Email",
                        type: "text",
                        className: "form-control",
                        id: "Email",
                        placeholder: "E-Mail"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "col-lg-12 col-md-12 col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        name: "Assunto",
                        type: "text",
                        className: "form-control",
                        id: "Assunto",
                        placeholder: "Assunto"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
                        name: "Mensagem",
                        className: "form-control",
                        id: "Mensagem",
                        placeholder: "Mensagem"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                        type: "submit",
                        id: "form-submit",
                        className: "filled-button",
                        children: "Enviar Mensagem"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("script", {
      src: "../../js/validate.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, this);
}
_c = Contact;

var _c;

$RefreshReg$(_c, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRhdG8udHN4Il0sIm5hbWVzIjpbInNlbmRDb250YWN0IiwibmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImVtYWlsIiwiYXNzdW50byIsIm1zZyIsImJvZHlNc2ciLCJheGlvcyIsInJlcXVpcmUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiJCIsInNob3ciLCJ0cmlnZ2VyIiwiZXJyb3IiLCJDb250YWN0IiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxTQUFlQSxXQUF0QjtBQUFBO0FBQUE7Ozt1U0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsZ0JBREQsR0FDU0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQUQsQ0FBc0RDLEtBRDlEO0FBRUNDLGlCQUZELEdBRVVILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFELENBQXVEQyxLQUZoRTtBQUdDRSxtQkFIRCxHQUdZSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBRCxDQUF5REMsS0FIcEU7QUFJQ0csZUFKRCxHQUlRTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBRCxDQUEwREMsS0FKakU7QUFPQ0ksbUJBUEQsR0FPVyxXQUFXUCxJQUFYLEdBQ1YsZ0JBRFUsR0FDU0ksS0FEVCxHQUVWLGlCQUZVLEdBRVVDLE9BRlYsR0FHVixrQkFIVSxHQUdXQyxHQVZ0QjtBQVlDRSxpQkFaRCxHQVlTQyxtQkFBTyxDQUFDLDRDQUFELENBWmhCO0FBYUNDLGdCQWJELEdBYVFDLElBQUksQ0FBQ0MsU0FBTCxDQUNQO0FBQ0ksdUJBQ0E7QUFDSSwyQkFBVyx3QkFEZjtBQUVJLHdC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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBNkRJO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlFSDtLQWxFdUIwQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhdG8uMzY1NDExN2NkMzEyMWUyMWI3NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3QoKSB7XHJcbiAgICB2YXIgbmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5vbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB2YXIgZW1haWwgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJFbWFpbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHZhciBhc3N1bnRvID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXNzdW50b1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHZhciBtc2cgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNZW5zYWdlbVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuXHJcblxyXG4gICAgdmFyIGJvZHlNc2cgPSBcIk5vbWU6IFwiICsgbmFtZSArXHJcbiAgICAgICAgXCI8YnI+XFxuIEUtbWFpbCBcIiArIGVtYWlsICtcclxuICAgICAgICBcIjxicj5cXG4gQXNzdW50byBcIiArIGFzc3VudG8gK1xyXG4gICAgICAgIFwiPGJyPlxcbiBNZW5zYWdlbSBcIiArIG1zZztcclxuXHJcbiAgICB2YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG4gICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZW1haWxcIjpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzdWJqZWN0XCI6IFwiQ29udGF0byAtIFRlY2hubyBHaXJsc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJib2R5XCI6IGJvZHlNc2csXHJcbiAgICAgICAgICAgICAgICBcInJlcGxheUVtYWlsXCI6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgXCJyZXBsYXlOYW1lXCI6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NFbWFpbFwiOiBcImdhYnJpZWxoZW5yaXF1ZXNwQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzTmFtZVwiOiBcIkdhYnJpZWwgTmFtZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ2FicmllbGhlbnJpcS5jb20uYnIvc2VuZC9zZW5kJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICd1c2VyJzogJ2FwaS1zZW5kZXItdXNlcicsXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6ICcxMjM0NTY3ODlAJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfTtcclxuXHJcbiAgICBheGlvcyhjb25maWcpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICAgICAgJChcIi5tc2ctc3VjZXNvc1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjY29udGF0b1wiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICQoXCIubXNnLWVycm9yXCIpLnNob3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZyBhYm91dC1oZWFkaW5nIGhlYWRlci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Db250YXRvPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZXN0LWZlYXR1cmVzIGFib3V0LWZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbnRyZSBlbSBjb250YXRvIGNvbm9zY288L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRDb250YWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGF0b1wiIG5hbWU9XCJjb250YXRvXCIgbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiTm9tZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJOb21lXCIgcGxhY2Vob2xkZXI9XCJOb21lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIkVtYWlsXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLU1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiQXNzdW50b1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJBc3N1bnRvXCIgcGxhY2Vob2xkZXI9XCJBc3N1bnRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJNZW5zYWdlbVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiTWVuc2FnZW1cIiBwbGFjZWhvbGRlcj1cIk1lbnNhZ2VtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJmb3JtLXN1Ym1pdFwiIGNsYXNzTmFtZT1cImZpbGxlZC1idXR0b25cIj5FbnZpYXIgTWVuc2FnZW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi8uLi9qcy92YWxpZGF0ZS5qc1wiIC8+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=