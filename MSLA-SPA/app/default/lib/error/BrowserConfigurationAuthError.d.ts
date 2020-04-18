import { AuthError } from "@azure/msal-common";
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 */
export declare const BrowserConfigurationAuthErrorMessage: {
    storageNotSupportedError: {
        code: string;
        desc: string;
    };
    noRedirectCallbacksSet: {
        code: string;
        desc: string;
    };
    invalidCallbackObject: {
        code: string;
        desc: string;
    };
};
/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */
export declare class BrowserConfigurationAuthError extends AuthError {
    constructor(errorCode: string, errorMessage?: string);
    /**
     * Creates error thrown when given storage location is not supported.
     * @param givenStorageLocation
     */
    static createStorageNotSupportedError(givenStorageLocation: string): BrowserConfigurationAuthError;
    /**
     * Creates error thrown when callback object is invalid.
     * @param callbackObject
     */
    static createInvalidCallbackObjectError(callbackObject: object): BrowserConfigurationAuthError;
    /**
     * Creates error thrown when redirect callbacks are not set before calling loginRedirect() or acquireTokenRedirect().
     */
    static createRedirectCallbacksNotSetError(): BrowserConfigurationAuthError;
}
