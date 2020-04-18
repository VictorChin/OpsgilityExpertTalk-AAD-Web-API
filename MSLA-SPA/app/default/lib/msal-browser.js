/*! @azure/msal-browser v2.0.0-beta.0 2020-04-15 */
'use strict';
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.msal = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /*! @azure/msal-common v1.0.0-beta.0 2020-04-15 */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };

    function __awaiter$1(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * AuthErrorMessage class containing string constants used by error codes and messages.
     */
    var AuthErrorMessage = {
        unexpectedError: {
            code: "unexpected_error",
            desc: "Unexpected error in authentication."
        }
    };
    /**
     * General error class thrown by the MSAL.js library.
     */
    var AuthError = /** @class */ (function (_super) {
        __extends$1(AuthError, _super);
        function AuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            Object.setPrototypeOf(_this, AuthError.prototype);
            _this.errorCode = errorCode;
            _this.errorMessage = errorMessage;
            _this.name = "AuthError";
            return _this;
        }
        /**
         * Creates an error that is thrown when something unexpected happens in the library.
         * @param errDesc
         */
        AuthError.createUnexpectedError = function (errDesc) {
            return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
        };
        return AuthError;
    }(Error));

    var name = "@azure/msal-common";
    var author = {
    	name: "Microsoft",
    	email: "nugetaad@microsoft.com",
    	url: "https://www.microsoft.com"
    };
    var license = "MIT";
    var repository = {
    	type: "git",
    	url: "https://github.com/AzureAD/microsoft-authentication-library-for-js.git"
    };
    var version = "1.0.0-beta.0";
    var description = "Microsoft Authentication Library for js";
    var keywords = [
    	"implicit",
    	"authorization code",
    	"PKCE",
    	"js",
    	"AAD",
    	"msal",
    	"oauth"
    ];
    var main = "./dist/index.js";
    var module = "./dist/index.es.js";
    var types = "./dist/src/index.d.ts";
    var browserslist = [
    	"last 1 version",
    	"> 1%",
    	"maintained node versions",
    	"not dead"
    ];
    var engines = {
    	node: ">=0.8.0"
    };
    var directories = {
    	test: "test"
    };
    var files = [
    	"dist"
    ];
    var scripts = {
    	clean: "shx rm -rf dist lib",
    	"clean:coverage": "rimraf ../../.nyc_output/*",
    	lint: "eslint src --ext .ts",
    	test: "mocha",
    	"test:coverage": "nyc --reporter=text mocha --exit",
    	"test:coverage:only": "npm run clean:coverage && npm run test:coverage",
    	"build:modules": "rollup -c",
    	"build:modules:watch": "rollup -cw",
    	build: "npm run clean && npm run lint && npm run build:modules",
    	prepack: "npm run build"
    };
    var devDependencies = {
    	"@babel/core": "^7.7.2",
    	"@babel/plugin-proposal-class-properties": "^7.7.0",
    	"@babel/plugin-proposal-object-rest-spread": "^7.6.2",
    	"@babel/polyfill": "^7.7.0",
    	"@babel/preset-env": "^7.7.1",
    	"@babel/preset-typescript": "^7.7.2",
    	"@babel/register": "^7.7.0",
    	"@istanbuljs/nyc-config-babel": "^2.1.1",
    	"@rollup/plugin-json": "^4.0.0",
    	"@types/chai": "^4.2.5",
    	"@types/chai-as-promised": "^7.1.2",
    	"@types/mocha": "^5.2.7",
    	"@types/sinon": "^7.5.0",
    	"@typescript-eslint/eslint-plugin": "^2.4.0",
    	"@typescript-eslint/eslint-plugin-tslint": "^2.4.0",
    	"@typescript-eslint/parser": "^2.4.0",
    	"babel-plugin-istanbul": "^5.2.0",
    	chai: "^4.2.0",
    	"chai-as-promised": "^7.1.1",
    	eslint: "^6.5.1",
    	husky: "^3.0.9",
    	mocha: "^6.2.2",
    	nyc: "^14.1.1",
    	rimraf: "^3.0.2",
    	rollup: "^1.24.0",
    	"rollup-plugin-typescript2": "^0.24.3",
    	"rollup-plugin-uglify": "^6.0.3",
    	shx: "^0.3.2",
    	sinon: "^7.5.0",
    	tslib: "^1.10.0",
    	tslint: "^5.20.0",
    	typescript: "^3.6.4"
    };
    var dependencies = {
    };
    var pkg = {
    	name: name,
    	author: author,
    	license: license,
    	repository: repository,
    	version: version,
    	description: description,
    	keywords: keywords,
    	main: main,
    	module: module,
    	types: types,
    	browserslist: browserslist,
    	engines: engines,
    	directories: directories,
    	files: files,
    	scripts: scripts,
    	devDependencies: devDependencies,
    	dependencies: dependencies
    };

    /**
     * ClientAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientAuthErrorMessage = {
        clientInfoDecodingError: {
            code: "client_info_decoding_error",
            desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoEmptyError: {
            code: "client_info_empty_error",
            desc: "The client info was empty. Please review the trace to determine the root cause."
        },
        idTokenParsingError: {
            code: "id_token_parsing_error",
            desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
        },
        nullOrEmptyIdToken: {
            code: "null_or_empty_id_token",
            desc: "The idToken is null or empty. Please review the trace to determine the root cause."
        },
        tokenRequestCacheError: {
            code: "token_request_cache_error",
            desc: "The token request could not be fetched from the cache correctly."
        },
        endpointResolutionError: {
            code: "endpoints_resolution_error",
            desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        invalidAuthorityType: {
            code: "invalid_authority_type",
            desc: "The given authority is not a valid type of authority supported by MSAL. Please review the trace to determine the root cause."
        },
        hashNotDeserialized: {
            code: "hash_not_deserialized",
            desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
        },
        blankGuidGenerated: {
            code: "blank_guid_generated",
            desc: "The guid generated was blank. Please review the trace to determine the root cause."
        },
        stateMismatchError: {
            code: "state_mismatch",
            desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
        },
        nonceMismatchError: {
            code: "nonce_mismatch",
            desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
        },
        accountMismatchError: {
            code: "account_mismatch",
            desc: "The cached account and account which made the token request do not match."
        },
        invalidIdToken: {
            code: "invalid_id_token",
            desc: "Invalid ID token format."
        },
        noTokensFoundError: {
            code: "no_tokens_found",
            desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
        },
        cacheParseError: {
            code: "cache_parse_error",
            desc: "Could not parse cache key."
        },
        userLoginRequiredError: {
            code: "user_login_error",
            desc: "User login is required."
        },
        multipleMatchingTokens: {
            code: "multiple_matching_tokens",
            desc: "The cache contains multiple tokens satisfying the requirements. " +
                "Call AcquireToken again providing more requirements such as authority, resource, or account."
        },
        tokenRequestCannotBeMade: {
            code: "request_cannot_be_made",
            desc: "Token request cannot be made without authorization code or refresh token."
        },
        appendEmptyScopeError: {
            code: "cannot_append_empty_scope",
            desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
        },
        removeEmptyScopeError: {
            code: "cannot_remove_empty_scope",
            desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
        },
        appendScopeSetError: {
            code: "cannot_append_scopeset",
            desc: "Cannot append ScopeSet due to error."
        },
        emptyInputScopeSetError: {
            code: "empty_input_scopeset",
            desc: "Empty input ScopeSet cannot be processed."
        }
    };
    /**
     * Error thrown when there is an error in the client code running on the browser.
     */
    var ClientAuthError = /** @class */ (function (_super) {
        __extends$1(ClientAuthError, _super);
        function ClientAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientAuthError";
            Object.setPrototypeOf(_this, ClientAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when client info object doesn't decode correctly.
         * @param caughtError
         */
        ClientAuthError.createClientInfoDecodingError = function (caughtError) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
        };
        /**
         * Creates an error thrown if the client info is empty.
         * @param rawClientInfo
         */
        ClientAuthError.createClientInfoEmptyError = function (rawClientInfo) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, ClientAuthErrorMessage.clientInfoEmptyError.desc + " Given Object: " + rawClientInfo);
        };
        /**
         * Creates an error thrown when the id token extraction errors out.
         * @param err
         */
        ClientAuthError.createIdTokenParsingError = function (caughtExtractionError) {
            return new ClientAuthError(ClientAuthErrorMessage.idTokenParsingError.code, ClientAuthErrorMessage.idTokenParsingError.desc + " Failed with error: " + caughtExtractionError);
        };
        /**
         * Creates an error thrown when the id token string is null or empty.
         * @param invalidRawTokenString
         */
        ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
            return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyIdToken.code, ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
        };
        /**
         * Creates an error thrown when the token request could not be retrieved from the cache
         * @param errDetail
         */
        ClientAuthError.createTokenRequestCacheError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCacheError.code, ClientAuthErrorMessage.tokenRequestCacheError.desc + " Error Detail: " + errDetail);
        };
        /**
         * Creates an error thrown when the endpoint discovery doesn't complete correctly.
         */
        ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
        };
        /**
         * Creates an error thrown if authority type is not valid.
         * @param invalidAuthorityError
         */
        ClientAuthError.createInvalidAuthorityTypeError = function (givenUrl) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidAuthorityType.code, ClientAuthErrorMessage.invalidAuthorityType.desc + " Given Url: " + givenUrl);
        };
        /**
         * Creates an error thrown when the hash cannot be deserialized.
         * @param invalidAuthorityError
         */
        ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
            return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
        };
        /**
         * Creates an error thrown when two states do not match.
         */
        ClientAuthError.createStateMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
        };
        /**
         * Creates an error thrown when the nonce does not match.
         */
        ClientAuthError.createNonceMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
        };
        /**
         * Creates an error thrown when the cached account and response account do not match.
         */
        ClientAuthError.createAccountMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.accountMismatchError.code, ClientAuthErrorMessage.accountMismatchError.desc);
        };
        /**
         * Throws error if idToken is not correctly formed
         * @param idToken
         */
        ClientAuthError.createInvalidIdTokenError = function (idToken) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidIdToken.code, ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + JSON.stringify(idToken));
        };
        /**
         * Creates an error thrown when the authorization code required for a token request is null or empty.
         */
        ClientAuthError.createNoTokensFoundError = function (scopes) {
            return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc + " Scopes: " + scopes);
        };
        /**
         * Creates an error in cache parsing.
         */
        ClientAuthError.createCacheParseError = function (cacheKey) {
            return new ClientAuthError(ClientAuthErrorMessage.cacheParseError.code, ClientAuthErrorMessage.cacheParseError.desc + " Cache key: " + cacheKey);
        };
        /**
         * Throws error when renewing token without login.
         */
        ClientAuthError.createUserLoginRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.userLoginRequiredError.code, ClientAuthErrorMessage.userLoginRequiredError.desc);
        };
        /**
         * Throws error when multiple tokens are in cache for the given scope.
         * @param scope
         */
        ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
        };
        /**
         * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
         */
        ClientAuthError.createTokenRequestCannotBeMadeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append null or empty ScopeSet.
         * @param appendError
         */
        ClientAuthError.createAppendScopeSetError = function (appendError) {
            return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
        };
        /**
         * Throws error if ScopeSet is null or undefined.
         * @param givenScopeSet
         */
        ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
            return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
        };
        return ClientAuthError;
    }(AuthError));

    /**
     * @hidden
     */
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * decode a JWT
         *
         * @param jwtToken
         */
        StringUtils.decodeJwt = function (jwtToken) {
            if (StringUtils.isEmpty(jwtToken)) {
                throw ClientAuthError.createIdTokenNullOrEmptyError(jwtToken);
            }
            var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
            var matches = idTokenPartsRegex.exec(jwtToken);
            if (!matches || matches.length < 4) {
                throw ClientAuthError.createIdTokenParsingError("Given token is malformed: " + JSON.stringify(jwtToken));
            }
            var crackedToken = {
                header: matches[1],
                JWSPayload: matches[2],
                JWSSig: matches[3]
            };
            return crackedToken;
        };
        /**
         * Check if a string is empty.
         *
         * @param str
         */
        StringUtils.isEmpty = function (str) {
            return (typeof str === "undefined" || !str || 0 === str.length);
        };
        /**
         * Parses string into an object.
         *
         * @param query
         */
        StringUtils.queryStringToObject = function (query) {
            var match; // Regex for replacing addition symbol with a space
            var pl = /\+/g;
            var search = /([^&=]+)=([^&]*)/g;
            var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
            var obj = {};
            match = search.exec(query);
            while (match) {
                obj[decode(match[1])] = decode(match[2]);
                match = search.exec(query);
            }
            return obj;
        };
        /**
         * Trims entries and converts them to lower case.
         *
         * @param arr
         */
        StringUtils.trimAndConvertArrayEntriesToLowerCase = function (arr) {
            return arr.map(function (entry) { return entry.trim().toLowerCase(); });
        };
        /**
         * Removes empty strings from array
         * @param arr
         */
        StringUtils.removeEmptyStringsFromArray = function (arr) {
            return arr.filter(function (entry) {
                return !StringUtils.isEmpty(entry);
            });
        };
        return StringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Log message level.
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
    })(LogLevel || (LogLevel = {}));
    /**
     * Class which facilitates logging of messages to a specific place.
     */
    var Logger = /** @class */ (function () {
        function Logger(loggerOptions) {
            // Current log level, defaults to info.
            this.level = LogLevel.Info;
            if (loggerOptions) {
                this.localCallback = loggerOptions.loggerCallback;
                this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled;
                this.level = loggerOptions.logLevel;
            }
        }
        /**
         * Log message with required options.
         */
        Logger.prototype.logMessage = function (logMessage, options) {
            if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
                return;
            }
            var timestamp = new Date().toUTCString();
            var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
            var log = logHeader + " : " + pkg.version + " : " + LogLevel[options.logLevel] + " - " + logMessage;
            this.executeCallback(options.logLevel, log, options.containsPii);
        };
        /**
         * Execute callback with message.
         */
        Logger.prototype.executeCallback = function (level, message, containsPii) {
            if (this.localCallback) {
                this.localCallback(level, message, containsPii);
            }
        };
        /**
         * Logs error messages.
         */
        Logger.prototype.error = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Error,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs error messages with PII.
         */
        Logger.prototype.errorPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Error,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages.
         */
        Logger.prototype.warning = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Warning,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages with PII.
         */
        Logger.prototype.warningPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Warning,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages.
         */
        Logger.prototype.info = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Info,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages with PII.
         */
        Logger.prototype.infoPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Info,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages.
         */
        Logger.prototype.verbose = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Verbose,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages with PII.
         */
        Logger.prototype.verbosePii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Verbose,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Returns whether PII Logging is enabled or not.
         */
        Logger.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || false;
        };
        return Logger;
    }());

    // Token renewal offset default in seconds
    var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
    // Default module system options
    var DEFAULT_SYSTEM_OPTIONS = {
        tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
        telemetry: null
    };
    // Default logger implementation
    var DEFAULT_LOGGER_IMPLEMENTATION = {
        loggerCallback: function () {
            var notImplErr = "Logger - loggerCallbackInterface() has not been implemented.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        piiLoggingEnabled: false,
        logLevel: LogLevel.Info
    };
    // Default storage implementation
    var DEFAULT_STORAGE_IMPLEMENTATION = {
        clear: function () {
            var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        containsKey: function () {
            var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        getItem: function () {
            var notImplErr = "Storage interface - getItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        getKeys: function () {
            var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        removeItem: function () {
            var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        setItem: function () {
            var notImplErr = "Storage interface - setItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        }
    };
    // Default network implementation
    var DEFAULT_NETWORK_IMPLEMENTATION = {
        sendGetRequestAsync: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        sendPostRequestAsync: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    // Default crypto implementation
    var DEFAULT_CRYPTO_IMPLEMENTATION = {
        createNewGuid: function () {
            var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Decode: function () {
            var notImplErr = "Crypto interface - base64Decode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Encode: function () {
            var notImplErr = "Crypto interface - base64Encode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        generatePkceCodes: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    /**
     * Function that sets the default options when not explicitly configured from app developer
     *
     * @param TStorageOptions
     * @param TSystemOptions
     * @param TFrameworkOptions
     *
     * @returns MsalConfiguration object
     */
    function buildModuleConfiguration(_a) {
        var userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface;
        var overlayedConfig = {
            systemOptions: userSystemOptions || DEFAULT_SYSTEM_OPTIONS,
            loggerOptions: userLoggerOption || DEFAULT_LOGGER_IMPLEMENTATION,
            storageInterface: storageImplementation || DEFAULT_STORAGE_IMPLEMENTATION,
            networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
            cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION
        };
        return overlayedConfig;
    }

    /**
     * Access token cache item which is used to manage tokens and token renewal.
     */
    var AccessTokenCacheItem = /** @class */ (function () {
        function AccessTokenCacheItem(key, value) {
            this.key = key;
            this.value = value;
        }
        return AccessTokenCacheItem;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var Constants = {
        LIBRARY_NAME: "MSAL.JS",
        // Prefix for all library cache entries
        CACHE_PREFIX: "msal",
        // default authority
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common",
        // Default AAD Instance Discovery Endpoint
        AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance",
        // Resource delimiter - used for certain cache entries
        RESOURCE_DELIM: "|",
        // Placeholder for non-existent account ids/objects
        NO_ACCOUNT: "NO_ACCOUNT",
        // Claims
        CLAIMS: "claims",
        // Consumer UTID
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        // Default scopes
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        // Default response type for authorization code flow
        CODE_RESPONSE_TYPE: "code",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        FRAGMENT_RESPONSE_MODE: "fragment",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded"
    };
    /**
     * Request header names
     */
    var HEADER_NAMES;
    (function (HEADER_NAMES) {
        HEADER_NAMES["CONTENT_TYPE"] = "Content-Type";
    })(HEADER_NAMES || (HEADER_NAMES = {}));
    /**
     * Temporary cache keys for MSAL, deleted after any request.
     */
    var TemporaryCacheKeys;
    (function (TemporaryCacheKeys) {
        TemporaryCacheKeys["AUTHORITY"] = "authority";
        TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
        TemporaryCacheKeys["SESSION_STATE"] = "session.state";
        TemporaryCacheKeys["REQUEST_STATE"] = "request.state";
        TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.idtoken";
        TemporaryCacheKeys["ORIGIN_URI"] = "request.origin";
        TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
        TemporaryCacheKeys["URL_HASH"] = "urlHash";
        TemporaryCacheKeys["REQUEST_PARAMS"] = "request.params";
        TemporaryCacheKeys["SCOPES"] = "scopes";
    })(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
    /**
     * Persistent cache keys MSAL which stay while user is logged in.
     */
    var PersistentCacheKeys;
    (function (PersistentCacheKeys) {
        PersistentCacheKeys["ID_TOKEN"] = "idtoken";
        PersistentCacheKeys["CLIENT_INFO"] = "client.info";
        PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
        PersistentCacheKeys["ERROR"] = "error";
        PersistentCacheKeys["ERROR_DESC"] = "error.description";
    })(PersistentCacheKeys || (PersistentCacheKeys = {}));
    /**
     * List of pre-established trusted host URLs.
     */
    var AADTrustedHostList = [
        "login.windows.net",
        "login.chinacloudapi.cn",
        "login.cloudgovapi.us",
        "login.microsoftonline.com",
        "login.microsoftonline.de",
        "login.microsoftonline.us"
    ];
    /**
     * String constants related to AAD Authority
     */
    var AADAuthorityConstants;
    (function (AADAuthorityConstants) {
        AADAuthorityConstants["COMMON"] = "common";
        AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
        AADAuthorityConstants["CONSUMERS"] = "consumers";
    })(AADAuthorityConstants || (AADAuthorityConstants = {}));
    /**
     * Keys in the hashParams sent by AAD Server
     */
    var AADServerParamKeys;
    (function (AADServerParamKeys) {
        AADServerParamKeys["CLIENT_ID"] = "client_id";
        AADServerParamKeys["RESOURCE"] = "resource";
        AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
        AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
        AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
        AADServerParamKeys["GRANT_TYPE"] = "grant_type";
        AADServerParamKeys["CLAIMS"] = "claims";
        AADServerParamKeys["SCOPE"] = "scope";
        AADServerParamKeys["ERROR"] = "error";
        AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
        AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
        AADServerParamKeys["ID_TOKEN"] = "id_token";
        AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
        AADServerParamKeys["EXPIRES_IN"] = "expires_in";
        AADServerParamKeys["STATE"] = "state";
        AADServerParamKeys["NONCE"] = "nonce";
        AADServerParamKeys["PROMPT"] = "prompt";
        AADServerParamKeys["SESSION_STATE"] = "session_state";
        AADServerParamKeys["CLIENT_INFO"] = "client_info";
        AADServerParamKeys["CODE"] = "code";
        AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
        AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
        AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
        AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
        AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
        AADServerParamKeys["X_CLIENT_VER"] = "x-client-Ver";
        AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
    })(AADServerParamKeys || (AADServerParamKeys = {}));
    /**
     * IdToken claim string constants
     */
    var IdTokenClaimName;
    (function (IdTokenClaimName) {
        IdTokenClaimName["ISSUER"] = "iss";
        IdTokenClaimName["OBJID"] = "oid";
        IdTokenClaimName["SUBJECT"] = "sub";
        IdTokenClaimName["TENANTID"] = "tid";
        IdTokenClaimName["VERSION"] = "ver";
        IdTokenClaimName["PREF_USERNAME"] = "preferred_username";
        IdTokenClaimName["NAME"] = "name";
        IdTokenClaimName["NONCE"] = "nonce";
        IdTokenClaimName["EXPIRATION"] = "exp";
        IdTokenClaimName["HOME_OBJID"] = "home_oid";
        IdTokenClaimName["SESSIONID"] = "sid";
        IdTokenClaimName["CLOUD_INSTANCE_HOSTNAME"] = "cloud_instance_host_name";
    })(IdTokenClaimName || (IdTokenClaimName = {}));
    /**
     * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
     * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
     * internal partners too, hence the choice of generic "string" type instead of the "enum"
     */
    var PromptValue = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
    };
    /**
     * SSO Types - generated to populate hints
     */
    var SSOTypes;
    (function (SSOTypes) {
        SSOTypes["ACCOUNT"] = "account";
        SSOTypes["SID"] = "sid";
        SSOTypes["LOGIN_HINT"] = "login_hint";
        SSOTypes["ID_TOKEN"] = "id_token";
        SSOTypes["DOMAIN_HINT"] = "domain_hint";
        SSOTypes["ORGANIZATIONS"] = "organizations";
        SSOTypes["CONSUMERS"] = "consumers";
        SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
        SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    })(SSOTypes || (SSOTypes = {}));
    /**
     * Disallowed extra query parameters.
     */
    var BlacklistedEQParams = [
        SSOTypes.SID,
        SSOTypes.LOGIN_HINT
    ];

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The CacheHelpers class contains a set of helper functions used by the module to manage cache items.
     */
    var CacheHelpers = /** @class */ (function () {
        function CacheHelpers(cacheImpl) {
            this.cacheStorage = cacheImpl;
        }
        /**
         * Create acquireTokenAccountKey to cache account object
         * @param accountId
         * @param state
         */
        CacheHelpers.prototype.generateAcquireTokenAccountKey = function (accountId) {
            return "" + TemporaryCacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants.RESOURCE_DELIM + accountId;
        };
        /**
         * Create authorityKey to cache authority
         * @param state
         */
        CacheHelpers.prototype.generateAuthorityKey = function (state) {
            return "" + TemporaryCacheKeys.AUTHORITY + Constants.RESOURCE_DELIM + state;
        };
        /**
         * Create Nonce key to cache nonce
         * @param state
         */
        CacheHelpers.prototype.generateNonceKey = function (state) {
            return "" + TemporaryCacheKeys.NONCE_IDTOKEN + Constants.RESOURCE_DELIM + state;
        };
        /**
         * Sets the cachekeys for and stores the account information in cache
         * @param account
         * @param state
         */
        CacheHelpers.prototype.setAccountCache = function (account) {
            // Cache acquireTokenAccountKey
            var accountId = account && account.homeAccountIdentifier ? account.homeAccountIdentifier : Constants.NO_ACCOUNT;
            var acquireTokenAccountKey = this.generateAcquireTokenAccountKey(accountId);
            this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
        };
        /**
         * Sets the cacheKey for and stores the authority information in cache
         * @param state
         * @param authority
         */
        CacheHelpers.prototype.setAuthorityCache = function (authority, state) {
            // Cache authorityKey
            var authorityKey = this.generateAuthorityKey(state);
            this.cacheStorage.setItem(authorityKey, authority.canonicalAuthority);
        };
        /**
         * Updates account, authority, and state in cache
         * @param serverAuthenticationRequest
         * @param account
         */
        CacheHelpers.prototype.updateCacheEntries = function (serverAuthenticationRequest, account) {
            // Cache account and state
            if (account) {
                this.setAccountCache(account);
            }
            // Cache the request state
            this.cacheStorage.setItem(TemporaryCacheKeys.REQUEST_STATE, serverAuthenticationRequest.state);
            // Cache the nonce
            this.cacheStorage.setItem(this.generateNonceKey(serverAuthenticationRequest.state), serverAuthenticationRequest.nonce);
            // Cache authorityKey
            this.setAuthorityCache(serverAuthenticationRequest.authorityInstance, serverAuthenticationRequest.state);
        };
        /**
         * Reset all temporary cache items
         * @param state
         */
        CacheHelpers.prototype.resetTempCacheItems = function (state) {
            var _this = this;
            // check state and remove associated cache items
            this.cacheStorage.getKeys().forEach(function (key) {
                if (!StringUtils.isEmpty(state) && key.indexOf(state) !== -1) {
                    var splitKey = key.split(Constants.RESOURCE_DELIM);
                    var keyState = splitKey.length > 1 ? splitKey[splitKey.length - 1] : null;
                    if (keyState === state) {
                        _this.cacheStorage.removeItem(key);
                    }
                }
            });
            // delete generic interactive request parameters
            this.cacheStorage.removeItem(TemporaryCacheKeys.REQUEST_STATE);
            this.cacheStorage.removeItem(TemporaryCacheKeys.REQUEST_PARAMS);
            this.cacheStorage.removeItem(TemporaryCacheKeys.ORIGIN_URI);
        };
        /**
         * Get all access tokens in the cache
         * @param clientId
         * @param homeAccountIdentifier
         */
        CacheHelpers.prototype.getAllAccessTokens = function (clientId, authority, resource, homeAccountIdentifier) {
            var _this = this;
            var results = this.cacheStorage.getKeys().reduce(function (tokens, key) {
                var keyMatches = key.match(clientId) && key.match(authority) && key.match(resource) && key.match(homeAccountIdentifier);
                if (keyMatches) {
                    var value = _this.cacheStorage.getItem(key);
                    if (value) {
                        try {
                            var parseAtKey = JSON.parse(key);
                            if (_this.checkForExactKeyMatch(parseAtKey, clientId, authority, resource, homeAccountIdentifier)) {
                                var newAccessTokenCacheItem = new AccessTokenCacheItem(parseAtKey, JSON.parse(value));
                                return tokens.concat([newAccessTokenCacheItem]);
                            }
                        }
                        catch (e) {
                            throw ClientAuthError.createCacheParseError(key);
                        }
                    }
                }
                return tokens;
            }, []);
            return results;
        };
        /**
         * Remove all access tokens in the cache
         * @param clientId
         * @param homeAccountIdentifier
         */
        CacheHelpers.prototype.removeAllAccessTokens = function (clientId, authority, resource, homeAccountIdentifier) {
            var _this = this;
            this.cacheStorage.getKeys().forEach(function (key) {
                var keyMatches = key.match(clientId) && key.match(authority) && key.match(resource) && key.match(homeAccountIdentifier);
                if (keyMatches) {
                    try {
                        var parseAtKey = JSON.parse(key);
                        if (_this.checkForExactKeyMatch(parseAtKey, clientId, authority, resource, homeAccountIdentifier)) {
                            _this.cacheStorage.removeItem(key);
                        }
                    }
                    catch (e) {
                        throw ClientAuthError.createCacheParseError(key);
                    }
                }
            });
        };
        /**
         * Checks that any parameters are exact matches for key value, since key.match in the above functions only do contains checks, not exact matches.
         * @param atKey
         * @param clientId
         * @param authority
         * @param resource
         * @param homeAccountIdentifier
         */
        CacheHelpers.prototype.checkForExactKeyMatch = function (atKey, clientId, authority, resource, homeAccountIdentifier) {
            var hasClientId = (atKey.clientId === clientId);
            // If any inputs are empty, return true so we don't fail the check.
            var hasAuthorityUri = StringUtils.isEmpty(authority) || (atKey.authority === authority);
            var hasResourceUri = StringUtils.isEmpty(resource) || (atKey.resource === resource);
            var hasHomeAccountId = StringUtils.isEmpty(homeAccountIdentifier) || (atKey.homeAccountIdentifier === homeAccountIdentifier);
            return hasClientId && hasAuthorityUri && hasResourceUri && hasHomeAccountId;
        };
        return CacheHelpers;
    }());

    /**
     * accountIdentifier       combination of idToken.uid and idToken.utid
     * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
     * userName                idToken.preferred_username
     * name                    idToken.name
     * idToken                 idToken
     * sid                     idToken.sid - session identifier
     * environment             idtoken.issuer (the authority that issues the token)
     */
    var Account = /** @class */ (function () {
        /**
         * Creates an Account Object
         * @praram accountIdentifier
         * @param homeAccountIdentifier
         * @param userName
         * @param name
         * @param idToken
         * @param sid
         * @param environment
         */
        function Account(accountIdentifier, homeAccountIdentifier, idTokenClaims, rawIdToken) {
            this.accountIdentifier = accountIdentifier;
            this.homeAccountIdentifier = homeAccountIdentifier;
            this.userName = idTokenClaims.preferred_username;
            this.name = idTokenClaims.name;
            // will be deprecated soon
            this.idToken = rawIdToken;
            this.idTokenClaims = idTokenClaims;
            this.sid = idTokenClaims.sid;
            this.environment = idTokenClaims.iss;
        }
        /**
         * @param idToken
         * @param clientInfo
         */
        Account.createAccount = function (idToken, clientInfo, crypto) {
            // create accountIdentifier
            var accountIdentifier = idToken.claims.oid || idToken.claims.sub;
            // create homeAccountIdentifier
            var uid = clientInfo ? clientInfo.uid : "";
            var utid = clientInfo ? clientInfo.utid : "";
            var homeAccountIdentifier;
            if (!StringUtils.isEmpty(uid) && !StringUtils.isEmpty(utid)) {
                homeAccountIdentifier = crypto.base64Encode(uid) + "." + crypto.base64Encode(utid);
            }
            return new Account(accountIdentifier, homeAccountIdentifier, idToken.claims, idToken.rawIdToken);
        };
        /**
         * Utils function to compare two Account objects - used to check if the same user account is logged in
         *
         * @param a1: Account object
         * @param a2: Account object
         */
        Account.compareAccounts = function (a1, a2) {
            if (!(a1 && a1.homeAccountIdentifier) || !(a2 && a2.homeAccountIdentifier)) {
                return false;
            }
            return a1.homeAccountIdentifier === a2.homeAccountIdentifier;
        };
        return Account;
    }());

    /**
     * Id Token representation class. Parses id token string and generates claims object.
     */
    var IdToken = /** @class */ (function () {
        function IdToken(rawIdToken, crypto) {
            if (StringUtils.isEmpty(rawIdToken)) {
                throw ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
            }
            this.rawIdToken = rawIdToken;
            this.claims = IdToken.extractIdToken(rawIdToken, crypto);
        }
        /**
         * Extract IdToken by decoding the RAWIdToken
         *
         * @param encodedIdToken
         */
        IdToken.extractIdToken = function (encodedIdToken, crypto) {
            // id token will be decoded to get the username
            var decodedToken = StringUtils.decodeJwt(encodedIdToken);
            if (!decodedToken) {
                return null;
            }
            try {
                var base64IdTokenPayload = decodedToken.JWSPayload;
                // base64Decode() should throw an error if there is an issue
                var base64Decoded = crypto.base64Decode(base64IdTokenPayload);
                return JSON.parse(base64Decoded);
            }
            catch (err) {
                throw ClientAuthError.createIdTokenParsingError(JSON.stringify(err));
            }
        };
        return IdToken;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Function to build a client info object
     * @param rawClientInfo
     * @param crypto
     */
    function buildClientInfo(rawClientInfo, crypto) {
        if (StringUtils.isEmpty(rawClientInfo)) {
            throw ClientAuthError.createClientInfoEmptyError(rawClientInfo);
        }
        try {
            var decodedClientInfo = crypto.base64Decode(rawClientInfo);
            return JSON.parse(decodedClientInfo);
        }
        catch (e) {
            throw ClientAuthError.createClientInfoDecodingError(e);
        }
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * AuthModule class
     *
     * Parent object instance which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
     *
     */
    var AuthModule = /** @class */ (function () {
        function AuthModule(configuration) {
            // Set the configuration
            this.config = buildModuleConfiguration(configuration);
            // Initialize the logger
            this.logger = new Logger(this.config.loggerOptions);
            // Initialize crypto
            this.cryptoObj = this.config.cryptoInterface;
            // Initialize storage interface
            this.cacheStorage = this.config.storageInterface;
            // Initialize storage helper object
            this.cacheManager = new CacheHelpers(this.cacheStorage);
            // Set the network interface
            this.networkClient = this.config.networkInterface;
        }
        // #endregion
        // #region Getters and Setters
        /**
         * Returns the signed in account
         * (the account object is created at the time of successful login)
         * or null when no state is found
         * @returns {@link Account} - the account object stored in MSAL
         */
        AuthModule.prototype.getAccount = function () {
            if (this.account) {
                return this.account;
            }
            // Get id token and client info from cache
            var rawIdToken = this.cacheStorage.getItem(PersistentCacheKeys.ID_TOKEN);
            var rawClientInfo = this.cacheStorage.getItem(PersistentCacheKeys.CLIENT_INFO);
            if (!StringUtils.isEmpty(rawIdToken) && !StringUtils.isEmpty(rawClientInfo)) {
                var idToken = new IdToken(rawIdToken, this.cryptoObj);
                var clientInfo = buildClientInfo(rawClientInfo, this.cryptoObj);
                this.account = Account.createAccount(idToken, clientInfo, this.cryptoObj);
                return this.account;
            }
            // if login is not yet done, return null
            return null;
        };
        return AuthModule;
    }());

    var DEFAULT_AUTH_OPTIONS = {
        clientId: "",
        authority: null,
        redirectUri: "",
        postLogoutRedirectUri: ""
    };
    /**
     * Function that sets the default options when not explicitly configured from app developer
     *
     * @param TAuthOptions
     * @param TStorageOptions
     * @param TSystemOptions
     * @param TFrameworkOptions
     *
     * @returns TConfiguration object
     */
    function buildPublicClientSPAConfiguration(_a) {
        var auth = _a.auth, loggerOptions = _a.loggerOptions, storageInterface = _a.storageInterface, networkInterface = _a.networkInterface, cryptoInterface = _a.cryptoInterface;
        var baseConfig = buildModuleConfiguration({ loggerOptions: loggerOptions, storageInterface: storageInterface, networkInterface: networkInterface, cryptoInterface: cryptoInterface });
        var overlayedConfig = __assign$1({ auth: __assign$1(__assign$1({}, DEFAULT_AUTH_OPTIONS), auth) }, baseConfig);
        return overlayedConfig;
    }

    /**
     * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientConfigurationErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        claimsRequestParsingError: {
            code: "claims_request_parsing_error",
            desc: "Could not parse the given claims request object."
        },
        authorityUriInsecure: {
            code: "authority_uri_insecure",
            desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
        },
        urlParseError: {
            code: "url_parse_error",
            desc: "URL could not be parsed into appropriate segments."
        },
        urlEmptyError: {
            code: "empty_url_error",
            desc: "URL was empty or null."
        },
        emptyScopesError: {
            code: "empty_input_scopes_error",
            desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
        },
        nonArrayScopesError: {
            code: "nonarray_input_scopes_error",
            desc: "Scopes cannot be passed as non-array."
        },
        clientIdSingleScopeError: {
            code: "clientid_input_scopes_error",
            desc: "Client ID can only be provided as a single scope."
        },
        invalidPrompt: {
            code: "invalid_prompt_value",
            desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        },
        tokenRequestEmptyError: {
            code: "token_request_empty",
            desc: "Token request was empty and not found in cache."
        }
    };
    /**
     * Error thrown when there is an error in configuration of the MSAL.js library.
     */
    var ClientConfigurationError = /** @class */ (function (_super) {
        __extends$1(ClientConfigurationError, _super);
        function ClientConfigurationError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientConfigurationError";
            Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the claims request could not be successfully parsed
         */
        ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
        };
        /**
         * Creates an error thrown if authority uri is given an insecure protocol.
         * @param urlString
         */
        ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
        };
        /**
         * Creates an error thrown if URL string does not parse into separate segments.
         * @param urlString
         */
        ClientConfigurationError.createUrlParseError = function (urlParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
        };
        /**
         * Creates an error thrown if URL string is empty or null.
         * @param urlString
         */
        ClientConfigurationError.createUrlEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
        };
        /**
         * Error thrown when scopes are not an array
         * @param inputScopes
         */
        ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when scopes are empty.
         * @param scopesValue
         */
        ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when client id scope is not provided as single scope.
         * @param inputScopes
         */
        ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when prompt is not an allowed type.
         * @param promptValue
         */
        ClientConfigurationError.createInvalidPromptError = function (promptValue) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyTokenRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
        };
        return ClientConfigurationError;
    }(ClientAuthError));

    /**
     * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
     * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings to ensure uniqueness of strings.
     */
    var ScopeSet = /** @class */ (function () {
        function ScopeSet(inputScopes, appClientId, scopesRequired) {
            this.clientId = appClientId;
            this.scopesRequired = scopesRequired;
            // Filter empty string and null/undefined array items
            var filteredInput = inputScopes ? StringUtils.removeEmptyStringsFromArray(inputScopes) : inputScopes;
            // Validate and filter scopes (validate function throws if validation fails)
            this.validateInputScopes(filteredInput);
            var scopeArr = filteredInput ? StringUtils.trimAndConvertArrayEntriesToLowerCase(__spreadArrays(filteredInput)) : [];
            this.scopes = new Set(scopeArr);
            if (!this.scopesRequired) {
                this.appendScope(this.clientId);
            }
            this.originalScopes = new Set(this.scopes);
            this.replaceDefaultScopes();
        }
        /**
         * Factory method to create ScopeSet from space-delimited string
         * @param inputScopeString
         * @param appClientId
         * @param scopesRequired
         */
        ScopeSet.fromString = function (inputScopeString, appClientId, scopesRequired) {
            inputScopeString = inputScopeString || "";
            var inputScopes = inputScopeString.split(" ");
            return new ScopeSet(inputScopes, appClientId, scopesRequired);
        };
        /**
         * Replace client id with the default scopes used for token acquisition.
         */
        ScopeSet.prototype.replaceDefaultScopes = function () {
            if (this.scopes.has(this.clientId)) {
                this.removeScope(this.clientId);
                this.appendScope(Constants.OPENID_SCOPE);
                this.appendScope(Constants.PROFILE_SCOPE);
            }
            this.appendScope(Constants.OFFLINE_ACCESS_SCOPE);
        };
        /**
         * Used to validate the scopes input parameter requested  by the developer.
         * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
         */
        ScopeSet.prototype.validateInputScopes = function (inputScopes) {
            if (this.scopesRequired) {
                // Check if scopes are required but not given or is an empty array
                if (!inputScopes || inputScopes.length < 1) {
                    throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
                }
            }
            // Check that scopes is an array object
            if (!Array.isArray(inputScopes)) {
                throw ClientConfigurationError.createScopesNonArrayError(inputScopes);
            }
        };
        /**
         * Check if a given scope is present in this set of scopes.
         * @param scope
         */
        ScopeSet.prototype.containsScope = function (scope) {
            return !StringUtils.isEmpty(scope) ? this.scopes.has(scope) : false;
        };
        /**
         * Check if a set of scopes is present in this set of scopes.
         * @param scopeSet
         */
        ScopeSet.prototype.containsScopeSet = function (scopeSet) {
            var _this = this;
            if (!scopeSet) {
                return false;
            }
            return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); });
        };
        /**
         * Appends single scope if passed
         * @param newScope
         */
        ScopeSet.prototype.appendScope = function (newScope) {
            if (StringUtils.isEmpty(newScope)) {
                throw ClientAuthError.createAppendEmptyScopeToSetError(newScope);
            }
            this.scopes.add(newScope.trim().toLowerCase());
        };
        /**
         * Appends multiple scopes if passed
         * @param newScopes
         */
        ScopeSet.prototype.appendScopes = function (newScopes) {
            try {
                var newScopeSet = new ScopeSet(newScopes, this.clientId, this.scopesRequired);
                this.scopes = this.unionScopeSets(newScopeSet);
            }
            catch (e) {
                throw ClientAuthError.createAppendScopeSetError(e);
            }
        };
        /**
         * Removes element from set of scopes.
         * @param scope
         */
        ScopeSet.prototype.removeScope = function (scope) {
            if (StringUtils.isEmpty(scope)) {
                throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
            }
            this.scopes.delete(scope.trim().toLowerCase());
        };
        /**
         * Combines an array of scopes with the current set of scopes.
         * @param otherScopes
         */
        ScopeSet.prototype.unionScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            return new Set(__spreadArrays(otherScopes.asArray(), Array.from(this.scopes)));
        };
        /**
         * Check if scopes intersect between this set and another.
         * @param otherScopes
         */
        ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            return this.unionScopeSets(otherScopes).size < (this.scopes.size + otherScopes.getScopeCount());
        };
        /**
         * Returns size of set of scopes.
         */
        ScopeSet.prototype.getScopeCount = function () {
            return this.scopes.size;
        };
        /**
         * Returns true if the set of original scopes only contained client-id
         */
        ScopeSet.prototype.isLoginScopeSet = function () {
            var hasLoginScopes = (this.originalScopes.has(this.clientId) ||
                this.originalScopes.has(Constants.OPENID_SCOPE) ||
                this.originalScopes.has(Constants.PROFILE_SCOPE));
            return this.originalScopes && hasLoginScopes;
        };
        /**
         * Returns the scopes as an array of string values
         */
        ScopeSet.prototype.asArray = function () {
            return Array.from(this.scopes);
        };
        /**
         * Returns the original scopes as an array (no extra scopes to consent)
         */
        ScopeSet.prototype.getOriginalScopesAsArray = function () {
            return Array.from(this.originalScopes);
        };
        /**
         * Prints scopes into a space-delimited string
         */
        ScopeSet.prototype.printScopes = function () {
            if (this.scopes) {
                var scopeArr = this.asArray();
                return scopeArr.join(" ");
            }
            return "";
        };
        return ScopeSet;
    }());

    /**
     * Function which validates claims request passed in by the user.
     * @param request
     */
    function validateClaimsRequest(request) {
        if (!request.claimsRequest) {
            return;
        }
        try {
            JSON.parse(request.claimsRequest);
        }
        catch (e) {
            throw ClientConfigurationError.createClaimsRequestParsingError(e);
        }
        // TODO: More validation will be added when the server team tells us how they have actually implemented claims
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which provides helpers for OAuth 2.0 protocol specific values
     */
    var ProtocolUtils = /** @class */ (function () {
        function ProtocolUtils() {
        }
        /**
         * Appends user state with random guid, or returns random guid.
         * @param userState
         * @param randomGuid
         */
        ProtocolUtils.setRequestState = function (userState, randomGuid) {
            return !StringUtils.isEmpty(userState) ? "" + randomGuid + Constants.RESOURCE_DELIM + userState : randomGuid;
        };
        /**
         *
         * Extracts user state value from the state sent with the authentication request.
         * @returns {string} scope.
         * @ignore
         */
        ProtocolUtils.getUserRequestState = function (serverResponseState) {
            if (!StringUtils.isEmpty(serverResponseState)) {
                var splitIndex = serverResponseState.indexOf(Constants.RESOURCE_DELIM);
                if (splitIndex > -1 && splitIndex + 1 < serverResponseState.length) {
                    return serverResponseState.substring(splitIndex + 1);
                }
            }
            return "";
        };
        return ProtocolUtils;
    }());

    /**
     * This class extends the ServerRequestParameters class. This class validates URL request parameters, checks for SSO and generates required URL.
     */
    var ServerCodeRequestParameters = /** @class */ (function () {
        function ServerCodeRequestParameters(authority, clientId, userRequest, cachedAccount, redirectUri, cryptoImpl, isLoginCall) {
            this.clientId = clientId;
            this.cryptoObj = cryptoImpl;
            this.redirectUri = redirectUri;
            // Telemetry Info
            this.xClientSku = Constants.LIBRARY_NAME;
            this.xClientVer = pkg.version;
            this.authorityInstance = authority;
            this.userRequest = userRequest;
            this.responseType = Constants.CODE_RESPONSE_TYPE;
            this.account = (userRequest && userRequest.account) || cachedAccount;
            // Set scopes, append extra scopes if there is a login call.
            this.scopes = new ScopeSet((this.userRequest && this.userRequest.scopes) || [], this.clientId, !isLoginCall);
            if (isLoginCall) {
                this.appendExtraScopes();
            }
            // Set random vars
            var randomGuid = this.cryptoObj.createNewGuid();
            this.state = ProtocolUtils.setRequestState(this.userRequest && this.userRequest.userRequestState, randomGuid);
            this.nonce = this.cryptoObj.createNewGuid();
            this.correlationId = this.userRequest.correlationId || this.cryptoObj.createNewGuid();
        }
        /**
         * Appends extraScopesToConsent if passed
         */
        ServerCodeRequestParameters.prototype.appendExtraScopes = function () {
            if (this.userRequest && this.scopes) {
                if (this.userRequest.extraScopesToConsent) {
                    this.scopes.appendScopes(this.userRequest.extraScopesToConsent);
                }
            }
        };
        /**
         * Check to see if there are SSO params set in the Request
         * @param request
         */
        ServerCodeRequestParameters.prototype.hasSSOParam = function () {
            var isSSORequest = this.userRequest && (this.account || this.userRequest.sid || this.userRequest.loginHint);
            return !!this.account || !!isSSORequest;
        };
        /**
         * Adds SSO parameter to query parameters:
         * - sid of the account object used to identify the session of the user on the service
         * - login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
         * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
         *
         * @param {@link Account} account - Account for which the token is requested
         * @param queryparams
         * @param {@link ServerRequestParameters}
         */
        ServerCodeRequestParameters.prototype.addSSOQueryParameters = function (adalIdToken) {
            /*
             * This is a final check for all queryParams added so far; preference order: sid > login_hint
             * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
             */
            // preference order: account > sid > login_hint
            var serverReqParam = {};
            // if account info is passed, account.sid > account.login_hint
            if (this.account) {
                // sid can only be passed if prompt = none
                if (this.account.sid && this.userRequest && this.userRequest.prompt === PromptValue.NONE) {
                    serverReqParam[SSOTypes.SID] = this.account.sid;
                }
                else if (this.account.userName) {
                    serverReqParam[SSOTypes.LOGIN_HINT] = this.account.userName;
                }
            }
            // if no account info available, request.sid > request.login_hint
            else if (this.userRequest) {
                // sid from request - can only be passed if prompt = none
                if (this.userRequest.sid && this.userRequest.prompt === PromptValue.NONE) {
                    serverReqParam[SSOTypes.SID] = this.userRequest.sid;
                }
                // loginHint from request
                else if (this.userRequest.loginHint) {
                    serverReqParam[SSOTypes.LOGIN_HINT] = this.userRequest.loginHint;
                }
            }
            // adalIdToken retrieved from cache
            if (adalIdToken && StringUtils.isEmpty(serverReqParam[SSOTypes.SID]) && StringUtils.isEmpty(serverReqParam[SSOTypes.LOGIN_HINT])) {
                if (adalIdToken.claims && adalIdToken.claims.upn) {
                    serverReqParam[SSOTypes.LOGIN_HINT] = adalIdToken.claims.upn;
                }
            }
            return serverReqParam;
        };
        /**
         * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
         * @param adalIdTokenObject
         */
        ServerCodeRequestParameters.prototype.populateQueryParams = function (adalIdTokenObject) {
            var queryParameters = {};
            if (this.userRequest) {
                // add the prompt parameter to serverRequestParameters if passed
                if (this.userRequest.prompt) {
                    this.validatePromptParameter(this.userRequest.prompt);
                }
                // Add claims challenge to serverRequestParameters if passed
                if (this.userRequest.claimsRequest) {
                    validateClaimsRequest(this.userRequest);
                }
            }
            /*
             * adds sid/login_hint if an SSO Parameter is available
             * this.logger.verbose("Calling addHint parameters");
             */
            if (this.hasSSOParam() || adalIdTokenObject) {
                queryParameters = this.addSSOQueryParameters(adalIdTokenObject);
            }
            // sanity check for developer passed extraQueryParameters
            var eQParams;
            if (this.userRequest) {
                eQParams = this.sanitizeEQParams(this.userRequest, queryParameters);
            }
            // Populate the extraQueryParameters to be sent to the server
            this.queryParameters = this.generateQueryParametersString(queryParameters);
            this.extraQueryParameters = this.generateQueryParametersString(eQParams);
        };
        /**
         * Create navigation url.
         */
        ServerCodeRequestParameters.prototype.createNavigateUrl = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var paramStrings, authEndpoint, requestUrl;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.createParamString()];
                        case 1:
                            paramStrings = _a.sent();
                            authEndpoint = this.authorityInstance.authorizationEndpoint;
                            // if the endpoint already has queryparams, lets add to it, otherwise add the first one
                            if (authEndpoint.indexOf("?") < 0) {
                                authEndpoint += "?";
                            }
                            else {
                                authEndpoint += "&";
                            }
                            requestUrl = "" + authEndpoint + paramStrings.join("&");
                            return [2 /*return*/, requestUrl];
                    }
                });
            });
        };
        /**
         * Create a query parameter string.
         */
        ServerCodeRequestParameters.prototype.createParamString = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var str, _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            str = [];
                            str.push(AADServerParamKeys.RESPONSE_TYPE + "=" + this.responseType);
                            str.push(AADServerParamKeys.SCOPE + "=" + encodeURIComponent(this.scopes.printScopes()));
                            str.push(AADServerParamKeys.CLIENT_ID + "=" + encodeURIComponent(this.clientId));
                            str.push(AADServerParamKeys.REDIRECT_URI + "=" + encodeURIComponent(this.redirectUri));
                            str.push(AADServerParamKeys.STATE + "=" + encodeURIComponent(this.state));
                            str.push(AADServerParamKeys.NONCE + "=" + encodeURIComponent(this.nonce));
                            str.push(AADServerParamKeys.CLIENT_INFO + "=1");
                            str.push(AADServerParamKeys.X_CLIENT_SKU + "=" + this.xClientSku);
                            str.push(AADServerParamKeys.X_CLIENT_VER + "=" + this.xClientVer);
                            // Add codes here. May want to add optional step to allow for non-PKCE auth code flows
                            _a = this;
                            return [4 /*yield*/, this.cryptoObj.generatePkceCodes()];
                        case 1:
                            // Add codes here. May want to add optional step to allow for non-PKCE auth code flows
                            _a.generatedPkce = _b.sent();
                            str.push(AADServerParamKeys.CODE_CHALLENGE + "=" + encodeURIComponent(this.generatedPkce.challenge));
                            str.push(AADServerParamKeys.CODE_CHALLENGE_METHOD + "=" + Constants.S256_CODE_CHALLENGE_METHOD);
                            // Append resource
                            if (this.userRequest && this.userRequest.resource) {
                                str.push(AADServerParamKeys.RESOURCE + "=" + encodeURIComponent(this.userRequest.resource));
                            }
                            // Append prompt
                            if (this.userRequest && this.userRequest.prompt) {
                                str.push(AADServerParamKeys.PROMPT + "=" + (encodeURIComponent(this.userRequest.prompt)));
                            }
                            // Append claims request
                            if (this.userRequest && this.userRequest.claimsRequest) {
                                str.push(AADServerParamKeys.CLAIMS + "=" + encodeURIComponent(this.userRequest.claimsRequest));
                            }
                            // Append query params
                            if (this.queryParameters) {
                                str.push(this.queryParameters);
                            }
                            // Append extra query params
                            if (this.extraQueryParameters) {
                                str.push(this.extraQueryParameters);
                            }
                            str.push(AADServerParamKeys.CLIENT_REQUEST_ID + "=" + encodeURIComponent(this.correlationId));
                            str.push(AADServerParamKeys.RESPONSE_MODE + "=" + Constants.FRAGMENT_RESPONSE_MODE);
                            return [2 /*return*/, str];
                    }
                });
            });
        };
        /**
         * Utility to test if valid prompt value is passed in the request
         * @param request
         */
        ServerCodeRequestParameters.prototype.validatePromptParameter = function (prompt) {
            if ([PromptValue.LOGIN, PromptValue.SELECT_ACCOUNT, PromptValue.CONSENT, PromptValue.NONE].indexOf(prompt) < 0) {
                throw ClientConfigurationError.createInvalidPromptError(prompt);
            }
        };
        /**
         * Removes unnecessary or duplicate query parameters from extraQueryParameters
         * @param request
         */
        ServerCodeRequestParameters.prototype.sanitizeEQParams = function (request, ssoQueryParams) {
            var eQParams = request.extraQueryParameters;
            if (!eQParams) {
                return null;
            }
            if (request.claimsRequest) {
                // TODO: this.logger.error("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
                delete eQParams[Constants.CLAIMS];
            }
            // Remove any query parameters that are blacklisted
            BlacklistedEQParams.forEach(function (param) {
                if (eQParams[param]) {
                    // TODO: this.logger.error("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                    delete eQParams[param];
                }
            });
            // Remove any query parameters already included in SSO params
            Object.keys(ssoQueryParams).forEach(function (key) {
                if (eQParams[key]) {
                    // TODO: this.logger.error("Removed param " + key + " from extraQueryParameters since it was already present in library query parameters.")
                    delete eQParams[key];
                }
                if (key === SSOTypes.SID) {
                    // TODO: this.logger.error("Removed domain hint since sid was provided.")
                    delete eQParams[SSOTypes.DOMAIN_HINT];
                }
            });
            return eQParams;
        };
        /**
         * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
         * @param extraQueryParameters
         */
        ServerCodeRequestParameters.prototype.generateQueryParametersString = function (queryParameters) {
            var paramsString = "";
            if (queryParameters) {
                Object.keys(queryParameters).forEach(function (key) {
                    if (StringUtils.isEmpty(paramsString)) {
                        paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                    }
                    else {
                        paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                    }
                });
            }
            return paramsString;
        };
        return ServerCodeRequestParameters;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class extends the ServerRequestParameters class. This class validates token request parameters and generates a form body and headers required for the request.
     */
    var ServerTokenRequestParameters = /** @class */ (function () {
        function ServerTokenRequestParameters(clientId, tokenRequest, codeResponse, redirectUri, cryptoImpl, refreshToken) {
            this.clientId = clientId;
            this.cryptoObj = cryptoImpl;
            this.redirectUri = redirectUri;
            // Telemetry Info
            this.xClientSku = Constants.LIBRARY_NAME;
            this.xClientVer = pkg.version;
            this.tokenRequest = tokenRequest;
            this.codeResponse = codeResponse;
            this.refreshToken = refreshToken;
            // Set scopes, always required for token request/exchange
            this.scopes = new ScopeSet((this.tokenRequest && this.tokenRequest.scopes) || [], this.clientId, true);
            // Set correlation id
            this.correlationId = this.tokenRequest.correlationId || this.cryptoObj.createNewGuid();
        }
        /**
         * Creates headers required for token request.
         */
        ServerTokenRequestParameters.prototype.createRequestHeaders = function () {
            var headers = new Map();
            headers.set(HEADER_NAMES.CONTENT_TYPE, Constants.URL_FORM_CONTENT_TYPE);
            return headers;
        };
        /**
         * Creates string of parameters to send to server in request body.
         */
        ServerTokenRequestParameters.prototype.createRequestBody = function () {
            var paramString = this.createParamString();
            return paramString.join("&");
        };
        /**
         * Helper creates an array of key value string pairs.
         */
        ServerTokenRequestParameters.prototype.createParamString = function () {
            var str = [];
            str.push(AADServerParamKeys.CLIENT_ID + "=" + encodeURIComponent(this.clientId));
            str.push(AADServerParamKeys.SCOPE + "=" + encodeURIComponent(this.scopes.printScopes()));
            str.push(AADServerParamKeys.REDIRECT_URI + "=" + encodeURIComponent(this.redirectUri));
            // If there is a code response or refresh token, push relevant variables. Throw error otherwise.
            if (this.codeResponse) {
                str.push(AADServerParamKeys.CODE + "=" + encodeURIComponent(this.codeResponse.code));
                str.push(AADServerParamKeys.CODE_VERIFIER + "=" + encodeURIComponent(this.tokenRequest.codeVerifier));
                str.push(AADServerParamKeys.GRANT_TYPE + "=" + Constants.CODE_GRANT_TYPE);
            }
            else if (!StringUtils.isEmpty(this.refreshToken)) {
                str.push(AADServerParamKeys.REFRESH_TOKEN + "=" + this.refreshToken);
                str.push(AADServerParamKeys.GRANT_TYPE + "=" + Constants.RT_GRANT_TYPE);
            }
            else {
                throw ClientAuthError.createTokenRequestCannotBeMadeError();
            }
            return str;
        };
        return ServerTokenRequestParameters;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class which exposes functions for managing date and time operations.
     */
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        /**
         * return the current time in Unix time (seconds).
         */
        TimeUtils.nowSeconds = function () {
            // Date.getTime() returns in milliseconds.
            return Math.round(new Date().getTime() / 1000.0);
        };
        return TimeUtils;
    }());

    /**
     * Url object class which can perform various transformations on url strings.
     */
    var UrlString = /** @class */ (function () {
        function UrlString(url) {
            this._urlString = url;
            if (!StringUtils.isEmpty(this._urlString) && StringUtils.isEmpty(this.getHash())) {
                this._urlString = this.canonicalizeUri(url);
            }
            else if (StringUtils.isEmpty(this._urlString)) {
                // Throws error if url is empty
                throw ClientConfigurationError.createUrlEmptyError();
            }
        }
        Object.defineProperty(UrlString.prototype, "urlString", {
            get: function () {
                return this._urlString;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Ensure urls are lower case and end with a / character.
         * @param url
         */
        UrlString.prototype.canonicalizeUri = function (url) {
            if (url) {
                url = url.toLowerCase();
            }
            if (url && !url.endsWith("/")) {
                url += "/";
            }
            return url;
        };
        /**
         * Throws if urlString passed is not a valid authority URI string.
         */
        UrlString.prototype.validateAsUri = function () {
            // Attempts to parse url for uri components
            var components;
            try {
                components = this.getUrlComponents();
            }
            catch (e) {
                throw ClientConfigurationError.createUrlParseError(e);
            }
            // Throw error if URI or path segments are not parseable.
            if (!components.HostNameAndPort || !components.PathSegments || components.PathSegments.length < 1) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Throw error if uri is insecure.
            if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
                throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
            }
        };
        /**
         * Function to remove query string params from url. Returns the new url.
         * @param url
         * @param name
         */
        UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
            var regex = new RegExp("(\\&" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            // name=value&
            regex = new RegExp("(" + name + "=)[^\&]+&");
            this._urlString = this.urlString.replace(regex, "");
            // name=value
            regex = new RegExp("(" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            return this.urlString;
        };
        /**
         * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
         * @param href The url
         * @param tenantId The tenant id to replace
         */
        UrlString.prototype.replaceTenantPath = function (tenantId) {
            var urlObject = this.getUrlComponents();
            var pathArray = urlObject.PathSegments;
            if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
                pathArray[0] = tenantId;
            }
            return UrlString.constructAuthorityUriFromObject(urlObject);
        };
        /**
         * Returns the anchor part(#) of the URL
         */
        UrlString.prototype.getHash = function () {
            var hashIndex1 = this.urlString.indexOf("#");
            var hashIndex2 = this.urlString.indexOf("#/");
            if (hashIndex2 > -1) {
                return this.urlString.substring(hashIndex2 + 2);
            }
            else if (hashIndex1 > -1) {
                return this.urlString.substring(hashIndex1 + 1);
            }
            return "";
        };
        /**
         * Returns deserialized portion of URL hash
         */
        UrlString.prototype.getDeserializedHash = function () {
            var hash = this.getHash();
            var deserializedHash = StringUtils.queryStringToObject(hash);
            if (!deserializedHash) {
                throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
            }
            return deserializedHash;
        };
        /**
         * Parses out the components from a url string.
         * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
         */
        UrlString.prototype.getUrlComponents = function () {
            // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
            var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
            // If url string does not match regEx, we throw an error
            var match = this.urlString.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Url component object
            var urlComponents = {
                Protocol: match[1],
                HostNameAndPort: match[4],
                AbsolutePath: match[5]
            };
            var pathSegments = urlComponents.AbsolutePath.split("/");
            pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
            urlComponents.PathSegments = pathSegments;
            return urlComponents;
        };
        UrlString.constructAuthorityUriFromObject = function (urlObject) {
            return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
        };
        /**
         * Check if the hash of the URL string contains known properties
         */
        UrlString.hashContainsKnownProperties = function (url) {
            if (StringUtils.isEmpty(url)) {
                return false;
            }
            var urlString = new UrlString(url);
            var parameters = urlString.getDeserializedHash();
            return !!(parameters.error_description ||
                parameters.error ||
                parameters.state);
        };
        return UrlString;
    }());

    /**
     * Key to cache access tokens, id tokens, and refresh tokens. Helps manage token renewal.
     */
    var AccessTokenKey = /** @class */ (function () {
        function AccessTokenKey(authority, clientId, scopes, resource, uid, utid, cryptoObj) {
            var authorityUri = new UrlString(authority);
            this.authority = authorityUri.urlString;
            this.clientId = clientId;
            this.scopes = scopes;
            this.resource = resource;
            if (!StringUtils.isEmpty(uid) && !StringUtils.isEmpty(utid)) {
                this.homeAccountIdentifier = cryptoObj.base64Encode(uid) + "." + cryptoObj.base64Encode(utid);
            }
        }
        return AccessTokenKey;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Value of access token cache item which is stored in cache. Helps manage token renewal.
     */
    var AccessTokenValue = /** @class */ (function () {
        function AccessTokenValue(tokenType, accessToken, idToken, refreshToken, expiresOn, extExpiresOn) {
            this.tokenType = tokenType;
            this.accessToken = accessToken;
            this.idToken = idToken;
            this.refreshToken = refreshToken;
            this.expiresOnSec = expiresOn;
            this.extExpiresOnSec = extExpiresOn;
        }
        return AccessTokenValue;
    }());

    /**
     * Error thrown when there is an error with the server code, for example, unavailability.
     */
    var ServerError = /** @class */ (function (_super) {
        __extends$1(ServerError, _super);
        function ServerError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ServerError";
            Object.setPrototypeOf(_this, ServerError.prototype);
            return _this;
        }
        return ServerError;
    }(AuthError));

    /**
     * Class that handles response parsing.
     */
    var ResponseHandler = /** @class */ (function () {
        function ResponseHandler(clientId, cacheStorage, cacheManager, cryptoObj, logger) {
            this.clientId = clientId;
            this.cacheStorage = cacheStorage;
            this.cacheManager = cacheManager;
            this.cryptoObj = cryptoObj;
            this.logger = logger;
        }
        /**
         * Returns a new response with the data from original response filled with the relevant IdToken data.
         * - raw id token
         * - id token claims
         * - unique id (oid or sub claim of token)
         * - tenant id (tid claim of token)
         * @param originalResponse
         * @param idTokenObj
         */
        ResponseHandler.setResponseIdToken = function (originalResponse, idTokenObj) {
            if (!originalResponse) {
                return null;
            }
            else if (!idTokenObj) {
                return originalResponse;
            }
            var expiresSeconds = Number(idTokenObj.claims.exp);
            if (expiresSeconds && !originalResponse.expiresOn) {
                originalResponse.expiresOn = new Date(expiresSeconds * 1000);
            }
            return __assign$1(__assign$1({}, originalResponse), { idToken: idTokenObj.rawIdToken, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.claims.oid || idTokenObj.claims.sub, tenantId: idTokenObj.claims.tid });
        };
        /**
         * Validates and handles a response from the server, and returns a constructed object with the authorization code and state.
         * @param serverParams
         */
        ResponseHandler.prototype.handleServerCodeResponse = function (serverParams) {
            try {
                // Validate hash fragment response parameters
                this.validateServerAuthorizationCodeResponse(serverParams, this.cacheStorage.getItem(TemporaryCacheKeys.REQUEST_STATE), this.cryptoObj);
                // Cache client info
                if (serverParams.client_info) {
                    this.cacheStorage.setItem(PersistentCacheKeys.CLIENT_INFO, serverParams.client_info);
                }
                // Create response object
                var response = {
                    code: serverParams.code,
                    userRequestState: serverParams.state
                };
                return response;
            }
            catch (e) {
                this.cacheManager.resetTempCacheItems(serverParams && serverParams.state);
                throw e;
            }
        };
        /**
         * Function which validates server authorization code response.
         * @param serverResponseHash
         * @param cachedState
         * @param cryptoObj
         */
        ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
            if (serverResponseHash.state !== cachedState) {
                throw ClientAuthError.createStateMismatchError();
            }
            // Check for error
            if (serverResponseHash.error || serverResponseHash.error_description) {
                throw new ServerError(serverResponseHash.error, serverResponseHash.error_description);
            }
            if (serverResponseHash.client_info) {
                buildClientInfo(serverResponseHash.client_info, cryptoObj);
            }
        };
        /**
         * Function which validates server authorization token response.
         * @param serverResponse
         */
        ResponseHandler.prototype.validateServerAuthorizationTokenResponse = function (serverResponse) {
            // Check for error
            if (serverResponse.error || serverResponse.error_description) {
                var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
                throw new ServerError(serverResponse.error, errString);
            }
        };
        /**
         * Helper function which saves or updates the token in the cache and constructs the final token response to send back to the user.
         * @param originalTokenResponse
         * @param authority
         * @param resource
         * @param serverTokenResponse
         * @param clientInfo
         */
        ResponseHandler.prototype.saveToken = function (originalTokenResponse, authority, resource, serverTokenResponse, clientInfo) {
            var _this = this;
            // Set consented scopes in response
            var responseScopes = ScopeSet.fromString(serverTokenResponse.scope, this.clientId, true);
            var responseScopeArray = responseScopes.asArray();
            // Expiration calculation
            var expiresIn = serverTokenResponse.expires_in;
            var expirationSec = TimeUtils.nowSeconds() + expiresIn;
            var extendedExpirationSec = expirationSec + serverTokenResponse.ext_expires_in;
            // Get id token
            if (!StringUtils.isEmpty(originalTokenResponse.idToken)) {
                this.cacheStorage.setItem(PersistentCacheKeys.ID_TOKEN, originalTokenResponse.idToken);
            }
            // Save access token in cache
            var newAccessTokenValue = new AccessTokenValue(serverTokenResponse.token_type, serverTokenResponse.access_token, originalTokenResponse.idToken, serverTokenResponse.refresh_token, expirationSec.toString(), extendedExpirationSec.toString());
            var homeAccountIdentifier = originalTokenResponse.account && originalTokenResponse.account.homeAccountIdentifier;
            var accessTokenCacheItems = this.cacheManager.getAllAccessTokens(this.clientId, authority || "", resource || "", homeAccountIdentifier || "");
            // If no items in cache with these parameters, set new item.
            if (accessTokenCacheItems.length < 1) {
                this.logger.info("No tokens found, creating new item.");
                var newTokenKey = new AccessTokenKey(authority, this.clientId, serverTokenResponse.scope, resource, clientInfo && clientInfo.uid, clientInfo && clientInfo.utid, this.cryptoObj);
                this.cacheStorage.setItem(JSON.stringify(newTokenKey), JSON.stringify(newAccessTokenValue));
            }
            else {
                // Check if scopes are intersecting. If they are, combine scopes and replace cache item.
                accessTokenCacheItems.forEach(function (accessTokenCacheItem) {
                    var cachedScopes = ScopeSet.fromString(accessTokenCacheItem.key.scopes, _this.clientId, true);
                    if (cachedScopes.intersectingScopeSets(responseScopes)) {
                        _this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                        cachedScopes.appendScopes(responseScopeArray);
                        accessTokenCacheItem.key.scopes = cachedScopes.printScopes();
                        if (StringUtils.isEmpty(newAccessTokenValue.idToken)) {
                            newAccessTokenValue.idToken = accessTokenCacheItem.value.idToken;
                        }
                        _this.cacheStorage.setItem(JSON.stringify(accessTokenCacheItem.key), JSON.stringify(newAccessTokenValue));
                    }
                });
            }
            // Save tokens in response and return
            return __assign$1(__assign$1({}, originalTokenResponse), { tokenType: serverTokenResponse.token_type, scopes: responseScopeArray, accessToken: serverTokenResponse.access_token, refreshToken: serverTokenResponse.refresh_token, expiresOn: new Date(expirationSec * 1000) });
        };
        /**
         * Gets account cached with given key. Returns null if parsing could not be completed.
         * @param accountKey
         */
        ResponseHandler.prototype.getCachedAccount = function (accountKey) {
            try {
                return JSON.parse(this.cacheStorage.getItem(accountKey));
            }
            catch (e) {
                this.logger.warning("Account could not be parsed: " + JSON.stringify(e));
                return null;
            }
        };
        /**
         * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
         * @param serverTokenResponse
         * @param authorityString
         * @param resource
         * @param state
         */
        ResponseHandler.prototype.createTokenResponse = function (serverTokenResponse, authorityString, resource, state) {
            var tokenResponse = {
                uniqueId: "",
                tenantId: "",
                tokenType: "",
                idToken: null,
                idTokenClaims: null,
                accessToken: "",
                refreshToken: "",
                scopes: [],
                expiresOn: null,
                account: null,
                userRequestState: ""
            };
            // Retrieve current id token object
            var idTokenObj;
            var cachedIdToken = this.cacheStorage.getItem(PersistentCacheKeys.ID_TOKEN);
            if (serverTokenResponse.id_token) {
                idTokenObj = new IdToken(serverTokenResponse.id_token, this.cryptoObj);
                tokenResponse = ResponseHandler.setResponseIdToken(tokenResponse, idTokenObj);
                // If state is empty, refresh token is being used
                if (!StringUtils.isEmpty(state)) {
                    this.logger.info("State was detected - nonce should be available.");
                    // check nonce integrity if refresh token is not used - throw an error if not matched        
                    if (StringUtils.isEmpty(idTokenObj.claims.nonce)) {
                        throw ClientAuthError.createInvalidIdTokenError(idTokenObj);
                    }
                    var nonce = this.cacheStorage.getItem(this.cacheManager.generateNonceKey(state));
                    if (idTokenObj.claims.nonce !== nonce) {
                        throw ClientAuthError.createNonceMismatchError();
                    }
                }
            }
            else if (cachedIdToken) {
                idTokenObj = new IdToken(cachedIdToken, this.cryptoObj);
                tokenResponse = ResponseHandler.setResponseIdToken(tokenResponse, idTokenObj);
            }
            else {
                idTokenObj = null;
            }
            var clientInfo = null;
            var cachedAccount = null;
            if (idTokenObj) {
                // Retrieve client info
                clientInfo = buildClientInfo(this.cacheStorage.getItem(PersistentCacheKeys.CLIENT_INFO), this.cryptoObj);
                // Create account object for request
                tokenResponse.account = Account.createAccount(idTokenObj, clientInfo, this.cryptoObj);
                // Save the access token if it exists
                var accountKey = this.cacheManager.generateAcquireTokenAccountKey(tokenResponse.account.homeAccountIdentifier);
                // Get cached account
                cachedAccount = this.getCachedAccount(accountKey);
            }
            // Return user set state in the response
            tokenResponse.userRequestState = ProtocolUtils.getUserRequestState(state);
            this.cacheManager.resetTempCacheItems(state);
            if (!cachedAccount || !tokenResponse.account || Account.compareAccounts(cachedAccount, tokenResponse.account)) {
                return this.saveToken(tokenResponse, authorityString, resource, serverTokenResponse, clientInfo);
            }
            else {
                this.logger.error("Accounts do not match.");
                this.logger.errorPii("Cached Account: " + JSON.stringify(cachedAccount) + ", New Account: " + JSON.stringify(tokenResponse.account));
                throw ClientAuthError.createAccountMismatchError();
            }
        };
        return ResponseHandler;
    }());

    /**
     * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
     * endpoint. It will store the pertinent config data in this object for use during token calls.
     */
    var Authority = /** @class */ (function () {
        function Authority(authority, networkInterface) {
            this.canonicalAuthority = authority;
            this._canonicalAuthority.validateAsUri();
            this.networkInterface = networkInterface;
        }
        Object.defineProperty(Authority.prototype, "canonicalAuthority", {
            /**
             * A URL that is the authority set by the developer
             */
            get: function () {
                return this._canonicalAuthority.urlString;
            },
            /**
             * Sets canonical authority.
             */
            set: function (url) {
                this._canonicalAuthority = new UrlString(url);
                this._canonicalAuthority.validateAsUri();
                this._canonicalAuthorityUrlComponents = null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
            /**
             * Get authority components.
             */
            get: function () {
                if (!this._canonicalAuthorityUrlComponents) {
                    this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
                }
                return this._canonicalAuthorityUrlComponents;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tenant", {
            /**
             * Get tenant for authority.
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
            /**
             * OAuth /authorize endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tokenEndpoint", {
            /**
             * OAuth /token endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
            /**
             * OAuth logout endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
            /**
             * OAuth issuer for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Replaces tenant in url path with current tenant. Defaults to common.
         * @param urlString
         */
        Authority.prototype.replaceTenant = function (urlString) {
            return urlString.replace("{tenant}", this.tenant);
        };
        Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
            /**
             * The default open id configuration endpoint for any canonical authority.
             */
            get: function () {
                return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Boolean that returns whethr or not tenant discovery has been completed.
         */
        Authority.prototype.discoveryComplete = function () {
            return !!this.tenantDiscoveryResponse;
        };
        /**
         * Gets OAuth endpoints from the given OpenID configuration endpoint.
         * @param openIdConfigurationEndpoint
         */
        Authority.prototype.discoverEndpoints = function (openIdConfigurationEndpoint) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint)];
                });
            });
        };
        /**
         * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
         */
        Authority.prototype.resolveEndpointsAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var openIdConfigEndpoint, _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getOpenIdConfigurationEndpointAsync()];
                        case 1:
                            openIdConfigEndpoint = _b.sent();
                            _a = this;
                            return [4 /*yield*/, this.discoverEndpoints(openIdConfigEndpoint)];
                        case 2:
                            _a.tenantDiscoveryResponse = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Authority;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Authority types supported by MSAL.
     */
    var AuthorityType;
    (function (AuthorityType) {
        AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
        AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
        AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
    })(AuthorityType || (AuthorityType = {}));

    /**
     * The AadAuthority class extends the Authority class and adds functionality specific to the Azure AD OAuth Authority.
     */
    var AadAuthority = /** @class */ (function (_super) {
        __extends$1(AadAuthority, _super);
        function AadAuthority(authority, networkInterface) {
            return _super.call(this, authority, networkInterface) || this;
        }
        Object.defineProperty(AadAuthority.prototype, "authorityType", {
            // Set authority type to AAD
            get: function () {
                return AuthorityType.Aad;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AadAuthority.prototype, "aadInstanceDiscoveryEndpointUrl", {
            // Default AAD Instance Discovery Endpoint
            get: function () {
                return Constants.AAD_INSTANCE_DISCOVERY_ENDPT + "?api-version=1.0&authorization_endpoint=" + this.canonicalAuthority + "oauth2/v2.0/authorize";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns a promise which resolves to the OIDC endpoint
         * Only responds with the endpoint
         */
        AadAuthority.prototype.getOpenIdConfigurationEndpointAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var response;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isInTrustedHostList(this.canonicalAuthorityUrlComponents.HostNameAndPort)) {
                                return [2 /*return*/, this.defaultOpenIdConfigurationEndpoint];
                            }
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(this.aadInstanceDiscoveryEndpointUrl)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.tenant_discovery_endpoint];
                    }
                });
            });
        };
        /**
         * Checks to see if the host is in a list of trusted hosts
         * @param {string} The host to look up
         */
        AadAuthority.prototype.isInTrustedHostList = function (host) {
            return AADTrustedHostList.includes(host);
        };
        return AadAuthority;
    }(Authority));

    var AuthorityFactory = /** @class */ (function () {
        function AuthorityFactory() {
        }
        /**
         * Parse the url and determine the type of authority
         */
        AuthorityFactory.detectAuthorityFromUrl = function (authorityString) {
            var authorityUrl = new UrlString(authorityString);
            var components = authorityUrl.getUrlComponents();
            var pathSegments = components.PathSegments;
            switch (pathSegments[0]) {
                case "tfp":
                    // tfp denotes a b2c url
                    return AuthorityType.B2C;
                default:
                    // default authority is always AAD
                    return AuthorityType.Aad;
            }
        };
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
         */
        AuthorityFactory.createInstance = function (authorityUrl, networkInterface) {
            // Throw error if authority url is empty
            if (StringUtils.isEmpty(authorityUrl)) {
                throw ClientConfigurationError.createUrlEmptyError();
            }
            var type = AuthorityFactory.detectAuthorityFromUrl(authorityUrl);
            // Depending on above detection, create the right type.
            switch (type) {
                case AuthorityType.Aad:
                    return new AadAuthority(authorityUrl, networkInterface);
                default:
                    throw ClientAuthError.createInvalidAuthorityTypeError("Given Url: " + authorityUrl);
            }
        };
        return AuthorityFactory;
    }());

    /**
     * AuthorizationCodeModule class
     *
     * Object instance which will construct requests to send to and handle responses
     * from the Microsoft STS using the authorization code flow.
     */
    var AuthorizationCodeModule = /** @class */ (function (_super) {
        __extends$1(AuthorizationCodeModule, _super);
        function AuthorizationCodeModule(configuration) {
            var _this = 
            // Implement base module
            _super.call(this, {
                systemOptions: configuration.systemOptions,
                loggerOptions: configuration.loggerOptions,
                storageInterface: configuration.storageInterface,
                networkInterface: configuration.networkInterface,
                cryptoInterface: configuration.cryptoInterface
            }) || this;
            // Implement defaults in config
            _this.clientConfig = buildPublicClientSPAConfiguration(configuration);
            // Initialize default authority instance
            _this.defaultAuthorityInstance = AuthorityFactory.createInstance(_this.clientConfig.auth.authority || Constants.DEFAULT_AUTHORITY, _this.networkClient);
            return _this;
        }
        /**
         * Creates a url for logging in a user. This will by default append the client id to the list of scopes,
         * allowing you to retrieve an id token in the subsequent code exchange. Also performs validation of the request parameters.
         * Including any SSO parameters (account, sid, login_hint) will short circuit the authentication and allow you to retrieve a code without interaction.
         * @param request
         */
        AuthorizationCodeModule.prototype.createLoginUrl = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.createUrl(request, true)];
                });
            });
        };
        /**
         * Creates a url for logging in a user. Also performs validation of the request parameters.
         * Including any SSO parameters (account, sid, login_hint) will short circuit the authentication and allow you to retrieve a code without interaction.
         * @param request
         */
        AuthorizationCodeModule.prototype.createAcquireTokenUrl = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.createUrl(request, false)];
                });
            });
        };
        /**
         * Helper function which creates URL. If isLoginCall is true, MSAL appends client id scope to retrieve id token from the service.
         * @param request
         * @param isLoginCall
         */
        AuthorizationCodeModule.prototype.createUrl = function (request, isLoginCall) {
            return __awaiter$1(this, void 0, void 0, function () {
                var acquireTokenAuthority, e_1, requestParameters, adalIdToken, adalIdTokenString, urlNavigate, tokenRequest, e_2;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            acquireTokenAuthority = (request && request.authority) ? AuthorityFactory.createInstance(request.authority, this.networkClient) : this.defaultAuthorityInstance;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            requestParameters = new ServerCodeRequestParameters(acquireTokenAuthority, this.clientConfig.auth.clientId, request, this.getAccount(), this.getRedirectUri(), this.cryptoObj, isLoginCall);
                            adalIdToken = null;
                            if (!requestParameters.hasSSOParam()) {
                                adalIdTokenString = this.cacheStorage.getItem(PersistentCacheKeys.ADAL_ID_TOKEN);
                                if (!StringUtils.isEmpty(adalIdTokenString)) {
                                    adalIdToken = new IdToken(adalIdTokenString, this.cryptoObj);
                                    this.cacheStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
                                }
                            }
                            // Update required cache entries for request.
                            this.cacheManager.updateCacheEntries(requestParameters, request.account);
                            // Populate query parameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer.
                            requestParameters.populateQueryParams(adalIdToken);
                            return [4 /*yield*/, requestParameters.createNavigateUrl()];
                        case 5:
                            urlNavigate = _a.sent();
                            tokenRequest = {
                                scopes: requestParameters.scopes.getOriginalScopesAsArray(),
                                resource: request.resource,
                                codeVerifier: requestParameters.generatedPkce.verifier,
                                extraQueryParameters: request.extraQueryParameters,
                                authority: requestParameters.authorityInstance.canonicalAuthority,
                                correlationId: requestParameters.correlationId
                            };
                            this.cacheStorage.setItem(TemporaryCacheKeys.REQUEST_PARAMS, this.cryptoObj.base64Encode(JSON.stringify(tokenRequest)));
                            return [2 /*return*/, urlNavigate];
                        case 6:
                            e_2 = _a.sent();
                            // Reset cache items before re-throwing.
                            this.cacheManager.resetTempCacheItems(requestParameters && requestParameters.state);
                            throw e_2;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Given an authorization code, it will perform a token exchange using cached values from a previous call to
         * createLoginUrl() or createAcquireTokenUrl(). You must call this AFTER using one of those APIs first. You should
         * also use the handleFragmentResponse() API to pass the codeResponse to this function afterwards.
         * @param codeResponse
         */
        AuthorizationCodeModule.prototype.acquireToken = function (codeResponse) {
            return __awaiter$1(this, void 0, void 0, function () {
                var tokenRequest, acquireTokenAuthority, e_3, tokenEndpoint, tokenReqParams, e_4;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            // If no code response is given, we cannot acquire a token.
                            if (!codeResponse || StringUtils.isEmpty(codeResponse.code)) {
                                throw ClientAuthError.createTokenRequestCannotBeMadeError();
                            }
                            tokenRequest = this.getCachedRequest(codeResponse.userRequestState);
                            acquireTokenAuthority = (tokenRequest && tokenRequest.authority) ? AuthorityFactory.createInstance(tokenRequest.authority, this.networkClient) : this.defaultAuthorityInstance;
                            if (!!acquireTokenAuthority.discoveryComplete()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_3);
                        case 4:
                            tokenEndpoint = acquireTokenAuthority.tokenEndpoint;
                            tokenReqParams = new ServerTokenRequestParameters(this.clientConfig.auth.clientId, tokenRequest, codeResponse, this.getRedirectUri(), this.cryptoObj);
                            return [4 /*yield*/, this.getTokenResponse(tokenEndpoint, tokenReqParams, tokenRequest, codeResponse)];
                        case 5: 
                        // User helper to retrieve token response.
                        // Need to await function call before return to catch any thrown errors.
                        // if errors are thrown asynchronously in return statement, they are caught by caller of this function instead.
                        return [2 /*return*/, _a.sent()];
                        case 6:
                            e_4 = _a.sent();
                            // Reset cache items and set account to null before re-throwing.
                            this.cacheManager.resetTempCacheItems(codeResponse && codeResponse.userRequestState);
                            this.account = null;
                            throw e_4;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
         * the given token and returns the renewed token. Will throw an error if login is not completed (unless
         * id tokens are not being renewed).
         * @param request
         */
        AuthorizationCodeModule.prototype.renewToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var account, requestScopes, acquireTokenAuthority, e_5, cachedTokenItem, expirationSec, offsetCurrentTimeSec, cachedScopes, defaultTokenResponse, tokenEndpoint, tokenReqParams, e_6;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 8, , 9]);
                            // Cannot renew token if no request object is given.
                            if (!request) {
                                throw ClientConfigurationError.createEmptyTokenRequestError();
                            }
                            account = request.account || this.getAccount();
                            requestScopes = new ScopeSet(request.scopes || [], this.clientConfig.auth.clientId, true);
                            // If this is an id token renewal, and no account is present, throw an error.
                            if (requestScopes.isLoginScopeSet()) {
                                if (!account) {
                                    throw ClientAuthError.createUserLoginRequiredError();
                                }
                            }
                            acquireTokenAuthority = request.authority ? AuthorityFactory.createInstance(request.authority, this.networkClient) : this.defaultAuthorityInstance;
                            if (!!acquireTokenAuthority.discoveryComplete()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_5 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_5);
                        case 4:
                            cachedTokenItem = this.getCachedTokens(requestScopes, acquireTokenAuthority.canonicalAuthority, request.resource, account && account.homeAccountIdentifier);
                            expirationSec = Number(cachedTokenItem.value.expiresOnSec);
                            offsetCurrentTimeSec = TimeUtils.nowSeconds() + this.clientConfig.systemOptions.tokenRenewalOffsetSeconds;
                            if (!(!request.forceRefresh && expirationSec && expirationSec > offsetCurrentTimeSec)) return [3 /*break*/, 5];
                            cachedScopes = ScopeSet.fromString(cachedTokenItem.key.scopes, this.clientConfig.auth.clientId, true);
                            defaultTokenResponse = {
                                uniqueId: "",
                                tenantId: "",
                                scopes: cachedScopes.asArray(),
                                tokenType: cachedTokenItem.value.tokenType,
                                idToken: "",
                                idTokenClaims: null,
                                accessToken: cachedTokenItem.value.accessToken,
                                refreshToken: cachedTokenItem.value.refreshToken,
                                expiresOn: new Date(expirationSec * 1000),
                                account: account,
                                userRequestState: ""
                            };
                            // Only populate id token if it exists in cache item.
                            return [2 /*return*/, StringUtils.isEmpty(cachedTokenItem.value.idToken) ? defaultTokenResponse :
                                    ResponseHandler.setResponseIdToken(defaultTokenResponse, new IdToken(cachedTokenItem.value.idToken, this.cryptoObj))];
                        case 5:
                            // Renew the tokens.
                            request.authority = cachedTokenItem.key.authority;
                            tokenEndpoint = acquireTokenAuthority.tokenEndpoint;
                            tokenReqParams = new ServerTokenRequestParameters(this.clientConfig.auth.clientId, request, null, this.getRedirectUri(), this.cryptoObj, cachedTokenItem.value.refreshToken);
                            return [4 /*yield*/, this.getTokenResponse(tokenEndpoint, tokenReqParams, request)];
                        case 6: 
                        // User helper to retrieve token response.
                        // Need to await function call before return to catch any thrown errors.
                        // if errors are thrown asynchronously in return statement, they are caught by caller of this function instead.
                        return [2 /*return*/, _a.sent()];
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            e_6 = _a.sent();
                            // Reset cache items and set account to null before re-throwing.
                            this.cacheManager.resetTempCacheItems();
                            this.account = null;
                            throw e_6;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        // #region Logout
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param authorityUri
         */
        AuthorizationCodeModule.prototype.logout = function (authorityUri) {
            return __awaiter$1(this, void 0, void 0, function () {
                var currentAccount, homeAccountIdentifier, postLogoutRedirectUri, acquireTokenAuthority, e_7, logoutUri;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            currentAccount = this.getAccount();
                            homeAccountIdentifier = currentAccount ? currentAccount.homeAccountIdentifier : "";
                            // Remove all pertinent access tokens.
                            this.cacheManager.removeAllAccessTokens(this.clientConfig.auth.clientId, authorityUri, "", homeAccountIdentifier);
                            // Clear remaining cache items.
                            this.cacheStorage.clear();
                            // Clear current account.
                            this.account = null;
                            postLogoutRedirectUri = "";
                            try {
                                postLogoutRedirectUri = "?" + AADServerParamKeys.POST_LOGOUT_URI + "=" + encodeURIComponent(this.getPostLogoutRedirectUri());
                            }
                            catch (e) { }
                            acquireTokenAuthority = (authorityUri) ? AuthorityFactory.createInstance(authorityUri, this.networkClient) : this.defaultAuthorityInstance;
                            if (!!acquireTokenAuthority.discoveryComplete()) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_7 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_7);
                        case 4:
                            logoutUri = "" + acquireTokenAuthority.endSessionEndpoint + postLogoutRedirectUri;
                            return [2 /*return*/, logoutUri];
                    }
                });
            });
        };
        // #endregion
        // #region Response Handling
        /**
         * Handles the hash fragment response from public client code request. Returns a code response used by
         * the client to exchange for a token in acquireToken.
         * @param hashFragment
         */
        AuthorizationCodeModule.prototype.handleFragmentResponse = function (hashFragment) {
            // Handle responses.
            var responseHandler = new ResponseHandler(this.clientConfig.auth.clientId, this.cacheStorage, this.cacheManager, this.cryptoObj, this.logger);
            // Deserialize hash fragment response parameters.
            var hashUrlString = new UrlString(hashFragment);
            var serverParams = hashUrlString.getDeserializedHash();
            // Get code response
            return responseHandler.handleServerCodeResponse(serverParams);
        };
        // #endregion
        // #region Helpers
        /**
         * Clears cache of items related to current request.
         */
        AuthorizationCodeModule.prototype.cancelRequest = function () {
            var cachedState = this.cacheStorage.getItem(TemporaryCacheKeys.REQUEST_STATE);
            this.cacheManager.resetTempCacheItems(cachedState || "");
        };
        /**
         * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
         */
        AuthorizationCodeModule.prototype.getCachedRequest = function (state) {
            try {
                // Get token request from cache and parse as TokenExchangeParameters.
                var encodedTokenRequest = this.cacheStorage.getItem(TemporaryCacheKeys.REQUEST_PARAMS);
                var parsedRequest = JSON.parse(this.cryptoObj.base64Decode(encodedTokenRequest));
                this.cacheStorage.removeItem(TemporaryCacheKeys.REQUEST_PARAMS);
                // Get cached authority and use if no authority is cached with request.
                if (StringUtils.isEmpty(parsedRequest.authority)) {
                    var authorityKey = this.cacheManager.generateAuthorityKey(state);
                    var cachedAuthority = this.cacheStorage.getItem(authorityKey);
                    parsedRequest.authority = cachedAuthority;
                }
                return parsedRequest;
            }
            catch (err) {
                throw ClientAuthError.createTokenRequestCacheError(err);
            }
        };
        /**
         * Gets all cached tokens based on the given criteria.
         * @param requestScopes
         * @param authorityUri
         * @param resourceId
         * @param homeAccountIdentifier
         */
        AuthorizationCodeModule.prototype.getCachedTokens = function (requestScopes, authorityUri, resourceId, homeAccountIdentifier) {
            var _this = this;
            // Get all access tokens with matching authority, resource id and home account ID
            var tokenCacheItems = this.cacheManager.getAllAccessTokens(this.clientConfig.auth.clientId, authorityUri || "", resourceId || "", homeAccountIdentifier || "");
            if (tokenCacheItems.length === 0) {
                throw ClientAuthError.createNoTokensFoundError(requestScopes.printScopes());
            }
            // Filter cache items based on available scopes.
            var filteredCacheItems = tokenCacheItems.filter(function (cacheItem) {
                var cachedScopes = ScopeSet.fromString(cacheItem.key.scopes, _this.clientConfig.auth.clientId, true);
                return cachedScopes.containsScopeSet(requestScopes);
            });
            // If cache items contains too many matching tokens, throw error.
            if (filteredCacheItems.length > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError(requestScopes.printScopes());
            }
            else if (filteredCacheItems.length === 1) {
                // Return single cache item.
                return filteredCacheItems[0];
            }
            // If cache items are empty, throw error.
            throw ClientAuthError.createNoTokensFoundError(requestScopes.printScopes());
        };
        /**
         * Makes a request to the token endpoint with the given parameters and parses the response.
         * @param tokenEndpoint
         * @param tokenReqParams
         * @param tokenRequest
         * @param codeResponse
         */
        AuthorizationCodeModule.prototype.getTokenResponse = function (tokenEndpoint, tokenReqParams, tokenRequest, codeResponse) {
            return __awaiter$1(this, void 0, void 0, function () {
                var acquiredTokenResponse, responseHandler, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, {
                                body: tokenReqParams.createRequestBody(),
                                headers: tokenReqParams.createRequestHeaders()
                            })];
                        case 1:
                            acquiredTokenResponse = _a.sent();
                            responseHandler = new ResponseHandler(this.clientConfig.auth.clientId, this.cacheStorage, this.cacheManager, this.cryptoObj, this.logger);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateServerAuthorizationTokenResponse(acquiredTokenResponse);
                            tokenResponse = responseHandler.createTokenResponse(acquiredTokenResponse, tokenRequest.authority, tokenRequest.resource, codeResponse && codeResponse.userRequestState);
                            // Set current account to received response account, if any.
                            this.account = tokenResponse.account;
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        // #endregion
        // #region Getters and setters
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * Evaluates redirectUri if its a function, otherwise simply returns its value.
         * @returns {string} redirect URL
         *
         */
        AuthorizationCodeModule.prototype.getRedirectUri = function () {
            if (this.clientConfig.auth.redirectUri) {
                if (typeof this.clientConfig.auth.redirectUri === "function") {
                    return this.clientConfig.auth.redirectUri();
                }
                else if (!StringUtils.isEmpty(this.clientConfig.auth.redirectUri)) {
                    return this.clientConfig.auth.redirectUri;
                }
            }
            // This should never throw unless window.location.href is returning empty.
            throw ClientConfigurationError.createRedirectUriEmptyError();
        };
        /**
         * Use to get the post logout redirect uri configured in MSAL or null.
         * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
         *
         * @returns {string} post logout redirect URL
         */
        AuthorizationCodeModule.prototype.getPostLogoutRedirectUri = function () {
            if (this.clientConfig.auth.postLogoutRedirectUri) {
                if (typeof this.clientConfig.auth.postLogoutRedirectUri === "function") {
                    return this.clientConfig.auth.postLogoutRedirectUri();
                }
                else if (!StringUtils.isEmpty(this.clientConfig.auth.postLogoutRedirectUri)) {
                    return this.clientConfig.auth.postLogoutRedirectUri;
                }
            }
            // This should never throw unless window.location.href is returning empty.
            throw ClientConfigurationError.createPostLogoutRedirectUriEmptyError();
        };
        return AuthorizationCodeModule;
    }(AuthModule));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Constants
     */
    var BrowserConstants = {
        // Local storage constant string
        CACHE_LOCATION_LOCAL: "localStorage",
        // Session storage constant string
        CACHE_LOCATION_SESSION: "sessionStorage",
        // Interaction status key (only used for browsers)
        INTERACTION_STATUS_KEY: "interaction.status",
        // Interaction in progress cache value
        INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
        // Default popup window width
        POPUP_WIDTH: 483,
        // Default popup window height
        POPUP_HEIGHT: 600,
        // Default popup monitor poll interval in milliseconds
        POPUP_POLL_INTERVAL_MS: 50
    };
    /**
     * HTTP Request types supported by MSAL.
     */
    var HTTP_REQUEST_TYPE;
    (function (HTTP_REQUEST_TYPE) {
        HTTP_REQUEST_TYPE["GET"] = "GET";
        HTTP_REQUEST_TYPE["POST"] = "POST";
    })(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));

    /**
     * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    var FetchClient = /** @class */ (function () {
        function FetchClient() {
        }
        /**
         * Fetch Client for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch(url, {
                                method: HTTP_REQUEST_TYPE.GET,
                                headers: this.getFetchHeaders(options)
                            })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Fetch Client for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                var reqBody, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reqBody = (options && options.body) || "";
                            return [4 /*yield*/, fetch(url, {
                                    method: HTTP_REQUEST_TYPE.POST,
                                    headers: this.getFetchHeaders(options),
                                    body: reqBody
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get Fetch API Headers object from string map
         * @param inputHeaders
         */
        FetchClient.prototype.getFetchHeaders = function (options) {
            var headers = new Headers();
            if (!(options && options.headers)) {
                return headers;
            }
            options.headers.forEach(function (value, key) {
                headers.append(key, value);
            });
            return headers;
        };
        return FetchClient;
    }());

    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserAuthErrorMessage = {
        noWindowObjectError: {
            code: "no_window_object",
            desc: "No window object detected."
        },
        pkceNotGenerated: {
            code: "pkce_not_created",
            desc: "The PKCE code challenge and verifier could not be generated."
        },
        cryptoDoesNotExist: {
            code: "crypto_nonexistent",
            desc: "The crypto object or function is not available."
        },
        httpMethodNotImplementedError: {
            code: "http_method_not_implemented",
            desc: "The HTTP method given has not been implemented in this library."
        },
        emptyNavigateUriError: {
            code: "empty_navigate_uri",
            desc: "Navigation URI is empty. Please check stack trace for more info."
        },
        hashEmptyError: {
            code: "hash_empty_error",
            desc: "Hash value cannot be processed because it is empty."
        },
        interactionInProgress: {
            code: "interaction_in_progress",
            desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API."
        },
        popUpWindowError: {
            code: "popup_window_error",
            desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
        },
        emptyWindowError: {
            code: "empty_window_error",
            desc: "window.open returned null or undefined window object."
        },
        userCancelledError: {
            code: "user_cancelled",
            desc: "User cancelled the flow."
        },
        popupWindowTimeoutError: {
            code: "popup_window_timeout",
            desc: "Popup window token acquisition operation failed due to timeout."
        },
        redirectInIframeError: {
            code: "redirect_in_iframe",
            desc: "Code flow is not supported inside an iframe. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
        }
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserAuthError = /** @class */ (function (_super) {
        __extends(BrowserAuthError, _super);
        function BrowserAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            Object.setPrototypeOf(_this, BrowserAuthError.prototype);
            _this.name = "BrowserAuthError";
            return _this;
        }
        /**
         * Creates error thrown when no window object can be found.
         */
        BrowserAuthError.createNoWindowObjectError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noWindowObjectError.code, BrowserAuthErrorMessage.noWindowObjectError.desc);
        };
        /**
         * Creates an error thrown when PKCE is not implemented.
         * @param errDetail
         */
        BrowserAuthError.createPkceNotGeneratedError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when the crypto object is unavailable.
         * @param errDetail
         */
        BrowserAuthError.createCryptoNotAvailableError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when an HTTP method hasn't been implemented by the browser class.
         * @param method
         */
        BrowserAuthError.createHttpMethodNotImplementedError = function (method) {
            return new BrowserAuthError(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
        };
        /**
         * Creates an error thrown when the navigation URI is empty.
         */
        BrowserAuthError.createEmptyNavigationUriError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         * @param hashValue
         */
        BrowserAuthError.createEmptyHashError = function (hashValue) {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
        };
        /**
         * Creates an error thrown when a browser interaction (redirect or popup) is in progress.
         */
        BrowserAuthError.createInteractionInProgressError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
        };
        /**
         * Creates an error thrown when the popup window could not be opened.
         * @param errDetail
         */
        BrowserAuthError.createPopupWindowError = function (errDetail) {
            var errorMessage = BrowserAuthErrorMessage.popUpWindowError.desc;
            errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
            return new BrowserAuthError(BrowserAuthErrorMessage.popUpWindowError.code, errorMessage);
        };
        /**
         * Creates an error thrown when window.open returns an empty window object.
         * @param errDetail
         */
        BrowserAuthError.createEmptyWindowCreatedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
        };
        /**
         * Creates an error thrown when the user closes a popup.
         */
        BrowserAuthError.createUserCancelledError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
        };
        /**
         * Creates an error thrown when monitorWindowFromHash times out for a given popup.
         * @param urlNavigate
         */
        BrowserAuthError.createPopupWindowTimeoutError = function (urlNavigate) {
            var errorMessage = "URL navigated to is " + urlNavigate + ", " + BrowserAuthErrorMessage.popupWindowTimeoutError.desc;
            return new BrowserAuthError(BrowserAuthErrorMessage.popupWindowTimeoutError.code, errorMessage);
        };
        /**
         * Creates an error thrown when navigateWindow is called inside an iframe.
         * @param windowParentCheck
         */
        BrowserAuthError.createRedirectInIframeError = function (windowParentCheck) {
            return new BrowserAuthError(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
        };
        return BrowserAuthError;
    }(AuthError));

    /**
     * This client implements the XMLHttpRequest class to send GET and POST requests.
     */
    var XhrClient = /** @class */ (function () {
        function XhrClient() {
        }
        /**
         * XhrClient for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
                });
            });
        };
        /**
         * XhrClient for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
                });
            });
        };
        /**
         * Helper for XhrClient requests.
         * @param url
         * @param method
         * @param options
         */
        XhrClient.prototype.sendRequestAsync = function (url, method, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, /* async: */ true);
                _this.setXhrHeaders(xhr, options);
                xhr.onload = function () {
                    if (xhr.status < 200 || xhr.status >= 300) {
                        reject(xhr.responseText);
                    }
                    try {
                        var jsonResponse = JSON.parse(xhr.responseText);
                        resolve(jsonResponse);
                    }
                    catch (e) {
                        reject(xhr.responseText);
                    }
                };
                xhr.onerror = function () {
                    reject(xhr.status);
                };
                if (method === "POST" && options.body) {
                    xhr.send(options.body);
                }
                else if (method === "GET") {
                    xhr.send();
                }
                else {
                    throw BrowserAuthError.createHttpMethodNotImplementedError(method);
                }
            });
        };
        /**
         * Helper to set XHR headers for request.
         * @param xhr
         * @param options
         */
        XhrClient.prototype.setXhrHeaders = function (xhr, options) {
            if (options && options.headers) {
                options.headers.forEach(function (value, key) {
                    xhr.setRequestHeader(key, value);
                });
            }
        };
        return XhrClient;
    }());

    /**
     * Utility class for browser specific functions
     */
    var BrowserUtils = /** @class */ (function () {
        function BrowserUtils() {
        }
        // #region Window Navigation and URL management
        /**
         * Used to redirect the browser to the STS authorization endpoint
         * @param {string} urlNavigate - URL of the authorization endpoint
         * @param {boolean} noHistory - boolean flag, uses .replace() instead of .assign() if true
         */
        BrowserUtils.navigateWindow = function (urlNavigate, noHistory) {
            if (noHistory) {
                window.location.replace(urlNavigate);
            }
            else {
                window.location.assign(urlNavigate);
            }
        };
        /**
         * Clears hash from window url.
         */
        BrowserUtils.clearHash = function () {
            window.location.hash = "";
        };
        /**
         * Returns boolean of whether the current window is in an iframe or not.
         */
        BrowserUtils.isInIframe = function () {
            return window.parent !== window;
        };
        // #endregion
        /**
         * Returns current window URL as redirect uri
         */
        BrowserUtils.getDefaultRedirectUri = function () {
            return window.location.href.split("?")[0].split("#")[0];
        };
        /**
         * Returns best compatible network client object.
         */
        BrowserUtils.getBrowserNetworkClient = function () {
            if (window.fetch) {
                return new FetchClient();
            }
            else {
                return new XhrClient();
            }
        };
        return BrowserUtils;
    }());

    // Default timeout for popup windows in milliseconds
    var DEFAULT_POPUP_TIMEOUT_MS = 60000;
    // Default auth options for browser
    var DEFAULT_AUTH_OPTIONS$1 = {
        clientId: "",
        authority: null,
        redirectUri: function () { return BrowserUtils.getDefaultRedirectUri(); },
        postLogoutRedirectUri: function () { return BrowserUtils.getDefaultRedirectUri(); },
        navigateToLoginRequestUrl: true
    };
    // Default cache options for browser
    var DEFAULT_CACHE_OPTIONS = {
        cacheLocation: BrowserConstants.CACHE_LOCATION_SESSION,
        storeAuthStateInCookie: false
    };
    // Default logger options for browser
    var DEFAULT_LOGGER_OPTIONS = {
        loggerCallback: function (level, message, containsPii) {
            if (containsPii) {
                return;
            }
            switch (level) {
                case LogLevel.Error:
                    console.error(message);
                    return;
                case LogLevel.Info:
                    console.info(message);
                    return;
                case LogLevel.Verbose:
                    console.debug(message);
                    return;
                case LogLevel.Warning:
                    console.warn(message);
                    return;
            }
        },
        piiLoggingEnabled: false
    };
    // Default system options for browser
    var DEFAULT_SYSTEM_OPTIONS$1 = {
        loggerOptions: DEFAULT_LOGGER_OPTIONS,
        networkClient: BrowserUtils.getBrowserNetworkClient(),
        windowHashTimeout: DEFAULT_POPUP_TIMEOUT_MS
    };
    /**
     * MSAL function that sets the default options when not explicitly configured from app developer
     *
     * @param TAuthOptions
     * @param TCacheOptions
     * @param TSystemOptions
     * @param TFrameworkOptions
     *
     * @returns TConfiguration object
     */
    function buildConfiguration(_a) {
        var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c;
        var overlayedConfig = {
            auth: __assign(__assign({}, DEFAULT_AUTH_OPTIONS$1), auth),
            cache: __assign(__assign({}, DEFAULT_CACHE_OPTIONS), cache),
            system: __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS$1), system)
        };
        return overlayedConfig;
    }

    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserConfigurationAuthErrorMessage = {
        storageNotSupportedError: {
            code: "storage_not_supported",
            desc: "Given storage configuration option was not supported."
        },
        noRedirectCallbacksSet: {
            code: "no_redirect_callbacks",
            desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
        invalidCallbackObject: {
            code: "invalid_callback_object",
            desc: "The object passed for the callback was invalid. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserConfigurationAuthError = /** @class */ (function (_super) {
        __extends(BrowserConfigurationAuthError, _super);
        function BrowserConfigurationAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "BrowserConfigurationAuthError";
            Object.setPrototypeOf(_this, BrowserConfigurationAuthError.prototype);
            return _this;
        }
        /**
         * Creates error thrown when given storage location is not supported.
         * @param givenStorageLocation
         */
        BrowserConfigurationAuthError.createStorageNotSupportedError = function (givenStorageLocation) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
        };
        /**
         * Creates error thrown when callback object is invalid.
         * @param callbackObject
         */
        BrowserConfigurationAuthError.createInvalidCallbackObjectError = function (callbackObject) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.invalidCallbackObject.code, BrowserConfigurationAuthErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
        };
        /**
         * Creates error thrown when redirect callbacks are not set before calling loginRedirect() or acquireTokenRedirect().
         */
        BrowserConfigurationAuthError.createRedirectCallbacksNotSetError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
        };
        return BrowserConfigurationAuthError;
    }(AuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Cookie life calculation (hours * minutes * seconds * ms)
    var COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1000;
    /**
     * This class implements the cache storage interface for MSAL through browser local or session storage.
     * Cookies are only used if storeAuthStateInCookie is true, and are only used for
     * parameters such as state and nonce, generally.
     */
    var BrowserStorage = /** @class */ (function () {
        function BrowserStorage(clientId, cacheConfig) {
            // Validate cache location
            this.validateWindowStorage(cacheConfig.cacheLocation);
            this.cacheConfig = cacheConfig;
            this.windowStorage = window[this.cacheConfig.cacheLocation];
            this.clientId = clientId;
            // Migrate any cache entries from older versions of MSAL.
            this.migrateCacheEntries();
        }
        /**
         * Validates the the given cache location string is an expected value:
         * - localStorage
         * - sessionStorage (default)
         * Also validates if given cacheLocation is supported on the browser.
         * @param cacheLocation
         */
        BrowserStorage.prototype.validateWindowStorage = function (cacheLocation) {
            if (typeof window === "undefined" || !window) {
                throw BrowserAuthError.createNoWindowObjectError();
            }
            if (cacheLocation !== BrowserConstants.CACHE_LOCATION_LOCAL && cacheLocation !== BrowserConstants.CACHE_LOCATION_SESSION) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
            var storageSupported = !!window[cacheLocation];
            if (!storageSupported) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
        };
        /**
         * Migrate all old cache entries to new schema. No rollback supported.
         * @param storeAuthStateInCookie
         */
        BrowserStorage.prototype.migrateCacheEntries = function () {
            var _this = this;
            var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
            var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
            var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
            var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
            var idTokenValue = this.getItem(idTokenKey);
            var clientInfoValue = this.getItem(clientInfoKey);
            var errorValue = this.getItem(errorKey);
            var errorDescValue = this.getItem(errorDescKey);
            var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
            var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
            keysToMigrate.forEach(function (cacheKey, index) { return _this.migrateCacheEntry(cacheKey, values[index]); });
        };
        /**
         * Utility function to help with migration.
         * @param newKey
         * @param value
         * @param storeAuthStateInCookie
         */
        BrowserStorage.prototype.migrateCacheEntry = function (newKey, value) {
            if (value) {
                this.setItem(newKey, value);
            }
        };
        /**
         * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
         * @param key
         * @param addInstanceId
         */
        BrowserStorage.prototype.generateCacheKey = function (key) {
            try {
                // Defined schemas do not need the key migrated
                this.validateObjectKey(key);
                return key;
            }
            catch (e) {
                if (key.startsWith("" + Constants.CACHE_PREFIX) || key.startsWith(PersistentCacheKeys.ADAL_ID_TOKEN)) {
                    return key;
                }
                return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
            }
        };
        /**
         * Parses key as JSON object, JSON.parse() will throw an error.
         * @param key
         */
        BrowserStorage.prototype.validateObjectKey = function (key) {
            JSON.parse(key);
        };
        /**
         * Sets the cache item with the key and value given.
         * Stores in cookie if storeAuthStateInCookie is set to true.
         * This can cause cookie overflow if used incorrectly.
         * @param key
         * @param value
         */
        BrowserStorage.prototype.setItem = function (key, value) {
            var msalKey = this.generateCacheKey(key);
            this.windowStorage.setItem(msalKey, value);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.setItemCookie(msalKey, value);
            }
        };
        /**
         * Gets cache item with given key.
         * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserStorage.prototype.getItem = function (key) {
            var msalKey = this.generateCacheKey(key);
            var itemCookie = this.getItemCookie(msalKey);
            if (this.cacheConfig.storeAuthStateInCookie && itemCookie) {
                return itemCookie;
            }
            return this.windowStorage.getItem(msalKey);
        };
        /**
         * Removes the cache item with the given key.
         * Will also clear the cookie item if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserStorage.prototype.removeItem = function (key) {
            var msalKey = this.generateCacheKey(key);
            this.windowStorage.removeItem(msalKey);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.clearItemCookie(msalKey);
            }
        };
        /**
         * Checks whether key is in cache.
         * @param key
         */
        BrowserStorage.prototype.containsKey = function (key) {
            var msalKey = this.generateCacheKey(key);
            return this.windowStorage.hasOwnProperty(msalKey) || this.windowStorage.hasOwnProperty(key);
        };
        /**
         * Gets all keys in window.
         */
        BrowserStorage.prototype.getKeys = function () {
            return Object.keys(this.windowStorage);
        };
        /**
         * Clears all cache entries created by MSAL (except tokens).
         */
        BrowserStorage.prototype.clear = function () {
            var key;
            for (key in this.windowStorage) {
                // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
                if (this.windowStorage.hasOwnProperty(key) && (key.indexOf(Constants.CACHE_PREFIX) !== -1) && (key.indexOf(this.clientId) !== -1)) {
                    this.removeItem(key);
                }
            }
        };
        /**
         * Add value to cookies
         * @param cookieName
         * @param cookieValue
         * @param expires
         */
        BrowserStorage.prototype.setItemCookie = function (cookieName, cookieValue, expires) {
            var cookieStr = cookieName + "=" + cookieValue + ";path=/;";
            if (expires) {
                var expireTime = this.getCookieExpirationTime(expires);
                cookieStr += "expires=" + expireTime + ";";
            }
            document.cookie = cookieStr;
        };
        /**
         * Get one item by key from cookies
         * @param cookieName
         */
        BrowserStorage.prototype.getItemCookie = function (cookieName) {
            var name = cookieName + "=";
            var cookieList = document.cookie.split(";");
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];
                while (cookie.charAt(0) === " ") {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return "";
        };
        /**
         * Clear an item in the cookies by key
         * @param cookieName
         */
        BrowserStorage.prototype.clearItemCookie = function (cookieName) {
            this.setItemCookie(cookieName, "", -1);
        };
        /**
         * Clear all msal cookies
         */
        BrowserStorage.prototype.clearMsalCookie = function (state) {
            var nonceKey = state ? TemporaryCacheKeys.NONCE_IDTOKEN + "|" + state : TemporaryCacheKeys.NONCE_IDTOKEN;
            this.clearItemCookie(this.generateCacheKey(nonceKey));
            this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE));
            this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
        };
        /**
         * Get cookie expiration time
         * @param cookieLifeDays
         */
        BrowserStorage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
            var today = new Date();
            var expr = new Date(today.getTime() + cookieLifeDays * COOKIE_LIFE_MULTIPLIER);
            return expr.toUTCString();
        };
        return BrowserStorage;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for math specific functions in browser.
     */
    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        /**
         * Decimal to Hex
         *
         * @param num
         */
        MathUtils.decimalToHex = function (num) {
            var hex = num.toString(16);
            while (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };
        return MathUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var GuidGenerator = /** @class */ (function () {
        function GuidGenerator(cryptoObj) {
            this.cryptoObj = cryptoObj;
        }
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        GuidGenerator.prototype.generateGuid = function () {
            try {
                var buffer = new Uint8Array(16);
                this.cryptoObj.getRandomValues(buffer);
                // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
                buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
                buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
                // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
                buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
                buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
                return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1])
                    + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3])
                    + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5])
                    + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7])
                    + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9])
                    + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11])
                    + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13])
                    + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
            }
            catch (err) {
                var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                var hex = "0123456789abcdef";
                var r = 0;
                var guidResponse = "";
                for (var i = 0; i < 36; i++) {
                    if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                        // each x and y needs to be random
                        r = Math.random() * 16 | 0;
                    }
                    if (guidHolder[i] === "x") {
                        guidResponse += hex[r];
                    }
                    else if (guidHolder[i] === "y") {
                        // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                        r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                        r |= 0x8; // set pos 3 to 1 as 1???
                        guidResponse += hex[r];
                    }
                    else {
                        guidResponse += guidHolder[i];
                    }
                }
                return guidResponse;
            }
        };
        /**
         * verifies if a string is  GUID
         * @param guid
         */
        GuidGenerator.isGuid = function (guid) {
            var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return regexGuid.test(guid);
        };
        return GuidGenerator;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility functions for strings in a browser. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var BrowserStringUtils = /** @class */ (function () {
        function BrowserStringUtils() {
        }
        /**
         * Converts string to Uint8Array
         * @param sDOMStr
         */
        BrowserStringUtils.stringToUtf8Arr = function (sDOMStr) {
            var nChr;
            var nArrLen = 0;
            var nStrLen = sDOMStr.length;
            /* mapping... */
            for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
                nChr = sDOMStr.charCodeAt(nMapIdx);
                nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
            }
            var aBytes = new Uint8Array(nArrLen);
            /* transcription... */
            for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
                nChr = sDOMStr.charCodeAt(nChrIdx);
                if (nChr < 128) {
                    /* one byte */
                    aBytes[nIdx++] = nChr;
                }
                else if (nChr < 0x800) {
                    /* two bytes */
                    aBytes[nIdx++] = 192 + (nChr >>> 6);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x10000) {
                    /* three bytes */
                    aBytes[nIdx++] = 224 + (nChr >>> 12);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x200000) {
                    /* four bytes */
                    aBytes[nIdx++] = 240 + (nChr >>> 18);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x4000000) {
                    /* five bytes */
                    aBytes[nIdx++] = 248 + (nChr >>> 24);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else /* if (nChr <= 0x7fffffff) */ {
                    /* six bytes */
                    aBytes[nIdx++] = 252 + (nChr >>> 30);
                    aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
            }
            return aBytes;
        };
        /**
         * Converts Uint8Array to a string
         * @param aBytes
         */
        BrowserStringUtils.utf8ArrToString = function (aBytes) {
            var sView = "";
            for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
                nPart = aBytes[nIdx];
                sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
                    /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
                    (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                    : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
                        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
                            (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                            : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
                                (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                                : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
                                    (nPart - 192 << 6) + aBytes[++nIdx] - 128
                                    : /* nPart < 127 ? */ /* one byte */
                                        nPart);
            }
            return sView;
        };
        return BrowserStringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to encode plaintext to base64 encoded string. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Encode = /** @class */ (function () {
        function Base64Encode() {
        }
        /**
         * Returns URL Safe b64 encoded string from a plaintext string.
         * @param input
         */
        Base64Encode.prototype.urlEncode = function (input) {
            return this.encode(input)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
        };
        /**
         * Returns URL Safe b64 encoded string from an int8Array.
         * @param inputArr
         */
        Base64Encode.prototype.urlEncodeArr = function (inputArr) {
            return this.base64EncArr(inputArr)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
        };
        /**
         * Returns b64 encoded string from plaintext string.
         * @param input
         */
        Base64Encode.prototype.encode = function (input) {
            var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(encodeURIComponent(input));
            return this.base64EncArr(inputUtf8Arr);
        };
        /**
         * Base64 encode byte array
         * @param aBytes
         */
        Base64Encode.prototype.base64EncArr = function (aBytes) {
            var eqLen = (3 - (aBytes.length % 3)) % 3;
            var sB64Enc = "";
            for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
                nMod3 = nIdx % 3;
                /* Uncomment the following line in order to split the output in lines 76-character long: */
                /*
                if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
                */
                nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
                if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                    sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
                    nUint24 = 0;
                }
            }
            return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
        };
        /**
         * Base64 string to array encoding helper
         * @param nUint6
         */
        Base64Encode.prototype.uint6ToB64 = function (nUint6) {
            return nUint6 < 26 ?
                nUint6 + 65
                : nUint6 < 52 ?
                    nUint6 + 71
                    : nUint6 < 62 ?
                        nUint6 - 4
                        : nUint6 === 62 ?
                            43
                            : nUint6 === 63 ?
                                47
                                :
                                    65;
        };
        return Base64Encode;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to decode base64 strings to plaintext. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Decode = /** @class */ (function () {
        function Base64Decode() {
        }
        /**
         * Returns a URL-safe plaintext decoded string from b64 encoded input.
         * @param input
         */
        Base64Decode.prototype.decode = function (input) {
            var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
            switch (encodedString.length % 4) {
                case 0:
                    break;
                case 2:
                    encodedString += "==";
                    break;
                case 3:
                    encodedString += "=";
                    break;
                default:
                    throw new Error("Invalid base64 string");
            }
            var inputUtf8Arr = this.base64DecToArr(encodedString);
            return decodeURIComponent(BrowserStringUtils.utf8ArrToString(inputUtf8Arr));
        };
        /**
         * Decodes base64 into Uint8Array
         * @param base64String
         * @param nBlockSize
         */
        Base64Decode.prototype.base64DecToArr = function (base64String, nBlockSize) {
            var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
            var aBytes = new Uint8Array(nOutLen);
            for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return aBytes;
        };
        /**
         * Base64 string to array decoding helper
         * @param charNum
         */
        Base64Decode.prototype.b64ToUint6 = function (charNum) {
            return charNum > 64 && charNum < 91 ?
                charNum - 65
                : charNum > 96 && charNum < 123 ?
                    charNum - 71
                    : charNum > 47 && charNum < 58 ?
                        charNum + 4
                        : charNum === 43 ?
                            62
                            : charNum === 47 ?
                                63
                                :
                                    0;
        };
        return Base64Decode;
    }());

    // Charset to generate values from
    var CV_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    // Constant byte array length
    var RANDOM_BYTE_ARR_LENGTH = 32;
    /**
     * Class which exposes APIs to generate PKCE codes and code verifiers.
     */
    var PkceGenerator = /** @class */ (function () {
        function PkceGenerator(cryptoObj) {
            this.base64Encode = new Base64Encode();
            this.cryptoObj = cryptoObj;
        }
        /**
         * Generates PKCE Codes. See the RFC for more information: https://tools.ietf.org/html/rfc7636
         */
        PkceGenerator.prototype.generateCodes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var codeVerifier, codeChallenge;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            codeVerifier = this.generateCodeVerifier();
                            return [4 /*yield*/, this.generateCodeChallengeFromVerifier(codeVerifier)];
                        case 1:
                            codeChallenge = _a.sent();
                            return [2 /*return*/, {
                                    verifier: codeVerifier,
                                    challenge: codeChallenge
                                }];
                    }
                });
            });
        };
        /**
         * Generates a random 32 byte buffer and returns the base64
         * encoded string to be used as a PKCE Code Verifier
         */
        PkceGenerator.prototype.generateCodeVerifier = function () {
            try {
                // Generate random values as utf-8
                var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
                this.cryptoObj.getRandomValues(buffer);
                // verifier as string
                var pkceCodeVerifierString = this.bufferToCVString(buffer);
                // encode verifier as base64
                var pkceCodeVerifierB64 = this.base64Encode.urlEncode(pkceCodeVerifierString);
                return pkceCodeVerifierB64;
            }
            catch (e) {
                throw BrowserAuthError.createPkceNotGeneratedError(e);
            }
        };
        /**
         * Creates a base64 encoded PKCE Code Challenge string from the
         * hash created from the PKCE Code Verifier supplied
         */
        PkceGenerator.prototype.generateCodeChallengeFromVerifier = function (pkceCodeVerifier) {
            return __awaiter(this, void 0, void 0, function () {
                var pkceHashedCodeVerifier, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
                        case 1:
                            pkceHashedCodeVerifier = _a.sent();
                            // encode hash as base64
                            return [2 /*return*/, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
                        case 2:
                            e_1 = _a.sent();
                            throw BrowserAuthError.createPkceNotGeneratedError(e_1);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Generates a character string based on input array.
         * @param buffer
         */
        PkceGenerator.prototype.bufferToCVString = function (buffer) {
            var charArr = [];
            for (var i = 0; i < buffer.byteLength; i += 1) {
                var index = buffer[i] % CV_CHARSET.length;
                charArr.push(CV_CHARSET[index]);
            }
            return charArr.join("");
        };
        return PkceGenerator;
    }());

    // SHA-256 hashing algorithm
    var HASH_ALG = "SHA-256";
    /**
     * This class implements functions used by the browser library to perform cryptography operations such as
     * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
     */
    var BrowserCrypto = /** @class */ (function () {
        function BrowserCrypto() {
            if (!(this.hasCryptoAPI())) {
                throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
            }
        }
        /**
         * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
         * @param dataString
         */
        BrowserCrypto.prototype.sha256Digest = function (dataString) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = BrowserStringUtils.stringToUtf8Arr(dataString);
                    return [2 /*return*/, this.hasIECrypto() ? this.getMSCryptoDigest(HASH_ALG, data) : this.getSubtleCryptoDigest(HASH_ALG, data)];
                });
            });
        };
        /**
         * Populates buffer with cryptographically random values.
         * @param dataBuffer
         */
        BrowserCrypto.prototype.getRandomValues = function (dataBuffer) {
            var cryptoObj = window["msCrypto"] || window.crypto;
            if (!cryptoObj.getRandomValues) {
                throw BrowserAuthError.createCryptoNotAvailableError("getRandomValues does not exist.");
            }
            cryptoObj.getRandomValues(dataBuffer);
        };
        /**
         * Checks whether IE crypto (AKA msCrypto) is available.
         */
        BrowserCrypto.prototype.hasIECrypto = function () {
            return !!window["msCrypto"];
        };
        /**
         * Check whether browser crypto is available.
         */
        BrowserCrypto.prototype.hasBrowserCrypto = function () {
            return !!window.crypto;
        };
        /**
         * Check whether IE crypto or other browser cryptography is available.
         */
        BrowserCrypto.prototype.hasCryptoAPI = function () {
            return this.hasIECrypto() || this.hasBrowserCrypto();
        };
        /**
         * Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getSubtleCryptoDigest = function (algorithm, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, window.crypto.subtle.digest(algorithm, data)];
                });
            });
        };
        /**
         * Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getMSCryptoDigest = function (algorithm, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
                            digestOperation.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            digestOperation.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        return BrowserCrypto;
    }());

    /**
     * This class implements MSAL's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
     * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
     */
    var CryptoOps = /** @class */ (function () {
        function CryptoOps() {
            // Browser crypto needs to be validated first before any other classes can be set.
            this.browserCrypto = new BrowserCrypto();
            this.b64Encode = new Base64Encode();
            this.b64Decode = new Base64Decode();
            this.guidGenerator = new GuidGenerator(this.browserCrypto);
            this.pkceGenerator = new PkceGenerator(this.browserCrypto);
        }
        /**
         * Creates a new random GUID - used to populate state and nonce.
         * @returns string (GUID)
         */
        CryptoOps.prototype.createNewGuid = function () {
            return this.guidGenerator.generateGuid();
        };
        /**
         * Encodes input string to base64.
         * @param input
         */
        CryptoOps.prototype.base64Encode = function (input) {
            return this.b64Encode.encode(input);
        };
        /**
         * Decodes input string from base64.
         * @param input
         */
        CryptoOps.prototype.base64Decode = function (input) {
            return this.b64Decode.decode(input);
        };
        /**
         * Generates PKCE codes used in Authorization Code Flow.
         */
        CryptoOps.prototype.generatePkceCodes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pkceGenerator.generateCodes()];
                });
            });
        };
        return CryptoOps;
    }());

    /**
     * Abstract class which defines operations for a browser interaction handling class.
     */
    var InteractionHandler = /** @class */ (function () {
        function InteractionHandler(authCodeModule, storageImpl) {
            this.authModule = authCodeModule;
            this.browserStorage = storageImpl;
        }
        return InteractionHandler;
    }());

    var RedirectHandler = /** @class */ (function (_super) {
        __extends(RedirectHandler, _super);
        function RedirectHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Redirects window to given URL.
         * @param urlNavigate
         */
        RedirectHandler.prototype.showUI = function (requestUrl) {
            // Navigate if valid URL
            if (!StringUtils.isEmpty(requestUrl)) {
                // Set interaction status in the library.
                this.browserStorage.setItem(TemporaryCacheKeys.ORIGIN_URI, window.location.href);
                this.browserStorage.setItem(BrowserConstants.INTERACTION_STATUS_KEY, BrowserConstants.INTERACTION_IN_PROGRESS_VALUE);
                this.authModule.logger.infoPii("Navigate to:" + requestUrl);
                var isIframedApp = BrowserUtils.isInIframe();
                if (isIframedApp) {
                    // If we are not in top frame, we shouldn't redirect. This is also handled by the service.
                    throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
                }
                // Navigate window to request URL
                BrowserUtils.navigateWindow(requestUrl);
            }
            else {
                // Throw error if request URL is empty.
                this.authModule.logger.info("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
            }
            // Return this window handle. Not used for redirect, but needed for API definition.
            return window;
        };
        /**
         * Handle authorization code response in the window.
         * @param hash
         */
        RedirectHandler.prototype.handleCodeResponse = function (locationHash) {
            return __awaiter(this, void 0, void 0, function () {
                var codeResponse;
                return __generator(this, function (_a) {
                    // Check that location hash isn't empty.
                    if (StringUtils.isEmpty(locationHash)) {
                        throw BrowserAuthError.createEmptyHashError(locationHash);
                    }
                    // Interaction is completed - remove interaction status.
                    this.browserStorage.removeItem(BrowserConstants.INTERACTION_STATUS_KEY);
                    codeResponse = this.authModule.handleFragmentResponse(locationHash);
                    // Hash was processed successfully - remove from cache
                    this.browserStorage.removeItem(TemporaryCacheKeys.URL_HASH);
                    // Acquire token with retrieved code.
                    return [2 /*return*/, this.authModule.acquireToken(codeResponse)];
                });
            });
        };
        return RedirectHandler;
    }(InteractionHandler));

    /**
     * This class implements the interaction handler base class for browsers. It is written specifically for handling
     * popup window scenarios. It includes functions for monitoring the popup window for a hash.
     */
    var PopupHandler = /** @class */ (function (_super) {
        __extends(PopupHandler, _super);
        function PopupHandler(authCodeModule, storageImpl) {
            var _this = _super.call(this, authCodeModule, storageImpl) || this;
            // Properly sets this reference for the unload event.
            _this.unloadWindow = _this.unloadWindow.bind(_this);
            return _this;
        }
        /**
         * Opens a popup window with given request Url.
         * @param requestUrl
         */
        PopupHandler.prototype.showUI = function (requestUrl) {
            // Check that request url is not empty.
            if (!StringUtils.isEmpty(requestUrl)) {
                // Set interaction status in the library.
                this.browserStorage.setItem(BrowserConstants.INTERACTION_STATUS_KEY, BrowserConstants.INTERACTION_IN_PROGRESS_VALUE);
                this.authModule.logger.infoPii("Navigate to:" + requestUrl);
                // Open the popup window to requestUrl.
                return this.openPopup(requestUrl, Constants.LIBRARY_NAME, BrowserConstants.POPUP_WIDTH, BrowserConstants.POPUP_HEIGHT);
            }
            else {
                // Throw error if request URL is empty.
                this.authModule.logger.error("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
            }
        };
        /**
         * Function to handle response parameters from hash.
         * @param locationHash
         */
        PopupHandler.prototype.handleCodeResponse = function (locationHash) {
            return __awaiter(this, void 0, void 0, function () {
                var codeResponse;
                return __generator(this, function (_a) {
                    // Check that location hash isn't empty.
                    if (StringUtils.isEmpty(locationHash)) {
                        throw BrowserAuthError.createEmptyHashError(locationHash);
                    }
                    codeResponse = this.authModule.handleFragmentResponse(locationHash);
                    // Acquire token with retrieved code.
                    return [2 /*return*/, this.authModule.acquireToken(codeResponse)];
                });
            });
        };
        /**
         * Monitors a window until it loads a url with a hash
         * @param contentWindow - window that is being monitored
         * @param timeout - milliseconds until timeout
         * @param urlNavigate - url that was navigated to
         */
        PopupHandler.prototype.monitorWindowForHash = function (contentWindow, timeout, urlNavigate) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var maxTicks = timeout / BrowserConstants.POPUP_POLL_INTERVAL_MS;
                var ticks = 0;
                var intervalId = setInterval(function () {
                    if (contentWindow.closed) {
                        // Window is closed
                        _this.cleanPopup();
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createUserCancelledError());
                        return;
                    }
                    var href;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = contentWindow.location.href;
                    }
                    catch (e) { }
                    // Don't process blank pages or cross domain
                    if (!href || href === "about:blank") {
                        return;
                    }
                    // Only run clock when we are on same domain
                    ticks++;
                    if (UrlString.hashContainsKnownProperties(href)) {
                        // Success case
                        var contentHash = contentWindow.location.hash;
                        _this.cleanPopup(contentWindow);
                        clearInterval(intervalId);
                        resolve(contentHash);
                        return;
                    }
                    else if (ticks > maxTicks) {
                        // Timeout error
                        _this.cleanPopup(contentWindow);
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createPopupWindowTimeoutError(urlNavigate));
                        return;
                    }
                }, BrowserConstants.POPUP_POLL_INTERVAL_MS);
            });
        };
        /**
         * @hidden
         *
         * Configures popup window for login.
         *
         * @param urlNavigate
         * @param title
         * @param popUpWidth
         * @param popUpHeight
         * @ignore
         * @hidden
         */
        PopupHandler.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
            try {
                /**
                 * adding winLeft and winTop to account for dual monitor
                 * using screenLeft and screenTop for IE8 and earlier
                 */
                var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
                var winTop = window.screenTop ? window.screenTop : window.screenY;
                /**
                 * window.innerWidth displays browser window"s height and width excluding toolbars
                 * using document.documentElement.clientWidth for IE8 and earlier
                 */
                var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
                var top_1 = ((height / 2) - (popUpHeight / 2)) + winTop;
                // open the window
                var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top_1 + ", left=" + left);
                if (!popupWindow) {
                    throw BrowserAuthError.createEmptyWindowCreatedError();
                }
                if (popupWindow.focus) {
                    popupWindow.focus();
                }
                this.currentWindow = popupWindow;
                window.addEventListener("beforeunload", this.unloadWindow);
                return popupWindow;
            }
            catch (e) {
                this.authModule.logger.error("error opening popup " + e.message);
                this.browserStorage.removeItem(BrowserConstants.INTERACTION_STATUS_KEY);
                throw BrowserAuthError.createPopupWindowError(e.toString());
            }
        };
        /**
         * Event callback to unload main window.
         */
        PopupHandler.prototype.unloadWindow = function (e) {
            this.authModule.cancelRequest();
            this.browserStorage.removeItem(BrowserConstants.INTERACTION_STATUS_KEY);
            this.currentWindow.close();
            // Guarantees browser unload will happen, so no other errors will be thrown.
            delete e["returnValue"];
        };
        /**
         * Closes popup, removes any state vars created during popup calls.
         * @param popupWindow
         */
        PopupHandler.prototype.cleanPopup = function (popupWindow) {
            if (popupWindow) {
                // Close window.
                popupWindow.close();
            }
            // Remove window unload function
            window.removeEventListener("beforeunload", this.unloadWindow);
            // Interaction is completed - remove interaction status.
            this.browserStorage.removeItem(BrowserConstants.INTERACTION_STATUS_KEY);
        };
        return PopupHandler;
    }(InteractionHandler));

    /**
     * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
     * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
     */
    var PublicClientApplication = /** @class */ (function () {
        /**
         * @constructor
         * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         * - redirect_uri: the uri of your application registered in the portal.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
         * Full B2C functionality will be available in this library in future versions.
         *
         * @param {@link (Configuration:type)} configuration object for the MSAL PublicClientApplication instance
         */
        function PublicClientApplication(configuration) {
            // callback for error/token response
            this.authCallback = null;
            // Set the configuration.
            this.config = buildConfiguration(configuration);
            // Initialize the crypto class.
            this.browserCrypto = new CryptoOps();
            // Initialize the network module class.
            this.networkClient = this.config.system.networkClient;
            // Initialize the browser storage class.
            this.browserStorage = new BrowserStorage(this.config.auth.clientId, this.config.cache);
            // Create auth module.
            this.authModule = new AuthorizationCodeModule({
                auth: this.config.auth,
                systemOptions: {
                    tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                    telemetry: this.config.system.telemetry
                },
                loggerOptions: {
                    loggerCallback: this.config.system.loggerOptions.loggerCallback,
                    piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled
                },
                cryptoInterface: this.browserCrypto,
                networkInterface: this.networkClient,
                storageInterface: this.browserStorage
            });
        }
        // #region Redirect Flow
        /**
         * Set the callback functions for the redirect flow to send back the success or error object, and process
         * any redirect-related data.
         * IMPORTANT: Please do not use this function when using the popup APIs, as it may break the response handling
         * in the main window.
         *
         * @param {@link (AuthCallback:type)} authCallback - Callback which contains
         * an AuthError object, containing error data from either the server
         * or the library, depending on the origin of the error, or the AuthResponse object
         * containing data from the server (returned with a null or non-blocking error).
         */
        PublicClientApplication.prototype.handleRedirectCallback = function (authCallback) {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check whether callback object was passed.
                            if (!authCallback) {
                                throw BrowserConfigurationAuthError.createInvalidCallbackObjectError(authCallback);
                            }
                            // Set the callback object.
                            this.authCallback = authCallback;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.handleRedirectResponse()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            this.authCallback(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Checks if navigateToLoginRequestUrl is set, and:
         * - if true, performs logic to cache and navigate
         * - if false, handles hash string and parses response
         */
        PublicClientApplication.prototype.handleRedirectResponse = function () {
            return __awaiter(this, void 0, void 0, function () {
                var hash, cachedHash, isResponseHash, loginRequestUrl;
                return __generator(this, function (_a) {
                    hash = window.location.hash;
                    cachedHash = this.browserStorage.getItem(TemporaryCacheKeys.URL_HASH);
                    isResponseHash = UrlString.hashContainsKnownProperties(hash);
                    if (this.config.auth.navigateToLoginRequestUrl && isResponseHash && !BrowserUtils.isInIframe()) {
                        // Returned from authority using redirect - need to perform navigation before processing response
                        this.browserStorage.setItem(TemporaryCacheKeys.URL_HASH, hash);
                        loginRequestUrl = this.browserStorage.getItem(TemporaryCacheKeys.ORIGIN_URI);
                        if (StringUtils.isEmpty(loginRequestUrl) || loginRequestUrl === "null") {
                            // Redirect to home page if login request url is null (real null or the string null)
                            this.authModule.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
                            BrowserUtils.navigateWindow("/", true);
                        }
                        else {
                            BrowserUtils.navigateWindow(loginRequestUrl, true);
                        }
                        return [2 /*return*/];
                    }
                    if (!isResponseHash) {
                        // Loaded page with no valid hash - pass in the value retrieved from cache, or null/empty string
                        return [2 /*return*/, this.handleHash(cachedHash)];
                    }
                    if (!this.config.auth.navigateToLoginRequestUrl) {
                        // We don't need to navigate - check for hash and prepare to process
                        BrowserUtils.clearHash();
                        return [2 /*return*/, this.handleHash(hash)];
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Checks if hash exists and handles in window. Otherwise, cancel any current requests and continue.
         * @param responseHash
         * @param interactionHandler
         */
        PublicClientApplication.prototype.handleHash = function (responseHash) {
            return __awaiter(this, void 0, void 0, function () {
                var interactionHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            interactionHandler = new RedirectHandler(this.authModule, this.browserStorage);
                            if (!!StringUtils.isEmpty(responseHash)) return [3 /*break*/, 2];
                            return [4 /*yield*/, interactionHandler.handleCodeResponse(responseHash)];
                        case 1:
                            tokenResponse = _a.sent();
                            this.authCallback(null, tokenResponse);
                            return [3 /*break*/, 3];
                        case 2:
                            // There is no hash - assume we are in clean state and clear any current request data.
                            this.cleanRequest();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
         * any code that follows this function will not execute.
         * @param {@link (AuthenticationParameters:type)}
         */
        PublicClientApplication.prototype.loginRedirect = function (request) {
            // Check if callback has been set. If not, handleRedirectCallbacks wasn't called correctly.
            if (!this.authCallback) {
                throw BrowserConfigurationAuthError.createRedirectCallbacksNotSetError();
            }
            // Check if interaction is in progress. Throw error in callback and return if true.
            if (this.interactionInProgress()) {
                this.authCallback(BrowserAuthError.createInteractionInProgressError());
                return;
            }
            try {
                // Create redirect interaction handler.
                var interactionHandler_1 = new RedirectHandler(this.authModule, this.browserStorage);
                // Create login url, which will by default append the client id scope to the call.
                this.authModule.createLoginUrl(request).then(function (navigateUrl) {
                    // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
                    interactionHandler_1.showUI(navigateUrl);
                });
            }
            catch (e) {
                this.cleanRequest();
                throw e;
            }
        };
        /**
         * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
         * the page, so any code that follows this function will not execute.
         * @param {@link (AuthenticationParameters:type)}
         *
         * To acquire only idToken, please pass clientId as the only scope in the Authentication Parameters
         */
        PublicClientApplication.prototype.acquireTokenRedirect = function (request) {
            // Check if callback has been set. If not, handleRedirectCallbacks wasn't called correctly.
            if (!this.authCallback) {
                throw BrowserConfigurationAuthError.createRedirectCallbacksNotSetError();
            }
            // Check if interaction is in progress. Throw error in callback and return if true.
            if (this.interactionInProgress()) {
                this.authCallback(BrowserAuthError.createInteractionInProgressError());
                return;
            }
            try {
                // Create redirect interaction handler.
                var interactionHandler_2 = new RedirectHandler(this.authModule, this.browserStorage);
                // Create acquire token url.
                this.authModule.createAcquireTokenUrl(request).then(function (navigateUrl) {
                    // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
                    interactionHandler_2.showUI(navigateUrl);
                });
            }
            catch (e) {
                this.cleanRequest();
                throw e;
            }
        };
        // #endregion
        // #region Popup Flow 
        /**
         * Use when initiating the login process via opening a popup window in the user's browser
         *
         * @param {@link (AuthenticationParameters:type)}
         *
         * @returns {Promise.<TokenResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.loginPopup = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var navigateUrl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check if interaction is in progress. Throw error if true.
                            if (this.interactionInProgress()) {
                                throw BrowserAuthError.createInteractionInProgressError();
                            }
                            return [4 /*yield*/, this.authModule.createLoginUrl(request)];
                        case 1:
                            navigateUrl = _a.sent();
                            // Acquire token with popup
                            return [2 /*return*/, this.popupTokenHelper(navigateUrl)];
                    }
                });
            });
        };
        /**
         * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
         * @param {@link AuthenticationParameters}
         *
         * To acquire only idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns {Promise.<TokenResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.acquireTokenPopup = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var navigateUrl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check if interaction is in progress. Throw error if true.
                            if (this.interactionInProgress()) {
                                throw BrowserAuthError.createInteractionInProgressError();
                            }
                            return [4 /*yield*/, this.authModule.createAcquireTokenUrl(request)];
                        case 1:
                            navigateUrl = _a.sent();
                            // Acquire token with popup
                            return [2 /*return*/, this.popupTokenHelper(navigateUrl)];
                    }
                });
            });
        };
        /**
         * Helper which acquires an authorization code with a popup from given url, and exchanges the code for a set of OAuth tokens.
         * @param navigateUrl
         */
        PublicClientApplication.prototype.popupTokenHelper = function (navigateUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var interactionHandler, popupWindow, hash, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            interactionHandler = new PopupHandler(this.authModule, this.browserStorage);
                            popupWindow = interactionHandler.showUI(navigateUrl);
                            return [4 /*yield*/, interactionHandler.monitorWindowForHash(popupWindow, this.config.system.windowHashTimeout, navigateUrl)];
                        case 1:
                            hash = _a.sent();
                            return [4 /*yield*/, interactionHandler.handleCodeResponse(hash)];
                        case 2: 
                        // Handle response from hash string.
                        return [2 /*return*/, _a.sent()];
                        case 3:
                            e_1 = _a.sent();
                            this.cleanRequest();
                            throw e_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Silent Flow
        /**
         * Use this function to obtain a token before every call to the API / resource provider
         *
         * MSAL return's a cached token when available
         * Or it send's a request to the STS to obtain a new token using a refresh token.
         *
         * @param {@link AuthenticationParameters}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns {Promise.<TokenResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         *
         */
        PublicClientApplication.prototype.acquireTokenSilent = function (tokenRequest) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // Send request to renew token. Auth module will throw errors if token cannot be renewed.
                    return [2 /*return*/, this.authModule.renewToken(tokenRequest)];
                });
            });
        };
        // #endregion
        // #region Logout
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         */
        PublicClientApplication.prototype.logout = function () {
            // create logout string and navigate user window to logout. Auth module will clear cache.
            this.authModule.logout().then(function (logoutUri) {
                BrowserUtils.navigateWindow(logoutUri);
            });
        };
        // #endregion
        // #region Getters and setters
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * Evaluates redirectUri if its a function, otherwise simply returns its value.
         * @returns {string} redirect URL
         *
         */
        PublicClientApplication.prototype.getRedirectUri = function () {
            return this.authModule.getRedirectUri();
        };
        /**
         * Use to get the post logout redirect uri configured in MSAL or null.
         * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
         *
         * @returns {string} post logout redirect URL
         */
        PublicClientApplication.prototype.getPostLogoutRedirectUri = function () {
            return this.authModule.getPostLogoutRedirectUri();
        };
        /**
         * Returns the signed in account
         * (the account object is created at the time of successful login)
         * or null when no state is found
         * @returns {@link Account} - the account object stored in MSAL
         */
        PublicClientApplication.prototype.getAccount = function () {
            return this.authModule.getAccount();
        };
        // #endregion
        // #region Helpers
        /**
         * Helper to check whether interaction is in progress
         */
        PublicClientApplication.prototype.interactionInProgress = function () {
            // Check whether value in cache is present and equal to expected value
            return this.browserStorage.getItem(BrowserConstants.INTERACTION_STATUS_KEY) === BrowserConstants.INTERACTION_IN_PROGRESS_VALUE;
        };
        /**
         * Helper to remove interaction status and remove tempoarary request data.
         */
        PublicClientApplication.prototype.cleanRequest = function () {
            // Interaction is completed - remove interaction status.
            this.browserStorage.removeItem(BrowserConstants.INTERACTION_STATUS_KEY);
            this.authModule.cancelRequest();
        };
        return PublicClientApplication;
    }());

    exports.AuthError = AuthError;
    exports.AuthErrorMessage = AuthErrorMessage;
    exports.PublicClientApplication = PublicClientApplication;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=msal-browser.js.map
