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
 * @interface MediaInfoLiveStreamRequest
 */
export interface MediaInfoLiveStreamRequest {
    /**
     * 
     * @type {string}
     * @memberof MediaInfoLiveStreamRequest
     */
    openToken?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaInfoLiveStreamRequest
     */
    userId?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaInfoLiveStreamRequest
     */
    playSessionId?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaInfoLiveStreamRequest
     */
    maxStreamingBitrate?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaInfoLiveStreamRequest
     */
    startTimeTicks?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaInfoLiveStreamRequest
     */
    audioStreamIndex?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaInfoLiveStreamRequest
     */
    subtitleStreamIndex?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaInfoLiveStreamRequest
     */
    maxAudioChannels?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaInfoLiveStreamRequest
     */
    itemId?: any;
    /**
     * 
     * @type {DlnaDeviceProfile}
     * @memberof MediaInfoLiveStreamRequest
     */
    deviceProfile?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaInfoLiveStreamRequest
     */
    enableDirectPlay?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaInfoLiveStreamRequest
     */
    enableDirectStream?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaInfoLiveStreamRequest
     */
    enableTranscoding?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaInfoLiveStreamRequest
     */
    allowVideoStreamCopy?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaInfoLiveStreamRequest
     */
    allowInterlacedVideoStreamCopy?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaInfoLiveStreamRequest
     */
    allowAudioStreamCopy?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof MediaInfoLiveStreamRequest
     */
    directPlayProtocols?: Array<MediaInfoLiveStreamRequestDirectPlayProtocolsEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum MediaInfoLiveStreamRequestDirectPlayProtocolsEnum {
    File = 'File',
    Http = 'Http',
    Rtmp = 'Rtmp',
    Rtsp = 'Rtsp',
    Udp = 'Udp',
    Rtp = 'Rtp',
    Ftp = 'Ftp',
    Mms = 'Mms'
}

