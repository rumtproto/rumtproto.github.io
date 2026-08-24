---
title: "inputPasskeyResponseLogin"
original: "https://core.telegram.org/constructor/inputPasskeyResponseLogin"
section: ref
description: "WebAuthn authentication response used when logging in with a passkey, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPasskeyResponseLogin","url":"/constructor/inputPasskeyResponseLogin/"}]
layout: layout.njk
---

# inputPasskeyResponseLogin

WebAuthn authentication response used when logging in with a passkey, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info on the full flow.

Generated from the [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) object.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPasskeyResponseLogin/" class="current_page_link">inputPasskeyResponseLogin</a>#c31fc14a client_data:<a href="/type/DataJSON/">DataJSON</a> authenticator_data:<a href="/type/bytes/">bytes</a> signature:<a href="/type/bytes/">bytes</a> user_handle:<a href="/type/string/">string</a> = <a href="/type/InputPasskeyResponse/">InputPasskeyResponse</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>client_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>Base64url-decoded <code>clientDataJSON</code> field of an <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a>, wrapped in <a href="/constructor/dataJSON/">dataJSON</a></td></tr><tr><td><strong>authenticator_data</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Base64url-decoded <code>authenticatorData</code> field of an <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a></td></tr><tr><td><strong>signature</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Base64url-decoded <code>signature</code> field of an <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a></td></tr><tr><td><strong>user_handle</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Base64url-decoded <code>userHandle</code> field of an <a href="https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse">AuthenticatorAssertionResponse</a>. The user handle specified by the server is in <code>&lt;dc_id&gt;:&lt;user_id&gt;</code> format.</td></tr></tbody></table>

### Type

[InputPasskeyResponse](/type/InputPasskeyResponse/)

### Related pages

#### [dataJSON](/constructor/dataJSON/)

Represents a json-encoded object

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
