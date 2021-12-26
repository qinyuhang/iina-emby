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
 * @interface SystemInfo
 */
export interface SystemInfo {
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    systemUpdateLevel?: SystemInfoSystemUpdateLevelEnum;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    operatingSystemDisplayName?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    packageName?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    hasPendingRestart?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    isShuttingDown?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    operatingSystem?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    supportsLibraryMonitor?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    supportsLocalPortConfiguration?: any;
    /**
     * 
     * @type {number}
     * @memberof SystemInfo
     */
    webSocketPortNumber?: any;
    /**
     * 
     * @type {Array&lt;UpdatesInstallationInfo&gt;}
     * @memberof SystemInfo
     */
    completedInstallations?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    canSelfRestart?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    canSelfUpdate?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    canLaunchWebBrowser?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    programDataPath?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    itemsByNamePath?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    cachePath?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    logPath?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    internalMetadataPath?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    transcodingTempPath?: any;
    /**
     * 
     * @type {number}
     * @memberof SystemInfo
     */
    httpServerPortNumber?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    supportsHttps?: any;
    /**
     * 
     * @type {number}
     * @memberof SystemInfo
     */
    httpsPortNumber?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    hasUpdateAvailable?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    supportsAutoRunAtStartup?: any;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    hardwareAccelerationRequiresPremiere?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    localAddress?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    wanAddress?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    serverName?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    version?: any;
    /**
     * 
     * @type {string}
     * @memberof SystemInfo
     */
    id?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum SystemInfoSystemUpdateLevelEnum {
    Release = 'Release',
    Beta = 'Beta',
    Dev = 'Dev'
}

