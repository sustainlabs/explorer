/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain.
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {exists, mapValues} from "../runtime";
import {
  MoveAbility,
  MoveAbilityFromJSON,
  MoveAbilityFromJSONTyped,
  MoveAbilityToJSON,
} from "./MoveAbility";

/**
 *
 * @export
 * @interface MoveStructGenericTypeParams
 */
export interface MoveStructGenericTypeParams {
  /**
   *
   * @type {Array<MoveAbility>}
   * @memberof MoveStructGenericTypeParams
   */
  constraints: Array<MoveAbility>;
  /**
   *
   * @type {boolean}
   * @memberof MoveStructGenericTypeParams
   */
  isPhantom: boolean;
}

export function MoveStructGenericTypeParamsFromJSON(
  json: any,
): MoveStructGenericTypeParams {
  return MoveStructGenericTypeParamsFromJSONTyped(json, false);
}

export function MoveStructGenericTypeParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MoveStructGenericTypeParams {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    constraints: ((json["constraints"] as Array<any>) || []).map(
      MoveAbilityFromJSON,
    ),
    isPhantom: json["is_phantom"],
  };
}

export function MoveStructGenericTypeParamsToJSON(
  value?: MoveStructGenericTypeParams | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    constraints: ((value.constraints as Array<any>) || []).map(
      MoveAbilityToJSON,
    ),
    is_phantom: value.isPhantom,
  };
}