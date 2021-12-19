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
 * @interface UpdatesPackageInfo
 */
export interface UpdatesPackageInfo {
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    shortDescription?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    overview?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UpdatesPackageInfo
     */
    isPremium?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UpdatesPackageInfo
     */
    adult?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    richDescUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    thumbImage?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    previewImage?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    type?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    targetFilename?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    owner?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    category?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    tileColor?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    featureId?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    regInfo?: any;
    /**
     * 
     * @type {number}
     * @memberof UpdatesPackageInfo
     */
    price?: any;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    targetSystem?: UpdatesPackageInfoTargetSystemEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdatesPackageInfo
     */
    guid?: any;
    /**
     * 
     * @type {number}
     * @memberof UpdatesPackageInfo
     */
    totalRatings?: any | null;
    /**
     * 
     * @type {number}
     * @memberof UpdatesPackageInfo
     */
    avgRating?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UpdatesPackageInfo
     */
    isRegistered?: any;
    /**
     * 
     * @type {Date}
     * @memberof UpdatesPackageInfo
     */
    expDate?: any;
    /**
     * 
     * @type {Array&lt;UpdatesPackageVersionInfo&gt;}
     * @memberof UpdatesPackageInfo
     */
    versions?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UpdatesPackageInfo
     */
    enableInAppStore?: any;
    /**
     * 
     * @type {number}
     * @memberof UpdatesPackageInfo
     */
    installs?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatesPackageInfoTargetSystemEnum {
    Server = 'Server',
    MBTheater = 'MBTheater',
    MBClassic = 'MBClassic'
}

