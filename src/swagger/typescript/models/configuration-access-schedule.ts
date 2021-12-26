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
 * @interface ConfigurationAccessSchedule
 */
export interface ConfigurationAccessSchedule {
    /**
     * 
     * @type {string}
     * @memberof ConfigurationAccessSchedule
     */
    dayOfWeek?: ConfigurationAccessScheduleDayOfWeekEnum;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationAccessSchedule
     */
    startHour?: any;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationAccessSchedule
     */
    endHour?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationAccessScheduleDayOfWeekEnum {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Everyday = 'Everyday',
    Weekday = 'Weekday',
    Weekend = 'Weekend'
}

