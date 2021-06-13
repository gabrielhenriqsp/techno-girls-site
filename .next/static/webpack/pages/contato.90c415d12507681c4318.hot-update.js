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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "msg-sucesos",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  className: "alert alert-success",
                  children: "Formul\xE1rio enviado com sucesso!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 62
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "msg-error",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  className: "alert",
                  children: "Erro ao enviar Formul\xE1rio!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 60
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
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
                        lineNumber: 88,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
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
                        lineNumber: 93,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
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
                        lineNumber: 98,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
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
                        lineNumber: 103,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
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
                        lineNumber: 108,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
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
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRhdG8udHN4Il0sIm5hbWVzIjpbInNlbmRDb250YWN0IiwibmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImVtYWlsIiwiYXNzdW50byIsIm1zZyIsImJvZHlNc2ciLCJheGlvcyIsInJlcXVpcmUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiJCIsInNob3ciLCJ0cmlnZ2VyIiwiZXJyb3IiLCJDb250YWN0IiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxTQUFlQSxXQUF0QjtBQUFBO0FBQUE7Ozt1U0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsZ0JBREQsR0FDU0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQUQsQ0FBc0RDLEtBRDlEO0FBRUNDLGlCQUZELEdBRVVILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFELENBQXVEQyxLQUZoRTtBQUdDRSxtQkFIRCxHQUdZSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBRCxDQUF5REMsS0FIcEU7QUFJQ0csZUFKRCxHQUlRTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBRCxDQUEwREMsS0FKakU7QUFPQ0ksbUJBUEQsR0FPVyxXQUFXUCxJQUFYLEdBQ1YsZ0JBRFUsR0FDU0ksS0FEVCxHQUVWLGlCQUZVLEdBRVVDLE9BRlYsR0FHVixrQkFIVSxHQUdXQyxHQVZ0QjtBQVlDRSxpQkFaRCxHQVlTQyxtQkFBTyxDQUFDLDRDQUFELENBWmhCO0FBYUNDLGdCQWJELEdBYVFDLElBQUksQ0FBQ0MsU0FBTCxDQUNQO0FBQ0ksdUJBQ0E7QUFDSSwyQkFBVyx3QkFEZjtBQUVJLHdC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bUNBQVcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBaEJKLGVBcUJJO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsMkNBQ0k7QUFBQSw2Q0FDSTtBQUFRLDRCQUFJLEVBQUMsUUFBYjtBQUFzQiwwQkFBRSxFQUFDLGFBQXpCO0FBQXVDLGlDQUFTLEVBQUMsZUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUErREk7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUVIO0tBcEV1QjBCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGF0by45MGM0MTVkMTI1MDc2ODFjNDMxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kQ29udGFjdCgpIHtcclxuICAgIHZhciBuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTm9tZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHZhciBlbWFpbCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdmFyIGFzc3VudG8gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBc3N1bnRvXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdmFyIG1zZyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1lbnNhZ2VtXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG5cclxuXHJcbiAgICB2YXIgYm9keU1zZyA9IFwiTm9tZTogXCIgKyBuYW1lICtcclxuICAgICAgICBcIjxicj5cXG4gRS1tYWlsIFwiICsgZW1haWwgK1xyXG4gICAgICAgIFwiPGJyPlxcbiBBc3N1bnRvIFwiICsgYXNzdW50byArXHJcbiAgICAgICAgXCI8YnI+XFxuIE1lbnNhZ2VtIFwiICsgbXNnO1xyXG5cclxuICAgIHZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbiAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlbWFpbFwiOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInN1YmplY3RcIjogXCJDb250YXRvIC0gVGVjaG5vIEdpcmxzXCIsXHJcbiAgICAgICAgICAgICAgICBcImJvZHlcIjogYm9keU1zZyxcclxuICAgICAgICAgICAgICAgIFwicmVwbGF5RW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBcInJlcGxheU5hbWVcIjogbmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzc0VtYWlsXCI6IFwiZ2FicmllbGhlbnJpcXVlc3BAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NOYW1lXCI6IFwiR2FicmllbCBOYW1lXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9nYWJyaWVsaGVucmlxLmNvbS5ici9zZW5kL3NlbmQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ3VzZXInOiAnYXBpLXNlbmRlci11c2VyJyxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogJzEyMzQ1Njc4OUAnLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGF4aW9zKGNvbmZpZylcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICAkKFwiLm1zZy1zdWNlc29zXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiNjb250YXRvXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgJChcIi5tc2ctZXJyb3JcIikuc2hvdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nIGFib3V0LWhlYWRpbmcgaGVhZGVyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNvbnRhdG88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlc3QtZmVhdHVyZXMgYWJvdXQtZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVudHJlIGVtIGNvbnRhdG8gY29ub3NjbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21zZy1zdWNlc29zJz48c3BhbiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+Rm9ybXVsw6FyaW8gZW52aWFkbyBjb20gc3VjZXNzbyE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21zZy1lcnJvcic+PHNwYW4gY2xhc3NOYW1lPVwiYWxlcnRcIj5FcnJvIGFvIGVudmlhciBGb3JtdWzDoXJpbyE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZENvbnRhY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250YXRvXCIgbmFtZT1cImNvbnRhdG9cIiBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJOb21lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIk5vbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiRW1haWxcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiRW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJBc3N1bnRvXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkFzc3VudG9cIiBwbGFjZWhvbGRlcj1cIkFzc3VudG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIk1lbnNhZ2VtXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJNZW5zYWdlbVwiIHBsYWNlaG9sZGVyPVwiTWVuc2FnZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImZvcm0tc3VibWl0XCIgY2xhc3NOYW1lPVwiZmlsbGVkLWJ1dHRvblwiPkVudmlhciBNZW5zYWdlbTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uLy4uL2pzL3ZhbGlkYXRlLmpzXCIgLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==