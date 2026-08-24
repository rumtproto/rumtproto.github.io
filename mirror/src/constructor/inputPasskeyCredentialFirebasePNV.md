---
title: "inputPasskeyCredentialFirebasePNV"
original: "https://core.telegram.org/constructor/inputPasskeyCredentialFirebasePNV"
section: ref
description: "Alternative passkey credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPasskeyCredentialFirebasePNV","url":"/constructor/inputPasskeyCredentialFirebasePNV/"}]
layout: layout.njk
---

# inputPasskeyCredentialFirebasePNV

Alternative [passkey](/api/passkeys/) credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full WebAuthn [public-key passkey](/constructor/inputPasskeyCredentialPublicKey/) cannot be created, in a way similar to [Firebase SMS authentication »](/api/auth/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPasskeyCredentialFirebasePNV/" class="current_page_link">inputPasskeyCredentialFirebasePNV</a>#5b1ccb28 pnv_token:<a href="/type/string/">string</a> = <a href="/type/InputPasskeyCredential/">InputPasskeyCredential</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pnv_token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Firebase Phone Number Verification token attesting that the user controls the phone number associated with the account.</td></tr></tbody></table>

### Type

[InputPasskeyCredential](/type/InputPasskeyCredential/)

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.

#### [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/)

Public-key passkey credential used both for registration and for login, see [creating a passkey »](/api/passkeys/#creating-a-passkey) and [logging in with a passkey »](/api/passkeys/#logging-in-with-a-passkey) for the full flows.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
