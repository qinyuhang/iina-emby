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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ConfigurationCodecConfiguration } from '../models';
import { MediaEncodingCodecsVideoCodecsVideoCodecBase } from '../models';
/**
 * EncodingInfoServiceApi - axios parameter creator
 * @export
 */
export const EncodingInfoServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets default codec configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEncodingCodecconfigurationDefaults: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Encoding/CodecConfiguration/Defaults`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikeyauth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("api_key")
                    : await configuration.apiKey;
                localVarQueryParameter["api_key"] = localVarApiKeyValue;
            }

            // authentication embyauth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets details about available video encoders and decoders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEncodingCodecinformationVideo: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Encoding/CodecInformation/Video`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikeyauth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("api_key")
                    : await configuration.apiKey;
                localVarQueryParameter["api_key"] = localVarApiKeyValue;
            }

            // authentication embyauth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EncodingInfoServiceApi - functional programming interface
 * @export
 */
export const EncodingInfoServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets default codec configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEncodingCodecconfigurationDefaults(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ConfigurationCodecConfiguration>>> {
            const localVarAxiosArgs = await EncodingInfoServiceApiAxiosParamCreator(configuration).getEncodingCodecconfigurationDefaults(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets details about available video encoders and decoders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEncodingCodecinformationVideo(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MediaEncodingCodecsVideoCodecsVideoCodecBase>>> {
            const localVarAxiosArgs = await EncodingInfoServiceApiAxiosParamCreator(configuration).getEncodingCodecinformationVideo(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EncodingInfoServiceApi - factory interface
 * @export
 */
export const EncodingInfoServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets default codec configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEncodingCodecconfigurationDefaults(options?: any): AxiosPromise<Array<ConfigurationCodecConfiguration>> {
            return EncodingInfoServiceApiFp(configuration).getEncodingCodecconfigurationDefaults(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets details about available video encoders and decoders
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEncodingCodecinformationVideo(options?: any): AxiosPromise<Array<MediaEncodingCodecsVideoCodecsVideoCodecBase>> {
            return EncodingInfoServiceApiFp(configuration).getEncodingCodecinformationVideo(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EncodingInfoServiceApi - object-oriented interface
 * @export
 * @class EncodingInfoServiceApi
 * @extends {BaseAPI}
 */
export class EncodingInfoServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Gets default codec configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EncodingInfoServiceApi
     */
    public getEncodingCodecconfigurationDefaults(options?: any) {
        return EncodingInfoServiceApiFp(this.configuration).getEncodingCodecconfigurationDefaults(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets details about available video encoders and decoders
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EncodingInfoServiceApi
     */
    public getEncodingCodecinformationVideo(options?: any) {
        return EncodingInfoServiceApiFp(this.configuration).getEncodingCodecinformationVideo(options).then((request) => request(this.axios, this.basePath));
    }
}