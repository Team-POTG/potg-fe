/* tslint:disable */
/* eslint-disable */
/**
 * POTG
 * POTG RestAPI Document
 *
 * The version of the OpenAPI document: BETA1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RecentDto
 */
export interface RecentDto {
    /**
     * 
     * @type {number}
     * @memberof RecentDto
     */
    date: number;
    /**
     * 
     * @type {number}
     * @memberof RecentDto
     */
    championId: number;
    /**
     * 
     * @type {string}
     * @memberof RecentDto
     */
    championName: string;
    /**
     * 
     * @type {number}
     * @memberof RecentDto
     */
    kills: number;
    /**
     * 
     * @type {number}
     * @memberof RecentDto
     */
    deaths: number;
    /**
     * 
     * @type {number}
     * @memberof RecentDto
     */
    assists: number;
    /**
     * 
     * @type {boolean}
     * @memberof RecentDto
     */
    isWin: boolean;
}

/**
 * Check if a given object implements the RecentDto interface.
 */
export function instanceOfRecentDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "championId" in value;
    isInstance = isInstance && "championName" in value;
    isInstance = isInstance && "kills" in value;
    isInstance = isInstance && "deaths" in value;
    isInstance = isInstance && "assists" in value;
    isInstance = isInstance && "isWin" in value;

    return isInstance;
}

export function RecentDtoFromJSON(json: any): RecentDto {
    return RecentDtoFromJSONTyped(json, false);
}

export function RecentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecentDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': json['date'],
        'championId': json['championId'],
        'championName': json['championName'],
        'kills': json['kills'],
        'deaths': json['deaths'],
        'assists': json['assists'],
        'isWin': json['isWin'],
    };
}

export function RecentDtoToJSON(value?: RecentDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'championId': value.championId,
        'championName': value.championName,
        'kills': value.kills,
        'deaths': value.deaths,
        'assists': value.assists,
        'isWin': value.isWin,
    };
}

