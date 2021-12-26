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
import { CollectionsCollectionCreationResult } from '../models';
/**
 * CollectionServiceApi - axios parameter creator
 * @export
 */
export const CollectionServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Removes items from a collection
         * @param {string} ids Item id, comma delimited
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCollectionsByIdItems: async (ids: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling deleteCollectionsByIdItems.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCollectionsByIdItems.');
            }
            const localVarPath = `/Collections/{Id}/Items`
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

            if (ids !== undefined) {
                localVarQueryParameter['Ids'] = ids;
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
         * Requires authentication as user
         * @summary Creates a new collection
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {string} [name] The name of the new collection.
         * @param {string} [parentId] Optional - create the collection within a specific folder
         * @param {string} [ids] Item Ids to add to the collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollections: async (isLocked?: boolean, name?: string, parentId?: string, ids?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Collections`;
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

            if (isLocked !== undefined) {
                localVarQueryParameter['IsLocked'] = isLocked;
            }

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['ParentId'] = parentId;
            }

            if (ids !== undefined) {
                localVarQueryParameter['Ids'] = ids;
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
         * Requires authentication as user
         * @summary Adds items to a collection
         * @param {string} ids Item id, comma delimited
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsByIdItems: async (ids: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'ids' is not null or undefined
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling postCollectionsByIdItems.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling postCollectionsByIdItems.');
            }
            const localVarPath = `/Collections/{Id}/Items`
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

            if (ids !== undefined) {
                localVarQueryParameter['Ids'] = ids;
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
 * CollectionServiceApi - functional programming interface
 * @export
 */
export const CollectionServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @summary Removes items from a collection
         * @param {string} ids Item id, comma delimited
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCollectionsByIdItems(ids: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CollectionServiceApiAxiosParamCreator(configuration).deleteCollectionsByIdItems(ids, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Creates a new collection
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {string} [name] The name of the new collection.
         * @param {string} [parentId] Optional - create the collection within a specific folder
         * @param {string} [ids] Item Ids to add to the collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCollections(isLocked?: boolean, name?: string, parentId?: string, ids?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CollectionsCollectionCreationResult>> {
            const localVarAxiosArgs = await CollectionServiceApiAxiosParamCreator(configuration).postCollections(isLocked, name, parentId, ids, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Adds items to a collection
         * @param {string} ids Item id, comma delimited
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCollectionsByIdItems(ids: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CollectionServiceApiAxiosParamCreator(configuration).postCollectionsByIdItems(ids, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CollectionServiceApi - factory interface
 * @export
 */
export const CollectionServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @summary Removes items from a collection
         * @param {string} ids Item id, comma delimited
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCollectionsByIdItems(ids: string, id: string, options?: any): AxiosPromise<void> {
            return CollectionServiceApiFp(configuration).deleteCollectionsByIdItems(ids, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Creates a new collection
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {string} [name] The name of the new collection.
         * @param {string} [parentId] Optional - create the collection within a specific folder
         * @param {string} [ids] Item Ids to add to the collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollections(isLocked?: boolean, name?: string, parentId?: string, ids?: string, options?: any): AxiosPromise<CollectionsCollectionCreationResult> {
            return CollectionServiceApiFp(configuration).postCollections(isLocked, name, parentId, ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Adds items to a collection
         * @param {string} ids Item id, comma delimited
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCollectionsByIdItems(ids: string, id: string, options?: any): AxiosPromise<void> {
            return CollectionServiceApiFp(configuration).postCollectionsByIdItems(ids, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CollectionServiceApi - object-oriented interface
 * @export
 * @class CollectionServiceApi
 * @extends {BaseAPI}
 */
export class CollectionServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @summary Removes items from a collection
     * @param {string} ids Item id, comma delimited
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionServiceApi
     */
    public deleteCollectionsByIdItems(ids: string, id: string, options?: any) {
        return CollectionServiceApiFp(this.configuration).deleteCollectionsByIdItems(ids, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Creates a new collection
     * @param {boolean} [isLocked] Whether or not to lock the new collection.
     * @param {string} [name] The name of the new collection.
     * @param {string} [parentId] Optional - create the collection within a specific folder
     * @param {string} [ids] Item Ids to add to the collection
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionServiceApi
     */
    public postCollections(isLocked?: boolean, name?: string, parentId?: string, ids?: string, options?: any) {
        return CollectionServiceApiFp(this.configuration).postCollections(isLocked, name, parentId, ids, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Adds items to a collection
     * @param {string} ids Item id, comma delimited
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionServiceApi
     */
    public postCollectionsByIdItems(ids: string, id: string, options?: any) {
        return CollectionServiceApiFp(this.configuration).postCollectionsByIdItems(ids, id, options).then((request) => request(this.axios, this.basePath));
    }
}
