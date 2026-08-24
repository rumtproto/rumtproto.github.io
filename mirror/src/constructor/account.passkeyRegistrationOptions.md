---
title: "account.passkeyRegistrationOptions"
original: "https://core.telegram.org/constructor/account.passkeyRegistrationOptions"
section: ref
description: "Passkey registration options, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.passkeyRegistrationOptions","url":"/constructor/account.passkeyRegistrationOptions/"}]
layout: layout.njk
---

# account.passkeyRegistrationOptions

Passkey registration options, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passkeyRegistrationOptions/" class="current_page_link">account.passkeyRegistrationOptions</a>#e16b5ce1 options:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/account.PasskeyRegistrationOptions/">account.PasskeyRegistrationOptions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>JSON-encoded object whose <code>publicKey</code> field contains a <a href="https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions"><code>PublicKeyCredentialCreationOptions</code></a> object.</td></tr></tbody></table>

### Type

[account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/)

### Related pages

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
