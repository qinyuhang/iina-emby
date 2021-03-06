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
import { PluginsPluginInfo } from '../models';
/**
 * PluginServiceApi - axios parameter creator
 * @export
 */
export const PluginServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Uninstalls a plugin
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePluginsById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePluginsById.');
            }
            const localVarPath = `/Plugins/{Id}`
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
         * @summary Gets a list of currently installed plugins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlugins: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Plugins`;
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
         * @summary Gets a plugin's configuration
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginsByIdConfiguration: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getPluginsByIdConfiguration.');
            }
            const localVarPath = `/Plugins/{Id}/Configuration`
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
         * @summary Gets a plugin thumb image
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginsByIdThumb: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getPluginsByIdThumb.');
            }
            const localVarPath = `/Plugins/{Id}/Thumb`
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
         * @summary Updates a plugin's configuration
         * @param {Object} body Binary stream
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPluginsByIdConfiguration: async (body: Object, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postPluginsByIdConfiguration.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling postPluginsByIdConfiguration.');
            }
            const localVarPath = `/Plugins/{Id}/Configuration`
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
 * PluginServiceApi - functional programming interface
 * @export
 */
export const PluginServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Uninstalls a plugin
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePluginsById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PluginServiceApiAxiosParamCreator(configuration).deletePluginsById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets a list of currently installed plugins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlugins(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PluginsPluginInfo>>> {
            const localVarAxiosArgs = await PluginServiceApiAxiosParamCreator(configuration).getPlugins(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets a plugin's configuration
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPluginsByIdConfiguration(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PluginServiceApiAxiosParamCreator(configuration).getPluginsByIdConfiguration(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets a plugin thumb image
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPluginsByIdThumb(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PluginServiceApiAxiosParamCreator(configuration).getPluginsByIdThumb(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Updates a plugin's configuration
         * @param {Object} body Binary stream
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPluginsByIdConfiguration(body: Object, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PluginServiceApiAxiosParamCreator(configuration).postPluginsByIdConfiguration(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PluginServiceApi - factory interface
 * @export
 */
export const PluginServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Uninstalls a plugin
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePluginsById(id: string, options?: any): AxiosPromise<void> {
            return PluginServiceApiFp(configuration).deletePluginsById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets a list of currently installed plugins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlugins(options?: any): AxiosPromise<Array<PluginsPluginInfo>> {
            return PluginServiceApiFp(configuration).getPlugins(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets a plugin's configuration
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginsByIdConfiguration(id: string, options?: any): AxiosPromise<void> {
            return PluginServiceApiFp(configuration).getPluginsByIdConfiguration(id, options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets a plugin thumb image
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginsByIdThumb(id: string, options?: any): AxiosPromise<void> {
            return PluginServiceApiFp(configuration).getPluginsByIdThumb(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Updates a plugin's configuration
         * @param {Object} body Binary stream
         * @param {string} id Plugin Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPluginsByIdConfiguration(body: Object, id: string, options?: any): AxiosPromise<void> {
            return PluginServiceApiFp(configuration).postPluginsByIdConfiguration(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PluginServiceApi - object-oriented interface
 * @export
 * @class PluginServiceApi
 * @extends {BaseAPI}
 */
export class PluginServiceApi extends BaseAPI {
    /**
     * Requires authentication as administrator
     * @summary Uninstalls a plugin
     * @param {string} id Plugin Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginServiceApi
     */
    public deletePluginsById(id: string, options?: any) {
        return PluginServiceApiFp(this.configuration).deletePluginsById(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets a list of currently installed plugins
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginServiceApi
     */
    public getPlugins(options?: any) {
        return PluginServiceApiFp(this.configuration).getPlugins(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets a plugin's configuration
     * @param {string} id Plugin Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginServiceApi
     */
    public getPluginsByIdConfiguration(id: string, options?: any) {
        return PluginServiceApiFp(this.configuration).getPluginsByIdConfiguration(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets a plugin thumb image
     * @param {string} id Plugin Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginServiceApi
     */
    public getPluginsByIdThumb(id: string, options?: any) {
        return PluginServiceApiFp(this.configuration).getPluginsByIdThumb(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Updates a plugin's configuration
     * @param {Object} body Binary stream
     * @param {string} id Plugin Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginServiceApi
     */
    public postPluginsByIdConfiguration(body: Object, id: string, options?: any) {
        return PluginServiceApiFp(this.configuration).postPluginsByIdConfiguration(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}
