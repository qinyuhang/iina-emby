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
import { ImageByNameInfo } from '../models';
/**
 * ImageByNameServiceApi - axios parameter creator
 * @export
 */
export const ImageByNameServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets all general images by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesGeneral: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Images/General`;
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
         * @summary Gets a general image by name
         * @param {string} name The name of the image
         * @param {string} type Image Type (primary, backdrop, logo, etc).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesGeneralByNameByType: async (name: string, type: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getImagesGeneralByNameByType.');
            }
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling getImagesGeneralByNameByType.');
            }
            const localVarPath = `/Images/General/{Name}/{Type}`
                .replace(`{${"Name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"Type"}}`, encodeURIComponent(String(type)));
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
         * @summary Gets all media info image by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesMediainfo: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Images/MediaInfo`;
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
         * @summary Gets a media info image by name
         * @param {string} name The name of the image
         * @param {string} theme The theme to get the image from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesMediainfoByThemeByName: async (name: string, theme: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getImagesMediainfoByThemeByName.');
            }
            // verify required parameter 'theme' is not null or undefined
            if (theme === null || theme === undefined) {
                throw new RequiredError('theme','Required parameter theme was null or undefined when calling getImagesMediainfoByThemeByName.');
            }
            const localVarPath = `/Images/MediaInfo/{Theme}/{Name}`
                .replace(`{${"Name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"Theme"}}`, encodeURIComponent(String(theme)));
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
         * @summary Gets all rating images by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesRatings: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Images/Ratings`;
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
         * @summary Gets a rating image by name
         * @param {string} name The name of the image
         * @param {string} theme The theme to get the image from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesRatingsByThemeByName: async (name: string, theme: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getImagesRatingsByThemeByName.');
            }
            // verify required parameter 'theme' is not null or undefined
            if (theme === null || theme === undefined) {
                throw new RequiredError('theme','Required parameter theme was null or undefined when calling getImagesRatingsByThemeByName.');
            }
            const localVarPath = `/Images/Ratings/{Theme}/{Name}`
                .replace(`{${"Name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"Theme"}}`, encodeURIComponent(String(theme)));
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
 * ImageByNameServiceApi - functional programming interface
 * @export
 */
export const ImageByNameServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets all general images by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImagesGeneral(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageByNameInfo>>> {
            const localVarAxiosArgs = await ImageByNameServiceApiAxiosParamCreator(configuration).getImagesGeneral(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets a general image by name
         * @param {string} name The name of the image
         * @param {string} type Image Type (primary, backdrop, logo, etc).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImagesGeneralByNameByType(name: string, type: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ImageByNameServiceApiAxiosParamCreator(configuration).getImagesGeneralByNameByType(name, type, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets all media info image by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImagesMediainfo(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageByNameInfo>>> {
            const localVarAxiosArgs = await ImageByNameServiceApiAxiosParamCreator(configuration).getImagesMediainfo(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets a media info image by name
         * @param {string} name The name of the image
         * @param {string} theme The theme to get the image from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImagesMediainfoByThemeByName(name: string, theme: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ImageByNameServiceApiAxiosParamCreator(configuration).getImagesMediainfoByThemeByName(name, theme, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets all rating images by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImagesRatings(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageByNameInfo>>> {
            const localVarAxiosArgs = await ImageByNameServiceApiAxiosParamCreator(configuration).getImagesRatings(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @summary Gets a rating image by name
         * @param {string} name The name of the image
         * @param {string} theme The theme to get the image from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImagesRatingsByThemeByName(name: string, theme: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ImageByNameServiceApiAxiosParamCreator(configuration).getImagesRatingsByThemeByName(name, theme, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ImageByNameServiceApi - factory interface
 * @export
 */
export const ImageByNameServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Gets all general images by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesGeneral(options?: any): AxiosPromise<Array<ImageByNameInfo>> {
            return ImageByNameServiceApiFp(configuration).getImagesGeneral(options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets a general image by name
         * @param {string} name The name of the image
         * @param {string} type Image Type (primary, backdrop, logo, etc).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesGeneralByNameByType(name: string, type: string, options?: any): AxiosPromise<void> {
            return ImageByNameServiceApiFp(configuration).getImagesGeneralByNameByType(name, type, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets all media info image by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesMediainfo(options?: any): AxiosPromise<Array<ImageByNameInfo>> {
            return ImageByNameServiceApiFp(configuration).getImagesMediainfo(options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets a media info image by name
         * @param {string} name The name of the image
         * @param {string} theme The theme to get the image from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesMediainfoByThemeByName(name: string, theme: string, options?: any): AxiosPromise<void> {
            return ImageByNameServiceApiFp(configuration).getImagesMediainfoByThemeByName(name, theme, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets all rating images by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesRatings(options?: any): AxiosPromise<Array<ImageByNameInfo>> {
            return ImageByNameServiceApiFp(configuration).getImagesRatings(options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @summary Gets a rating image by name
         * @param {string} name The name of the image
         * @param {string} theme The theme to get the image from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImagesRatingsByThemeByName(name: string, theme: string, options?: any): AxiosPromise<void> {
            return ImageByNameServiceApiFp(configuration).getImagesRatingsByThemeByName(name, theme, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ImageByNameServiceApi - object-oriented interface
 * @export
 * @class ImageByNameServiceApi
 * @extends {BaseAPI}
 */
export class ImageByNameServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Gets all general images by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameServiceApi
     */
    public getImagesGeneral(options?: any) {
        return ImageByNameServiceApiFp(this.configuration).getImagesGeneral(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets a general image by name
     * @param {string} name The name of the image
     * @param {string} type Image Type (primary, backdrop, logo, etc).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameServiceApi
     */
    public getImagesGeneralByNameByType(name: string, type: string, options?: any) {
        return ImageByNameServiceApiFp(this.configuration).getImagesGeneralByNameByType(name, type, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets all media info image by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameServiceApi
     */
    public getImagesMediainfo(options?: any) {
        return ImageByNameServiceApiFp(this.configuration).getImagesMediainfo(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets a media info image by name
     * @param {string} name The name of the image
     * @param {string} theme The theme to get the image from
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameServiceApi
     */
    public getImagesMediainfoByThemeByName(name: string, theme: string, options?: any) {
        return ImageByNameServiceApiFp(this.configuration).getImagesMediainfoByThemeByName(name, theme, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets all rating images by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameServiceApi
     */
    public getImagesRatings(options?: any) {
        return ImageByNameServiceApiFp(this.configuration).getImagesRatings(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @summary Gets a rating image by name
     * @param {string} name The name of the image
     * @param {string} theme The theme to get the image from
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImageByNameServiceApi
     */
    public getImagesRatingsByThemeByName(name: string, theme: string, options?: any) {
        return ImageByNameServiceApiFp(this.configuration).getImagesRatingsByThemeByName(name, theme, options).then((request) => request(this.axios, this.basePath));
    }
}
