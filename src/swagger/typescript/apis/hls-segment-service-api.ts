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
/**
 * HlsSegmentServiceApi - axios parameter creator
 * @export
 */
export const HlsSegmentServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} playSessionId The play session id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteVideosActiveencodings: async (deviceId: string, playSessionId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling deleteVideosActiveencodings.');
            }
            // verify required parameter 'playSessionId' is not null or undefined
            if (playSessionId === null || playSessionId === undefined) {
                throw new RequiredError('playSessionId','Required parameter playSessionId was null or undefined when calling deleteVideosActiveencodings.');
            }
            const localVarPath = `/Videos/ActiveEncodings`;
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

            if (deviceId !== undefined) {
                localVarQueryParameter['DeviceId'] = deviceId;
            }

            if (playSessionId !== undefined) {
                localVarQueryParameter['PlaySessionId'] = playSessionId;
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
 * HlsSegmentServiceApi - functional programming interface
 * @export
 */
export const HlsSegmentServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as user
         * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} playSessionId The play session id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteVideosActiveencodings(deviceId: string, playSessionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await HlsSegmentServiceApiAxiosParamCreator(configuration).deleteVideosActiveencodings(deviceId, playSessionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HlsSegmentServiceApi - factory interface
 * @export
 */
export const HlsSegmentServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as user
         * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} playSessionId The play session id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteVideosActiveencodings(deviceId: string, playSessionId: string, options?: any): AxiosPromise<void> {
            return HlsSegmentServiceApiFp(configuration).deleteVideosActiveencodings(deviceId, playSessionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HlsSegmentServiceApi - object-oriented interface
 * @export
 * @class HlsSegmentServiceApi
 * @extends {BaseAPI}
 */
export class HlsSegmentServiceApi extends BaseAPI {
    /**
     * Requires authentication as user
     * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param {string} playSessionId The play session id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentServiceApi
     */
    public deleteVideosActiveencodings(deviceId: string, playSessionId: string, options?: any) {
        return HlsSegmentServiceApiFp(this.configuration).deleteVideosActiveencodings(deviceId, playSessionId, options).then((request) => request(this.axios, this.basePath));
    }
}
