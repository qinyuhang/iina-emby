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
import { GlobalizationCountryInfo } from '../models';
import { GlobalizationCultureDto } from '../models';
import { GlobalizationLocalizatonOption } from '../models';
import { ParentalRating } from '../models';
/**
 * LocalizationServiceApi - axios parameter creator
 * @export
 */
export const LocalizationServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets known countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationCountries: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Countries`;
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
         * @summary Gets known cultures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationCultures: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Cultures`;
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
         * @summary Gets localization options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationOptions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/Options`;
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
         * @summary Gets known parental ratings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationParentalratings: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Localization/ParentalRatings`;
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
 * LocalizationServiceApi - functional programming interface
 * @export
 */
export const LocalizationServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets known countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalizationCountries(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalizationCountryInfo>>> {
            const localVarAxiosArgs = await LocalizationServiceApiAxiosParamCreator(configuration).getLocalizationCountries(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets known cultures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalizationCultures(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalizationCultureDto>>> {
            const localVarAxiosArgs = await LocalizationServiceApiAxiosParamCreator(configuration).getLocalizationCultures(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets localization options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalizationOptions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalizationLocalizatonOption>>> {
            const localVarAxiosArgs = await LocalizationServiceApiAxiosParamCreator(configuration).getLocalizationOptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets known parental ratings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalizationParentalratings(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ParentalRating>>> {
            const localVarAxiosArgs = await LocalizationServiceApiAxiosParamCreator(configuration).getLocalizationParentalratings(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LocalizationServiceApi - factory interface
 * @export
 */
export const LocalizationServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets known countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationCountries(options?: any): AxiosPromise<Array<GlobalizationCountryInfo>> {
            return LocalizationServiceApiFp(configuration).getLocalizationCountries(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets known cultures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationCultures(options?: any): AxiosPromise<Array<GlobalizationCultureDto>> {
            return LocalizationServiceApiFp(configuration).getLocalizationCultures(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets localization options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationOptions(options?: any): AxiosPromise<Array<GlobalizationLocalizatonOption>> {
            return LocalizationServiceApiFp(configuration).getLocalizationOptions(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets known parental ratings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalizationParentalratings(options?: any): AxiosPromise<Array<ParentalRating>> {
            return LocalizationServiceApiFp(configuration).getLocalizationParentalratings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LocalizationServiceApi - object-oriented interface
 * @export
 * @class LocalizationServiceApi
 * @extends {BaseAPI}
 */
export class LocalizationServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Gets known countries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationServiceApi
     */
    public getLocalizationCountries(options?: any) {
        return LocalizationServiceApiFp(this.configuration).getLocalizationCountries(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets known cultures
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationServiceApi
     */
    public getLocalizationCultures(options?: any) {
        return LocalizationServiceApiFp(this.configuration).getLocalizationCultures(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets localization options
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationServiceApi
     */
    public getLocalizationOptions(options?: any) {
        return LocalizationServiceApiFp(this.configuration).getLocalizationOptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets known parental ratings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalizationServiceApi
     */
    public getLocalizationParentalratings(options?: any) {
        return LocalizationServiceApiFp(this.configuration).getLocalizationParentalratings(options).then((request) => request(this.axios, this.basePath));
    }
}