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
  CurrentGameInfo,
} from '../models/index';
import {
    CurrentGameInfoFromJSON,
    CurrentGameInfoToJSON,
} from '../models/index';

export interface GetSpectatorRequest {
    summonerId: string;
    region: GetSpectatorRegionEnum;
}

/**
 * 
 */
export class SpectatorApi extends runtime.BaseAPI {

    /**
     * 
     */
    async getSpectatorRaw(requestParameters: GetSpectatorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrentGameInfo>> {
        if (requestParameters.summonerId === null || requestParameters.summonerId === undefined) {
            throw new runtime.RequiredError('summonerId','Required parameter requestParameters.summonerId was null or undefined when calling getSpectator.');
        }

        if (requestParameters.region === null || requestParameters.region === undefined) {
            throw new runtime.RequiredError('region','Required parameter requestParameters.region was null or undefined when calling getSpectator.');
        }

        const queryParameters: any = {};

        if (requestParameters.summonerId !== undefined) {
            queryParameters['summonerId'] = requestParameters.summonerId;
        }

        if (requestParameters.region !== undefined) {
            queryParameters['region'] = requestParameters.region;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/potg/lol/spectator/by-summoner`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrentGameInfoFromJSON(jsonValue));
    }

    /**
     * 
     */
    async getSpectator(requestParameters: GetSpectatorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrentGameInfo> {
        const response = await this.getSpectatorRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetSpectatorRegionEnum = {
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
export type GetSpectatorRegionEnum = typeof GetSpectatorRegionEnum[keyof typeof GetSpectatorRegionEnum];
