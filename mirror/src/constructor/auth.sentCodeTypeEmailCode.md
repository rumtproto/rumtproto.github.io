---
title: "auth.sentCodeTypeEmailCode"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeEmailCode"
section: ref
description: "The code was sent via the previously configured login email »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeEmailCode","url":"/constructor/auth.sentCodeTypeEmailCode/"}]
layout: layout.njk
---

# auth.sentCodeTypeEmailCode

The code was sent via the [previously configured login email »](/api/auth/#email-verification)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodeTypeEmailCode/" class="current_page_link">auth.sentCodeTypeEmailCode</a>#f450f59b flags:<a href="/type/%23/">#</a> apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:<a href="/type/string/">string</a> length:<a href="/type/int/">int</a> reset_available_period:flags.3?<a href="/type/int/">int</a> reset_pending_date:flags.4?<a href="/type/int/">int</a> = <a href="/type/auth.SentCodeType/">auth.SentCodeType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>apple_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether authorization through Apple ID is allowed</td></tr><tr><td><strong>google_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether authorization through Google ID is allowed</td></tr><tr><td><strong>email_pattern</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/pattern/">Pattern</a> of the email</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of the sent verification code</td></tr><tr><td><strong>reset_available_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Clients should wait for the specified amount of seconds before allowing the user to invoke <a href="/method/auth.resetLoginEmail/">auth.resetLoginEmail</a> (will be 0 for <a href="/api/premium/">Premium</a> users).</td></tr><tr><td><strong>reset_pending_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>An email reset was already requested, and will occur at the specified date.</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)

### Related pages

#### [Pattern matching](/api/pattern/)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.

#### [auth.resetLoginEmail](/method/auth.resetLoginEmail/)

Reset the [login email »](/api/auth/#email-verification).

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
