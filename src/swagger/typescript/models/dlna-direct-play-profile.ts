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
 * @interface DlnaDirectPlayProfile
 */
export interface DlnaDirectPlayProfile {
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    container?: any;
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    audioCodec?: any;
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    videoCodec?: any;
    /**
     * 
     * @type {string}
     * @memberof DlnaDirectPlayProfile
     */
    type?: DlnaDirectPlayProfileTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum DlnaDirectPlayProfileTypeEnum {
    Audio = 'Audio',
    Video = 'Video',
    Photo = 'Photo'
}
