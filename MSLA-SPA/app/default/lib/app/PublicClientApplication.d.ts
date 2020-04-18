import { Account, AuthenticationParameters, TokenResponse, TokenRenewParameters } from "@azure/msal-common";
import { Configuration } from "./Configuration";
import { AuthCallback } from "../types/AuthCallback";
/**
 * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
 * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
 */
export declare class PublicClientApplication {
    private config;
    private authModule;
    private authCallback;
    private browserCrypto;
    private browserStorage;
    private networkClient;
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
    constructor(configuration: Configuration);
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
    handleRedirectCallback(authCallback: AuthCallback): Promise<void>;
    /**
     * Checks if navigateToLoginRequestUrl is set, and:
     * - if true, performs logic to cache and navigate
     * - if false, handles hash string and parses response
     */
    private handleRedirectResponse;
    /**
     * Checks if hash exists and handles in window. Otherwise, cancel any current requests and continue.
     * @param responseHash
     * @param interactionHandler
     */
    private handleHash;
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     * @param {@link (AuthenticationParameters:type)}
     */
    loginRedirect(request: AuthenticationParameters): void;
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To acquire only idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    acquireTokenRedirect(request: AuthenticationParameters): void;
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<TokenResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    loginPopup(request: AuthenticationParameters): Promise<TokenResponse>;
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To acquire only idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<TokenResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    acquireTokenPopup(request: AuthenticationParameters): Promise<TokenResponse>;
    /**
     * Helper which acquires an authorization code with a popup from given url, and exchanges the code for a set of OAuth tokens.
     * @param navigateUrl
     */
    private popupTokenHelper;
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
    acquireTokenSilent(tokenRequest: TokenRenewParameters): Promise<TokenResponse>;
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    logout(): void;
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    getRedirectUri(): string;
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    getPostLogoutRedirectUri(): string;
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    getAccount(): Account;
    /**
     * Helper to check whether interaction is in progress
     */
    private interactionInProgress;
    /**
     * Helper to remove interaction status and remove tempoarary request data.
     */
    private cleanRequest;
}
