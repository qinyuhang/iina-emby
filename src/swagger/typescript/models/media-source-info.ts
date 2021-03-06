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
 * @interface MediaSourceInfo
 */
export interface MediaSourceInfo {
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    protocol?: MediaSourceInfoProtocolEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    path?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    encoderPath?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    encoderProtocol?: MediaSourceInfoEncoderProtocolEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    type?: MediaSourceInfoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    container?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    size?: any | null;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    sortName?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    isRemote?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    runTimeTicks?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    containerStartTimeTicks?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsTranscoding?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsDirectStream?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsDirectPlay?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    isInfiniteStream?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    requiresOpening?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    openToken?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    requiresClosing?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    liveStreamId?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    bufferMs?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    requiresLooping?: any;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    supportsProbing?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    video3DFormat?: MediaSourceInfoVideo3DFormatEnum;
    /**
     * 
     * @type {Array&lt;MediaStream&gt;}
     * @memberof MediaSourceInfo
     */
    mediaStreams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof MediaSourceInfo
     */
    formats?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    bitrate?: any | null;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    timestamp?: MediaSourceInfoTimestampEnum;
    /**
     * 
     * @type {{ [key, string]: string;}}
     * @memberof MediaSourceInfo
     */
    requiredHttpHeaders?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    directStreamUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    transcodingUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    transcodingSubProtocol?: any;
    /**
     * 
     * @type {string}
     * @memberof MediaSourceInfo
     */
    transcodingContainer?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    analyzeDurationMs?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof MediaSourceInfo
     */
    readAtNativeFramerate?: any;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    defaultAudioStreamIndex?: any | null;
    /**
     * 
     * @type {number}
     * @memberof MediaSourceInfo
     */
    defaultSubtitleStreamIndex?: any | null;
}

/**
    * @export
    * @enum {string}
    */
export enum MediaSourceInfoProtocolEnum {
    File = 'File',
    Http = 'Http',
    Rtmp = 'Rtmp',
    Rtsp = 'Rtsp',
    Udp = 'Udp',
    Rtp = 'Rtp',
    Ftp = 'Ftp',
    Mms = 'Mms'
}
/**
    * @export
    * @enum {string}
    */
export enum MediaSourceInfoEncoderProtocolEnum {
    File = 'File',
    Http = 'Http',
    Rtmp = 'Rtmp',
    Rtsp = 'Rtsp',
    Udp = 'Udp',
    Rtp = 'Rtp',
    Ftp = 'Ftp',
    Mms = 'Mms'
}
/**
    * @export
    * @enum {string}
    */
export enum MediaSourceInfoTypeEnum {
    Default = 'Default',
    Grouping = 'Grouping',
    Placeholder = 'Placeholder'
}
/**
    * @export
    * @enum {string}
    */
export enum MediaSourceInfoVideo3DFormatEnum {
    HalfSideBySide = 'HalfSideBySide',
    FullSideBySide = 'FullSideBySide',
    FullTopAndBottom = 'FullTopAndBottom',
    HalfTopAndBottom = 'HalfTopAndBottom',
    MVC = 'MVC'
}
/**
    * @export
    * @enum {string}
    */
export enum MediaSourceInfoTimestampEnum {
    None = 'None',
    Zero = 'Zero',
    Valid = 'Valid'
}

