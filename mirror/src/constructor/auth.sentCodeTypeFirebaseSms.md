---
title: "auth.sentCodeTypeFirebaseSms"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFirebaseSms"
section: ref
description: "An authentication code should be delivered via SMS after Firebase attestation, as described in the auth documentation »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeFirebaseSms","url":"/constructor/auth.sentCodeTypeFirebaseSms/"}]
layout: layout.njk
---

# auth.sentCodeTypeFirebaseSms

An authentication code should be delivered via SMS after Firebase attestation, as described in the [auth documentation »](/api/auth/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodeTypeFirebaseSms/" class="current_page_link">auth.sentCodeTypeFirebaseSms</a>#9fd736 flags:<a href="/type/%23/">#</a> nonce:flags.0?<a href="/type/bytes/">bytes</a> play_integrity_project_id:flags.2?<a href="/type/long/">long</a> play_integrity_nonce:flags.2?<a href="/type/bytes/">bytes</a> receipt:flags.1?<a href="/type/string/">string</a> push_timeout:flags.1?<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/auth.SentCodeType/">auth.SentCodeType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>On Android, the nonce to be used as described in the <a href="/api/auth/">auth documentation »</a></td></tr><tr><td><strong>play_integrity_project_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>Google Play Integrity project ID</td></tr><tr><td><strong>play_integrity_nonce</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/bytes/">bytes</a></td><td>Play Integrity API nonce</td></tr><tr><td><strong>receipt</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>On iOS, must be compared with the <code>receipt</code> extracted from the received push notification.</td></tr><tr><td><strong>push_timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>On iOS: if a push notification with the <code>ios_push_secret</code> isn't received within <code>push_timeout</code> seconds, the <code>next_type</code> authentication method must be used, with <a href="/method/auth.resendCode/">auth.resendCode</a>.</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of the code that will be delivered.</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [auth.resendCode](/method/auth.resendCode/)

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.
