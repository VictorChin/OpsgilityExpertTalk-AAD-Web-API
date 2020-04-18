/**
 * This class implements functions used by the browser library to perform cryptography operations such as
 * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
 */
export declare class BrowserCrypto {
    constructor();
    /**
     * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
     * @param dataString
     */
    sha256Digest(dataString: string): Promise<ArrayBuffer>;
    /**
     * Populates buffer with cryptographically random values.
     * @param dataBuffer
     */
    getRandomValues(dataBuffer: Uint8Array): void;
    /**
     * Checks whether IE crypto (AKA msCrypto) is available.
     */
    private hasIECrypto;
    /**
     * Check whether browser crypto is available.
     */
    private hasBrowserCrypto;
    /**
     * Check whether IE crypto or other browser cryptography is available.
     */
    private hasCryptoAPI;
    /**
     * Helper function for SHA digest.
     * @param algorithm
     * @param data
     */
    private getSubtleCryptoDigest;
    /**
     * Helper function for SHA digest.
     * @param algorithm
     * @param data
     */
    private getMSCryptoDigest;
}
