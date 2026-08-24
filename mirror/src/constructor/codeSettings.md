---
title: "codeSettings"
original: "https://core.telegram.org/constructor/codeSettings"
section: ref
description: "Settings used by telegram servers for sending the confirm code."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"codeSettings","url":"/constructor/codeSettings/"}]
layout: layout.njk
---

# codeSettings

Settings used by telegram servers for sending the confirm code.

Example implementations: [telegram for android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java), [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/codeSettings/" class="current_page_link">codeSettings</a>#ad253d78 flags:<a href="/type/%23/">#</a> allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; token:flags.8?<a href="/type/string/">string</a> app_sandbox:flags.8?<a href="/type/Bool/">Bool</a> = <a href="/type/CodeSettings/">CodeSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>allow_flashcall</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to allow phone verification via <a href="/api/auth/">phone calls</a>.</td></tr><tr><td><strong>current_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Pass true if the phone number is used on the current device. Ignored if allow_flashcall is not set.</td></tr><tr><td><strong>allow_app_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If a token that will be included in eventually sent SMSs is required: required in newer versions of android, to use the <a href="https://developers.google.com/identity/sms-retriever/overview">android SMS receiver APIs</a></td></tr><tr><td><strong>allow_missed_call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this device supports receiving the code using the <a href="/constructor/auth.codeTypeMissedCall/">auth.codeTypeMissedCall</a> method</td></tr><tr><td><strong>allow_firebase</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether Firebase auth is supported</td></tr><tr><td><strong>unknown_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Set this flag if there is a SIM card in the current device, but it is not possible to check whether the specified phone number matches the SIM's phone number.</td></tr><tr><td><strong>logout_tokens</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>Previously stored future auth tokens, see <a href="/api/auth/#future-auth-tokens">the documentation for more info »</a></td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/string/">string</a></td><td>Used only by official iOS apps for Firebase auth: device token for apple push.</td></tr><tr><td><strong>app_sandbox</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/Bool/">Bool</a></td><td>Used only by official iOS apps for firebase auth: whether a sandbox-certificate will be used during transmission of the push notification.</td></tr></tbody></table>

### Type

[CodeSettings](/type/CodeSettings/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [auth.codeTypeMissedCall](/constructor/auth.codeTypeMissedCall/)

The next time, the authentication code will be delivered via an immediately canceled incoming call, handled manually by the user.
