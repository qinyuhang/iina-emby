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
import { ConnectConnectAuthenticationExchangeResult } from '../models';
import { ConnectUserLinkResult } from '../models';
/**
 * ConnectServiceApi - axios parameter creator
 * @export
 */
export const ConnectServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Removes a Connect link for a user
         * @param {string} id User Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUsersByIdConnectLink: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteUsersByIdConnectLink.');
            }
            const localVarPath = `/Users/{Id}/Connect/Link`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary Gets the corresponding local user from a connect user id
         * @param {string} connectUserId ConnectUserId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectExchange: async (connectUserId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectUserId' is not null or undefined
            if (connectUserId === null || connectUserId === undefined) {
                throw new RequiredError('connectUserId','Required parameter connectUserId was null or undefined when calling getConnectExchange.');
            }
            const localVarPath = `/Connect/Exchange`;
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

            if (connectUserId !== undefined) {
                localVarQueryParameter['ConnectUserId'] = connectUserId;
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
         * Requires authentication as administrator
         * @summary Creates a Connect link for a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectPending: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Connect/Pending`;
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
         * @summary Creates a Connect link for a user
         * @param {string} id User Id
         * @param {string} connectUsername Connect username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersByIdConnectLink: async (id: string, connectUsername: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling postUsersByIdConnectLink.');
            }
            // verify required parameter 'connectUsername' is not null or undefined
            if (connectUsername === null || connectUsername === undefined) {
                throw new RequiredError('connectUsername','Required parameter connectUsername was null or undefined when calling postUsersByIdConnectLink.');
            }
            const localVarPath = `/Users/{Id}/Connect/Link`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
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

            if (connectUsername !== undefined) {
                localVarQueryParameter['ConnectUsername'] = connectUsername;
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
 * ConnectServiceApi - functional programming interface
 * @export
 */
export const ConnectServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Removes a Connect link for a user
         * @param {string} id User Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUsersByIdConnectLink(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConnectServiceApiAxiosParamCreator(configuration).deleteUsersByIdConnectLink(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets the corresponding local user from a connect user id
         * @param {string} connectUserId ConnectUserId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConnectExchange(connectUserId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectConnectAuthenticationExchangeResult>> {
            const localVarAxiosArgs = await ConnectServiceApiAxiosParamCreator(configuration).getConnectExchange(connectUserId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Creates a Connect link for a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConnectPending(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConnectServiceApiAxiosParamCreator(configuration).getConnectPending(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Creates a Connect link for a user
         * @param {string} id User Id
         * @param {string} connectUsername Connect username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUsersByIdConnectLink(id: string, connectUsername: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectUserLinkResult>> {
            const localVarAxiosArgs = await ConnectServiceApiAxiosParamCreator(configuration).postUsersByIdConnectLink(id, connectUsername, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ConnectServiceApi - factory interface
 * @export
 */
export const ConnectServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Removes a Connect link for a user
         * @param {string} id User Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUsersByIdConnectLink(id: string, options?: any): AxiosPromise<void> {
            return ConnectServiceApiFp(configuration).deleteUsersByIdConnectLink(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets the corresponding local user from a connect user id
         * @param {string} connectUserId ConnectUserId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectExchange(connectUserId: string, options?: any): AxiosPromise<ConnectConnectAuthenticationExchangeResult> {
            return ConnectServiceApiFp(configuration).getConnectExchange(connectUserId, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Creates a Connect link for a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectPending(options?: any): AxiosPromise<void> {
            return ConnectServiceApiFp(configuration).getConnectPending(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Creates a Connect link for a user
         * @param {string} id User Id
         * @param {string} connectUsername Connect username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUsersByIdConnectLink(id: string, connectUsername: string, options?: any): AxiosPromise<ConnectUserLinkResult> {
            return ConnectServiceApiFp(configuration).postUsersByIdConnectLink(id, connectUsername, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConnectServiceApi - object-oriented interface
 * @export
 * @class ConnectServiceApi
 * @extends {BaseAPI}
 */
export class ConnectServiceApi extends BaseAPI {
    /**
     * Requires authentication as administrator
     * @summary Removes a Connect link for a user
     * @param {string} id User Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectServiceApi
     */
    public deleteUsersByIdConnectLink(id: string, options?: any) {
        return ConnectServiceApiFp(this.configuration).deleteUsersByIdConnectLink(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets the corresponding local user from a connect user id
     * @param {string} connectUserId ConnectUserId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectServiceApi
     */
    public getConnectExchange(connectUserId: string, options?: any) {
        return ConnectServiceApiFp(this.configuration).getConnectExchange(connectUserId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Creates a Connect link for a user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectServiceApi
     */
    public getConnectPending(options?: any) {
        return ConnectServiceApiFp(this.configuration).getConnectPending(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Creates a Connect link for a user
     * @param {string} id User Id
     * @param {string} connectUsername Connect username
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectServiceApi
     */
    public postUsersByIdConnectLink(id: string, connectUsername: string, options?: any) {
        return ConnectServiceApiFp(this.configuration).postUsersByIdConnectLink(id, connectUsername, options).then((request) => request(this.axios, this.basePath));
    }
}
