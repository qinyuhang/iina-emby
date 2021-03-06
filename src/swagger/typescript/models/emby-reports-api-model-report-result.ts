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
 * @interface EmbyReportsApiModelReportResult
 */
export interface EmbyReportsApiModelReportResult {
    /**
     * 
     * @type {Array&lt;EmbyReportsApiModelReportRow&gt;}
     * @memberof EmbyReportsApiModelReportResult
     */
    rows?: any;
    /**
     * 
     * @type {Array&lt;EmbyReportsApiModelReportHeader&gt;}
     * @memberof EmbyReportsApiModelReportResult
     */
    headers?: any;
    /**
     * 
     * @type {Array&lt;EmbyReportsApiModelReportGroup&gt;}
     * @memberof EmbyReportsApiModelReportResult
     */
    groups?: any;
    /**
     * 
     * @type {number}
     * @memberof EmbyReportsApiModelReportResult
     */
    totalRecordCount?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EmbyReportsApiModelReportResult
     */
    isGrouped?: any;
}
