import { TokenResponse } from "@azure/msal-common";
import { InteractionHandler } from "./InteractionHandler";
export declare class RedirectHandler extends InteractionHandler {
    /**
     * Redirects window to given URL.
     * @param urlNavigate
     */
    showUI(requestUrl: string): Window;
    /**
     * Handle authorization code response in the window.
     * @param hash
     */
    handleCodeResponse(locationHash: string): Promise<TokenResponse>;
}
