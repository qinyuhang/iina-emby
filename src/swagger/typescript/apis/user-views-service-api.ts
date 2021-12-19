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
import { BaseItemDto } from '../models';
import { QueryResultBaseItemDto } from '../models';
/**
 * UserViewsServiceApi - axios parameter creator
 * @export
 */
export const UserViewsServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * No authentication required
         * @param {string} userId User Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersByUseridGroupingoptions: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling getUsersByUseridGroupingoptions.');
            }
            const localVarPath = `/Users/{UserId}/GroupingOptions`
                .replace(`{${"UserId"}}`, encodeURIComponent(String(userId)));
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
         * @param {string} userId User Id
         * @param {boolean} includeExternalContent Whether or not to include external views such as channels or live tv
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersByUseridViews: async (userId: string, includeExternalContent: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling getUsersByUseridViews.');
            }
            // verify required parameter 'includeExternalContent' is not null or undefined
            if (includeExternalContent === null || includeExternalContent === undefined) {
                throw new RequiredError('includeExternalContent','Required parameter includeExternalContent was null or undefined when calling getUsersByUseridViews.');
            }
            const localVarPath = `/Users/{UserId}/Views`
                .replace(`{${"UserId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includeExternalContent !== undefined) {
                localVarQueryParameter['IncludeExternalContent'] = includeExternalContent;
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
 * UserViewsServiceApi - functional programming interface
 * @export
 */
export const UserViewsServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * No authentication required
         * @param {string} userId User Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersByUseridGroupingoptions(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BaseItemDto>>> {
            const localVarAxiosArgs = await UserViewsServiceApiAxiosParamCreator(configuration).getUsersByUseridGroupingoptions(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * No authentication required
         * @param {string} userId User Id
         * @param {boolean} includeExternalContent Whether or not to include external views such as channels or live tv
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersByUseridViews(userId: string, includeExternalContent: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryResultBaseItemDto>> {
            const localVarAxiosArgs = await UserViewsServiceApiAxiosParamCreator(configuration).getUsersByUseridViews(userId, includeExternalContent, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserViewsServiceApi - factory interface
 * @export
 */
export const UserViewsServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * No authentication required
         * @param {string} userId User Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersByUseridGroupingoptions(userId: string, options?: any): AxiosPromise<Array<BaseItemDto>> {
            return UserViewsServiceApiFp(configuration).getUsersByUseridGroupingoptions(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * No authentication required
         * @param {string} userId User Id
         * @param {boolean} includeExternalContent Whether or not to include external views such as channels or live tv
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersByUseridViews(userId: string, includeExternalContent: boolean, options?: any): AxiosPromise<QueryResultBaseItemDto> {
            return UserViewsServiceApiFp(configuration).getUsersByUseridViews(userId, includeExternalContent, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserViewsServiceApi - object-oriented interface
 * @export
 * @class UserViewsServiceApi
 * @extends {BaseAPI}
 */
export class UserViewsServiceApi extends BaseAPI {
    /**
     * No authentication required
     * @param {string} userId User Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserViewsServiceApi
     */
    public getUsersByUseridGroupingoptions(userId: string, options?: any) {
        return UserViewsServiceApiFp(this.configuration).getUsersByUseridGroupingoptions(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * No authentication required
     * @param {string} userId User Id
     * @param {boolean} includeExternalContent Whether or not to include external views such as channels or live tv
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserViewsServiceApi
     */
    public getUsersByUseridViews(userId: string, includeExternalContent: boolean, options?: any) {
        return UserViewsServiceApiFp(this.configuration).getUsersByUseridViews(userId, includeExternalContent, options).then((request) => request(this.axios, this.basePath));
    }
}