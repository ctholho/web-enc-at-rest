import {bytesToString, stringToBytes} from "./dataConvertUtil";

const WEAR_PREFIX = 'WEAR_keyGen_';
const DERIVE_KEY_SALT = `${WEAR_PREFIX}deriveKeySalt`;
const CREDENTIAL_HASH = `${WEAR_PREFIX}credentialHash`;

export function getDeriveKeySalt():Uint8Array|null {
  const value = global.localStorage.getItem(DERIVE_KEY_SALT);
  return value === null ? null : stringToBytes(value);
}

export function setDeriveKeySalt(deriveKeySalt:Uint8Array) {
  global.localStorage.setItem(DERIVE_KEY_SALT, bytesToString(deriveKeySalt));
}

export function getCredentialHash():Uint8Array|null {
  const value = global.localStorage.getItem(CREDENTIAL_HASH);
  return value === null ? null : stringToBytes(value);
}

export function setCredentialHash(credentialHash:Uint8Array) {
  global.localStorage.setItem(CREDENTIAL_HASH, bytesToString(credentialHash));
}