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
import type { AccountDto } from './AccountDto';
import {
    AccountDtoFromJSON,
    AccountDtoFromJSONTyped,
    AccountDtoToJSON,
} from './AccountDto';
import type { GameCustomizationObject } from './GameCustomizationObject';
import {
    GameCustomizationObjectFromJSON,
    GameCustomizationObjectFromJSONTyped,
    GameCustomizationObjectToJSON,
} from './GameCustomizationObject';
import type { LeagueEntryDto } from './LeagueEntryDto';
import {
    LeagueEntryDtoFromJSON,
    LeagueEntryDtoFromJSONTyped,
    LeagueEntryDtoToJSON,
} from './LeagueEntryDto';
import type { Perks } from './Perks';
import {
    PerksFromJSON,
    PerksFromJSONTyped,
    PerksToJSON,
} from './Perks';
import type { RecentDto } from './RecentDto';
import {
    RecentDtoFromJSON,
    RecentDtoFromJSONTyped,
    RecentDtoToJSON,
} from './RecentDto';

/**
 * 
 * @export
 * @interface CurrentGameParticipant
 */
export interface CurrentGameParticipant {
    /**
     * 
     * @type {number}
     * @memberof CurrentGameParticipant
     */
    championId: number;
    /**
     * 
     * @type {Perks}
     * @memberof CurrentGameParticipant
     */
    perks: Perks;
    /**
     * 
     * @type {number}
     * @memberof CurrentGameParticipant
     */
    profileIconId: number;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentGameParticipant
     */
    bot: boolean;
    /**
     * 
     * @type {number}
     * @memberof CurrentGameParticipant
     */
    teamId: number;
    /**
     * 
     * @type {AccountDto}
     * @memberof CurrentGameParticipant
     */
    account: AccountDto;
    /**
     * 
     * @type {string}
     * @memberof CurrentGameParticipant
     */
    summonerId: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentGameParticipant
     */
    puuid: string;
    /**
     * 
     * @type {number}
     * @memberof CurrentGameParticipant
     */
    spell1Id: number;
    /**
     * 
     * @type {number}
     * @memberof CurrentGameParticipant
     */
    spell2Id: number;
    /**
     * 
     * @type {Array<GameCustomizationObject>}
     * @memberof CurrentGameParticipant
     */
    gameCustomizationObjects: Array<GameCustomizationObject>;
    /**
     * 
     * @type {Array<LeagueEntryDto>}
     * @memberof CurrentGameParticipant
     */
    leagues: Array<LeagueEntryDto>;
    /**
     * 
     * @type {Array<RecentDto>}
     * @memberof CurrentGameParticipant
     */
    recentMatches: Array<RecentDto>;
}

/**
 * Check if a given object implements the CurrentGameParticipant interface.
 */
export function instanceOfCurrentGameParticipant(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "championId" in value;
    isInstance = isInstance && "perks" in value;
    isInstance = isInstance && "profileIconId" in value;
    isInstance = isInstance && "bot" in value;
    isInstance = isInstance && "teamId" in value;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "summonerId" in value;
    isInstance = isInstance && "puuid" in value;
    isInstance = isInstance && "spell1Id" in value;
    isInstance = isInstance && "spell2Id" in value;
    isInstance = isInstance && "gameCustomizationObjects" in value;
    isInstance = isInstance && "leagues" in value;
    isInstance = isInstance && "recentMatches" in value;

    return isInstance;
}

export function CurrentGameParticipantFromJSON(json: any): CurrentGameParticipant {
    return CurrentGameParticipantFromJSONTyped(json, false);
}

export function CurrentGameParticipantFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentGameParticipant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'championId': json['championId'],
        'perks': PerksFromJSON(json['perks']),
        'profileIconId': json['profileIconId'],
        'bot': json['bot'],
        'teamId': json['teamId'],
        'account': AccountDtoFromJSON(json['account']),
        'summonerId': json['summonerId'],
        'puuid': json['puuid'],
        'spell1Id': json['spell1Id'],
        'spell2Id': json['spell2Id'],
        'gameCustomizationObjects': ((json['gameCustomizationObjects'] as Array<any>).map(GameCustomizationObjectFromJSON)),
        'leagues': ((json['leagues'] as Array<any>).map(LeagueEntryDtoFromJSON)),
        'recentMatches': ((json['recentMatches'] as Array<any>).map(RecentDtoFromJSON)),
    };
}

export function CurrentGameParticipantToJSON(value?: CurrentGameParticipant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'championId': value.championId,
        'perks': PerksToJSON(value.perks),
        'profileIconId': value.profileIconId,
        'bot': value.bot,
        'teamId': value.teamId,
        'account': AccountDtoToJSON(value.account),
        'summonerId': value.summonerId,
        'puuid': value.puuid,
        'spell1Id': value.spell1Id,
        'spell2Id': value.spell2Id,
        'gameCustomizationObjects': ((value.gameCustomizationObjects as Array<any>).map(GameCustomizationObjectToJSON)),
        'leagues': ((value.leagues as Array<any>).map(LeagueEntryDtoToJSON)),
        'recentMatches': ((value.recentMatches as Array<any>).map(RecentDtoToJSON)),
    };
}

