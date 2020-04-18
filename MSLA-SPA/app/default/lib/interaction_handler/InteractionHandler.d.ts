import { AuthorizationCodeModule, TokenResponse } from "@azure/msal-common";
import { BrowserStorage } from "../cache/BrowserStorage";
/**
 * Abstract class which defines operations for a browser interaction handling class.
 */
export declare abstract class InteractionHandler {
    protected authModule: AuthorizationCodeModule;
    protected browserStorage: BrowserStorage;
    constructor(authCodeModule: AuthorizationCodeModule, storageImpl: BrowserStorage);
    /**
     * Function to enable user interaction.
     * @param requestUrl
     */
    abstract showUI(requestUrl: string): Window;
    /**
     * Function to handle response parameters from hash.
     * @param locationHash
     */
    abstract handleCodeResponse(locationHash: string): Promise<TokenResponse>;
}
