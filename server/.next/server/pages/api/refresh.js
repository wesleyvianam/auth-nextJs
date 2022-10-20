"use strict";
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
exports.id = "pages/api/refresh";
exports.ids = ["pages/api/refresh"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "nedb":
/*!***********************!*\
  !*** external "nedb" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("nedb");

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nedb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nedb */ \"nedb\");\n/* harmony import */ var nedb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nedb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = {\n    users: new (nedb__WEBPACK_IMPORTED_MODULE_0___default())({\n        filename: './data/users.db',\n        autoload: true\n    })\n};\ndb.users.ensureIndex({\n    fieldName: 'username',\n    unique: true\n});\nconst videos = [\n    {\n        id: 'b273eff9-b963-49f1-923e-4a7d01f26d29',\n        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'\n    },\n    {\n        id: '9d4adbbe-84c1-4e2a-929d-9904dfca9c44',\n        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'\n    }, \n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    videos\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRCO0FBRXJCLEtBQUssQ0FBQ0MsRUFBRSxHQUFHLENBQUM7SUFDakJDLEtBQUssRUFBRSxHQUFHLENBQUNGLDZDQUFTLENBQUMsQ0FBQztRQUFDRyxRQUFRLEVBQUUsQ0FBaUI7UUFBRUMsUUFBUSxFQUFFLElBQUk7SUFBQyxDQUFDO0FBQ3RFLENBQUM7QUFDREgsRUFBRSxDQUFDQyxLQUFLLENBQUNHLFdBQVcsQ0FBQyxDQUFDO0lBQUNDLFNBQVMsRUFBRSxDQUFVO0lBQUVDLE1BQU0sRUFBRSxJQUFJO0FBQUMsQ0FBQztBQUU1RCxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2QsQ0FBQztRQUNDQyxFQUFFLEVBQUUsQ0FBc0M7UUFDMUNDLEdBQUcsRUFBRSxDQUE2QztJQUNwRCxDQUFDO0lBQ0QsQ0FBQztRQUNDRCxFQUFFLEVBQUUsQ0FBc0M7UUFDMUNDLEdBQUcsRUFBRSxDQUE2QztJQUNwRCxDQUFDO0FBQ0gsQ0FBQztBQUdELGlFQUFlLENBQUM7SUFDZEYsTUFBTTtBQUNSLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1cnNvMDMtbmV4dGpzLWJhY2svLi9kYi5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhc3RvcmUgZnJvbSAnbmVkYic7XG5cbmV4cG9ydCBjb25zdCBkYiA9IHtcbiAgdXNlcnM6IG5ldyBEYXRhc3RvcmUoeyBmaWxlbmFtZTogJy4vZGF0YS91c2Vycy5kYicsIGF1dG9sb2FkOiB0cnVlIH0pLFxufTtcbmRiLnVzZXJzLmVuc3VyZUluZGV4KHsgZmllbGROYW1lOiAndXNlcm5hbWUnLCB1bmlxdWU6IHRydWUgfSk7XG5cbmNvbnN0IHZpZGVvcyA9IFtcbiAge1xuICAgIGlkOiAnYjI3M2VmZjktYjk2My00OWYxLTkyM2UtNGE3ZDAxZjI2ZDI5JyxcbiAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnOWQ0YWRiYmUtODRjMS00ZTJhLTkyOWQtOTkwNGRmY2E5YzQ0JyxcbiAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJyxcbiAgfSxcbl1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZpZGVvcyxcbn07XG4iXSwibmFtZXMiOlsiRGF0YXN0b3JlIiwiZGIiLCJ1c2VycyIsImZpbGVuYW1lIiwiYXV0b2xvYWQiLCJlbnN1cmVJbmRleCIsImZpZWxkTmFtZSIsInVuaXF1ZSIsInZpZGVvcyIsImlkIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/refresh.js":
/*!******************************!*\
  !*** ./pages/api/refresh.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\n/* harmony import */ var _src_services_authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/services/authService */ \"(api)/./src/services/authService.js\");\n\n\nconst controllers = {\n    async refreshTokens (req, res) {\n        const { refresh_token  } = req.body;\n        try {\n            const { sub  } = await _src_services_authService__WEBPACK_IMPORTED_MODULE_1__.authService.validateRefreshToken(refresh_token);\n            _db__WEBPACK_IMPORTED_MODULE_0__.db.users.findOne({\n                _id: sub,\n                refresh_token\n            }, async function(err1, user) {\n                if (err1) return res.status(500).json({\n                    error: {\n                        status: 500,\n                        message: 'Internal server error'\n                    }\n                });\n                if (!(user === null || user === void 0 ? void 0 : user._id)) {\n                    return res.status(401).json({\n                        error: {\n                            status: 401,\n                            message: 'Invalid refresh token, please login again.'\n                        }\n                    });\n                }\n                const tokens = {\n                    access_token: await _src_services_authService__WEBPACK_IMPORTED_MODULE_1__.authService.generateAccessToken(sub),\n                    refresh_token: await _src_services_authService__WEBPACK_IMPORTED_MODULE_1__.authService.generateRefreshToken(sub)\n                };\n                _db__WEBPACK_IMPORTED_MODULE_0__.db.users.update({\n                    _id: sub\n                }, {\n                    $set: {\n                        refresh_token: tokens.refresh_token\n                    }\n                }, function(err) {\n                    if (err) throw new Error('Not avaiable to set refresh token');\n                    return res.status(200).json({\n                        data: tokens\n                    });\n                });\n            });\n        } catch (err) {\n            return res.status(401).json({\n                error: {\n                    status: 401,\n                    message: 'Invalid refresh token, please login again.'\n                }\n            });\n        }\n    }\n};\nconst controllerBy = {\n    POST: controllers.refreshTokens\n};\n/**\n * @swagger\n * /api/refresh:\n *   post:\n *     summary: Regenerate the user tokens\n *     requestBody:\n *        content:\n *          application/json:\n *             schema:\n *                properties: \n *                   refresh_token:\n *                      type: string\n *                      default: omariosouto\n *                      description: You have to login first to get a refresh token\n *     responses:\n *       200:\n *         description: You refresh token is valid, you can refresh it.\n *       401:\n *         description: You are not authorized, refresh token invalid\n */ function handle(req, res) {\n    if (controllerBy[req.method]) return controllerBy[req.method](req, res);\n    res.status(404).json({\n        status: 404,\n        message: 'Not Found'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMwQixNQUFNLEdBQUcsTUFBTSxDQUFDSCxZQUFZLENBQUN2QixHQUFHLENBQUMwQixNQUFNLEVBQUUxQixHQUFHLEVBQUVDLEdBQUc7SUFFdEVBLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFDcEJELE1BQU0sRUFBRSxHQUFHO1FBQ1hHLE9BQU8sRUFBRSxDQUFXO0lBQ3RCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc28wMy1uZXh0anMtYmFjay8uL3BhZ2VzL2FwaS9yZWZyZXNoLmpzP2RlYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9kYic7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoU2VydmljZSc7XG5cbmNvbnN0IGNvbnRyb2xsZXJzID0ge1xuICBhc3luYyByZWZyZXNoVG9rZW5zKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyByZWZyZXNoX3Rva2VuIH0gPSByZXEuYm9keTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHN1YiB9ID0gYXdhaXQgYXV0aFNlcnZpY2UudmFsaWRhdGVSZWZyZXNoVG9rZW4ocmVmcmVzaF90b2tlbik7XG5cbiAgICAgIGRiLnVzZXJzLmZpbmRPbmUoeyBfaWQ6IHN1YiwgcmVmcmVzaF90b2tlbiB9LCBhc3luYyBmdW5jdGlvbiAoZXJyLCB1c2VyKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiB7IHN0YXR1czogNTAwLCBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJywgfSB9KTtcblxuICAgICAgICBpZighdXNlcj8uX2lkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCByZWZyZXNoIHRva2VuLCBwbGVhc2UgbG9naW4gYWdhaW4uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRva2VucyA9IHtcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IGF3YWl0IGF1dGhTZXJ2aWNlLmdlbmVyYXRlQWNjZXNzVG9rZW4oc3ViKSxcbiAgICAgICAgICByZWZyZXNoX3Rva2VuOiBhd2FpdCBhdXRoU2VydmljZS5nZW5lcmF0ZVJlZnJlc2hUb2tlbihzdWIpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRiLnVzZXJzLnVwZGF0ZSh7IF9pZDogc3ViIH0sIHsgJHNldDogeyByZWZyZXNoX3Rva2VuOiB0b2tlbnMucmVmcmVzaF90b2tlbiB9IH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhdmFpYWJsZSB0byBzZXQgcmVmcmVzaCB0b2tlbicpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBkYXRhOiB0b2tlbnMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgcmVmcmVzaCB0b2tlbiwgcGxlYXNlIGxvZ2luIGFnYWluLicsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn1cblxuY29uc3QgY29udHJvbGxlckJ5ID0ge1xuICBQT1NUOiBjb250cm9sbGVycy5yZWZyZXNoVG9rZW5zLFxufVxuXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiAvYXBpL3JlZnJlc2g6XG4gKiAgIHBvc3Q6XG4gKiAgICAgc3VtbWFyeTogUmVnZW5lcmF0ZSB0aGUgdXNlciB0b2tlbnNcbiAqICAgICByZXF1ZXN0Qm9keTpcbiAqICAgICAgICBjb250ZW50OlxuICogICAgICAgICAgYXBwbGljYXRpb24vanNvbjpcbiAqICAgICAgICAgICAgIHNjaGVtYTpcbiAqICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFxuICogICAgICAgICAgICAgICAgICAgcmVmcmVzaF90b2tlbjpcbiAqICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogb21hcmlvc291dG9cbiAqICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBZb3UgaGF2ZSB0byBsb2dpbiBmaXJzdCB0byBnZXQgYSByZWZyZXNoIHRva2VuXG4gKiAgICAgcmVzcG9uc2VzOlxuICogICAgICAgMjAwOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogWW91IHJlZnJlc2ggdG9rZW4gaXMgdmFsaWQsIHlvdSBjYW4gcmVmcmVzaCBpdC5cbiAqICAgICAgIDQwMTpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFlvdSBhcmUgbm90IGF1dGhvcml6ZWQsIHJlZnJlc2ggdG9rZW4gaW52YWxpZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgaWYgKGNvbnRyb2xsZXJCeVtyZXEubWV0aG9kXSkgcmV0dXJuIGNvbnRyb2xsZXJCeVtyZXEubWV0aG9kXShyZXEsIHJlcyk7XG5cbiAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgIHN0YXR1czogNDA0LFxuICAgIG1lc3NhZ2U6ICdOb3QgRm91bmQnXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImRiIiwiYXV0aFNlcnZpY2UiLCJjb250cm9sbGVycyIsInJlZnJlc2hUb2tlbnMiLCJyZXEiLCJyZXMiLCJyZWZyZXNoX3Rva2VuIiwiYm9keSIsInN1YiIsInZhbGlkYXRlUmVmcmVzaFRva2VuIiwidXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiZXJyIiwidXNlciIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJ0b2tlbnMiLCJhY2Nlc3NfdG9rZW4iLCJnZW5lcmF0ZUFjY2Vzc1Rva2VuIiwiZ2VuZXJhdGVSZWZyZXNoVG9rZW4iLCJ1cGRhdGUiLCIkc2V0IiwiRXJyb3IiLCJkYXRhIiwiY29udHJvbGxlckJ5IiwiUE9TVCIsImhhbmRsZSIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/refresh.js\n");

