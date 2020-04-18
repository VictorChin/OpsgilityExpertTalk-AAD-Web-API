import { ICacheStorage } from "@azure/msal-common";
import { CacheOptions } from "../app/Configuration";
/**
 * This class implements the cache storage interface for MSAL through browser local or session storage.
 * Cookies are only used if storeAuthStateInCookie is true, and are only used for
 * parameters such as state and nonce, generally.
 */
export declare class BrowserStorage implements ICacheStorage {
    private cacheConfig;
    private windowStorage;
    private clientId;
    constructor(clientId: string, cacheConfig: CacheOptions);
    /**
     * Validates the the given cache location string is an expected value:
     * - localStorage
     * - sessionStorage (default)
     * Also validates if given cacheLocation is supported on the browser.
     * @param cacheLocation
     */
    private validateWindowStorage;
    /**
     * Migrate all old cache entries to new schema. No rollback supported.
     * @param storeAuthStateInCookie
     */
    private migrateCacheEntries;
    /**
     * Utility function to help with migration.
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */
    private migrateCacheEntry;
    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */
    private generateCacheKey;
    /**
     * Parses key as JSON object, JSON.parse() will throw an error.
     * @param key
     */
    private validateObjectKey;
    /**
     * Sets the cache item with the key and value given.
     * Stores in cookie if storeAuthStateInCookie is set to true.
     * This can cause cookie overflow if used incorrectly.
     * @param key
     * @param value
     */
    setItem(key: string, value: string): void;
    /**
     * Gets cache item with given key.
     * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
     * @param key
     */
    getItem(key: string): string;
    /**
     * Removes the cache item with the given key.
     * Will also clear the cookie item if storeAuthStateInCookie is set to true.
     * @param key
     */
    removeItem(key: string): void;
    /**
     * Checks whether key is in cache.
     * @param key
     */
    containsKey(key: string): boolean;
    /**
     * Gets all keys in window.
     */
    getKeys(): string[];
    /**
     * Clears all cache entries created by MSAL (except tokens).
     */
    clear(): void;
    /**
     * Add value to cookies
     * @param cookieName
     * @param cookieValue
     * @param expires
     */
    setItemCookie(cookieName: string, cookieValue: string, expires?: number): void;
    /**
     * Get one item by key from cookies
     * @param cookieName
     */
    getItemCookie(cookieName: string): string;
    /**
     * Clear an item in the cookies by key
     * @param cookieName
     */
    clearItemCookie(cookieName: string): void;
    /**
     * Clear all msal cookies
     */
    clearMsalCookie(state?: string): void;
    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */
    getCookieExpirationTime(cookieLifeDays: number): string;
}
