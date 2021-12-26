/* tslint:disable */
/* eslint-disable */
/**
 * Emby Server API
 * Explore the Emby Server API
 *
 * OpenAPI spec version: 4.6.7.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ClientCapabilities
 */
export interface ClientCapabilities {
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ClientCapabilities
     */
    playableMediaTypes?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ClientCapabilities
     */
    supportedCommands?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    supportsMediaControl?: any;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    pushToken?: any;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    pushTokenType?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    supportsSync?: any;
    /**
     * 
     * @type {DlnaDeviceProfile}
     * @memberof ClientCapabilities
     */
    deviceProfile?: any;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    iconUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    appId?: any;
}
