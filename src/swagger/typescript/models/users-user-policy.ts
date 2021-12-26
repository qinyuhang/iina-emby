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
 * @interface UsersUserPolicy
 */
export interface UsersUserPolicy {
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    isAdministrator?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    isHidden?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    isHiddenRemotely?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    isHiddenFromUnusedDevices?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    isDisabled?: any;
    /**
     * 
     * @type {number}
     * @memberof UsersUserPolicy
     */
    maxParentalRating?: any | null;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    blockedTags?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    isTagBlockingModeInclusive?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableUserPreferenceAccess?: any;
    /**
     * 
     * @type {Array&lt;ConfigurationAccessSchedule&gt;}
     * @memberof UsersUserPolicy
     */
    accessSchedules?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    blockUnratedItems?: Array<UsersUserPolicyBlockUnratedItemsEnum>;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableRemoteControlOfOtherUsers?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableSharedDeviceControl?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableRemoteAccess?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableLiveTvManagement?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableLiveTvAccess?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableMediaPlayback?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableAudioPlaybackTranscoding?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableVideoPlaybackTranscoding?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enablePlaybackRemuxing?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableContentDeletion?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    enableContentDeletionFromFolders?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableContentDownloading?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableSubtitleDownloading?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableSubtitleManagement?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableSyncTranscoding?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableMediaConversion?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    enabledChannels?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableAllChannels?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    enabledFolders?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableAllFolders?: any;
    /**
     * 
     * @type {number}
     * @memberof UsersUserPolicy
     */
    invalidLoginAttemptCount?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enablePublicSharing?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    blockedMediaFolders?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    blockedChannels?: any;
    /**
     * 
     * @type {number}
     * @memberof UsersUserPolicy
     */
    remoteClientBitrateLimit?: any;
    /**
     * 
     * @type {string}
     * @memberof UsersUserPolicy
     */
    authenticationProviderId?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    excludedSubFolders?: any;
    /**
     * 
     * @type {number}
     * @memberof UsersUserPolicy
     */
    simultaneousStreamLimit?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof UsersUserPolicy
     */
    enabledDevices?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UsersUserPolicy
     */
    enableAllDevices?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum UsersUserPolicyBlockUnratedItemsEnum {
    Movie = 'Movie',
    Trailer = 'Trailer',
    Series = 'Series',
    Music = 'Music',
    Game = 'Game',
    Book = 'Book',
    LiveTvChannel = 'LiveTvChannel',
    LiveTvProgram = 'LiveTvProgram',
    ChannelContent = 'ChannelContent',
    Other = 'Other'
}

