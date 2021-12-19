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
 * @interface ProvidersSeriesInfo
 */
export interface ProvidersSeriesInfo {
    /**
     * 
     * @type {Date}
     * @memberof ProvidersSeriesInfo
     */
    episodeAirDate?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ProvidersSeriesInfo
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof ProvidersSeriesInfo
     */
    metadataLanguage?: any;
    /**
     * 
     * @type {string}
     * @memberof ProvidersSeriesInfo
     */
    metadataCountryCode?: any;
    /**
     * 
     * @type {{ [key, string]: string;}}
     * @memberof ProvidersSeriesInfo
     */
    providerIds?: any;
    /**
     * 
     * @type {number}
     * @memberof ProvidersSeriesInfo
     */
    year?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ProvidersSeriesInfo
     */
    indexNumber?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ProvidersSeriesInfo
     */
    parentIndexNumber?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof ProvidersSeriesInfo
     */
    premiereDate?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProvidersSeriesInfo
     */
    isAutomated?: any;
}