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
 * @interface ImageInfo
 */
export interface ImageInfo {
    /**
     * 
     * @type {string}
     * @memberof ImageInfo
     */
    imageType?: ImageInfoImageTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    imageIndex?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ImageInfo
     */
    path?: any;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    height?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    width?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ImageInfo
     */
    size?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum ImageInfoImageTypeEnum {
    Primary = 'Primary',
    Art = 'Art',
    Backdrop = 'Backdrop',
    Banner = 'Banner',
    Logo = 'Logo',
    Thumb = 'Thumb',
    Disc = 'Disc',
    Box = 'Box',
    Screenshot = 'Screenshot',
    Menu = 'Menu',
    Chapter = 'Chapter',
    BoxRear = 'BoxRear',
    Thumbnail = 'Thumbnail'
}
