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
 * @interface RemoteSearchResult
 */
export interface RemoteSearchResult {
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    name?: any;
    /**
     * 
     * @type {{ [key, string]: string;}}
     * @memberof RemoteSearchResult
     */
    providerIds?: any;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    productionYear?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    indexNumber?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    indexNumberEnd?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RemoteSearchResult
     */
    parentIndexNumber?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof RemoteSearchResult
     */
    premiereDate?: any | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    imageUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    searchProviderName?: any;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    gameSystem?: any;
    /**
     * 
     * @type {string}
     * @memberof RemoteSearchResult
     */
    overview?: any;
    /**
     * 
     * @type {RemoteSearchResult}
     * @memberof RemoteSearchResult
     */
    albumArtist?: any;
    /**
     * 
     * @type {Array&lt;RemoteSearchResult&gt;}
     * @memberof RemoteSearchResult
     */
    artists?: any;
}