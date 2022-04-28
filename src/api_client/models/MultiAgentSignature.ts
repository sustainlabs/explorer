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
  AccountSignature,
  AccountSignatureFromJSON,
  AccountSignatureFromJSONTyped,
  AccountSignatureToJSON,
} from "./AccountSignature";

/**
 * Multi agent signature, please refer to TBD.
 * @export
 * @interface MultiAgentSignature
 */
export interface MultiAgentSignature {
  /**
   *
   * @type {string}
   * @memberof MultiAgentSignature
   */
  type: string;
  /**
   *
   * @type {AccountSignature}
   * @memberof MultiAgentSignature
   */
  sender: AccountSignature;
  /**
   *
   * @type {Array<string>}
   * @memberof MultiAgentSignature
   */
  secondarySignerAddresses: Array<string>;
  /**
   *
   * @type {Array<AccountSignature>}
   * @memberof MultiAgentSignature
   */
  secondarySigners: Array<AccountSignature>;
}

export function MultiAgentSignatureFromJSON(json: any): MultiAgentSignature {
  return MultiAgentSignatureFromJSONTyped(json, false);
}

export function MultiAgentSignatureFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MultiAgentSignature {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    sender: AccountSignatureFromJSON(json["sender"]),
    secondarySignerAddresses: json["secondary_signer_addresses"],
    secondarySigners: ((json["secondary_signers"] as Array<any>) || []).map(
      AccountSignatureFromJSON,
    ),
  };
}

export function MultiAgentSignatureToJSON(
  value?: MultiAgentSignature | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
    sender: AccountSignatureToJSON(value.sender),
    secondary_signer_addresses: value.secondarySignerAddresses,
    secondary_signers: ((value.secondarySigners as Array<any>) || []).map(
      AccountSignatureToJSON,
    ),
  };
}