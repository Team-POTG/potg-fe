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
 * @interface Perks
 */
export interface Perks {
    /**
     * 
     * @type {Array<string>}
     * @memberof Perks
     */
    perkIds: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Perks
     */
    perkStyle: number;
    /**
     * 
     * @type {number}
     * @memberof Perks
     */
    perkSubStyle: number;
}

/**
 * Check if a given object implements the Perks interface.
 */
export function instanceOfPerks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "perkIds" in value;
    isInstance = isInstance && "perkStyle" in value;
    isInstance = isInstance && "perkSubStyle" in value;

    return isInstance;
}

export function PerksFromJSON(json: any): Perks {
    return PerksFromJSONTyped(json, false);
}

export function PerksFromJSONTyped(json: any, ignoreDiscriminator: boolean): Perks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'perkIds': json['perkIds'],
        'perkStyle': json['perkStyle'],
        'perkSubStyle': json['perkSubStyle'],
    };
}

export function PerksToJSON(value?: Perks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'perkIds': value.perkIds,
        'perkStyle': value.perkStyle,
        'perkSubStyle': value.perkSubStyle,
    };
}

