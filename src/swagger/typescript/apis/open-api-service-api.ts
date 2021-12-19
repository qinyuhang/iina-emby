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
/**
 * OpenApiServiceApi - axios parameter creator
 * @export
 */
export const OpenApiServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * No authentication required
         * @summary Gets the OpenAPI 3 specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenapi: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/openapi`;
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
         * No authentication required
         * @summary Gets OpenAPI 3 specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenapiJson: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/openapi.json`;
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
         * No authentication required
         * @summary Gets the swagger specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSwagger: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/swagger`;
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
         * No authentication required
         * @summary Gets the swagger specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSwaggerJson: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/swagger.json`;
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
    }
};

/**
 * OpenApiServiceApi - functional programming interface
 * @export
 */
export const OpenApiServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * No authentication required
         * @summary Gets the OpenAPI 3 specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOpenapi(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await OpenApiServiceApiAxiosParamCreator(configuration).getOpenapi(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets OpenAPI 3 specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOpenapiJson(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await OpenApiServiceApiAxiosParamCreator(configuration).getOpenapiJson(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets the swagger specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSwagger(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await OpenApiServiceApiAxiosParamCreator(configuration).getSwagger(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets the swagger specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSwaggerJson(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await OpenApiServiceApiAxiosParamCreator(configuration).getSwaggerJson(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OpenApiServiceApi - factory interface
 * @export
 */
export const OpenApiServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * No authentication required
         * @summary Gets the OpenAPI 3 specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenapi(options?: any): AxiosPromise<string> {
            return OpenApiServiceApiFp(configuration).getOpenapi(options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets OpenAPI 3 specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenapiJson(options?: any): AxiosPromise<string> {
            return OpenApiServiceApiFp(configuration).getOpenapiJson(options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets the swagger specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSwagger(options?: any): AxiosPromise<string> {
            return OpenApiServiceApiFp(configuration).getSwagger(options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets the swagger specifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSwaggerJson(options?: any): AxiosPromise<string> {
            return OpenApiServiceApiFp(configuration).getSwaggerJson(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OpenApiServiceApi - object-oriented interface
 * @export
 * @class OpenApiServiceApi
 * @extends {BaseAPI}
 */
export class OpenApiServiceApi extends BaseAPI {
    /**
     * No authentication required
     * @summary Gets the OpenAPI 3 specifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenApiServiceApi
     */
    public getOpenapi(options?: any) {
        return OpenApiServiceApiFp(this.configuration).getOpenapi(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets OpenAPI 3 specifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenApiServiceApi
     */
    public getOpenapiJson(options?: any) {
        return OpenApiServiceApiFp(this.configuration).getOpenapiJson(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets the swagger specifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenApiServiceApi
     */
    public getSwagger(options?: any) {
        return OpenApiServiceApiFp(this.configuration).getSwagger(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets the swagger specifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenApiServiceApi
     */
    public getSwaggerJson(options?: any) {
        return OpenApiServiceApiFp(this.configuration).getSwaggerJson(options).then((request) => request(this.axios, this.basePath));
    }
}