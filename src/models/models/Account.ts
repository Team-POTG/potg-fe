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
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    puuid: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    gameName: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    tagLine: string;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "puuid" in value;
    isInstance = isInstance && "gameName" in value;
    isInstance = isInstance && "tagLine" in value;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'puuid': json['puuid'],
        'gameName': json['gameName'],
        'tagLine': json['tagLine'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'puuid': value.puuid,
        'gameName': value.gameName,
        'tagLine': value.tagLine,
    };
}
