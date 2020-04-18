import { INetworkModule } from "@azure/msal-common";
/**
 * Utility class for browser specific functions
 */
export declare class BrowserUtils {
    /**
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     * @param {boolean} noHistory - boolean flag, uses .replace() instead of .assign() if true
     */
    static navigateWindow(urlNavigate: string, noHistory?: boolean): void;
    /**
     * Clears hash from window url.
     */
    static clearHash(): void;
    /**
     * Returns boolean of whether the current window is in an iframe or not.
     */
    static isInIframe(): boolean;
    /**
     * Returns current window URL as redirect uri
     */
    static getDefaultRedirectUri(): string;
    /**
     * Returns best compatible network client object.
     */
    static getBrowserNetworkClient(): INetworkModule;
}
