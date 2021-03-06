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
import { ConfigurationServerConfiguration } from '../models';
/**
 * ConfigurationServiceApi - axios parameter creator
 * @export
 */
export const ConfigurationServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets application configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemConfiguration: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Configuration`;
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
         * @summary Gets a named configuration
         * @param {string} key Key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemConfigurationByKey: async (key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling getSystemConfigurationByKey.');
            }
            const localVarPath = `/System/Configuration/{Key}`
                .replace(`{${"Key"}}`, encodeURIComponent(String(key)));
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
         * @summary Updates application configuration
         * @param {ConfigurationServerConfiguration} body ServerConfiguration: 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemConfiguration: async (body: ConfigurationServerConfiguration, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postSystemConfiguration.');
            }
            const localVarPath = `/System/Configuration`;
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

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
        /**
         * Requires authentication as administrator
         * @summary Updates named configuration
         * @param {Object} body Binary stream
         * @param {string} key Key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemConfigurationByKey: async (body: Object, key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postSystemConfigurationByKey.');
            }
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling postSystemConfigurationByKey.');
            }
            const localVarPath = `/System/Configuration/{Key}`
                .replace(`{${"Key"}}`, encodeURIComponent(String(key)));
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
 * ConfigurationServiceApi - functional programming interface
 * @export
 */
export const ConfigurationServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets application configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemConfiguration(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigurationServerConfiguration>> {
            const localVarAxiosArgs = await ConfigurationServiceApiAxiosParamCreator(configuration).getSystemConfiguration(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets a named configuration
         * @param {string} key Key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemConfigurationByKey(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigurationServiceApiAxiosParamCreator(configuration).getSystemConfigurationByKey(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Updates application configuration
         * @param {ConfigurationServerConfiguration} body ServerConfiguration: 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postSystemConfiguration(body: ConfigurationServerConfiguration, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigurationServiceApiAxiosParamCreator(configuration).postSystemConfiguration(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Updates named configuration
         * @param {Object} body Binary stream
         * @param {string} key Key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postSystemConfigurationByKey(body: Object, key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ConfigurationServiceApiAxiosParamCreator(configuration).postSystemConfigurationByKey(body, key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ConfigurationServiceApi - factory interface
 * @export
 */
export const ConfigurationServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets application configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemConfiguration(options?: any): AxiosPromise<ConfigurationServerConfiguration> {
            return ConfigurationServiceApiFp(configuration).getSystemConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets a named configuration
         * @param {string} key Key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemConfigurationByKey(key: string, options?: any): AxiosPromise<void> {
            return ConfigurationServiceApiFp(configuration).getSystemConfigurationByKey(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Updates application configuration
         * @param {ConfigurationServerConfiguration} body ServerConfiguration: 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemConfiguration(body: ConfigurationServerConfiguration, options?: any): AxiosPromise<void> {
            return ConfigurationServiceApiFp(configuration).postSystemConfiguration(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Updates named configuration
         * @param {Object} body Binary stream
         * @param {string} key Key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSystemConfigurationByKey(body: Object, key: string, options?: any): AxiosPromise<void> {
            return ConfigurationServiceApiFp(configuration).postSystemConfigurationByKey(body, key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConfigurationServiceApi - object-oriented interface
 * @export
 * @class ConfigurationServiceApi
 * @extends {BaseAPI}
 */
export class ConfigurationServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Gets application configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationServiceApi
     */
    public getSystemConfiguration(options?: any) {
        return ConfigurationServiceApiFp(this.configuration).getSystemConfiguration(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets a named configuration
     * @param {string} key Key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationServiceApi
     */
    public getSystemConfigurationByKey(key: string, options?: any) {
        return ConfigurationServiceApiFp(this.configuration).getSystemConfigurationByKey(key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Updates application configuration
     * @param {ConfigurationServerConfiguration} body ServerConfiguration: 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationServiceApi
     */
    public postSystemConfiguration(body: ConfigurationServerConfiguration, options?: any) {
        return ConfigurationServiceApiFp(this.configuration).postSystemConfiguration(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Updates named configuration
     * @param {Object} body Binary stream
     * @param {string} key Key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationServiceApi
     */
    public postSystemConfigurationByKey(body: Object, key: string, options?: any) {
        return ConfigurationServiceApiFp(this.configuration).postSystemConfigurationByKey(body, key, options).then((request) => request(this.axios, this.basePath));
    }
}
