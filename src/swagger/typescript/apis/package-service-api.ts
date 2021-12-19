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
import { UpdatesPackageInfo } from '../models';
import { UpdatesPackageVersionInfo } from '../models';
/**
 * PackageServiceApi - axios parameter creator
 * @export
 */
export const PackageServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Cancels a package installation
         * @param {string} id Installation Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackagesInstallingById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePackagesInstallingById.');
            }
            const localVarPath = `/Packages/Installing/{Id}`
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
         * @summary Gets available packages
         * @param {string} [packageType] Optional package type filter (System/UserInstalled)
         * @param {string} [targetSystems] Optional. Filter by target system type. Allows multiple, comma delimited.
         * @param {boolean} [isPremium] Optional. Filter by premium status
         * @param {boolean} [isAdult] Optional. Filter by package that contain adult content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackages: async (packageType?: string, targetSystems?: string, isPremium?: boolean, isAdult?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Packages`;
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

            if (packageType !== undefined) {
                localVarQueryParameter['PackageType'] = packageType;
            }

            if (targetSystems !== undefined) {
                localVarQueryParameter['TargetSystems'] = targetSystems;
            }

            if (isPremium !== undefined) {
                localVarQueryParameter['IsPremium'] = isPremium;
            }

            if (isAdult !== undefined) {
                localVarQueryParameter['IsAdult'] = isAdult;
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
         * @summary Gets a package, by name or assembly guid
         * @param {string} name The name of the package
         * @param {string} [assemblyGuid] The guid of the associated assembly
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackagesByName: async (name: string, assemblyGuid?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getPackagesByName.');
            }
            const localVarPath = `/Packages/{Name}`
                .replace(`{${"Name"}}`, encodeURIComponent(String(name)));
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

            if (assemblyGuid !== undefined) {
                localVarQueryParameter['AssemblyGuid'] = assemblyGuid;
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
         * @summary Gets available package updates for currently installed packages
         * @param {string} packageType Package type filter (System/UserInstalled)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackagesUpdates: async (packageType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageType' is not null or undefined
            if (packageType === null || packageType === undefined) {
                throw new RequiredError('packageType','Required parameter packageType was null or undefined when calling getPackagesUpdates.');
            }
            const localVarPath = `/Packages/Updates`;
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

            if (packageType !== undefined) {
                localVarQueryParameter['PackageType'] = packageType;
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
         * @summary Installs a package
         * @param {string} name Package name
         * @param {string} [assemblyGuid] Guid of the associated assembly
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [updateClass] Optional update class (Dev, Beta, Release). Defaults to Release.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPackagesInstalledByName: async (name: string, assemblyGuid?: string, version?: string, updateClass?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling postPackagesInstalledByName.');
            }
            const localVarPath = `/Packages/Installed/{Name}`
                .replace(`{${"Name"}}`, encodeURIComponent(String(name)));
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

            if (assemblyGuid !== undefined) {
                localVarQueryParameter['AssemblyGuid'] = assemblyGuid;
            }

            if (version !== undefined) {
                localVarQueryParameter['Version'] = version;
            }

            if (updateClass !== undefined) {
                localVarQueryParameter['UpdateClass'] = updateClass;
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
 * PackageServiceApi - functional programming interface
 * @export
 */
export const PackageServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Cancels a package installation
         * @param {string} id Installation Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePackagesInstallingById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PackageServiceApiAxiosParamCreator(configuration).deletePackagesInstallingById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets available packages
         * @param {string} [packageType] Optional package type filter (System/UserInstalled)
         * @param {string} [targetSystems] Optional. Filter by target system type. Allows multiple, comma delimited.
         * @param {boolean} [isPremium] Optional. Filter by premium status
         * @param {boolean} [isAdult] Optional. Filter by package that contain adult content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackages(packageType?: string, targetSystems?: string, isPremium?: boolean, isAdult?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UpdatesPackageInfo>>> {
            const localVarAxiosArgs = await PackageServiceApiAxiosParamCreator(configuration).getPackages(packageType, targetSystems, isPremium, isAdult, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as user
         * @summary Gets a package, by name or assembly guid
         * @param {string} name The name of the package
         * @param {string} [assemblyGuid] The guid of the associated assembly
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackagesByName(name: string, assemblyGuid?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdatesPackageInfo>> {
            const localVarAxiosArgs = await PackageServiceApiAxiosParamCreator(configuration).getPackagesByName(name, assemblyGuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Gets available package updates for currently installed packages
         * @param {string} packageType Package type filter (System/UserInstalled)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackagesUpdates(packageType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UpdatesPackageVersionInfo>>> {
            const localVarAxiosArgs = await PackageServiceApiAxiosParamCreator(configuration).getPackagesUpdates(packageType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Requires authentication as administrator
         * @summary Installs a package
         * @param {string} name Package name
         * @param {string} [assemblyGuid] Guid of the associated assembly
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [updateClass] Optional update class (Dev, Beta, Release). Defaults to Release.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPackagesInstalledByName(name: string, assemblyGuid?: string, version?: string, updateClass?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PackageServiceApiAxiosParamCreator(configuration).postPackagesInstalledByName(name, assemblyGuid, version, updateClass, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PackageServiceApi - factory interface
 * @export
 */
export const PackageServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Cancels a package installation
         * @param {string} id Installation Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePackagesInstallingById(id: string, options?: any): AxiosPromise<void> {
            return PackageServiceApiFp(configuration).deletePackagesInstallingById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets available packages
         * @param {string} [packageType] Optional package type filter (System/UserInstalled)
         * @param {string} [targetSystems] Optional. Filter by target system type. Allows multiple, comma delimited.
         * @param {boolean} [isPremium] Optional. Filter by premium status
         * @param {boolean} [isAdult] Optional. Filter by package that contain adult content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackages(packageType?: string, targetSystems?: string, isPremium?: boolean, isAdult?: boolean, options?: any): AxiosPromise<Array<UpdatesPackageInfo>> {
            return PackageServiceApiFp(configuration).getPackages(packageType, targetSystems, isPremium, isAdult, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as user
         * @summary Gets a package, by name or assembly guid
         * @param {string} name The name of the package
         * @param {string} [assemblyGuid] The guid of the associated assembly
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackagesByName(name: string, assemblyGuid?: string, options?: any): AxiosPromise<UpdatesPackageInfo> {
            return PackageServiceApiFp(configuration).getPackagesByName(name, assemblyGuid, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Gets available package updates for currently installed packages
         * @param {string} packageType Package type filter (System/UserInstalled)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackagesUpdates(packageType: string, options?: any): AxiosPromise<Array<UpdatesPackageVersionInfo>> {
            return PackageServiceApiFp(configuration).getPackagesUpdates(packageType, options).then((request) => request(axios, basePath));
        },
        /**
         * Requires authentication as administrator
         * @summary Installs a package
         * @param {string} name Package name
         * @param {string} [assemblyGuid] Guid of the associated assembly
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [updateClass] Optional update class (Dev, Beta, Release). Defaults to Release.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPackagesInstalledByName(name: string, assemblyGuid?: string, version?: string, updateClass?: string, options?: any): AxiosPromise<void> {
            return PackageServiceApiFp(configuration).postPackagesInstalledByName(name, assemblyGuid, version, updateClass, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PackageServiceApi - object-oriented interface
 * @export
 * @class PackageServiceApi
 * @extends {BaseAPI}
 */
export class PackageServiceApi extends BaseAPI {
    /**
     * Requires authentication as administrator
     * @summary Cancels a package installation
     * @param {string} id Installation Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageServiceApi
     */
    public deletePackagesInstallingById(id: string, options?: any) {
        return PackageServiceApiFp(this.configuration).deletePackagesInstallingById(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets available packages
     * @param {string} [packageType] Optional package type filter (System/UserInstalled)
     * @param {string} [targetSystems] Optional. Filter by target system type. Allows multiple, comma delimited.
     * @param {boolean} [isPremium] Optional. Filter by premium status
     * @param {boolean} [isAdult] Optional. Filter by package that contain adult content.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageServiceApi
     */
    public getPackages(packageType?: string, targetSystems?: string, isPremium?: boolean, isAdult?: boolean, options?: any) {
        return PackageServiceApiFp(this.configuration).getPackages(packageType, targetSystems, isPremium, isAdult, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as user
     * @summary Gets a package, by name or assembly guid
     * @param {string} name The name of the package
     * @param {string} [assemblyGuid] The guid of the associated assembly
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageServiceApi
     */
    public getPackagesByName(name: string, assemblyGuid?: string, options?: any) {
        return PackageServiceApiFp(this.configuration).getPackagesByName(name, assemblyGuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Gets available package updates for currently installed packages
     * @param {string} packageType Package type filter (System/UserInstalled)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageServiceApi
     */
    public getPackagesUpdates(packageType: string, options?: any) {
        return PackageServiceApiFp(this.configuration).getPackagesUpdates(packageType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Requires authentication as administrator
     * @summary Installs a package
     * @param {string} name Package name
     * @param {string} [assemblyGuid] Guid of the associated assembly
     * @param {string} [version] Optional version. Defaults to latest version.
     * @param {string} [updateClass] Optional update class (Dev, Beta, Release). Defaults to Release.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageServiceApi
     */
    public postPackagesInstalledByName(name: string, assemblyGuid?: string, version?: string, updateClass?: string, options?: any) {
        return PackageServiceApiFp(this.configuration).postPackagesInstalledByName(name, assemblyGuid, version, updateClass, options).then((request) => request(this.axios, this.basePath));
    }
}