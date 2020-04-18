import { INetworkModule, NetworkRequestOptions } from "@azure/msal-common";
/**
 * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */
export declare class FetchClient implements INetworkModule {
    /**
     * Fetch Client for REST endpoints - Get request
     * @param url
     * @param headers
     * @param body
     */
    sendGetRequestAsync<T>(url: string, options?: NetworkRequestOptions): Promise<T>;
    /**
     * Fetch Client for REST endpoints - Post request
     * @param url
     * @param headers
     * @param body
     */
    sendPostRequestAsync<T>(url: string, options?: NetworkRequestOptions): Promise<T>;
    /**
     * Get Fetch API Headers object from string map
     * @param inputHeaders
     */
    private getFetchHeaders;
}
