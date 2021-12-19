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
import { RokuMetadataApiThumbnailSetInfo } from '../models';
/**
 * BifServiceApi - axios parameter creator
 * @export
 */
export const BifServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @param {number} width 
         * @param {string} id Item Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemsByIdThumbnailset: async (width: number, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'width' is not null or undefined
            if (width === null || width === undefined) {
                throw new RequiredError('width','Required parameter width was null or undefined when calling getItemsByIdThumbnailset.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getItemsByIdThumbnailset.');
            }
            const localVarPath = `/Items/{Id}/ThumbnailSet`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
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

            if (width !== undefined) {
                localVarQueryParameter['Width'] = width;
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
        /**
         * No authentication required
         * @param {number} width 
         * @param {string} id Item Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVideosByIdIndexBif: async (width: number, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'width' is not null or undefined
            if (width === null || width === undefined) {
                throw new RequiredError('width','Required parameter width was null or undefined when calling getVideosByIdIndexBif.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getVideosByIdIndexBif.');
            }
            const localVarPath = `/Videos/{Id}/index.bif`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (width !== undefined) {
                localVarQueryParameter['Width'] = width;
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
 * BifServiceApi - functional programming interface
 * @export
 */
export const BifServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @param {number} width 
         * @param {string} id Item Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemsByIdThumbnailset(width: number, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RokuMetadataApiThumbnailSetInfo>> {
            const localVarAxiosArgs = await BifServiceApiAxiosParamCreator(configuration).getItemsByIdThumbnailset(width, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @param {number} width 
         * @param {string} id Item Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVideosByIdIndexBif(width: number, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await BifServiceApiAxiosParamCreator(configuration).getVideosByIdIndexBif(width, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BifServiceApi - factory interface
 * @export
 */
export const BifServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @param {number} width 
         * @param {string} id Item Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemsByIdThumbnailset(width: number, id: string, options?: any): AxiosPromise<RokuMetadataApiThumbnailSetInfo> {
            return BifServiceApiFp(configuration).getItemsByIdThumbnailset(width, id, options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @param {number} width 
         * @param {string} id Item Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVideosByIdIndexBif(width: number, id: string, options?: any): AxiosPromise<void> {
            return BifServiceApiFp(configuration).getVideosByIdIndexBif(width, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BifServiceApi - object-oriented interface
 * @export
 * @class BifServiceApi
 * @extends {BaseAPI}
 */
export class BifServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @param {number} width 
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BifServiceApi
     */
    public getItemsByIdThumbnailset(width: number, id: string, options?: any) {
        return BifServiceApiFp(this.configuration).getItemsByIdThumbnailset(width, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @param {number} width 
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BifServiceApi
     */
    public getVideosByIdIndexBif(width: number, id: string, options?: any) {
        return BifServiceApiFp(this.configuration).getVideosByIdIndexBif(width, id, options).then((request) => request(this.axios, this.basePath));
    }
}