/***/ }),

/***/ "(api)/./src/services/authService.js":
/*!*************************************!*\
  !*** ./src/services/authService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authService\": () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_getTokenFromHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getTokenFromHeaders */ \"(api)/./src/utils/getTokenFromHeaders.js\");\n\n\nconst ACCESSTOKEN_SECRET = process.env.ACCESSTOKEN_SECRET;\nconst ACCESSTOKEN_EXPIRATION = '5s';\nconst REFRESHTOKEN_SECRET = process.env.REFRESHTOKEN_SECRET;\nconst REFRESHTOKEN_EXPIRATION = '7d';\nconst authService = {\n    async generateAccessToken (userId) {\n        return await jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n            roles: [\n                'user'\n            ]\n        }, ACCESSTOKEN_SECRET, {\n            subject: userId,\n            expiresIn: ACCESSTOKEN_EXPIRATION\n        });\n    },\n    async validateAccessToken (accessToken) {\n        return await jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(accessToken, ACCESSTOKEN_SECRET);\n    },\n    async isAuthenticated (req) {\n        const token = (0,_utils_getTokenFromHeaders__WEBPACK_IMPORTED_MODULE_1__.getTokenFromHeaders)(req);\n        try {\n            await authService.validateAccessToken(token);\n            return true;\n        } catch (err) {\n            return false;\n        }\n    },\n    async generateRefreshToken (userId) {\n        return await jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({}, REFRESHTOKEN_SECRET, {\n            subject: userId,\n            expiresIn: REFRESHTOKEN_EXPIRATION\n        });\n    },\n    async validateRefreshToken (refreshToken) {\n        return await jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(refreshToken, REFRESHTOKEN_SECRET);\n    },\n    async decodeToken (token) {\n        return await jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvYXV0aFNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNvQztBQUVsRSxLQUFLLENBQUNFLGtCQUFrQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Ysa0JBQWtCO0FBQ3pELEtBQUssQ0FBQ0csc0JBQXNCLEdBQUcsQ0FBSTtBQUNuQyxLQUFLLENBQUNDLG1CQUFtQixHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsbUJBQW1CO0FBQzNELEtBQUssQ0FBQ0MsdUJBQXVCLEdBQUcsQ0FBSTtBQUc3QixLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDO1VBQ2xCQyxtQkFBbUIsRUFBQ0MsTUFBTSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQ1Ysd0RBQVEsQ0FDakIsQ0FBQztZQUFDWSxLQUFLLEVBQUUsQ0FBQztnQkFBQSxDQUFNO1lBQUEsQ0FBQztRQUFDLENBQUMsRUFDbkJWLGtCQUFrQixFQUNsQixDQUFDO1lBQUNXLE9BQU8sRUFBRUgsTUFBTTtZQUFFSSxTQUFTLEVBQUVULHNCQUFzQjtRQUFDLENBQUM7SUFFOUQsQ0FBQztVQUNLVSxtQkFBbUIsRUFBQ0MsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQ2hCLDBEQUFVLENBQUNnQixXQUFXLEVBQUVkLGtCQUFrQjtJQUMzRCxDQUFDO1VBQ0tnQixlQUFlLEVBQUNDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHbkIsK0VBQW1CLENBQUNrQixHQUFHO1FBRXJDLEdBQUcsQ0FBQyxDQUFDO1lBQ0QsS0FBSyxDQUFDWCxXQUFXLENBQUNPLG1CQUFtQixDQUFDSyxLQUFLO1lBQzNDLE1BQU0sQ0FBQyxJQUFJO1FBQ2YsQ0FBQyxDQUFDLEtBQUssRUFBRUMsR0FBRyxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsS0FBSztRQUNoQixDQUFDO0lBQ0wsQ0FBQztVQUNLQyxvQkFBb0IsRUFBQ1osTUFBTSxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQ1Ysd0RBQVEsQ0FDakIsQ0FBQyxDQUFDLEVBQ0ZNLG1CQUFtQixFQUNuQixDQUFDO1lBQUNPLE9BQU8sRUFBRUgsTUFBTTtZQUFFSSxTQUFTLEVBQUVQLHVCQUF1QjtRQUFDLENBQUM7SUFFL0QsQ0FBQztVQUNLZ0Isb0JBQW9CLEVBQUNDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUN4QiwwREFBVSxDQUFDd0IsWUFBWSxFQUFFbEIsbUJBQW1CO0lBQzdELENBQUM7VUFDS21CLFdBQVcsRUFBQ0wsS0FBSyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQ3BCLDBEQUFVLENBQUNvQixLQUFLO0lBQ2pDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc28wMy1uZXh0anMtYmFjay8uL3NyYy9zZXJ2aWNlcy9hdXRoU2VydmljZS5qcz9jYzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IGdldFRva2VuRnJvbUhlYWRlcnMgfSBmcm9tICcuLi91dGlscy9nZXRUb2tlbkZyb21IZWFkZXJzJztcblxuY29uc3QgQUNDRVNTVE9LRU5fU0VDUkVUID0gcHJvY2Vzcy5lbnYuQUNDRVNTVE9LRU5fU0VDUkVUO1xuY29uc3QgQUNDRVNTVE9LRU5fRVhQSVJBVElPTiA9ICc1cyc7XG5jb25zdCBSRUZSRVNIVE9LRU5fU0VDUkVUID0gcHJvY2Vzcy5lbnYuUkVGUkVTSFRPS0VOX1NFQ1JFVDtcbmNvbnN0IFJFRlJFU0hUT0tFTl9FWFBJUkFUSU9OID0gJzdkJztcblxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSB7XG4gICAgYXN5bmMgZ2VuZXJhdGVBY2Nlc3NUb2tlbih1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGp3dC5zaWduKFxuICAgICAgICAgICAgeyByb2xlczogWyd1c2VyJ10gfSxcbiAgICAgICAgICAgIEFDQ0VTU1RPS0VOX1NFQ1JFVCxcbiAgICAgICAgICAgIHsgc3ViamVjdDogdXNlcklkLCBleHBpcmVzSW46IEFDQ0VTU1RPS0VOX0VYUElSQVRJT04gfVxuICAgICAgICApO1xuICAgIH0sXG4gICAgYXN5bmMgdmFsaWRhdGVBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbikge1xuICAgICAgICByZXR1cm4gYXdhaXQgand0LnZlcmlmeShhY2Nlc3NUb2tlbiwgQUNDRVNTVE9LRU5fU0VDUkVUKTtcbiAgICB9LFxuICAgIGFzeW5jIGlzQXV0aGVudGljYXRlZChyZXEpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbkZyb21IZWFkZXJzKHJlcSk7XG4gICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBhdXRoU2VydmljZS52YWxpZGF0ZUFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHsgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZ2VuZXJhdGVSZWZyZXNoVG9rZW4odXNlcklkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBqd3Quc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgUkVGUkVTSFRPS0VOX1NFQ1JFVCxcbiAgICAgICAgICAgIHsgc3ViamVjdDogdXNlcklkLCBleHBpcmVzSW46IFJFRlJFU0hUT0tFTl9FWFBJUkFUSU9OIH1cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIGFzeW5jIHZhbGlkYXRlUmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbikge1xuICAgICAgICByZXR1cm4gYXdhaXQgand0LnZlcmlmeShyZWZyZXNoVG9rZW4sIFJFRlJFU0hUT0tFTl9TRUNSRVQpO1xuICAgIH0sXG4gICAgYXN5bmMgZGVjb2RlVG9rZW4odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGp3dC5kZWNvZGUodG9rZW4pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJnZXRUb2tlbkZyb21IZWFkZXJzIiwiQUNDRVNTVE9LRU5fU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU1RPS0VOX0VYUElSQVRJT04iLCJSRUZSRVNIVE9LRU5fU0VDUkVUIiwiUkVGUkVTSFRPS0VOX0VYUElSQVRJT04iLCJhdXRoU2VydmljZSIsImdlbmVyYXRlQWNjZXNzVG9rZW4iLCJ1c2VySWQiLCJzaWduIiwicm9sZXMiLCJzdWJqZWN0IiwiZXhwaXJlc0luIiwidmFsaWRhdGVBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwidmVyaWZ5IiwiaXNBdXRoZW50aWNhdGVkIiwicmVxIiwidG9rZW4iLCJlcnIiLCJnZW5lcmF0ZVJlZnJlc2hUb2tlbiIsInZhbGlkYXRlUmVmcmVzaFRva2VuIiwicmVmcmVzaFRva2VuIiwiZGVjb2RlVG9rZW4iLCJkZWNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/authService.js\n");

