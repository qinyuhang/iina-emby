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
import { EmbyWebGenericEditEditObjectContainer } from '../models';
/**
 * ToneMapOptionsServiceApi - axios parameter creator
 * @export
 */
export const ToneMapOptionsServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets the tone mapping options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEncodingPublictonemapoptions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Encoding/PublicToneMapOptions`;
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
         * Requires authentication as administrator
         * @summary Updates the tone mapping options
         * @param {Object} body Binary stream
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEncodingPublictonemapoptions: async (body: Object, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postEncodingPublictonemapoptions.');
            }
            const localVarPath = `/Encoding/PublicToneMapOptions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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

            localVarHeaderParameter['Content-Type'] = 'application/octet-stream';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ToneMapOptionsServiceApi - functional programming interface
 * @export
 */
export const ToneMapOptionsServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets the tone mapping options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEncodingPublictonemapoptions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmbyWebGenericEditEditObjectContainer>> {
            const localVarAxiosArgs = await ToneMapOptionsServiceApiAxiosParamCreator(configuration).getEncodingPublictonemapoptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Updates the tone mapping options
         * @param {Object} body Binary stream
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postEncodingPublictonemapoptions(body: Object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ToneMapOptionsServiceApiAxiosParamCreator(configuration).postEncodingPublictonemapoptions(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ToneMapOptionsServiceApi - factory interface
 * @export
 */
export const ToneMapOptionsServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets the tone mapping options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEncodingPublictonemapoptions(options?: any): AxiosPromise<EmbyWebGenericEditEditObjectContainer> {
            return ToneMapOptionsServiceApiFp(configuration).getEncodingPublictonemapoptions(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Updates the tone mapping options
         * @param {Object} body Binary stream
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEncodingPublictonemapoptions(body: Object, options?: any): AxiosPromise<void> {
            return ToneMapOptionsServiceApiFp(configuration).postEncodingPublictonemapoptions(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ToneMapOptionsServiceApi - object-oriented interface
 * @export
 * @class ToneMapOptionsServiceApi
 * @extends {BaseAPI}
 */
export class ToneMapOptionsServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Gets the tone mapping options
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToneMapOptionsServiceApi
     */
    public getEncodingPublictonemapoptions(options?: any) {
        return ToneMapOptionsServiceApiFp(this.configuration).getEncodingPublictonemapoptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Updates the tone mapping options
     * @param {Object} body Binary stream
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ToneMapOptionsServiceApi
     */
    public postEncodingPublictonemapoptions(body: Object, options?: any) {
        return ToneMapOptionsServiceApiFp(this.configuration).postEncodingPublictonemapoptions(body, options).then((request) => request(this.axios, this.basePath));
    }
}
