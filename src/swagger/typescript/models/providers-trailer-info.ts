/* tslint:disable */
/* eslint-disable */
/**
 * Emby Server API
 * Explore the Emby Server API
 *
 * OpenAPI spec version: 4.1.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ProvidersTrailerInfo
 */
export interface ProvidersTrailerInfo {
    /**
     * 
     * @type {string}
     * @memberof ProvidersTrailerInfo
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof ProvidersTrailerInfo
     */
    metadataLanguage?: any;
    /**
     * 
     * @type {string}
     * @memberof ProvidersTrailerInfo
     */
    metadataCountryCode?: any;
    /**
     * 
     * @type {{ [key, string]: string;}}
     * @memberof ProvidersTrailerInfo
     */
    providerIds?: any;
    /**
     * 
     * @type {number}
     * @memberof ProvidersTrailerInfo
     */
    year?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ProvidersTrailerInfo
     */
    indexNumber?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ProvidersTrailerInfo
     */
    parentIndexNumber?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof ProvidersTrailerInfo
     */
    premiereDate?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProvidersTrailerInfo
     */
    isAutomated?: any;
}