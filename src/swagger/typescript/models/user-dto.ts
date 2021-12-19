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
/**
 * 
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    serverId?: any;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    serverName?: any;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    connectUserName?: any;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    connectLinkType?: UserDtoConnectLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    primaryImageTag?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UserDto
     */
    hasPassword?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UserDto
     */
    hasConfiguredPassword?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UserDto
     */
    hasConfiguredEasyPassword?: any;
    /**
     * 
     * @type {boolean}
     * @memberof UserDto
     */
    enableAutoLogin?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof UserDto
     */
    lastLoginDate?: any | null;
    /**
     * 
     * @type {Date}
     * @memberof UserDto
     */
    lastActivityDate?: any | null;
    /**
     * 
     * @type {ConfigurationUserConfiguration}
     * @memberof UserDto
     */
    configuration?: any;
    /**
     * 
     * @type {UsersUserPolicy}
     * @memberof UserDto
     */
    policy?: any;
    /**
     * 
     * @type {number}
     * @memberof UserDto
     */
    primaryImageAspectRatio?: any | null;
}

/**
    * @export
    * @enum {string}
    */
export enum UserDtoConnectLinkTypeEnum {
    LinkedUser = 'LinkedUser',
    Guest = 'Guest'
}

