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
 * @interface PlaybackProgressInfo
 */
export interface PlaybackProgressInfo {
    /**
     * 
     * @type {boolean}
     * @memberof PlaybackProgressInfo
     */
    canSeek?: any;
    /**
     * 
     * @type {BaseItemDto}
     * @memberof PlaybackProgressInfo
     */
    item?: any;
    /**
     * 
     * @type {Array&lt;QueueItem&gt;}
     * @memberof PlaybackProgressInfo
     */
    nowPlayingQueue?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    playlistItemId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    itemId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    sessionId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    mediaSourceId?: any;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    audioStreamIndex?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    subtitleStreamIndex?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof PlaybackProgressInfo
     */
    isPaused?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PlaybackProgressInfo
     */
    isMuted?: any;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    positionTicks?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    runTimeTicks?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    playbackStartTimeTicks?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    volumeLevel?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PlaybackProgressInfo
     */
    brightness?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    aspectRatio?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    playMethod?: PlaybackProgressInfoPlayMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    liveStreamId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    playSessionId?: any;
    /**
     * 
     * @type {string}
     * @memberof PlaybackProgressInfo
     */
    repeatMode?: PlaybackProgressInfoRepeatModeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PlaybackProgressInfoPlayMethodEnum {
    Transcode = 'Transcode',
    DirectStream = 'DirectStream',
    DirectPlay = 'DirectPlay'
}
/**
    * @export
    * @enum {string}
    */
export enum PlaybackProgressInfoRepeatModeEnum {
    RepeatNone = 'RepeatNone',
    RepeatAll = 'RepeatAll',
    RepeatOne = 'RepeatOne'
}

