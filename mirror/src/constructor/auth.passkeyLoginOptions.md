---
title: "auth.passkeyLoginOptions"
original: "https://core.telegram.org/constructor/auth.passkeyLoginOptions"
section: ref
description: "Passkey login options, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.passkeyLoginOptions","url":"/constructor/auth.passkeyLoginOptions/"}]
layout: layout.njk
---

# auth.passkeyLoginOptions

Passkey login options, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.passkeyLoginOptions/" class="current_page_link">auth.passkeyLoginOptions</a>#e2037789 options:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/auth.PasskeyLoginOptions/">auth.PasskeyLoginOptions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>JSON-encoded object whose <code>publicKey</code> field contains a <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions"><code>PublicKeyCredentialRequestOptions</code></a> object.</td></tr></tbody></table>

### Type

[auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/)

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
