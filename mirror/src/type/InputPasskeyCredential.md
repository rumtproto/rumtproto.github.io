---
title: "InputPasskeyCredential"
original: "https://core.telegram.org/type/InputPasskeyCredential"
section: ref
description: "Credential used to register a passkey » or to log in with one."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputPasskeyCredential","url":"/type/InputPasskeyCredential/"}]
layout: layout.njk
---

# InputPasskeyCredential

Credential used to register a [passkey »](/api/passkeys/) or to log in with one.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPasskeyCredentialPublicKey/">inputPasskeyCredentialPublicKey</a>#3c27b78f id:<a href="/type/string/">string</a> raw_id:<a href="/type/string/">string</a> response:<a href="/type/InputPasskeyResponse/">InputPasskeyResponse</a> = <a href="/type/InputPasskeyCredential/" class="current_page_link">InputPasskeyCredential</a>;
<a href="/constructor/inputPasskeyCredentialFirebasePNV/">inputPasskeyCredentialFirebasePNV</a>#5b1ccb28 pnv_token:<a href="/type/string/">string</a> = <a href="/type/InputPasskeyCredential/" class="current_page_link">InputPasskeyCredential</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputPasskeyCredentialPublicKey/">inputPasskeyCredentialPublicKey</a></td><td>Public-key passkey credential used both for registration and for login, see <a href="/api/passkeys/#creating-a-passkey">creating a passkey »</a> and <a href="/api/passkeys/#logging-in-with-a-passkey">logging in with a passkey »</a> for the full flows.</td></tr><tr><td><a href="/constructor/inputPasskeyCredentialFirebasePNV/">inputPasskeyCredentialFirebasePNV</a></td><td>Alternative <a href="/api/passkeys/">passkey</a> credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full WebAuthn <a href="/constructor/inputPasskeyCredentialPublicKey/">public-key passkey</a> cannot be created, in a way similar to <a href="/api/auth/">Firebase SMS authentication »</a>.</td></tr></tbody></table>

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
