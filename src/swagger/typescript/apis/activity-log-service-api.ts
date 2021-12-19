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
import { QueryResultActivityLogEntry } from '../models';
/**
 * ActivityLogServiceApi - axios parameter creator
 * @export
 */
export const ActivityLogServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Gets activity log entries
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemActivitylogEntries: async (startIndex?: number, limit?: number, minDate?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/ActivityLog/Entries`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['StartIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['Limit'] = limit;
            }

            if (minDate !== undefined) {
                localVarQueryParameter['MinDate'] = minDate;
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
 * ActivityLogServiceApi - functional programming interface
 * @export
 */
export const ActivityLogServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Gets activity log entries
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemActivitylogEntries(startIndex?: number, limit?: number, minDate?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryResultActivityLogEntry>> {
            const localVarAxiosArgs = await ActivityLogServiceApiAxiosParamCreator(configuration).getSystemActivitylogEntries(startIndex, limit, minDate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ActivityLogServiceApi - factory interface
 * @export
 */
export const ActivityLogServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Gets activity log entries
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemActivitylogEntries(startIndex?: number, limit?: number, minDate?: string, options?: any): AxiosPromise<QueryResultActivityLogEntry> {
            return ActivityLogServiceApiFp(configuration).getSystemActivitylogEntries(startIndex, limit, minDate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ActivityLogServiceApi - object-oriented interface
 * @export
 * @class ActivityLogServiceApi
 * @extends {BaseAPI}
 */
export class ActivityLogServiceApi extends BaseAPI {
    /**
     * Requires authentication as administrator
     * @summary Gets activity log entries
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return
     * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityLogServiceApi
     */
    public getSystemActivitylogEntries(startIndex?: number, limit?: number, minDate?: string, options?: any) {
        return ActivityLogServiceApiFp(this.configuration).getSystemActivitylogEntries(startIndex, limit, minDate, options).then((request) => request(this.axios, this.basePath));
    }
}