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
 * @interface EmbyReportsApiModelReportRow
 */
export interface EmbyReportsApiModelReportRow {
    /**
     * 
     * @type {string}
     * @memberof EmbyReportsApiModelReportRow
     */
    id?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasImageTagsBackdrop?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasImageTagsPrimary?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasImageTagsLogo?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasLocalTrailer?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasLockData?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasEmbeddedImage?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasSubtitles?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportRow
     */
    hasSpecials?: any;
    /**
     * 
     * @type {Array&lt;EmbyReportsApiModelReportItem&gt;}
     * @memberof EmbyReportsApiModelReportRow
     */
    columns?: any;
    /**
     * 
     * @type {string}
     * @memberof EmbyReportsApiModelReportRow
     */
    rowType?: EmbyReportsApiModelReportRowRowTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EmbyReportsApiModelReportRow
     */
    userId?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum EmbyReportsApiModelReportRowRowTypeEnum {
    MusicArtist = 'MusicArtist',
    MusicAlbum = 'MusicAlbum',
    Book = 'Book',
    BoxSet = 'BoxSet',
    Episode = 'Episode',
    Game = 'Game',
    Video = 'Video',
    Movie = 'Movie',
    MusicVideo = 'MusicVideo',
    Trailer = 'Trailer',
    Season = 'Season',
    Series = 'Series',
    Audio = 'Audio',
    BaseItem = 'BaseItem',
    Artist = 'Artist'
}
