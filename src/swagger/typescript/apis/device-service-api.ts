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
import { DevicesContentUploadHistory } from '../models';
import { DevicesDeviceInfo } from '../models';
import { DevicesDeviceOptions } from '../models';
import { QueryResultDevicesDeviceInfo } from '../models';
/**
 * DeviceServiceApi - axios parameter creator
 * @export
 */
export const DeviceServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * No authentication required
         * @summary Deletes a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevices: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteDevices.');
            }
            const localVarPath = `/Devices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
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
         * @summary Gets all devices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Devices`;
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
         * @summary Gets camera upload history for a device
         * @param {string} deviceId Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevicesCamerauploads: async (deviceId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling getDevicesCamerauploads.');
            }
            const localVarPath = `/Devices/CameraUploads`;
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

            if (deviceId !== undefined) {
                localVarQueryParameter['DeviceId'] = deviceId;
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
         * @summary Gets info for a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevicesInfo: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDevicesInfo.');
            }
            const localVarPath = `/Devices/Info`;
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

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
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
         * @summary Gets options for a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevicesOptions: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDevicesOptions.');
            }
            const localVarPath = `/Devices/Options`;
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

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
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
         * @summary Uploads content
         * @param {Object} body Binary stream
         * @param {string} deviceId Device Id
         * @param {string} album Album
         * @param {string} name Name
         * @param {string} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevicesCamerauploads: async (body: Object, deviceId: string, album: string, name: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postDevicesCamerauploads.');
            }
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling postDevicesCamerauploads.');
            }
            // verify required parameter 'album' is not null or undefined
            if (album === null || album === undefined) {
                throw new RequiredError('album','Required parameter album was null or undefined when calling postDevicesCamerauploads.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling postDevicesCamerauploads.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling postDevicesCamerauploads.');
            }
            const localVarPath = `/Devices/CameraUploads`;
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

            if (deviceId !== undefined) {
                localVarQueryParameter['DeviceId'] = deviceId;
            }

            if (album !== undefined) {
                localVarQueryParameter['Album'] = album;
            }

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

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
        /**
         * Requires authentication as administrator
         * @summary Updates device options
         * @param {DevicesDeviceOptions} body DeviceOptions: 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevicesOptions: async (body: DevicesDeviceOptions, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling postDevicesOptions.');
            }
            const localVarPath = `/Devices/Options`;
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
    }
};

/**
 * DeviceServiceApi - functional programming interface
 * @export
 */
export const DeviceServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * No authentication required
         * @summary Deletes a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDevices(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).deleteDevices(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Gets all devices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevices(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryResultDevicesDeviceInfo>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).getDevices(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets camera upload history for a device
         * @param {string} deviceId Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevicesCamerauploads(deviceId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DevicesContentUploadHistory>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).getDevicesCamerauploads(deviceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Gets info for a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevicesInfo(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DevicesDeviceInfo>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).getDevicesInfo(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Gets options for a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevicesOptions(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DevicesDeviceOptions>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).getDevicesOptions(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Uploads content
         * @param {Object} body Binary stream
         * @param {string} deviceId Device Id
         * @param {string} album Album
         * @param {string} name Name
         * @param {string} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postDevicesCamerauploads(body: Object, deviceId: string, album: string, name: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).postDevicesCamerauploads(body, deviceId, album, name, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Updates device options
         * @param {DevicesDeviceOptions} body DeviceOptions: 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postDevicesOptions(body: DevicesDeviceOptions, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DeviceServiceApiAxiosParamCreator(configuration).postDevicesOptions(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DeviceServiceApi - factory interface
 * @export
 */
export const DeviceServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * No authentication required
         * @summary Deletes a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevices(id: string, options?: any): AxiosPromise<void> {
            return DeviceServiceApiFp(configuration).deleteDevices(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Gets all devices
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices(options?: any): AxiosPromise<QueryResultDevicesDeviceInfo> {
            return DeviceServiceApiFp(configuration).getDevices(options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets camera upload history for a device
         * @param {string} deviceId Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevicesCamerauploads(deviceId: string, options?: any): AxiosPromise<DevicesContentUploadHistory> {
            return DeviceServiceApiFp(configuration).getDevicesCamerauploads(deviceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Gets info for a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevicesInfo(id: string, options?: any): AxiosPromise<DevicesDeviceInfo> {
            return DeviceServiceApiFp(configuration).getDevicesInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Gets options for a device
         * @param {string} id Device Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevicesOptions(id: string, options?: any): AxiosPromise<DevicesDeviceOptions> {
            return DeviceServiceApiFp(configuration).getDevicesOptions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Uploads content
         * @param {Object} body Binary stream
         * @param {string} deviceId Device Id
         * @param {string} album Album
         * @param {string} name Name
         * @param {string} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevicesCamerauploads(body: Object, deviceId: string, album: string, name: string, id: string, options?: any): AxiosPromise<void> {
            return DeviceServiceApiFp(configuration).postDevicesCamerauploads(body, deviceId, album, name, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Updates device options
         * @param {DevicesDeviceOptions} body DeviceOptions: 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevicesOptions(body: DevicesDeviceOptions, options?: any): AxiosPromise<void> {
            return DeviceServiceApiFp(configuration).postDevicesOptions(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DeviceServiceApi - object-oriented interface
 * @export
 * @class DeviceServiceApi
 * @extends {BaseAPI}
 */
export class DeviceServiceApi extends BaseAPI {
    /**
     * No authentication required
     * @summary Deletes a device
     * @param {string} id Device Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public deleteDevices(id: string, options?: any) {
        return DeviceServiceApiFp(this.configuration).deleteDevices(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Gets all devices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public getDevices(options?: any) {
        return DeviceServiceApiFp(this.configuration).getDevices(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets camera upload history for a device
     * @param {string} deviceId Device Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public getDevicesCamerauploads(deviceId: string, options?: any) {
        return DeviceServiceApiFp(this.configuration).getDevicesCamerauploads(deviceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Gets info for a device
     * @param {string} id Device Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public getDevicesInfo(id: string, options?: any) {
        return DeviceServiceApiFp(this.configuration).getDevicesInfo(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Gets options for a device
     * @param {string} id Device Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public getDevicesOptions(id: string, options?: any) {
        return DeviceServiceApiFp(this.configuration).getDevicesOptions(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Uploads content
     * @param {Object} body Binary stream
     * @param {string} deviceId Device Id
     * @param {string} album Album
     * @param {string} name Name
     * @param {string} id Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public postDevicesCamerauploads(body: Object, deviceId: string, album: string, name: string, id: string, options?: any) {
        return DeviceServiceApiFp(this.configuration).postDevicesCamerauploads(body, deviceId, album, name, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Updates device options
     * @param {DevicesDeviceOptions} body DeviceOptions: 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceServiceApi
     */
    public postDevicesOptions(body: DevicesDeviceOptions, options?: any) {
        return DeviceServiceApiFp(this.configuration).postDevicesOptions(body, options).then((request) => request(this.axios, this.basePath));
    }
}