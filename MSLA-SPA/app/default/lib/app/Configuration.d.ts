import { AuthOptions, SystemOptions, LoggerOptions, INetworkModule } from "@azure/msal-common";
export declare type BrowserAuthOptions = AuthOptions & {
    navigateToLoginRequestUrl?: boolean;
};
/**
 * Use this to configure the below cache configuration options:
 *
 * - cacheLocation            - Used to specify the cacheLocation user wants to set. Valid values are "localStorage" and "sessionStorage"
 * - storeAuthStateInCookie   - If set, MSAL store's the auth request state required for validation of the auth flows in the browser cookies. By default this flag is set to false.
 */
export declare type CacheOptions = {
    cacheLocation?: string;
    storeAuthStateInCookie?: boolean;
};
/**
 * Library Specific Options
 *
 * - logger                       - Used to initialize the Logger object; TODO: Expand on logger details or link to the documentation on logger
 * - loadFrameTimeout             - maximum time the library should wait for a frame to load
 * - windowHashTimeout            - sets the wait time for hidden iFrame navigation
 * - tokenRenewalOffsetSeconds    - sets the window of offset needed to renew the token before expiry
 * - telemetry                    - Telemetry options for library network requests
 */
export declare type BrowserSystemOptions = SystemOptions & {
    loggerOptions?: LoggerOptions;
    networkClient?: INetworkModule;
    windowHashTimeout?: number;
};
/**
 * Use the configuration object to configure MSAL and initialize the UserAgentApplication.
 *
 * This object allows you to configure important elements of MSAL functionality:
 * - auth: this is where you configure auth elements like clientID, authority used for authenticating against the Microsoft Identity Platform
 * - cache: this is where you configure cache location and whether to store cache in cookies
 * - system: this is where you can configure the network client, logger, token renewal offset, and telemetry
 */
export declare type Configuration = {
    auth?: BrowserAuthOptions;
    cache?: CacheOptions;
    system?: BrowserSystemOptions;
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
export declare function buildConfiguration({ auth, cache, system }: Configuration): Configuration;
