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


import { BanEntity } from './ban-entity';
import { ObjectivesEntity } from './objectives-entity';
import { ParticipantEntity } from './participant-entity';

/**
 * 
 * @export
 * @interface TeamEntity
 */
export interface TeamEntity {
    /**
     * 
     * @type {number}
     * @memberof TeamEntity
     */
    'teamId'?: number;
    /**
     * 
     * @type {Array<BanEntity>}
     * @memberof TeamEntity
     */
    'bans'?: Array<BanEntity> | null;
    /**
     * 
     * @type {ObjectivesEntity}
     * @memberof TeamEntity
     */
    'objectives'?: ObjectivesEntity;
    /**
     * 
     * @type {boolean}
     * @memberof TeamEntity
     */
    'win'?: boolean;
    /**
     * 
     * @type {Array<ParticipantEntity>}
     * @memberof TeamEntity
     */
    'participants'?: Array<ParticipantEntity> | null;
}
