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
/**
 * 
 * @export
 * @interface UsersUserAction
 */
export interface UsersUserAction {
    /**
     * 
     * @type {string}
     * @memberof UsersUserAction
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof UsersUserAction
     */
    serverId?: any;
    /**
     * 
     * @type {string}
     * @memberof UsersUserAction
     */
    userId?: any;
    /**
     * 
     * @type {string}
     * @memberof UsersUserAction
     */
    itemId?: any;
    /**
     * 
     * @type {string}
     * @memberof UsersUserAction
     */
    type?: UsersUserActionTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof UsersUserAction
     */
    date?: any;
    /**
     * 
     * @type {number}
     * @memberof UsersUserAction
     */
    positionTicks?: any | null;
}

/**
    * @export
    * @enum {string}
    */
export enum UsersUserActionTypeEnum {
    PlayedItem = 'PlayedItem'
}

