---
title: "Passkey login"
original: "https://core.telegram.org/api/passkeys"
section: api
description: "Telegram allows creating a passkey on your device to instantly log in to Telegram with a PIN or biometric data like Face ID and fingerprints — instead of an SMS code."
crumbs: [{"title":"API","url":"/api/"},{"title":"Passkey login","url":"/api/passkeys/"}]
layout: layout.njk
---

# Passkey login

Telegram allows creating a passkey on your device to instantly log in to Telegram with a PIN or biometric data like Face ID and fingerprints — instead of an SMS code.

### Introduction

Telegram passkey login implements the [Web Authentication standard »](https://w3c.github.io/webauthn/) (webauthn), make sure to familiarize yourself with webauthn by reading the [standard »](https://w3c.github.io/webauthn/), first.

A simpler overview of the standard is available on [MDN »](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API).

Put plainly, passkeys are composed of a public-private keypair: the private key is stored safely on the device (for example in a TEE enclave), the public key is sent to Telegram's servers.

When logging in, Telegram sends a challenge, which is signed using the local private key associated to the account: this signature is then verified by Telegram against the public key counterpart; if verification succeeds, the user is logged in.

Note that if the user configured a [2FA password](/api/srp/), they will still have to enter it when [logging in with a passkey »](#logging-in-with-a-passkey).

Passkeys can be used on all major browsers and all major platforms (and even outside of a browser).

The server may invite the user to create a passkey using the [SETUP\_PASSKEY suggestion »](/api/config/#basic-suggestions).

Passkey support should only be enabled if the [settings\_display\_passkeys client configuration key »](/api/config/#settings-display-passkeys) is equal to true.

#### Passkeys in unofficial Telegram apps

Note that official Telegram apps all use telegram.org as RP ID when generating and requesting passkeys.

This means that unofficial Telegram apps won't be able to use passkeys at all, because currently the server forbids the creation of passkeys with RP IDs different than `telegram.org`.

### Creating a passkey

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;

inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;

passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;

---functions---

account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;

account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
```

To create a passkey linked to the currently logged in account, start by invoking [account.initPasskeyRegistration](/method/account.initPasskeyRegistration/).

This method will return a JSON object in [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/).`options`, containing a single key:

-   `publicKey` - Contains a [PublicKeyCredentialCreationOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions) JSON object (with base64url-encoded strings used in place of binary properties)

Parse the JSON payload, base64url-decoding binary fields for example using [PublicKeyCredential.parseCreationOptionsFromJSON](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static).

Then, pass the [PublicKeyCredentialCreationOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions) to [navigator.credentials.create](https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create) inside browsers (or equivalent APIs on other platforms): on success, this will generate a new passkey, returning a [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) object.

Some platforms (like Android) may instead return the canonical JSON representation of [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential), which has the same overall structure, with the difference that fields marked as **binary** below are base64url-encoded and should in some cases be base64url-decoded before being used inside TL constructors.

For simplicity, the documentation will **always refer to the JSON representation of the object**, which in browsers can be obtained by simply invoking [PublicKeyCredential.toJSON](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/toJSON).

Take the [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) and transform it into an [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) as follows:

1.  Extract the [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse) object contained in [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`response`.  
    Use it to generate an [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) with the following fields:
    
    -   [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/).`client_data` - [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).`clientDataJSON`, **binary field**: base64url-decode, then pass the value directly into [dataJSON](/constructor/dataJSON/).`data`, then pass the [dataJSON](/constructor/dataJSON/) into `client_data`.
        
        Even if it's treated as a binary field by the webauthn standard, `clientDataJSON` contains a valid, UTF-8 JSON payload that is additionally base64url-encoded.
        
    -   [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/).`attestation_data` - [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse).`attestationObject`, **binary field**: base64url-decode, then pass into `attestation_data`.
        
2.  Then, generate an [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) with the following fields:
    
    -   `response` - The [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) generated at step 1
    -   `id` - [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`id`, **binary field**: pass directly into [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`id` **without** base64url-decoding.
    -   `raw_id` - [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`rawId`, **binary field**: pass directly into [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`raw_id` **without** base64url-decoding.

Finally, pass the generated [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) to [account.registerPasskey](/method/account.registerPasskey/).

On success, the method will associate the passkey to the current account and it will return a [passkey](/constructor/passkey/) constructor, containing human-readable information about the added passkey.

From this moment, the passkey can be used to [safely log into the account without using a verification code »](#logging-in-with-a-passkey), by using the private key safely and locally stored in the passkey to authenticate the user.

Note that if the user configured a [2FA password](/api/srp/), they will still have to enter it even when logging in with a passkey.

The [passkeys\_account\_passkeys\_max client configuration key »](/api/config/#passkeys-account-passkeys-max) specifies the maximum number of passkeys that can be associated to an account.

### List passkeys

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;

account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;

---functions---

account.getPasskeys#ea1f0c52 = account.Passkeys;
```

Use [account.getPasskeys](/method/account.getPasskeys/) to list the passkeys that can be used to log into the current account.

Passkeys are represented by [passkey](/constructor/passkey/) constructors, containing info like the passkey name, its ID, a [custom emoji »](/api/custom-emoji/) used as icon (usually coincides with the password manager's icon), its creation date and the date when it was last used.

### Delete passkeys

```
---functions---

account.deletePasskey#f5b5563f id:string = Bool;
```

To delete a passkey associated to the current account, use [account.deletePasskey](/method/account.deletePasskey/), passing the passkey's ID (usually obtained using [account.getPasskeys](/method/account.getPasskeys/) as described [above »](#list-passkeys)).

### Logging in with a passkey

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;

inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;

auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;

---functions---

auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;

auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

To login with a passkey, start by invoking [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/).

Store the DC ID that was used to make the query into a `initDcId` variable, to be used later.

This method will return a JSON object in [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/).`options`, containing a single key:

-   `publicKey` - Contains a [PublicKeyCredentialRequestOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions) JSON object (with base64url-encoded strings used in place of buffer properties)

Parse the JSON payload, base64url-decoding binary fields for example using [PublicKeyCredential.parseRequestOptionsFromJSON](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static).

Then, pass the [PublicKeyCredentialRequestOptions »](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions) to [navigator.credentials.get](https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get) inside browsers (or equivalent APIs on other platforms).

This will prompt the user to choose a Telegram passkey (choosing the account to log into), and will return it as a [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) object.

Some platforms (like Android) may instead return the canonical JSON representation of [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential), which has the same overall structure, with the difference that fields marked as **binary** below are base64url-encoded and should in some cases be base64url-decoded before being used inside TL constructors.

Take the [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential) and transform it into an [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) using the following steps:

1.  Extract the [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) object contained in [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`response`.  
    Use it to generate an [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) with the following fields:
    
    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`client_data` - [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`clientDataJSON`, **binary field**: base64url-decode, then pass the value directly into [dataJSON](/constructor/dataJSON/).`data`, then pass the [dataJSON](/constructor/dataJSON/) into `client_data`.
        
        Even if it's treated as a binary field by the webauthn standard, `clientDataJSON` contains a valid, UTF-8 JSON payload that is additionally base64url-encoded.
        
    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`authenticator_data` - [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`authenticatorData`, **binary field**: base64url-decode, then pass into `authenticator_data`.
        
    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`signature` - [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`signature`, **binary field**: base64url-decode, then pass into `signature`.
        
    -   [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/).`user_handle` - [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse).`userHandle`, **binary field**: base64url-decode, then pass into `user_handle`.
        
2.  Then, generate an [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) with the following fields:
    
    -   `response` - The [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) generated at step 1
    -   `id` - [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`id`, **binary field**: pass directly into [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`id` **without** base64url-decoding.
    -   `raw_id` - [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential).`rawId`, **binary field**: pass directly into [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`raw_id` **without** base64url-decoding.
3.  Take the `user_handle` stored in the generated [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) ([inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/).`response`.`user_handle`) and parse it using the following printf/scanf format string: `%d:%lld`.
    
    The user handle is composed by the DC ID (a 32-bit integer) and the user ID (a 64-bit long), separated by a colon (`:`): store these values in separate variables (`userDcId` and `userId`) to be used later.
    

If the current client is already logged into an account with user ID equal to `userId`, ask the user to choose a different passkey (if any) and restart the passkey login process.

Otherwise, send a [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) query to DC `userDcId`, passing the following arguments:

-   `credential` - The [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) generated above.
-   `from_dc_id` - If and only if `userDcId != initDcId` (i.e. `userDcId` is **not** equal to the DC ID that was used to invoke [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/)), populate this field with `initDcId`
-   `from_auth_key_id` - If and only if `userDcId != initDcId` (i.e. `userDcId` is **not** equal to the DC ID that was used to invoke [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/)), populate this field with the auth key ID of the connection to `initDcId` (if [PFS](/api/pfs/) is in use, use the permanent auth key ID).

[auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) can throw the following RPC errors:

-   `SESSION_PASSWORD_NEEDED` - If the user configured a [2FA password](/api/srp/), they will still have to enter it even when logging in with a passkey: simply proceed with the [usual 2FA auth flow »](/api/auth/#2fa) to login.
-   `PASSKEY_CREDENTIAL_NOT_FOUND` - The specified passkey cannot be found on the server (for example, it could've been [removed »](#delete-passkeys) by the user).

On success (except for the 2FA case), the user is logged in, and the method directly returns an [auth.authorization](/constructor/auth.authorization/) constructor.
