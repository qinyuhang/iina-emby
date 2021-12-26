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
 * @interface PlaybackStopInfo
 */
export interface PlaybackStopInfo {
    /**
     * 
     * @type {Array&lt;QueueItem&gt;}
     * @memberof PlaybackStopInfo
     */
    nowPlayingQueue?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    playlistItemId?: any;
    /**
     * 
     * @type {number}
     * @memberof PlaybackStopInfo
     */
    playlistIndex?: any;
    /**
     * 
     * @type {number}
     * @memberof PlaybackStopInfo
     */
    playlistLength?: any;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof PlaybackStopInfo
     */
    item?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    itemId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    sessionId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    mediaSourceId?: any;
    /**
     * 
     * @type {number}
     * @memberof PlaybackStopInfo
     */
    positionTicks?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    liveStreamId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    playSessionId?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PlaybackStopInfo
     */
    failed?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    nextMediaType?: any;
}
