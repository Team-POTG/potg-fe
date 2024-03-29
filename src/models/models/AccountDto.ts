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
 * @interface AccountDto
 */
export interface AccountDto {
    /**
     * 
     * @type {string}
     * @memberof AccountDto
     */
    tagLine: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDto
     */
    gameName: string;
}

/**
 * Check if a given object implements the AccountDto interface.
 */
export function instanceOfAccountDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tagLine" in value;
    isInstance = isInstance && "gameName" in value;

    return isInstance;
}

export function AccountDtoFromJSON(json: any): AccountDto {
    return AccountDtoFromJSONTyped(json, false);
}

export function AccountDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tagLine': json['tagLine'],
        'gameName': json['gameName'],
    };
}

export function AccountDtoToJSON(value?: AccountDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tagLine': value.tagLine,
        'gameName': value.gameName,
    };
}

