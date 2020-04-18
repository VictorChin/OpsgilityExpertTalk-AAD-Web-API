import { AuthError } from "@azure/msal-common";
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 */
export declare const BrowserAuthErrorMessage: {
    noWindowObjectError: {
        code: string;
        desc: string;
    };
    pkceNotGenerated: {
        code: string;
        desc: string;
    };
    cryptoDoesNotExist: {
        code: string;
        desc: string;
    };
    httpMethodNotImplementedError: {
        code: string;
        desc: string;
    };
    emptyNavigateUriError: {
        code: string;
        desc: string;
    };
    hashEmptyError: {
        code: string;
        desc: string;
    };
    interactionInProgress: {
        code: string;
        desc: string;
    };
    popUpWindowError: {
        code: string;
        desc: string;
    };
    emptyWindowError: {
        code: string;
        desc: string;
    };
    userCancelledError: {
        code: string;
        desc: string;
    };
    popupWindowTimeoutError: {
        code: string;
        desc: string;
    };
    redirectInIframeError: {
        code: string;
        desc: string;
    };
};
/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */
export declare class BrowserAuthError extends AuthError {
    constructor(errorCode: string, errorMessage?: string);
    /**
     * Creates error thrown when no window object can be found.
     */
    static createNoWindowObjectError(): BrowserAuthError;
    /**
     * Creates an error thrown when PKCE is not implemented.
     * @param errDetail
     */
    static createPkceNotGeneratedError(errDetail: string): BrowserAuthError;
    /**
     * Creates an error thrown when the crypto object is unavailable.
     * @param errDetail
     */
    static createCryptoNotAvailableError(errDetail: string): BrowserAuthError;
    /**
     * Creates an error thrown when an HTTP method hasn't been implemented by the browser class.
     * @param method
     */
    static createHttpMethodNotImplementedError(method: string): BrowserAuthError;
    /**
     * Creates an error thrown when the navigation URI is empty.
     */
    static createEmptyNavigationUriError(): BrowserAuthError;
    /**
     * Creates an error thrown when the hash string value is unexpectedly empty.
     * @param hashValue
     */
    static createEmptyHashError(hashValue: string): BrowserAuthError;
    /**
     * Creates an error thrown when a browser interaction (redirect or popup) is in progress.
     */
    static createInteractionInProgressError(): BrowserAuthError;
    /**
     * Creates an error thrown when the popup window could not be opened.
     * @param errDetail
     */
    static createPopupWindowError(errDetail?: string): BrowserAuthError;
    /**
     * Creates an error thrown when window.open returns an empty window object.
     * @param errDetail
     */
    static createEmptyWindowCreatedError(): BrowserAuthError;
    /**
     * Creates an error thrown when the user closes a popup.
     */
    static createUserCancelledError(): BrowserAuthError;
    /**
     * Creates an error thrown when monitorWindowFromHash times out for a given popup.
     * @param urlNavigate
     */
    static createPopupWindowTimeoutError(urlNavigate: string): BrowserAuthError;
    /**
     * Creates an error thrown when navigateWindow is called inside an iframe.
     * @param windowParentCheck
     */
    static createRedirectInIframeError(windowParentCheck: boolean): BrowserAuthError;
}
