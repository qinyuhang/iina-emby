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
 * @interface ConfigurationLibraryOptions
 */
export interface ConfigurationLibraryOptions {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enableArchiveMediaFiles?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enablePhotos?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enableRealtimeMonitor?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enableChapterImageExtraction?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    extractChapterImagesDuringLibraryScan?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    downloadImagesInAdvance?: any;
    /**
     * 
     * @type {Array&lt;ConfigurationMediaPathInfo&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    pathInfos?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    saveLocalMetadata?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    saveLocalThumbnailSets?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    importMissingEpisodes?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enableAutomaticSeriesGrouping?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enableEmbeddedTitles?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    enableAudioResume?: any;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationLibraryOptions
     */
    automaticRefreshIntervalDays?: any;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLibraryOptions
     */
    preferredMetadataLanguage?: any;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLibraryOptions
     */
    contentType?: any;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLibraryOptions
     */
    metadataCountryCode?: any;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLibraryOptions
     */
    seasonZeroDisplayName?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    metadataSavers?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    disabledLocalMetadataReaders?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    localMetadataReaderOrder?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    disabledSubtitleFetchers?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    subtitleFetcherOrder?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    skipSubtitlesIfEmbeddedSubtitlesPresent?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    skipSubtitlesIfAudioTrackMatches?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    subtitleDownloadLanguages?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    requirePerfectSubtitleMatch?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    saveSubtitlesWithMedia?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    forcedSubtitlesOnly?: any;
    /**
     * 
     * @type {Array&lt;ConfigurationTypeOptions&gt;}
     * @memberof ConfigurationLibraryOptions
     */
    typeOptions?: any;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationLibraryOptions
     */
    collapseSingleItemFolders?: any;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationLibraryOptions
     */
    minResumePct?: any;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationLibraryOptions
     */
    maxResumePct?: any;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationLibraryOptions
     */
    minResumeDurationSeconds?: any;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationLibraryOptions
     */
    thumbnailImagesIntervalSeconds?: any;
}
