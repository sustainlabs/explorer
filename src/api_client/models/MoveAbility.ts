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

/**
 * Abilities are a typing feature in Move that control what actions are permissible for values of a given type.
 *
 * See [doc](https://diem.github.io/move/abilities.html) for more details.
 * @export
 * @enum {string}
 */
export enum MoveAbility {
  Copy = "copy",
  Drop = "drop",
  Store = "store",
  Key = "key",
}

export function MoveAbilityFromJSON(json: any): MoveAbility {
  return MoveAbilityFromJSONTyped(json, false);
}

export function MoveAbilityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MoveAbility {
  return json as MoveAbility;
}

export function MoveAbilityToJSON(value?: MoveAbility | null): any {
  return value as any;
}