/***/ }),

/***/ "(api)/./src/utils/getTokenFromHeaders.js":
/*!******************************************!*\
  !*** ./src/utils/getTokenFromHeaders.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTokenFromHeaders\": () => (/* binding */ getTokenFromHeaders)\n/* harmony export */ });\nfunction getTokenFromHeaders(req) {\n    const authHeader = req.headers['x-authorization'] || req.headers['authorization'] || '';\n    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[(authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ').length) - 1];\n    return token;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvZ2V0VG9rZW5Gcm9tSGVhZGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsbUJBQW1CLENBQUNDLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHRCxHQUFHLENBQUNFLE9BQU8sQ0FBQyxDQUFpQixxQkFBS0YsR0FBRyxDQUFDRSxPQUFPLENBQUMsQ0FBZSxtQkFBSyxDQUFFO0lBQ3ZGLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsVUFBVSxDQUFFRyxLQUFLLENBQUMsQ0FBRyxLQUFFSCxVQUFVLGFBQVZBLFVBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsVUFBVSxDQUFFRyxLQUFLLENBQUMsQ0FBRyxJQUFFQyxNQUFNLElBQUcsQ0FBQztJQUN0RSxNQUFNLENBQUNGLEtBQUs7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc28wMy1uZXh0anMtYmFjay8uL3NyYy91dGlscy9nZXRUb2tlbkZyb21IZWFkZXJzLmpzP2E0MGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuRnJvbUhlYWRlcnMocmVxKSB7XG4gIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVyc1sneC1hdXRob3JpemF0aW9uJ10gfHwgcmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXSB8fCAnJztcbiAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyPy5zcGxpdCgnICcpW2F1dGhIZWFkZXI/LnNwbGl0KCcgJykubGVuZ3RoIC0gMV07XG4gIHJldHVybiB0b2tlbjtcbn1cbiJdLCJuYW1lcyI6WyJnZXRUb2tlbkZyb21IZWFkZXJzIiwicmVxIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJ0b2tlbiIsInNwbGl0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/getTokenFromHeaders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/refresh.js"));
module.exports = __webpack_exports__;

})();