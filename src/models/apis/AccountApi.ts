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


import * as runtime from '../runtime';
import type {
  Account,
} from '../models/index';
import {
    AccountFromJSON,
    AccountToJSON,
} from '../models/index';

export interface GetAccountByGameNameWithTagLineRequest {
    tagLine: string;
    gameName: string;
    region: GetAccountByGameNameWithTagLineRegionEnum;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     * 
     */
    async getAccountByGameNameWithTagLineRaw(requestParameters: GetAccountByGameNameWithTagLineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.tagLine === null || requestParameters.tagLine === undefined) {
            throw new runtime.RequiredError('tagLine','Required parameter requestParameters.tagLine was null or undefined when calling getAccountByGameNameWithTagLine.');
        }

        if (requestParameters.gameName === null || requestParameters.gameName === undefined) {
            throw new runtime.RequiredError('gameName','Required parameter requestParameters.gameName was null or undefined when calling getAccountByGameNameWithTagLine.');
        }

        if (requestParameters.region === null || requestParameters.region === undefined) {
            throw new runtime.RequiredError('region','Required parameter requestParameters.region was null or undefined when calling getAccountByGameNameWithTagLine.');
        }

        const queryParameters: any = {};

        if (requestParameters.tagLine !== undefined) {
            queryParameters['tagLine'] = requestParameters.tagLine;
        }

        if (requestParameters.gameName !== undefined) {
            queryParameters['gameName'] = requestParameters.gameName;
        }

        if (requestParameters.region !== undefined) {
            queryParameters['region'] = requestParameters.region;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/potg/common/accounts/by-riot-id`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * 
     */
    async getAccountByGameNameWithTagLine(requestParameters: GetAccountByGameNameWithTagLineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountByGameNameWithTagLineRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAccountByGameNameWithTagLineRegionEnum = {
    Br1: 'BR1',
    Eun1: 'EUN1',
    Euw1: 'EUW1',
    Jp1: 'JP1',
    Kr: 'KR',
    La1: 'LA1',
    La2: 'LA2',
    Na1: 'NA1',
    Oc1: 'OC1',
    Ph2: 'PH2',
    Ru: 'RU',
    Sg2: 'SG2',
    Th2: 'TH2',
    Tr1: 'TR1',
    Tw2: 'TW2',
    Vn2: 'VN2'
} as const;
export type GetAccountByGameNameWithTagLineRegionEnum = typeof GetAccountByGameNameWithTagLineRegionEnum[keyof typeof GetAccountByGameNameWithTagLineRegionEnum];
