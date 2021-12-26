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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { QueryResultBaseItemDto } from '../models';
/**
 * ChannelServiceApi - axios parameter creator
 * @export
 */
export const ChannelServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets available channels
         * @param {string} [userId] User Id
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels: async (userId?: string, startIndex?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Channels`;
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

            if (userId !== undefined) {
                localVarQueryParameter['UserId'] = userId;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['StartIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }

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
 * ChannelServiceApi - functional programming interface
 * @export
 */
export const ChannelServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets available channels
         * @param {string} [userId] User Id
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannels(userId?: string, startIndex?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryResultBaseItemDto>> {
            const localVarAxiosArgs = await ChannelServiceApiAxiosParamCreator(configuration).getChannels(userId, startIndex, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ChannelServiceApi - factory interface
 * @export
 */
export const ChannelServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets available channels
         * @param {string} [userId] User Id
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannels(userId?: string, startIndex?: number, limit?: number, options?: any): AxiosPromise<QueryResultBaseItemDto> {
            return ChannelServiceApiFp(configuration).getChannels(userId, startIndex, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChannelServiceApi - object-oriented interface
 * @export
 * @class ChannelServiceApi
 * @extends {BaseAPI}
 */
export class ChannelServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Gets available channels
     * @param {string} [userId] User Id
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelServiceApi
     */
    public getChannels(userId?: string, startIndex?: number, limit?: number, options?: any) {
        return ChannelServiceApiFp(this.configuration).getChannels(userId, startIndex, limit, options).then((request) => request(this.axios, this.basePath));
    }
}
