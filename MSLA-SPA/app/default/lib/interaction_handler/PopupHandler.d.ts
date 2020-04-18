import { TokenResponse, AuthorizationCodeModule } from "@azure/msal-common";
import { InteractionHandler } from "./InteractionHandler";
import { BrowserStorage } from "../cache/BrowserStorage";
/**
 * This class implements the interaction handler base class for browsers. It is written specifically for handling
 * popup window scenarios. It includes functions for monitoring the popup window for a hash.
 */
export declare class PopupHandler extends InteractionHandler {
    private currentWindow;
    constructor(authCodeModule: AuthorizationCodeModule, storageImpl: BrowserStorage);
    /**
     * Opens a popup window with given request Url.
     * @param requestUrl
     */
    showUI(requestUrl: string): Window;
    /**
     * Function to handle response parameters from hash.
     * @param locationHash
     */
    handleCodeResponse(locationHash: string): Promise<TokenResponse>;
    /**
     * Monitors a window until it loads a url with a hash
     * @param contentWindow - window that is being monitored
     * @param timeout - milliseconds until timeout
     * @param urlNavigate - url that was navigated to
     */
    monitorWindowForHash(contentWindow: Window, timeout: number, urlNavigate: string): Promise<string>;
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
    private openPopup;
    /**
     * Event callback to unload main window.
     */
    unloadWindow(e: Event): void;
    /**
     * Closes popup, removes any state vars created during popup calls.
     * @param popupWindow
     */
    private cleanPopup;
}
