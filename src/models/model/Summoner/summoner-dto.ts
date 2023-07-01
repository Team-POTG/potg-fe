/* tslint:disable */
/* eslint-disable */
/**
 * POTG Summoner v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CurrentGameDto } from './current-game-dto';
import { LeagueRankEntity } from './league-rank-entity';

/**
 * 
 * @export
 * @interface SummonerDto
 */
export interface SummonerDto {
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'region'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'subRegion'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'encryptedSummonerId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'accountId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'puuid'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SummonerDto
     */
    'level'?: number;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'searchName'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SummonerDto
     */
    'profileIconId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SummonerDto
     */
    'lastUpdate'?: string;
    /**
     * 
     * @type {number}
     * @memberof SummonerDto
     */
    'lastUpdateEpoch'?: number;
    /**
     * 
     * @type {Array<LeagueRankEntity>}
     * @memberof SummonerDto
     */
    'ranks'?: Array<LeagueRankEntity> | null;
    /**
     * 
     * @type {CurrentGameDto}
     * @memberof SummonerDto
     */
    'currentGame'?: CurrentGameDto;
}

