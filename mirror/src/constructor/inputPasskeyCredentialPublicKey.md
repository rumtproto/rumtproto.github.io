---
title: "inputPasskeyCredentialPublicKey"
original: "https://core.telegram.org/constructor/inputPasskeyCredentialPublicKey"
section: ref
description: "Public-key passkey credential used both for registration and for login, see creating a passkey » and logging in with a passkey » for the full flows."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPasskeyCredentialPublicKey","url":"/constructor/inputPasskeyCredentialPublicKey/"}]
layout: layout.njk
---

# inputPasskeyCredentialPublicKey

Public-key passkey credential used both for registration and for login, see [creating a passkey »](/api/passkeys/#creating-a-passkey) and [logging in with a passkey »](/api/passkeys/#logging-in-with-a-passkey) for the full flows.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPasskeyCredentialPublicKey/" class="current_page_link">inputPasskeyCredentialPublicKey</a>#3c27b78f id:<a href="/type/string/">string</a> raw_id:<a href="/type/string/">string</a> response:<a href="/type/InputPasskeyResponse/">InputPasskeyResponse</a> = <a href="/type/InputPasskeyCredential/">InputPasskeyCredential</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>id</code> field of a <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential">PublicKeyCredential</a>, passed as-is without base64url-decoding when using the JSON representation</td></tr><tr><td><strong>raw_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>rawId</code> field of a <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential">PublicKeyCredential</a>, passed as-is without base64url-decoding when using the JSON representation</td></tr><tr><td><strong>response</strong></td><td style="text-align: center;"><a href="/type/InputPasskeyResponse/">InputPasskeyResponse</a></td><td>Registration or login response.</td></tr></tbody></table>

### Type

[InputPasskeyCredential](/type/InputPasskeyCredential/)

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
